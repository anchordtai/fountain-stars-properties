const modernButtonClass = "inline-block bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-2 rounded-full shadow-lg font-semibold transition-transform duration-200 hover:scale-105 hover:from-blue-700 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2";
// Navbar HTML with logo and full company name
const navbarHTML = `
<nav class="backdrop-blur bg-white/80 bg-gradient-to-r from-blue-50 via-white to-blue-100 shadow-lg border-b border-blue-100 sticky top-0 z-50 transition-all duration-300">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16 items-center">
      <div class="flex items-center">
        <img src="images/logo.png" alt="Fountain Stars Properties Limited Logo" class="h-10 w-10 mr-2 drop-shadow-md">
        <a href="index.html" class="flex-shrink-0 flex flex-col items-start leading-none">
          <span class="text-2xl md:text-3xl font-extrabold text-blue-700 tracking-wide font-sans">Fountain Stars</span>
          <span class="text-sm md:text-base font-semibold text-blue-400 italic -mt-1">Properties Limited</span>
        </a>
        <div class="hidden md:ml-6 md:flex md:space-x-8 items-center w-full justify-end">
          <a href="index.html" class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-blue-800 hover:bg-blue-100 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300 transition">Home</a>
          <a href="about.html" class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-blue-700 hover:bg-blue-100 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300 transition">About</a>
          <a href="#properties" class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-blue-700 hover:bg-blue-100 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300 transition">Properties</a>
          <a href="team.html" class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-blue-700 hover:bg-blue-100 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300 transition">Team</a>
          <a href="contact.html" class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-blue-700 hover:bg-blue-100 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300 transition">Contact</a>
          <form id="navbar-search-form" class="ml-6 flex items-center bg-white rounded-full shadow border border-blue-100 px-2 py-1 w-64 max-w-xs focus-within:ring-2 focus-within:ring-blue-400 transition">
            <input id="navbar-search" type="text" placeholder="Search properties..." class="flex-1 px-3 py-1 bg-transparent outline-none text-sm text-blue-900" />
            <button type="submit" class="text-blue-500 hover:text-blue-700 p-1">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            </button>
          </form>
        </div>
      </div>
      <div class="-mr-2 flex items-center md:hidden">
        <button id="mobile-menu-btn" class="inline-flex items-center justify-center p-2 rounded-md text-blue-700 hover:text-blue-900 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-300">
          <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
  <div id="mobile-menu" class="md:hidden hidden bg-white/95 shadow-lg border-t border-blue-100 mt-2 rounded-b-xl transition-all duration-300">
    <div class="pt-2 pb-3 space-y-1 px-4">
      <a href="index.html" class="block px-4 py-2 rounded-full text-base font-medium text-blue-800 bg-blue-50 hover:bg-blue-100 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300 transition">Home</a>
      <a href="about.html" class="block px-4 py-2 rounded-full text-base font-medium text-blue-700 hover:bg-blue-100 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300 transition">About</a>
      <a href="#properties" class="block px-4 py-2 rounded-full text-base font-medium text-blue-700 hover:bg-blue-100 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300 transition">Properties</a>
      <a href="team.html" class="block px-4 py-2 rounded-full text-base font-medium text-blue-700 hover:bg-blue-100 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300 transition">Team</a>
      <a href="contact.html" class="block px-4 py-2 rounded-full text-base font-medium text-blue-700 hover:bg-blue-100 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-300 transition">Contact</a>
      <form id="navbar-search-form-mobile" class="mt-4 flex items-center bg-white rounded-full shadow border border-blue-100 px-2 py-1 w-full focus-within:ring-2 focus-within:ring-blue-400 transition">
        <input id="navbar-search-mobile" type="text" placeholder="Search properties..." class="flex-1 px-3 py-1 bg-transparent outline-none text-sm text-blue-900" />
        <button type="submit" class="text-blue-500 hover:text-blue-700 p-1">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
        </button>
      </form>
    </div>
  </div>
</nav>
`;

// Modern, visually appealing hero section with real property images in the carousel
const heroHTML = `
<div class="relative bg-gradient-to-r from-blue-900 via-blue-700 to-blue-400 min-h-[480px] flex items-center justify-center overflow-hidden">
  <div class="absolute inset-0 z-0">
    <div id="carousel" class="relative w-full h-[420px] rounded-3xl shadow-2xl overflow-hidden mx-auto perspective-3d">
      <img src="images/property13.png" class="carousel-img sharp-image w-full h-full object-cover absolute top-0 left-0 opacity-100 transition-all duration-700 border-4 border-white shadow-2xl carousel-3d" alt="Elegant Family Home">
      <img src="images/property14.png" class="carousel-img sharp-image w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-all duration-700 border-4 border-white shadow-2xl carousel-3d" alt="City View Apartment">
      <img src="images/property15.png" class="carousel-img sharp-image w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-all duration-700 border-4 border-white shadow-2xl carousel-3d" alt="Resort-Style Villa">
      <img src="images/image12.png" class="carousel-img sharp-image w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-all duration-700 border-4 border-white shadow-2xl carousel-3d" alt="Modern Office Space">
      <div class="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-700/40 to-transparent"></div>
    </div>
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
      <button class="carousel-dot w-3 h-3 rounded-full bg-white opacity-70"></button>
      <button class="carousel-dot w-3 h-3 rounded-full bg-white opacity-50"></button>
      <button class="carousel-dot w-3 h-3 rounded-full bg-white opacity-50"></button>
      <button class="carousel-dot w-3 h-3 rounded-full bg-white opacity-50"></button>
    </div>
  </div>
  <div class="relative z-10 max-w-2xl mx-auto text-center text-white px-6 py-12">
    <h1 class="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">Find Your Dream Home</h1>
    <p class="text-lg md:text-xl mb-6 font-medium drop-shadow">Discover luxury properties, modern apartments, and investment opportunities with Fountain Stars Properties Limited.</p>
    <a href="properties.html" class="${modernButtonClass} animate-bounce">Browse Properties</a>
  </div>
</div>
`;

