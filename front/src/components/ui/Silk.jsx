/* Silk background — ported from React Bits (reactbits.dev/backgrounds/silk)
   Uses OGL (already installed) instead of @react-three/fiber to avoid React 19 peer issues.
   Same vertex/fragment shaders, same uniforms. */

import { Renderer, Program, Mesh, Triangle } from 'ogl';
import { useEffect, useRef } from 'react';

const hexToRGB = (hex) => {
  hex = hex.replace('#', '');
  return [
    parseInt(hex.slice(0, 2), 16) / 255,
    parseInt(hex.slice(2, 4), 16) / 255,
    parseInt(hex.slice(4, 6), 16) / 255,
  ];
};

// Full-screen triangle in NDC; derive UV from position
const VERT = `#version 300 es
in vec2 position;
out vec2 vUv;

void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAG = `#version 300 es
precision highp float;

in vec2 vUv;
out vec4 fragColor;

uniform float uTime;
uniform vec3  uColor;
uniform float uSpeed;
uniform float uScale;
uniform float uRotation;
uniform float uNoiseIntensity;

const float e = 2.71828182845904523536;

float noise(vec2 texCoord) {
  float G = e;
  vec2  r = G * sin(G * texCoord);
  return fract(r.x * r.y * (1.0 + texCoord.x));
}

vec2 rotateUvs(vec2 uv, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  mat2  rot = mat2(c, -s, s, c);
  return rot * uv;
}

void main() {
  float rnd     = noise(gl_FragCoord.xy);
  vec2  uv      = rotateUvs(vUv * uScale, uRotation);
  vec2  tex     = uv * uScale;
  float tOffset = uSpeed * uTime;

  tex.y += 0.03 * sin(8.0 * tex.x - tOffset);

  float pattern = 0.6 +
    0.4 * sin(5.0 * (tex.x + tex.y +
      cos(3.0 * tex.x + 5.0 * tex.y) +
      0.02 * tOffset) +
      sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));

  vec4 col = vec4(uColor, 1.0) * vec4(pattern) - rnd / 15.0 * uNoiseIntensity;
  col.a = 1.0;
  fragColor = col;
}
`;

export default function Silk({
  speed = 5,
  scale = 1,
  color = '#4338ca',
  noiseIntensity = 1.5,
  rotation = 0,
}) {
  const containerRef = useRef(null);
  const propsRef = useRef({ speed, scale, color, noiseIntensity, rotation });
  propsRef.current = { speed, scale, color, noiseIntensity, rotation };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({ antialias: true, alpha: false });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 1);
    container.appendChild(gl.canvas);

    const [r, g, b] = hexToRGB(color);

    const geometry = new Triangle(gl);

    const program = new Program(gl, {
      vertex: VERT,
      fragment: FRAG,
      uniforms: {
        uTime:           { value: 0 },
        uColor:          { value: [r, g, b] },
        uSpeed:          { value: speed },
        uScale:          { value: scale },
        uRotation:       { value: rotation },
        uNoiseIntensity: { value: noiseIntensity },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    function resize() {
      if (!container) return;
      renderer.setSize(container.offsetWidth, container.offsetHeight);
    }
    window.addEventListener('resize', resize);
    resize();

    let raf;
    let last = 0;
    function update(t) {
      raf = requestAnimationFrame(update);
      const delta = (t - last) * 0.001;
      last = t;
      const p = propsRef.current;
      program.uniforms.uTime.value += 0.1 * delta * (p.speed / 5);
      program.uniforms.uSpeed.value = p.speed;
      program.uniforms.uScale.value = p.scale;
      program.uniforms.uRotation.value = p.rotation;
      program.uniforms.uNoiseIntensity.value = p.noiseIntensity;
      const [cr, cg, cb] = hexToRGB(p.color);
      program.uniforms.uColor.value = [cr, cg, cb];
      renderer.render({ scene: mesh });
    }
    raf = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      if (container && gl.canvas.parentNode === container) {
        container.removeChild(gl.canvas);
      }
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
}
