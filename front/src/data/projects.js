import ltnLogo from '../assets/ltn.png'
import siniLogo from '../assets/sini.png'
import betLogo from '../assets/bet.jpg'

export const projects = [
  {
    id: 1,
    logo: ltnLogo,
    title: 'TransparaBrgy: Blockchain-Based Barangay Management System for BLGU La Torre North',
    description: 'A blockchain-based barangay management system for BLGU La Torre North built on the MERN stack, with tamper-resistant ledger recording for critical transactions.',
    longDescription: 'TransparaBrgy is a blockchain-based barangay management system for the Barangay Local Government Unit of La Torre North in Bayombong, Nueva Vizcaya. The system runs on the MERN stack, MongoDB, Express.js, React, and Node.js, to deliver a fast and responsive web platform.\n\nBarangay officials manage resident records, clearances, permits, project funds, and financial reports through an admin dashboard built in React. The backend uses Node.js and Express.js to handle requests and business logic, while MongoDB stores structured barangay data. Blockchain integration records critical transactions such as fund releases and document approvals on a tamper-resistant ledger to prevent data alteration.\n\nResidents submit requests online, track application status, and view selected public reports for transparency. The system reduces paperwork, improves processing time, and strengthens accountability at the barangay level.',
    tags: ['React', 'Tailwind', 'Vite', 'Blockchain', 'MUI'],
    link: 'https://www.latorrenorth.com/',
    github: 'https://github.com/akryyydum/MERNSTACK_BIMS_BLOCKCHAIN',
    year: '2025',
    role: 'Frontend Developer',
  },
  {
    id: 2,
    logo: siniLogo,
    title: 'SiniLikhain',
    description: 'A web-based artisan marketplace on the MERN stack connecting local artists and craft makers with buyers through a secure, user-friendly online platform.',
    longDescription: 'SiniLikhain is a web-based artisan marketplace built on the MERN stack, MongoDB, Express.js, React, and Node.js. The platform connects local artists and craft makers with buyers through a secure and user-friendly online system.\n\nSellers create shop profiles, upload product listings, manage inventory, set prices, and track orders using a React-based dashboard. The backend, powered by Node.js and Express.js, handles authentication, product management, cart processing, and order transactions. MongoDB stores user data, product details, and sales records.\n\nBuyers browse categories, search for products, add items to their cart, place orders, and monitor delivery status in real time. SiniLikhain promotes local craftsmanship, supports small businesses, and provides a reliable digital space for buying and selling handmade products.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://sia-sini-likhain.vercel.app/',
    github: 'https://github.com/princeren-36/SIA_SiniLikhain',
    year: '2025',
    role: 'Frontend Developer',
  },
  {
    id: 3,
    logo: betLogo,
    title: 'Betsubara Café ',
    description: 'A MERN stack café website serving as both a digital storefront and management platform, with online ordering, cart, and a real-time admin dashboard.',
    longDescription: 'Betsubara Café is a MERN stack café website built using MongoDB, Express.js, React, and Node.js. The system serves as both a digital storefront and a management platform for the café.\n\nCustomers view the full menu, check prices, see product images, and place orders online through a responsive React interface. The system includes features such as a shopping cart, order tracking, and account registration.\n\nOn the admin side, staff manage menu items, update prices, upload product images, and monitor orders in real time through a secure dashboard. The Node.js and Express.js backend handles authentication, order processing, and API requests, while MongoDB stores menu data, customer accounts, and transaction records.\n\nThe website improves customer convenience, streamlines order management, and helps Betsubara Café increase sales through an organized and efficient online platform.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    link: 'https://betsubara-ten.vercel.app/',
    github: 'https://github.com/mowreee/Betsubara',
    year: '2025',
    role: 'Full-stack Developer',
  },
]