// Animated Icons Section
const iconsHTML = `
<div class="max-w-7xl mx-auto px-4">
  <h2 class="text-2xl font-bold text-center mb-8">Why Choose Us?</h2>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
    <div class="flex flex-col items-center animate-bounce">
      <svg class="w-12 h-12 text-blue-600 mb-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 13v7m0 0H7m5 0h5"/></svg>
      <span class="font-semibold">Trusted Agents</span>
    </div>
    <div class="flex flex-col items-center animate-pulse">
      <svg class="w-12 h-12 text-green-600 mb-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
      <span class="font-semibold">24/7 Support</span>
    </div>
    <div class="flex flex-col items-center animate-spin-slow">
      <svg class="w-12 h-12 text-yellow-500 mb-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0zm9-4v4l3 3"/></svg>
      <span class="font-semibold">Fast Process</span>
    </div>
    <div class="flex flex-col items-center animate-fade-in">
      <svg class="w-12 h-12 text-purple-600 mb-2" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3"/></svg>
      <span class="font-semibold">Great Value</span>
    </div>
  </div>
</div>
`;

// Footer HTML
const footerHTML = `
<div class="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
  <div>
    <h3 class="text-xl font-bold mb-2">Fountain Stars Properties Ltd</h3>
    <p>Hse 1 block 1 Salis Aviation Estate. Opp Aero garden estate. kuje bridge Abuja.</p>
    <p>Email: info@fountainstars.com</p>
    <p>Phone: +2347010488715, +2348101208087, +2348069030714</p>
  </div>
  <div>
    <h4 class="font-semibold mb-2">Quick Links</h4>
    <ul>
      <li><a href="index.html" class="hover:underline">Home</a></li>
      <li><a href="about.html" class="hover:underline">About</a></li>
      <li><a href="#properties" class="hover:underline">Properties</a></li>
      <li><a href="#team" class="hover:underline">Team</a></li>
      <li><a href="contact.html" class="hover:underline">Contact</a></li>
    </ul>
  </div>
  <div>
    <h4 class="font-semibold mb-2">Follow Us</h4>
    <div class="flex space-x-4">
      <a href="#" class="hover:text-blue-400"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.56v14.91A4.56 4.56 0 0 1 19.44 24H4.56A4.56 4.56 0 0 1 0 19.47V4.56A4.56 4.56 0 0 1 4.56 0h14.91A4.56 4.56 0 0 1 24 4.56zM8.09 19.47V9.5H5.08v9.97zm-1.5-11.3a1.74 1.74 0 1 1 0-3.48 1.74 1.74 0 0 1 0 3.48zm13.41 11.3h-3.01v-4.85c0-1.16-.02-2.65-1.62-2.65-1.62 0-1.87 1.26-1.87 2.56v4.94h-3.01V9.5h2.89v1.36h.04a3.17 3.17 0 0 1 2.85-1.57c3.05 0 3.61 2.01 3.61 4.62v5.56z"/></svg></a>
      <a href="#" class="hover:text-blue-400"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.72 0-4.924 2.204-4.924 4.924 0 .386.044.763.127 1.124C7.691 8.095 4.066 6.13 1.64 3.161c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099-.807-.026-1.566-.247-2.228-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.112-.849.171-1.296.171-.317 0-.626-.03-.928-.086.627 1.956 2.444 3.377 4.6 3.417-1.68 1.318-3.809 2.104-6.102 2.104-.397 0-.788-.023-1.175-.069 2.179 1.397 4.768 2.213 7.557 2.213 9.054 0 14.009-7.496 14.009-13.986 0-.21 0-.423-.016-.634.962-.695 1.797-1.562 2.457-2.549z"/></svg></a>
      <a href="#" class="hover:text-blue-400"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.425 3.678 1.406c-.98.98-1.274 2.092-1.334 3.374C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.612.06 1.282.354 2.394 1.334 3.374.98.98 2.092 1.274 3.374 1.334C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.282-.06 2.394-.354 3.374-1.334.98-.98 1.274-2.092 1.334-3.374.059-1.28.072-1.689.072-7.612 0-5.923-.013-6.332-.072-7.612-.06-1.282-.354-2.394-1.334-3.374-.98-.98-2.092-1.274-3.374-1.334C15.668.013 15.259 0 12 0z"/></svg></a>
    </div>
  </div>
  <div>
    <h4 class="font-semibold mb-2">Contact Us</h4>
    <form class="flex flex-col gap-2">
      <input type="text" placeholder="Name" class="rounded px-2 py-1 text-gray-900">
      <input type="email" placeholder="Email" class="rounded px-2 py-1 text-gray-900">
      <textarea placeholder="Message" class="rounded px-2 py-1 text-gray-900"></textarea>
      <button type="submit" class="${modernButtonClass}">Send</button>
    </form>
  </div>
</div>
<div class="text-center py-4 border-t border-gray-700 mt-8">&copy; 2024 Fountain Stars Properties Limited. All rights reserved.</div>

<!-- Map Placeholder -->
<div class="w-full h-64 mt-6 rounded-lg overflow-hidden shadow-lg">
  <iframe
    src="https://www.google.com/maps?q=Hse+1+block+1+Salis+Aviation+Estate+Opp+Aero+garden+estate+kuje+bridge+Abuja+Nigeria&output=embed"
    width="100%" height="100%" style="border:0; min-height: 100%; min-width: 100%;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
`;

// Property data for real images, captions, and descriptions
const propertyData = [
  {
    img: 'images/property13.png',
    images: ['images/property13.png', 'images/property14.png', 'images/property15.png'],
    icon: '🏡',
    title: 'Elegant Family Home',
    desc: 'A spacious, sunlit home perfect for families, with a lush garden and modern amenities.',
    price: '₦120,000,000',
    location: 'Idu, Abuja',
    features: ['4 Bedrooms', '3 Bathrooms', '2 Garages', 'Garden', 'Modern Kitchen']
  },
  {
    img: 'images/property14.png',
    images: ['images/property14.png', 'images/property15.png', 'images/image12.png'],
    icon: '🏙️',
    title: 'City View Apartment',
    desc: 'Enjoy breathtaking city views from this stylish, centrally located apartment.',
    price: '₦85,000,000',
    location: 'Central Area, Abuja',
    features: ['2 Bedrooms', '2 Bathrooms', 'Balcony', 'City View', 'Gym Access']
  },
  {
    img: 'images/property15.png',
    images: ['images/property15.png', 'images/image12.png', 'images/property13.png'],
    icon: '🌴',
    title: 'Resort-Style Villa',
    desc: 'A luxurious villa with a private pool, palm trees, and serene surroundings.',
    price: '₦500,000,000',
    location: 'Lugbe, Abuja',
    features: ['5 Bedrooms', '4 Bathrooms', 'Pool', 'Garden', 'Gym']
  },
  {
    img: 'images/image12.png',
    images: ['images/image12.png', 'images/property13.png', 'images/property14.png'],
    icon: '🏢',
    title: 'Modern Office Space',
    desc: 'A sleek, fully-equipped office space in a prime business district.',
    price: '₦150,000,000',
    location: 'Maitama 3, Abuja',
    features: ['1000 Sq Ft', 'Fully Furnished', 'High Ceilings', 'Conference Room', 'Parking']
  },
  {
    img: '',
    images: ['', '', ''],
    icon: '🏘️',
    title: 'Gated Community House',
    desc: 'Secure and peaceful living in a friendly gated community.',
    price: '₦200,000,000',
    location: 'Guzape, Abuja',
    features: ['3 Bedrooms', '2 Bathrooms', 'Gated', 'Security', 'Community Center']
  },
  {
    img: 'images/propert6.jpeg',
    images: ['images/propert6.jpeg', 'images/property7.jpeg', 'images/property8.jpeg'],
    icon: '🌅',
    title: 'Sunset Penthouse',
    desc: 'A penthouse with panoramic sunset views and luxury finishes.',
    price: '₦350,000,000',
    location: 'Kyami, Abuja',
    features: ['4 Bedrooms', '4 Bathrooms', 'Panoramic Views', 'Private Terrace', 'Gym']
  },
  {
    img: 'images/property7.jpeg',
    images: ['images/property7.jpeg', 'images/propert8.jpeg', 'images/property9.jpeg'],
    icon: '🏞️',
    title: 'Lakeside Retreat',
    desc: 'A tranquil retreat by the lake, perfect for relaxation and nature lovers.',
    price: '₦180,000,000',
    location: 'Idu, Abuja',
    features: ['3 Bedrooms', '2 Bathrooms', 'Lake View', 'Garden', 'Private Dock']
  },
  {
    img: 'images/propert8.jpeg',
    images: ['images/propert8.jpeg', 'images/property9.jpeg', 'images/propert10.jpeg'],
    icon: '🏰',
    title: 'Classic Mansion',
    desc: 'A grand mansion with timeless architecture and expansive grounds.',
    price: '₦480,000,000',
    location: 'Maitama 3, Abuja',
    features: ['10 Bedrooms', '10 Bathrooms', 'Gym', 'Pool', 'Cinema Room']
  },
  {
    img: 'images/property9.jpeg',
    images: ['images/property9.jpeg', 'images/propert10.jpeg', 'images/property1.jpeg'],
    icon: '🌳',
    title: 'Eco-Friendly Home',
    desc: 'A sustainable home with green features and beautiful landscaping.',
    price: '₦95,000,000',
    location: 'Guzape, Abuja',
    features: ['3 Bedrooms', '2 Bathrooms', 'Solar Panels', 'Rainwater Harvesting', 'Green Roof']
  },
  {
    img: 'images/propert10.jpeg',
    images: ['images/propert10.jpeg', 'images/property1.jpeg', 'images/property2.jpeg'],
    icon: '🏠',
    title: 'Cozy Starter House',
    desc: 'A charming, affordable home ideal for first-time buyers.',
    price: '₦50,000,000',
    location: 'Idu, Abuja',
    features: ['2 Bedrooms', '1 Bathroom', 'Affordable', 'Easy Maintenance', 'Good Location']
  }
];

// Update Properties Grid HTML for landing page to support dynamic filtering
function renderPropertiesGrid(filteredData) {
  const properties = document.getElementById('properties');
  if (!properties) return;
  properties.innerHTML = `
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-10">Featured Properties</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        ${filteredData.map((p, i) => `
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform group border border-blue-100 cursor-pointer" data-property-index="${i}">
            <div class="relative">
              <img src="${p.img}" alt="${p.title}" class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300">
              <span class="absolute top-3 left-3 text-3xl">${p.icon}</span>
            </div>
            <div class="p-4">
              <h3 class="text-xl font-bold mb-1 flex items-center gap-2">${p.title}</h3>
              <p class="text-gray-600 mb-4 text-sm">${p.desc}</p>
              <div class="text-blue-600 font-semibold mb-2">${p.price || ''}</div>
              <div class="text-xs text-gray-500 mb-2">${p.location || ''}</div>
              <button class="${modernButtonClass} w-full view-details-btn" data-property-index="${i}">View Details</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  // Add click handlers for 'View Details' buttons only
  setTimeout(() => {
    const buttons = properties.querySelectorAll('.view-details-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.getAttribute('data-property-index'));
        openPropertyModal(filteredData[idx]);
      });
    });
  }, 0);
}

// Team Section HTML
const teamHTML = `
<div class="max-w-7xl mx-auto px-4">
  <h2 class="text-3xl font-bold text-center mb-10">Meet Our Team</h2>
  <div class="grid grid-cols-2 sm:grid-cols-4 gap-8">
    <div class="flex flex-col items-center bg-white rounded-lg shadow p-4 hover:shadow-xl transition">
      <img src="images/ceo.png" alt="CEO" class="w-24 h-24 rounded-full mb-3 object-cover border-4 border-blue-200">
      <h4 class="font-semibold text-lg text-center">Hon. Dr Helen Taiwo Adebakin</h4>
      <p class="text-blue-600">Chief Executive Officer</p>
    </div>
    <div class="flex flex-col items-center bg-white rounded-lg shadow p-4 hover:shadow-xl transition">
      <img src="images/whiteman.jpg" alt="Engr Ghulum Muhammad Baloch" class="w-24 h-24 rounded-full mb-3 object-cover border-4 border-blue-200">
      <h4 class="font-semibold text-lg text-center">Engr Ghulum Muhammad Baloch</h4>
      <p class="text-blue-600">Head of Engineering Dept.</p>
    </div>
    <div class="flex flex-col items-center bg-white rounded-lg shadow p-4 hover:shadow-xl transition">
      <img src="images/eze.jpg" alt="Engr Sunny Eze" class="w-24 h-24 rounded-full mb-3 object-cover border-4 border-blue-200">
      <h4 class="font-semibold text-lg text-center">Engr Sunny Eze</h4>
      <p class="text-blue-600">Procurement and site manager</p>
    </div>
    <div class="flex flex-col items-center bg-white rounded-lg shadow p-4 hover:shadow-xl transition">
      <img src="images/marketing-manager.png" alt="Marketing Manager" class="w-24 h-24 rounded-full mb-3 object-cover border-4 border-blue-200">
      <h4 class="font-semibold text-lg">Marketing Manager</h4>
      <p class="text-blue-600">Marketing Manager</p>
    </div>
    ${[3,4,5,6].map(i => `
      <div class="flex flex-col items-center bg-white rounded-lg shadow p-4 hover:shadow-xl transition">
        <img src="https://randomuser.me/api/portraits/men/${i+10}.jpg" alt="Team Member ${i}" class="w-24 h-24 rounded-full mb-3 object-cover border-4 border-blue-200">
        <h4 class="font-semibold text-lg">Member Name ${i}</h4>
        <p class="text-blue-600">Role ${i}</p>
      </div>
    `).join('')}
  </div>
  <div class="text-center mt-8">
    <a href="properties.html" class="${modernButtonClass}">View All Properties</a>
  </div>
</div>
`;

// Testimonials Section HTML
const testimonialsHTML = `
<div class="max-w-5xl mx-auto px-4">
  <h2 class="text-3xl font-bold text-center mb-10">What Our Clients Say</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="bg-white rounded-lg shadow p-6 flex flex-col items-center">
      <svg class="w-10 h-10 text-blue-600 mb-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 17v-2a4 4 0 0 1 4-4h1V7a4 4 0 0 0-8 0v2"/></svg>
      <p class="text-gray-700 italic mb-4">“Fountain Stars Properties made buying our dream home a breeze. Professional, friendly, and reliable!”</p>
      <span class="font-semibold text-blue-700">John Doe</span>
      <span class="text-sm text-gray-500">Homeowner</span>
    </div>
    <div class="bg-white rounded-lg shadow p-6 flex flex-col items-center">
      <svg class="w-10 h-10 text-blue-600 mb-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 17v-2a4 4 0 0 1 4-4h1V7a4 4 0 0 0-8 0v2"/></svg>
      <p class="text-gray-700 italic mb-4">“Excellent service and great value. I highly recommend Fountain Stars for all your real estate needs.”</p>
      <span class="font-semibold text-blue-700">Jane Smith</span>
      <span class="text-sm text-gray-500">Investor</span>
    </div>
    <div class="bg-white rounded-lg shadow p-6 flex flex-col items-center">
      <svg class="w-10 h-10 text-blue-600 mb-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 17v-2a4 4 0 0 1 4-4h1V7a4 4 0 0 0-8 0v2"/></svg>
      <p class="text-gray-700 italic mb-4">“Their team is knowledgeable and always available. The process was smooth from start to finish.”</p>
      <span class="font-semibold text-blue-700">Ahmed Musa</span>
      <span class="text-sm text-gray-500">Landlord</span>
    </div>
  </div>
</div>
`;

// Projects Section HTML
const projectsHTML = `
<div class="max-w-6xl mx-auto px-4">
  <h2 class="text-3xl font-bold text-center mb-10">Our Projects</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src="images/propert6.jpeg" alt="Project 1" class="w-full h-48 object-cover">
      <div class="p-4">
        <h3 class="text-xl font-semibold mb-2">Luxury Estate</h3>
        <p class="text-gray-600">A premium residential estate with modern amenities and beautiful landscaping.</p>
      </div>
    </div>
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src="images/property7.jpeg" alt="Project 2" class="w-full h-48 object-cover">
      <div class="p-4">
        <h3 class="text-xl font-semibold mb-2">City Apartments</h3>
        <p class="text-gray-600">Modern apartments in the heart of the city, designed for comfort and convenience.</p>
      </div>
    </div>
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src="images/propert8.jpeg" alt="Project 3" class="w-full h-48 object-cover">
      <div class="p-4">
        <h3 class="text-xl font-semibold mb-2">Investment Villas</h3>
        <p class="text-gray-600">A collection of high-yield investment villas in a fast-growing neighborhood.</p>
      </div>
    </div>
  </div>
</div>
`;

// News & Media Section HTML
const newsMediaHTML = `
<div class="max-w-5xl mx-auto px-4">
  <h2 class="text-3xl font-bold text-center mb-10">News & Media</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="bg-white rounded-lg shadow p-6 flex flex-col">
      <span class="text-xs text-blue-600 mb-2">July 2024</span>
      <h3 class="text-lg font-semibold mb-2">Fountain Stars Launches New Estate</h3>
      <p class="text-gray-600 mb-4">We are excited to announce the launch of our latest residential estate in Abuja, offering luxury and comfort for families.</p>
      <a href="#" class="text-blue-600 hover:underline mt-auto">Read More</a>
    </div>
    <div class="bg-white rounded-lg shadow p-6 flex flex-col">
      <span class="text-xs text-blue-600 mb-2">June 2024</span>
      <h3 class="text-lg font-semibold mb-2">Awarded Best Real Estate Company</h3>
      <p class="text-gray-600 mb-4">Fountain Stars Properties Limited has been recognized as the best real estate company in the region for 2024.</p>
      <a href="#" class="text-blue-600 hover:underline mt-auto">Read More</a>
    </div>
    <div class="bg-white rounded-lg shadow p-6 flex flex-col">
      <span class="text-xs text-blue-600 mb-2">May 2024</span>
      <h3 class="text-lg font-semibold mb-2">Community Outreach Program</h3>
      <p class="text-gray-600 mb-4">Our team recently completed a successful community outreach, supporting local families and schools.</p>
      <a href="#" class="text-blue-600 hover:underline mt-auto">Read More</a>
    </div>
  </div>
</div>
`;

// Locations Section HTML
const locationsHTML = `
<div class="max-w-4xl mx-auto px-4">
  <h2 class="text-3xl font-bold text-center mb-10">Location of Sites & Properties (Abuja)</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    <div class="flex flex-col items-center bg-white rounded-xl shadow p-6 border border-blue-100">
      <span class="text-blue-600 text-4xl mb-2">📍</span>
      <h3 class="text-xl font-semibold mb-1">Idu</h3>
      <p class="text-gray-500 text-sm">Houses available</p>
    </div>
    <div class="flex flex-col items-center bg-white rounded-xl shadow p-6 border border-blue-100">
      <span class="text-blue-600 text-4xl mb-2">📍</span>
      <h3 class="text-xl font-semibold mb-1">Kuje</h3>
      <p class="text-gray-500 text-sm">Houses available</p>
    </div>
    <div class="flex flex-col items-center bg-white rounded-xl shadow p-6 border border-blue-100">
      <span class="text-blue-600 text-4xl mb-2">📍</span>
      <h3 class="text-xl font-semibold mb-1">Kyami</h3>
      <p class="text-gray-500 text-sm">Houses available</p>
    </div>
    <div class="flex flex-col items-center bg-white rounded-xl shadow p-6 border border-blue-100">
      <span class="text-blue-600 text-4xl mb-2">📍</span>
      <h3 class="text-xl font-semibold mb-1">Guzape</h3>
      <p class="text-gray-500 text-sm">Site location</p>
    </div>
    <div class="flex flex-col items-center bg-white rounded-xl shadow p-6 border border-blue-100">
      <span class="text-blue-600 text-4xl mb-2">📍</span>
      <h3 class="text-xl font-semibold mb-1">Maitama 3</h3>
      <p class="text-gray-500 text-sm">Site location</p>
    </div>
    <div class="flex flex-col items-center bg-white rounded-xl shadow p-6 border border-blue-100">
      <span class="text-blue-600 text-4xl mb-2">📍</span>
      <h3 class="text-xl font-semibold mb-1">Lugbe</h3>
      <p class="text-gray-500 text-sm">Site location</p>
    </div>
  </div>
  <div class="text-center mt-8">
    <span class="inline-block bg-blue-100 text-blue-700 px-6 py-2 rounded-full font-semibold">All locations are in Abuja, Nigeria</span>
  </div>
</div>
`;

// Modern search bar HTML
const searchBarHTML = `
<div class="max-w-2xl mx-auto px-4">
  <form class="flex items-center bg-white rounded-full shadow-lg overflow-hidden border border-blue-100 focus-within:ring-2 focus-within:ring-blue-400 transition">
    <span class="pl-4 text-blue-500">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
    </span>
    <input type="text" placeholder="Search properties, locations, or keywords..." class="flex-1 px-4 py-3 bg-transparent outline-none text-lg" />
    <button type="submit" class="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold rounded-full hover:from-blue-700 hover:to-blue-500 transition">Search</button>
  </form>
</div>
`;

// Update renderPropertiesPage for properties.html
function renderPropertiesPage() {
  const propertiesList = document.getElementById('properties-list');
  if (!propertiesList) return;
  propertiesList.innerHTML = '';
  const grid = document.createElement('div');
  grid.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8';
  propertyData.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform group border border-blue-100 cursor-pointer';
    card.setAttribute('data-property-index', i);
    card.innerHTML = `
      <div class="relative">
        <img src="${p.img}" alt="${p.title}" class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300">
        <span class="absolute top-3 left-3 text-3xl">${p.icon}</span>
      </div>
      <div class="p-4">
        <h3 class="text-xl font-bold mb-1 flex items-center gap-2">${p.title}</h3>
        <p class="text-gray-600 mb-4 text-sm">${p.desc}</p>
        <div class="text-blue-600 font-semibold mb-2">${p.price || ''}</div>
        <div class="text-xs text-gray-500 mb-2">${p.location || ''}</div>
        <button class="${modernButtonClass} w-full view-details-btn" data-property-index="${i}">View Details</button>
      </div>
    `;
    grid.appendChild(card);
  });
  propertiesList.appendChild(grid);
  // Add click handlers for 'View Details' buttons only
  setTimeout(() => {
    const buttons = propertiesList.querySelectorAll('.view-details-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const idx = parseInt(btn.getAttribute('data-property-index'));
        openPropertyModal(propertyData[idx]);
      });
    });
  }, 0);
}

// Utility: Add success message to contact form
function enhanceContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    // reCAPTCHA validation
    const recaptcha = window.grecaptcha;
    if (!recaptcha || !recaptcha.getResponse || !recaptcha.getResponse()) {
      if (!document.getElementById('recaptcha-error')) {
        const err = document.createElement('div');
        err.id = 'recaptcha-error';
        err.className = 'mt-2 p-2 bg-red-100 text-red-800 rounded shadow text-center';
        err.textContent = 'Please complete the reCAPTCHA.';
        form.appendChild(err);
        setTimeout(() => err.remove(), 4000);
      }
      return;
    }
    // Validate required fields
    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const phone = form.elements['phone'].value.trim();
    const address = form.elements['address'].value.trim();
    const state = form.elements['state'].value.trim();
    const message = form.elements['message'].value.trim();
    if (!name || !email || !phone || !address || !state || !message) {
      if (!document.getElementById('form-error')) {
        const err = document.createElement('div');
        err.id = 'form-error';
        err.className = 'mt-2 p-2 bg-red-100 text-red-800 rounded shadow text-center';
        err.textContent = 'Please fill in all required fields.';
        form.appendChild(err);
        setTimeout(() => err.remove(), 4000);
      }
      return;
    }
    form.reset();
    window.grecaptcha.reset();
    if (!document.getElementById('success-msg')) {
      const msg = document.createElement('div');
      msg.id = 'success-msg';
      msg.className = 'mt-4 p-3 bg-green-100 text-green-800 rounded shadow text-center';
      msg.textContent = 'Thank you! Your message has been sent.';
      form.parentNode.appendChild(msg);
      setTimeout(() => msg.remove(), 5000);
    }
  });
}

// Utility: Add advanced animations to hero and property cards
function addAdvancedAnimations() {
  // Animate hero section on load
  const hero = document.getElementById('hero');
  if (hero) {
    hero.classList.add('animate-fade-in');
  }
  // Animate property cards on scroll (IntersectionObserver)
  const cards = document.querySelectorAll('.grid .bg-white');
  if ('IntersectionObserver' in window && cards.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, { threshold: 0.1 });
    cards.forEach(card => observer.observe(card));
  }
}

// Utility to render property details modal
function openPropertyModal(property) {
  const modal = document.getElementById('property-modal');
  const content = document.getElementById('property-modal-content');
  if (!modal || !content) return;
  // Carousel for images
  let carousel = '';
  if (property.images && property.images.length > 1) {
    carousel = `
      <div class="relative mb-4">
        <div class="flex overflow-x-auto gap-2 snap-x">
          ${property.images.map(img => `<img src="${img}" class="h-48 w-full object-cover rounded-xl snap-center shadow" alt="${property.title}">`).join('')}
        </div>
      </div>
    `;
  } else {
    carousel = `<img src="${property.img}" class="h-48 w-full object-cover rounded-xl mb-4 shadow" alt="${property.title}">`;
  }
  // Features list
  const features = property.features ? `<ul class="flex flex-wrap gap-2 mb-4">${property.features.map(f => `<li class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">${f}</li>`).join('')}</ul>` : '';
  // Map embed
  const map = property.location ? `<div class="w-full h-40 rounded-lg overflow-hidden shadow mb-4"><iframe src="https://www.google.com/maps?q=${encodeURIComponent(property.location + ', Abuja, Nigeria')}&output=embed" width="100%" height="100%" style="border:0; min-height: 100%; min-width: 100%;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>` : '';
  // Social media icons
  const socials = `
    <div class="flex gap-4 mt-4 justify-center">
      <a href="https://facebook.com" target="_blank" aria-label="Facebook" class="hover:text-blue-600 text-gray-400 text-2xl transition"><svg fill="currentColor" viewBox="0 0 24 24" class="w-7 h-7"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0z"/></svg></a>
      <a href="https://instagram.com" target="_blank" aria-label="Instagram" class="hover:text-pink-500 text-gray-400 text-2xl transition"><svg fill="currentColor" viewBox="0 0 24 24" class="w-7 h-7"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.425 3.678 1.406c-.98.98-1.274 2.092-1.334 3.374C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.612.06 1.282.354 2.394 1.334 3.374.98.98 2.092 1.274 3.374 1.334C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.282-.06 2.394-.354 3.374-1.334.98-.98 1.274-2.092 1.334-3.374.059-1.28.072-1.689.072-7.612 0-5.923-.013-6.332-.072-7.612-.06-1.282-.354-2.394-1.334-3.374-.98-.98-2.092-1.274-3.374-1.334C15.668.013 15.259 0 12 0z"/></svg></a>
      <a href="https://wa.me/2347010488715" target="_blank" aria-label="WhatsApp" class="hover:text-green-500 text-gray-400 text-2xl transition"><svg fill="currentColor" viewBox="0 0 24 24" class="w-7 h-7"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.519-5.688-1.515L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-2.651-1.033-5.138-2.909-7.016C16.148 3.9 13.661 2.867 11.01 2.868c-5.448 0-9.886 4.434-9.889 9.884-.001 1.885.502 3.733 1.463 5.354l-.982 3.587 3.052-.999zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg></a>
    </div>
  `;
  // Go back icon
  const goBack = `<button id="go-back-modal" class="absolute top-4 left-4 text-blue-600 hover:text-blue-800 text-3xl font-bold z-20" title="Go Back" aria-label="Go Back"><svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg></button>`;
  content.innerHTML = `
    ${goBack}
    ${carousel}
    <div class="flex items-center gap-2 mb-2">
      <span class="text-2xl">${property.icon}</span>
      <h2 class="text-2xl font-bold text-blue-700">${property.title}</h2>
    </div>
    <div class="text-lg font-semibold text-blue-500 mb-2">${property.price || ''}</div>
    <div class="text-gray-600 mb-4">${property.desc}</div>
    <div class="text-sm text-gray-500 mb-2"><span class="font-semibold">Location:</span> ${property.location || ''}</div>
    ${features}
    ${map}
    <button id="contact-property-btn" class="mt-4 w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full px-6 py-3 font-bold shadow-lg hover:from-blue-700 hover:to-blue-500 transition">Contact about this property</button>
    ${socials}
  `;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  // Add click handler for contact button
  setTimeout(() => {
    const contactBtn = document.getElementById('contact-property-btn');
    if (contactBtn) {
      contactBtn.addEventListener('click', () => {
        const url = `contact.html?property=${encodeURIComponent(property.title)}`;
        window.open(url, '_blank');
      });
    }
    // Go back icon handler
    const goBackBtn = document.getElementById('go-back-modal');
    if (goBackBtn) {
      goBackBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        if (window.location.pathname.endsWith('properties.html')) {
          const grid = document.getElementById('properties-list');
          if (grid) grid.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }, 0);
}
// Close modal logic
window.addEventListener('DOMContentLoaded', () => {
  // Inject modal container at the very start
  if (!document.getElementById('property-modal')) {
    const modalDiv = document.createElement('div');
    modalDiv.id = 'property-modal';
    modalDiv.className = 'fixed inset-0 z-50 hidden items-center justify-center bg-black/50';
    modalDiv.innerHTML = `
      <div class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 p-6 relative animate-fade-in-up">
        <button id="close-property-modal" class="absolute top-4 right-4 text-gray-400 hover:text-blue-600 text-2xl font-bold">&times;</button>
        <div id="property-modal-content"></div>
      </div>
    `;
    document.body.appendChild(modalDiv);
  }

  const navbar = document.getElementById('navbar');
  if (navbar) navbar.innerHTML = navbarHTML;

  // Attach mobile menu event listener after navbar is injected
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  const hero = document.getElementById('hero');
  if (hero) hero.innerHTML = heroHTML;

  // Attach carousel event listeners after hero is injected
  const carouselImgs = document.querySelectorAll('.carousel-img');
  const carouselDots = document.querySelectorAll('.carousel-dot');
  let currentSlide = 0;
  function showSlide(idx) {
    carouselImgs.forEach((img, i) => {
      img.classList.toggle('opacity-0', i !== idx);
      img.classList.toggle('opacity-100', i === idx);
      // Remove scale and rotation for sharpness
      img.style.transform = 'none';
      img.style.zIndex = i === idx ? 2 : 1;
      img.style.filter = i === idx ? 'contrast(1.15) saturate(1.2)' : 'contrast(1) saturate(1)';
    });
    carouselDots.forEach((dot, i) => {
      dot.classList.toggle('opacity-70', i === idx);
      dot.classList.toggle('opacity-50', i !== idx);
    });
    currentSlide = idx;
  }
  if (carouselDots.length && carouselImgs.length) {
    carouselDots.forEach((dot, i) => {
      dot.addEventListener('click', () => showSlide(i));
    });
    let carouselInterval = setInterval(() => {
      showSlide((currentSlide + 1) % carouselImgs.length);
    }, 4000);
    showSlide(0);
  }

  const footer = document.getElementById('footer');
  if (footer) footer.innerHTML = footerHTML;

  // Only use renderPropertiesGrid for the landing page properties section
  const properties = document.getElementById('properties');
  if (properties) {
    renderPropertiesGrid(propertyData.slice(0, 8));
  }

  const team = document.getElementById('team');
  if (team) team.innerHTML = teamHTML;

  const icons = document.getElementById('icons');
  if (icons) icons.innerHTML = iconsHTML;

  const testimonials = document.getElementById('testimonials');
  if (testimonials) testimonials.innerHTML = testimonialsHTML;

  const projects = document.getElementById('projects');
  if (projects) projects.innerHTML = projectsHTML;

  const newsMedia = document.getElementById('news-media');
  if (newsMedia) newsMedia.innerHTML = newsMediaHTML;

  const locations = document.getElementById('locations');
  if (locations) locations.innerHTML = locationsHTML;

  const searchBarSection = document.getElementById('search-bar');
  const propertiesSection = document.getElementById('properties');
  if (searchBarSection && propertiesSection) {
    // Initial render
    renderPropertiesGrid(propertyData.slice(0, 8));
    // Add event listeners
    const form = searchBarSection.querySelector('form');
    const input = searchBarSection.querySelector('input[type="text"]');
    function filterProperties() {
      const q = input.value.trim().toLowerCase();
      const filtered = propertyData.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q)
      ).slice(0, 8);
      renderPropertiesGrid(filtered);
    }
    form.addEventListener('submit', e => {
      e.preventDefault();
      filterProperties();
    });
    input.addEventListener('input', filterProperties);
  }

  if (window.location.pathname.endsWith('properties.html')) {
    renderPropertiesPage();
    addAdvancedAnimations();
  }
  if (window.location.pathname.endsWith('contact.html')) {
    enhanceContactForm();
  }
  addAdvancedAnimations();

  // Navbar search bar filtering for properties
  function filterPropertiesByNavbarSearch(query) {
    const q = query.trim().toLowerCase();
    const filtered = propertyData.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q)
    );
    // On landing page, show up to 8
    if (document.getElementById('properties')) {
      renderPropertiesGrid(filtered.slice(0, 8));
    }
    // On properties page, show all
    if (document.getElementById('properties-list')) {
      const propertiesList = document.getElementById('properties-list');
      propertiesList.innerHTML = '';
      const grid = document.createElement('div');
      grid.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8';
      filtered.forEach((p, i) => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform group border border-blue-100';
        card.innerHTML = `
          <div class="relative">
            <img src="${p.img}" alt="${p.title}" class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300">
            <span class="absolute top-3 left-3 text-3xl">${p.icon}</span>
          </div>
          <div class="p-4">
            <h3 class="text-xl font-bold mb-1 flex items-center gap-2">${p.title}</h3>
            <p class="text-gray-600 mb-4 text-sm">${p.desc}</p>
            <a href="property-${i+1}.html" class="${modernButtonClass}">Read More</a>
          </div>
        `;
        grid.appendChild(card);
      });
      propertiesList.appendChild(grid);
    }
  }

  // Desktop navbar search
  const navbarSearch = document.getElementById('navbar-search');
  if (navbarSearch) {
    navbarSearch.addEventListener('input', (e) => {
      filterPropertiesByNavbarSearch(e.target.value);
    });
  }
  const navbarSearchForm = document.getElementById('navbar-search-form');
  if (navbarSearchForm) {
    navbarSearchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (navbarSearch) filterPropertiesByNavbarSearch(navbarSearch.value);
    });
  }
  // Mobile navbar search
  const navbarSearchMobile = document.getElementById('navbar-search-mobile');
  if (navbarSearchMobile) {
    navbarSearchMobile.addEventListener('input', (e) => {
      filterPropertiesByNavbarSearch(e.target.value);
    });
  }
  const navbarSearchFormMobile = document.getElementById('navbar-search-form-mobile');
  if (navbarSearchFormMobile) {
    navbarSearchFormMobile.addEventListener('submit', (e) => {
      e.preventDefault();
      if (navbarSearchMobile) filterPropertiesByNavbarSearch(navbarSearchMobile.value);
    });
  }

  // Inject modal container into DOM
  // This block is now moved to the very top of DOMContentLoaded

  document.body.addEventListener('click', function(e) {
    if (e.target && e.target.id === 'close-property-modal') {
      const modal = document.getElementById('property-modal');
      if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
    }
    // Close modal when clicking outside modal content
    if (e.target && e.target.id === 'property-modal') {
      e.target.classList.add('hidden');
      e.target.classList.remove('flex');
    }
  });
});

// Floating chat bot widget
window.addEventListener('DOMContentLoaded', () => {
  // Add floating chat bot
  if (!document.getElementById('chatbot-btn')) {
    const chatBtn = document.createElement('button');
    chatBtn.id = 'chatbot-btn';
    chatBtn.className = 'fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full shadow-lg p-4 flex items-center justify-center hover:from-blue-700 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2';
    chatBtn.innerHTML = '<svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2m2-4h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/></svg>';
    document.body.appendChild(chatBtn);
    // Chat window
    const chatWindow = document.createElement('div');
    chatWindow.id = 'chatbot-window';
    chatWindow.className = 'fixed bottom-24 right-6 z-50 bg-white rounded-2xl shadow-2xl w-80 max-w-xs p-4 hidden flex-col';
    chatWindow.innerHTML = `
      <div class="flex items-center justify-between mb-2">
        <span class="font-bold text-blue-700">Fountain Stars ChatBot</span>
        <button id="close-chatbot" class="text-gray-400 hover:text-blue-600 text-2xl font-bold">&times;</button>
      </div>
      <div id="chatbot-messages" class="h-40 overflow-y-auto mb-2 text-sm"></div>
      <form id="chatbot-form" class="flex gap-2">
        <input type="text" id="chatbot-input" class="flex-1 border rounded px-2 py-1" placeholder="Type your message..." autocomplete="off" />
        <button type="submit" class="bg-blue-600 text-white rounded px-3 py-1 font-bold">Send</button>
      </form>
    `;
    document.body.appendChild(chatWindow);
    chatBtn.addEventListener('click', () => {
      chatWindow.classList.toggle('hidden');
      if (!chatWindow.classList.contains('hidden')) {
        document.getElementById('chatbot-input').focus();
      }
    });
    document.getElementById('close-chatbot').addEventListener('click', () => {
      chatWindow.classList.add('hidden');
    });
    // Simple chat logic
    const messagesDiv = document.getElementById('chatbot-messages');
    const form = document.getElementById('chatbot-form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      const input = document.getElementById('chatbot-input');
      const msg = input.value.trim();
      if (!msg) return;
      messagesDiv.innerHTML += `<div class='mb-1'><span class='font-semibold text-blue-600'>You:</span> ${msg}</div>`;
      input.value = '';
      setTimeout(() => {
        messagesDiv.innerHTML += `<div class='mb-1'><span class='font-semibold text-green-600'>Bot:</span> Thank you for your message! We'll get back to you soon.</div>`;
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
      }, 600);
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    });
  }
});

// Tailwind custom animations (inject into <head> if needed)
if (typeof tailwind !== 'undefined') {
  tailwind.config = {
    theme: {
      extend: {
        keyframes: {
          'fade-in': { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
          'fade-in-up': { '0%': { opacity: 0, transform: 'translateY(40px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        },
        animation: {
          'fade-in': 'fade-in 1s ease-out',
          'fade-in-up': 'fade-in-up 1s ease-out',
        },
      },
    },
  };
} 