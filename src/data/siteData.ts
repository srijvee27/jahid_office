import { Product, ProductCategory, ClientItem, GalleryItem, Branch } from '@/types';

export const siteConfig = {
  name: 'Jahid Office Equipment',
  shortName: 'JOE',
  slogan: 'Leading Importer & Service Provider of Office Equipment in Bangladesh Since 1990',
  description: 'Jahid Office Equipment (JOE) is established in 1990 and specializes in sales & service of Toshiba Photocopiers, Digital Fax & other office equipment with nationwide service coverage in Bangladesh.',
  establishedYear: 1990,
  yearsOfExperience: 34,
  url: 'https://www.jahidoffice.com',
  ogImage: '/frontend/images/logo.jpg',
  hotlines: ['01713-093300', '01922-117201'],
  emails: ['info@jahidoffice.com', 'joe@jahidoffice.com'],
  workingHours: 'Saturday - Thursday: 9:00 AM - 6:00 PM',
  branches: [
    {
      name: 'Corporate Office (Headquarters)',
      address: '107, Motijheel C/A, Khan Mansion, (3rd Floor), Dhaka-1000.',
      phones: ['02-7111617', '02-9562530', '02-9580174', '02-9580065'],
      mobile: '01713-093300',
      email: 'info@jahidoffice.com, joe@jahidoffice.com',
      isHQ: true,
    },
    {
      name: 'Gulshan Branch',
      address: '40/2, Unicorn Plaza, 2nd Floor, Gulshan-2, Dhaka-1212.',
      phones: ['02-9853484', '02-9898513'],
      mobile: '01713-093301',
      email: 'gulshan@jahidoffice.com',
      isHQ: false,
    },
    {
      name: 'Chittagong Branch',
      address: '89/90, Agrabad (1st Floor), Near Agrabad Hotel, Chittagong-4000.',
      phones: ['031-2516439'],
      mobile: '01922-117215',
      email: 'ctg@jahidoffice.com',
      isHQ: false,
    },
    {
      name: 'Khulna Branch',
      address: 'Khanjahan Ali Road, P.T.I. moor, Khulna-9100.',
      phones: ['041-725515'],
      mobile: '01713-093303',
      email: 'khulna@jahidoffice.com',
      isHQ: false,
    },
    {
      name: 'Bogra Branch',
      address: 'Kazi Nazrul Islam Road, Bogra Plaza, Bogra.',
      phones: ['051-51486'],
      mobile: '01713-093302',
      email: 'bogra@jahidoffice.com',
      isHQ: false,
    },
  ] as Branch[],
};

export const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    href: '/about-us',
    children: [
      { label: 'About Company', href: '/about-us', description: 'Established in 1990, nationwide leader' },
      { label: 'Message from MD', href: '/message-from', description: 'Thoughts and commitment from our Managing Director' },
    ],
  },
  {
    label: 'Products',
    href: '/model/6/photocopy',
    children: [
      { label: 'Photocopier (Toshiba)', href: '/model/6/photocopy', description: 'Heavy-duty digital multifunctional copiers' },
      { label: 'Digital Fax', href: '/model/7/digital-fax', description: 'High-speed business communication devices' },
      { label: 'Steel Binding Machine', href: '/model/8/steel-binding-machine', description: 'Sole distributor of Unibind Belgium' },
      { label: 'Paper Shredder', href: '/model/9/paper-shredder', description: 'Secure heavy-duty document destroyers' },
      { label: 'Spiral Machine', href: '/model/10/spiral-machine', description: 'Professional office document spiral binders' },
      { label: 'Laminating Machine', href: '/model/11/laminating-machine', description: 'Precision thermal ID & document laminators' },
    ],
  },
  {
    label: 'Our Clients',
    href: '/bank-list',
    children: [
      { label: 'Bank Clients', href: '/bank-list', description: 'Over 36 central, private and commercial banks' },
      { label: 'Corporate Bodies', href: '/corporate-list', description: '60+ major conglomerates & industrial groups' },
      { label: 'Government Organizations', href: '/government-list', description: 'Ministries, forces, and autonomous institutions' },
      { label: 'University & College', href: '/university-college', description: 'Prestigious public & private higher education institutions' },
    ],
  },
  { label: 'Service & Support', href: '/service-support' },
  { label: 'Photo Gallery', href: '/photo-gallery' },
  { label: 'Contact Us', href: '/contact-us' },
];

export const heroSliders = [
  {
    image: '/frontend/images/slider/banner-01.jpg',
    title: 'Advanced Toshiba Multifunction Copiers',
    subtitle: 'High speed, intelligent cloud-ready monochrome and color copiers for demanding enterprise environments.',
    badge: 'Authorised Importer',
    ctaText: 'Explore Models',
    ctaLink: '/model/6/photocopy',
  },
  {
    image: '/frontend/images/slider/banner-02.jpg',
    title: 'Next-Gen e-STUDIO Digital Copiers',
    subtitle: 'Reliable engineering with up to 5,000+ daily copies and dual-scan document feeding.',
    badge: 'Enterprise Performance',
    ctaText: 'View Details',
    ctaLink: '/model-details/37/toshiba-e-studio-4508a',
  },
  {
    image: '/frontend/images/slider/banner-03.jpg',
    title: 'Nationwide After-Sales Support',
    subtitle: 'Over 34 years of dedicated service with our experienced team of outdoor field engineers across Bangladesh.',
    badge: '1-Year Warranty & Service',
    ctaText: 'Service Plans',
    ctaLink: '/service-support',
  },
  {
    image: '/frontend/images/slider/banner-04.jpg',
    title: 'Sole Distributor of Unibind Belgium',
    subtitle: 'State-of-the-art steel binding and document presentation solutions for high-security corporate files.',
    badge: 'Exclusive Distribution',
    ctaText: 'Contact Us',
    ctaLink: '/contact-us',
  },
  {
    image: '/frontend/images/slider/banner-05.jpg',
    title: 'Trusted by Over 160+ Top Institutions',
    subtitle: 'Serving leading banks, corporate houses, government ministries and universities nationwide.',
    badge: 'Proven Reputation',
    ctaText: 'View Client List',
    ctaLink: '/bank-list',
  },
  {
    image: '/frontend/images/slider/banner-06.jpg',
    title: 'Comprehensive Office Equipment Solutions',
    subtitle: 'Photocopiers, Digital Fax, Paper Shredders, Spiral Binders, and Laminating Machines.',
    badge: 'All-In-One Office Tech',
    ctaText: 'Browse Catalog',
    ctaLink: '/model/6/photocopy',
  },
  {
    image: '/frontend/images/slider/banner-07.jpg',
    title: 'Wholesale Pricing & Large Volume Discounts',
    subtitle: 'Direct imports ensuring unbeatable market rates with zero intermediary markup.',
    badge: 'Best Market Rates',
    ctaText: 'Request Quotation',
    ctaLink: '/contact-us',
  },
];

export const productCategories: ProductCategory[] = [
  {
    id: '6',
    slug: 'photocopy',
    name: 'Photocopy Machines',
    description: 'Heavy duty, medium and compact digital multifunctional copiers powered by Toshiba Japan.',
    count: 7,
    available: true,
    image: '/media/product_image/1506924979_1.png',
  },
  {
    id: '7',
    slug: 'digital-fax',
    name: 'Digital Fax',
    description: 'High performance laser and thermal fax machines for secure business document transmission.',
    count: 0,
    available: false,
    image: '/frontend/images/logo.jpg',
  },
  {
    id: '8',
    slug: 'steel-binding-machine',
    name: 'Steel Binding Machine',
    description: 'Sole distributor of Unibind Manufacturing Co. Belgium steel binding systems in Bangladesh.',
    count: 0,
    available: false,
    image: '/frontend/images/logo.jpg',
  },
  {
    id: '9',
    slug: 'paper-shredder',
    name: 'Paper Shredder',
    description: 'Cross-cut and micro-cut confidential document shredders for enterprise privacy protection.',
    count: 0,
    available: false,
    image: '/frontend/images/logo.jpg',
  },
  {
    id: '10',
    slug: 'spiral-machine',
    name: 'Spiral Machine',
    description: 'Heavy duty manual and electric comb/wire spiral binding machines for reports and presentations.',
    count: 0,
    available: false,
    image: '/frontend/images/logo.jpg',
  },
  {
    id: '11',
    slug: 'laminating-machine',
    name: 'Laminating Machine',
    description: 'Fast warm-up hot and cold roll laminators for certificates, ID cards, and official archives.',
    count: 0,
    available: false,
    image: '/frontend/images/logo.jpg',
  },
];

export const partnerLogos = [
  { name: 'Toshiba', image: '/frontend/images/business-partner/01.jpg' },
  { name: 'Brother', image: '/frontend/images/business-partner/02.jpg' },
  { name: 'Quality', image: '/frontend/images/business-partner/03.jpg' },
  { name: 'Unibind', image: '/frontend/images/business-partner/04.jpg' },
  { name: 'Biosystem', image: '/frontend/images/business-partner/05.jpg' },
  { name: 'Office Tech', image: '/frontend/images/business-partner/06.jpg' },
  { name: 'Duplo', image: '/frontend/images/business-partner/07.jpg' },
  { name: 'Partner', image: '/frontend/images/business-partner/08.jpg' },
];

export const clientLogosSpotlight = [
  { name: 'Client 1', image: '/frontend/images/clients/01.jpg' },
  { name: 'Client 2', image: '/frontend/images/clients/02.jpg' },
  { name: 'Client 3', image: '/frontend/images/clients/03.jpg' },
  { name: 'Client 4', image: '/frontend/images/clients/04.jpg' },
  { name: 'Client 5', image: '/frontend/images/clients/05.jpg' },
  { name: 'Client 6', image: '/frontend/images/clients/06.jpg' },
  { name: 'Client 7', image: '/frontend/images/clients/07.jpg' },
];

export const products: Product[] = [
  {
    "id": "37",
    "slug": "toshiba-e-studio-4508a",
    "name": "Toshiba E Studio 4508A",
    "category": "Photocopy",
    "categoryId": "6",
    "images": [
      "/assets/media/product_image/1506924979_0.jpg",
      "/assets/media/product_image/1506924979_1.png",
      "/assets/media/product_image/1506924979_2.jpg",
      "/assets/media/product_image/1506924979_3.jpg"
    ],
    "thumbnail": "/assets/media/product_image/1506924979_0.jpg",
    "specs": [
      {
        "key": "TOSHIBA",
        "value": "Digital Copier Machine (Heavy Duty)"
      },
      {
        "key": "Model",
        "value": "e-STUDIO-4508A"
      },
      {
        "key": "Copying speed",
        "value": "45 CPM (A4)"
      },
      {
        "key": "Per Day Copy",
        "value": "5000 (+/-)"
      },
      {
        "key": "Type",
        "value": "Desktop"
      },
      {
        "key": "Country of Origin Japan",
        "value": "Manufacture in China"
      },
      {
        "key": "Paper size",
        "value": "A3-A5R (Drawer), A3-A5R (Bypass)"
      },
      {
        "key": "Copying Process",
        "value": "Indirect electrostatic photographic method"
      },
      {
        "key": "Copying Type",
        "value": "1 beam laser printing"
      },
      {
        "key": "Paper Capacity",
        "value": "Max 3200 Sheets"
      },
      {
        "key": "Paper supply",
        "value": "Standard: 550 sheets x 2 (Drawer), 100 sheets (bypass)"
      },
      {
        "key": "Interface",
        "value": "10/100/1000Base-T, RJ-45, USB 2.0/Hi Speed"
      },
      {
        "key": "Display",
        "value": "9\u201d Color WVGA Touch Screen Tilting Display"
      },
      {
        "key": "Processor (CPU)",
        "value": "Intel Atom\u2122 1.33 GHz (Dual-Core)"
      },
      {
        "key": "Memory",
        "value": "4 GB"
      },
      {
        "key": "Hard Disk Drive",
        "value": "320 GB"
      },
      {
        "key": "E-Filling",
        "value": "Built In"
      },
      {
        "key": "Network Card",
        "value": "Built In"
      },
      {
        "key": "Electronic Sorter",
        "value": "Built In"
      },
      {
        "key": "Trolley",
        "value": "Built In"
      },
      {
        "key": "ADU (Duplex Unit)",
        "value": "Built In"
      },
      {
        "key": "RADF (Document Feeder)",
        "value": "Built In"
      },
      {
        "key": "Printer Kit",
        "value": "Option"
      },
      {
        "key": "Print Resolution",
        "value": "2400 dpi X 1200 dpi"
      },
      {
        "key": "Zoom",
        "value": "25% to 400% (1% Increment)"
      },
      {
        "key": "Fast Copy Time",
        "value": "3.6 Second"
      },
      {
        "key": "Power Consumption",
        "value": "1.5 kw"
      },
      {
        "key": "Warm up time",
        "value": "Approx 20 seconds"
      },
      {
        "key": "Multiple Coping",
        "value": "1 to 999"
      },
      {
        "key": "Product Warranty",
        "value": "01 (One) year free service. supply of mechanical parts are guaranteed for one year or one lac (1,00,000) copies whichever comes earlier. But there is no guarantee for any electrical & electronic parts."
      }
    ],
    "description": ""
  },
  {
    "id": "38",
    "slug": "toshiba-e-studio-3008a",
    "name": "Toshiba E Studio 3008A",
    "category": "Photocopy",
    "categoryId": "6",
    "images": [
      "/assets/media/product_image/1506925901_1.jpg",
      "/assets/media/product_image/1506925901_3.jpg",
      "/assets/media/product_image/1506925901_4.jpg",
      "/assets/media/product_image/1506927594_0.jpg"
    ],
    "thumbnail": "/assets/media/product_image/1506925901_1.jpg",
    "specs": [
      {
        "key": "TOSHIBA",
        "value": "Digital Copier Machine (Heavy Duty)"
      },
      {
        "key": "Model",
        "value": "e-STUDIO-3008A"
      },
      {
        "key": "Copying speed",
        "value": "30 CPM (A4)"
      },
      {
        "key": "Per Day Copy",
        "value": "3000 (+/-)"
      },
      {
        "key": "Type",
        "value": "Desktop"
      },
      {
        "key": "Country of Origin Japan",
        "value": "Manufacture in China"
      },
      {
        "key": "Paper size",
        "value": "A3-A5R (Drawer), A3-A5R (Bypass)"
      },
      {
        "key": "Copying Process",
        "value": "Indirect electrostatic photographic method"
      },
      {
        "key": "Copying Type",
        "value": "1 beam laser printing"
      },
      {
        "key": "Paper Capacity",
        "value": "Max 3200 Sheets"
      },
      {
        "key": "Paper supply",
        "value": "Standard: 550 sheets x 2 (Drawer), 100 sheets (bypass)"
      },
      {
        "key": "Interface",
        "value": "10/100/1000Base-T, RJ-45, USB 2.0/Hi Speed"
      },
      {
        "key": "Display",
        "value": "9\u201d Color WVGA Touch Screen Tilting Display"
      },
      {
        "key": "Processor (CPU)",
        "value": "Intel Atom\u2122 1.33 GHz (Dual-Core)"
      },
      {
        "key": "Memory",
        "value": "4 GB"
      },
      {
        "key": "Hard Disk Drive",
        "value": "320 GB"
      },
      {
        "key": "E-Filling",
        "value": "Built In"
      },
      {
        "key": "Network Card",
        "value": "Built In"
      },
      {
        "key": "Electronic Sorter",
        "value": "Built In"
      },
      {
        "key": "Trolley",
        "value": "Built In"
      },
      {
        "key": "ADU (Duplex Unit)",
        "value": "Built In"
      },
      {
        "key": "RADF (Document Feeder)",
        "value": "Option"
      },
      {
        "key": "Printer Kit",
        "value": "Option"
      },
      {
        "key": "Print Resolution",
        "value": "2400 dpi X 1200 dpi"
      },
      {
        "key": "Zoom",
        "value": "25% to 400% (1% Increment)"
      },
      {
        "key": "Fast Copy Time",
        "value": "3.6 Second"
      },
      {
        "key": "Power Consumption",
        "value": "1.5 kw"
      },
      {
        "key": "Warm up time",
        "value": "Approx 20 seconds"
      },
      {
        "key": "Multiple Coping",
        "value": "1 to 999"
      },
      {
        "key": "Product Warranty",
        "value": "01 (One) year free service. supply of mechanical parts are guaranteed for one year or one lac (1,00,000) copies whichever comes earlier. But there is no guarantee for any electrical & electronic parts."
      }
    ],
    "description": ""
  },
  {
    "id": "39",
    "slug": "toshiba-e-studio-2508a",
    "name": "Toshiba E Studio 2508A",
    "category": "Photocopy",
    "categoryId": "6",
    "images": [
      "/assets/media/product_image/1506926890_0.jpg",
      "/assets/media/product_image/1506926890_1.jpg",
      "/assets/media/product_image/1506926890_2.jpg",
      "/assets/media/product_image/1506926890_3.jpg"
    ],
    "thumbnail": "/assets/media/product_image/1506926890_0.jpg",
    "specs": [
      {
        "key": "TOSHIBA",
        "value": "Digital Copier Machine (Heavy Duty)"
      },
      {
        "key": "Model",
        "value": "e-STUDIO-2508A"
      },
      {
        "key": "Copying speed",
        "value": "25 CPM (A4)"
      },
      {
        "key": "Per Day Copy",
        "value": "2000 (+/-)"
      },
      {
        "key": "Type",
        "value": "Desktop"
      },
      {
        "key": "Country of Origin Japan",
        "value": "Manufacture in China"
      },
      {
        "key": "Paper size",
        "value": "A3-A5R (Drawer), A3-A5R (Bypass)"
      },
      {
        "key": "Copying Process",
        "value": "Indirect electrostatic photographic method"
      },
      {
        "key": "Copying Type",
        "value": "1 beam laser printing"
      },
      {
        "key": "Paper Capacity",
        "value": "Max 3200 Sheets"
      },
      {
        "key": "Paper supply",
        "value": "Standard: 550 sheets x 2 (Drawer), 100 sheets (bypass)"
      },
      {
        "key": "Interface",
        "value": "10/100/1000Base-T, RJ-45, USB 2.0/Hi Speed"
      },
      {
        "key": "Display",
        "value": "9\u201d Color WVGA Touch Screen Tilting Display"
      },
      {
        "key": "Processor (CPU)",
        "value": "Intel Atom\u2122 1.33 GHz (Dual-Core)"
      },
      {
        "key": "Memory",
        "value": "4 GB"
      },
      {
        "key": "Hard Disk Drive",
        "value": "320 GB"
      },
      {
        "key": "E-Filling",
        "value": "Built In"
      },
      {
        "key": "Network Card",
        "value": "Built In"
      },
      {
        "key": "Electronic Sorter",
        "value": "Built In"
      },
      {
        "key": "Trolley",
        "value": "Built In"
      },
      {
        "key": "ADU (Duplex Unit)",
        "value": "Built In"
      },
      {
        "key": "RADF (Document Feeder)",
        "value": "Option"
      },
      {
        "key": "Printer Kit",
        "value": "Option"
      },
      {
        "key": "Print Resolution",
        "value": "2400 dpi X 1200 dpi"
      },
      {
        "key": "Zoom",
        "value": "25% to 400% (1% Increment)"
      },
      {
        "key": "Fast Copy Time",
        "value": "3.6 Second"
      },
      {
        "key": "Power Consumption",
        "value": "1.5 kw"
      },
      {
        "key": "Warm up time",
        "value": "Approx 20 seconds"
      },
      {
        "key": "Multiple Coping",
        "value": "1 to 999"
      },
      {
        "key": "Product Warranty",
        "value": "01 (One) year free service. supply of mechanical parts are guaranteed for one year or one lac (1,00,000) copies whichever comes earlier. But there is no guarantee for any electrical & electronic parts."
      }
    ],
    "description": ""
  },
  {
    "id": "40",
    "slug": "toshiba-e-studio-5008a",
    "name": "Toshiba E Studio 5008A",
    "category": "Photocopy",
    "categoryId": "6",
    "images": [
      "/assets/media/product_image/1506927822_0.jpg",
      "/assets/media/product_image/1506927822_1.png",
      "/assets/media/product_image/1506927822_2.jpg",
      "/assets/media/product_image/1506927822_3.jpg"
    ],
    "thumbnail": "/assets/media/product_image/1506927822_0.jpg",
    "specs": [
      {
        "key": "TOSHIBA",
        "value": "Digital Copier Machine (Heavy Duty)"
      },
      {
        "key": "Model",
        "value": "e-STUDIO-5008A"
      },
      {
        "key": "Copying speed",
        "value": "50 CPM (A4)"
      },
      {
        "key": "Per Day Copy",
        "value": "5000 (+/-)"
      },
      {
        "key": "Type",
        "value": "Desktop"
      },
      {
        "key": "Country of Origin Japan",
        "value": "Manufacture in China"
      },
      {
        "key": "Paper size",
        "value": "A3-A5R (Drawer), A3-A5R (Bypass)"
      },
      {
        "key": "Copying Process",
        "value": "Indirect electrostatic photographic method"
      },
      {
        "key": "Copying Type",
        "value": "1 beam laser printing"
      },
      {
        "key": "Paper Capacity",
        "value": "Max 3200 Sheets"
      },
      {
        "key": "Paper supply",
        "value": "Standard: 550 sheets x 2 (Drawer), 100 sheets (bypass)"
      },
      {
        "key": "Interface",
        "value": "10/100/1000Base-T, RJ-45, USB 2.0/Hi Speed"
      },
      {
        "key": "Display",
        "value": "9\u201d Color WVGA Touch Screen Tilting Display"
      },
      {
        "key": "Processor (CPU)",
        "value": "Intel Atom\u2122 1.33 GHz (Dual-Core)"
      },
      {
        "key": "Memory",
        "value": "4 GB"
      },
      {
        "key": "Hard Disk Drive",
        "value": "320 GB"
      },
      {
        "key": "E-Filling",
        "value": "Built In"
      },
      {
        "key": "Network Card",
        "value": "Built In"
      },
      {
        "key": "Electronic Sorter",
        "value": "Built In"
      },
      {
        "key": "Trolley",
        "value": "Built In"
      },
      {
        "key": "ADU (Duplex Unit)",
        "value": "Built In"
      },
      {
        "key": "RADF (Document Feeder)",
        "value": "Built In"
      },
      {
        "key": "Printer Kit",
        "value": "Option"
      },
      {
        "key": "Print Resolution",
        "value": "2400 dpi X 1200 dpi"
      },
      {
        "key": "Zoom",
        "value": "25% to 400% (1% Increment)"
      },
      {
        "key": "Fast Copy Time",
        "value": "3.6 Second"
      },
      {
        "key": "Power Consumption",
        "value": "1.5 kw"
      },
      {
        "key": "Warm up time",
        "value": "Approx 20 seconds"
      },
      {
        "key": "Multiple Coping",
        "value": "1 to 999"
      },
      {
        "key": "Product Warranty",
        "value": "01 (One) year free service. supply of mechanical parts are guaranteed for one year or one lac (1,00,000) copies whichever comes earlier. But there is no guarantee for any electrical & electronic parts."
      }
    ],
    "description": ""
  },
  {
    "id": "41",
    "slug": "toshiba-e-studio-2809a",
    "name": "Toshiba E Studio 2809A",
    "category": "Photocopy",
    "categoryId": "6",
    "images": [
      "/assets/media/product_image/1506937350_0.jpg",
      "/assets/media/product_image/1506937350_1.png",
      "/assets/media/product_image/1506937350_2.jpg",
      "/assets/media/product_image/1506937350_3.png"
    ],
    "thumbnail": "/assets/media/product_image/1506937350_0.jpg",
    "specs": [
      {
        "key": "TOSHIBA",
        "value": "Digital Copier Machine"
      },
      {
        "key": "Model",
        "value": "e-STUDIO-2809A"
      },
      {
        "key": "Copy speed",
        "value": "28 CPM (A4)"
      },
      {
        "key": "Per Day Copy",
        "value": "1000 (+/-)"
      },
      {
        "key": "Type",
        "value": "Desktop"
      },
      {
        "key": "Country of Origin Japan",
        "value": "Manufacture in China"
      },
      {
        "key": "Paper size",
        "value": "A3-A5R (Drawer), A3-A5R (Bypass)"
      },
      {
        "key": "Copying Process",
        "value": "Indirect electrostatic photographic method"
      },
      {
        "key": "Paper supply",
        "value": "250 Drawer, 100 Sheets bypass"
      },
      {
        "key": "Interface",
        "value": "10/100/1000Base-T, RJ-45, USB 2.0/Hi Speed"
      },
      {
        "key": "Memory",
        "value": "512 MB"
      },
      {
        "key": "Network Print",
        "value": "Built In"
      },
      {
        "key": "ADU (Duplex Unit)",
        "value": "Built In"
      },
      {
        "key": "RADF (Document Feeder)",
        "value": "Option"
      },
      {
        "key": "Trolley",
        "value": "Option"
      },
      {
        "key": "Dimensions (W\u00d7D\u00d7H)",
        "value": "575mm \u00d7 540mm \u00d7 402mm"
      },
      {
        "key": "Print Resolution",
        "value": "2400 dpi X 600 dpi"
      },
      {
        "key": "Zoom",
        "value": "25% to 400% (1% Increment)"
      },
      {
        "key": "Fast Copy Time",
        "value": "6.4 Second"
      },
      {
        "key": "Warm-Up time",
        "value": "Approx 18 Second"
      },
      {
        "key": "Multiple Coping",
        "value": "1 to 999"
      },
      {
        "key": "Product Warranty",
        "value": "01 (One) year free service. supply of mechanical parts are guaranteed for one year or one lac (60,000) copies whichever comes earlier. But there is no guarantee for any electrical & electronic parts."
      }
    ],
    "description": ""
  },
  {
    "id": "42",
    "slug": "toshiba-e-studio-2309a",
    "name": "Toshiba E Studio 2309A",
    "category": "Photocopy",
    "categoryId": "6",
    "images": [
      "/assets/media/product_image/1506938063_0.jpg",
      "/assets/media/product_image/1506938063_1.jpg",
      "/assets/media/product_image/1506938063_2.jpg",
      "/assets/media/product_image/1506938063_3.jpg"
    ],
    "thumbnail": "/assets/media/product_image/1506938063_0.jpg",
    "specs": [
      {
        "key": "TOSHIBA",
        "value": "Digital Copier Machine"
      },
      {
        "key": "Model",
        "value": "e-STUDIO-2309A"
      },
      {
        "key": "Copy speed",
        "value": "23 CPM (A4)"
      },
      {
        "key": "Per Day Copy",
        "value": "700 (+/-)"
      },
      {
        "key": "Type",
        "value": "Desktop"
      },
      {
        "key": "Country of Origin Japan",
        "value": "Manufacture in China"
      },
      {
        "key": "Paper size",
        "value": "A3-A5R (Drawer), A3-A5R (Bypass)"
      },
      {
        "key": "Copying Process",
        "value": "Indirect electrostatic photographic method"
      },
      {
        "key": "Paper supply",
        "value": "250 Drawer, 100 Sheets bypass"
      },
      {
        "key": "Interface",
        "value": "10/100/1000Base-T, RJ-45, USB 2.0/Hi Speed"
      },
      {
        "key": "Memory",
        "value": "512 MB"
      },
      {
        "key": "Network Print",
        "value": "Built In"
      },
      {
        "key": "ADU (Duplex Unit)",
        "value": "Built In"
      },
      {
        "key": "RADF (Document Feeder)",
        "value": "Option"
      },
      {
        "key": "Trolley",
        "value": "Option"
      },
      {
        "key": "Dimensions (W\u00d7D\u00d7H)",
        "value": "575mm \u00d7 540mm \u00d7 402mm"
      },
      {
        "key": "Print Resolution",
        "value": "2400 dpi X 600 dpi"
      },
      {
        "key": "Zoom",
        "value": "25% to 400% (1% Increment)"
      },
      {
        "key": "Fast Copy Time",
        "value": "6.4 Second"
      },
      {
        "key": "Warm-Up time",
        "value": "Approx 18 Second"
      },
      {
        "key": "Multiple Coping",
        "value": "1 to 999"
      },
      {
        "key": "Product Warranty",
        "value": "01 (One) year free service. supply of mechanical parts are guaranteed for one year or one lac (60,000) copies whichever comes earlier. But there is no guarantee for any electrical & electronic parts."
      }
    ],
    "description": ""
  },
  {
    "id": "43",
    "slug": "toshiba-e-studio-2303a",
    "name": "Toshiba E Studio 2303A",
    "category": "Photocopy",
    "categoryId": "6",
    "images": [
      "/assets/media/product_image/1506940635_0.jpg",
      "/assets/media/product_image/1506940635_1.jpg",
      "/assets/media/product_image/1506940635_2.jpg",
      "/assets/media/product_image/1506940635_3.jpg"
    ],
    "thumbnail": "/assets/media/product_image/1506940635_0.jpg",
    "specs": [
      {
        "key": "TOSHIBA",
        "value": "Digital Copier Machine"
      },
      {
        "key": "Model",
        "value": "e-STUDIO-2303A"
      },
      {
        "key": "Copy speed",
        "value": "23 CPM (A4)"
      },
      {
        "key": "Per Day Copy",
        "value": "500 (+/-)"
      },
      {
        "key": "Type",
        "value": "Desktop"
      },
      {
        "key": "Country of Origin Japan",
        "value": "Manufacture in China"
      },
      {
        "key": "Paper size",
        "value": "A3-A5R (Drawer), A3-A5R (Bypass)"
      },
      {
        "key": "Copying Process",
        "value": "Indirect electrostatic photographic method"
      },
      {
        "key": "Paper supply",
        "value": "250 Drawer, 100 Sheets bypass"
      },
      {
        "key": "Interface",
        "value": "USB 2.0/Hi Speed"
      },
      {
        "key": "Memory",
        "value": "512 MB"
      },
      {
        "key": "GDI Print",
        "value": "Built In"
      },
      {
        "key": "Scanner Function",
        "value": "Built In"
      },
      {
        "key": "ADU (Duplex Unit)",
        "value": "Option"
      },
      {
        "key": "RADF (Document Feeder)",
        "value": "Option"
      },
      {
        "key": "Trolley",
        "value": "Option"
      },
      {
        "key": "Dimensions (W\u00d7D\u00d7H)",
        "value": "575mm \u00d7 540mm \u00d7 402mm"
      },
      {
        "key": "Print Resolution",
        "value": "2400 dpi X 600 dpi"
      },
      {
        "key": "Zoom",
        "value": "25% to 400% (1% Increment)"
      },
      {
        "key": "Fast Copy Time",
        "value": "6.4 Second"
      },
      {
        "key": "Warm-Up time",
        "value": "Approx 18 Second"
      },
      {
        "key": "Multiple Coping",
        "value": "1 to 999"
      },
      {
        "key": "Product Warranty",
        "value": "01 (One) year free service. supply of mechanical parts are guaranteed for one year or one lac (60,000) copies whichever comes earlier. But there is no guarantee for any electrical & electronic parts."
      }
    ],
    "description": ""
  }
];

export const clientsData: Record<string, ClientItem[]> = {
  "bank": [
    {
      "name": "Ab Bank",
      "image": "/assets/frontend/images/client-list/bank/AB_Bank.jpg"
    },
    {
      "name": "Al Arafah Islami Bank",
      "image": "/assets/frontend/images/client-list/bank/Al-Arafah-Islami-Bank.jpg"
    },
    {
      "name": "Bangladesh Krishi Bank",
      "image": "/assets/frontend/images/client-list/bank/Bangladesh-Krishi-Bank.jpg"
    },
    {
      "name": "Bangladesh Samabay Bank",
      "image": "/assets/frontend/images/client-list/bank/Bangladesh-Samabay-bank.jpg"
    },
    {
      "name": "Bank Asia",
      "image": "/assets/frontend/images/client-list/bank/Bank_Asia.jpg"
    },
    {
      "name": "Basic Bank Limited Logo",
      "image": "/assets/frontend/images/client-list/bank/BASIC-Bank-Limited-logo.jpg"
    },
    {
      "name": "Brac Bank",
      "image": "/assets/frontend/images/client-list/bank/Brac-Bank.jpg"
    },
    {
      "name": "City Bank",
      "image": "/assets/frontend/images/client-list/bank/City-Bank.jpg"
    },
    {
      "name": "Commercial Bank Of Ceylon",
      "image": "/assets/frontend/images/client-list/bank/commercial-bank-of-ceylon.jpg"
    },
    {
      "name": "Dutch Bangla",
      "image": "/assets/frontend/images/client-list/bank/dutch-bangla.jpg"
    },
    {
      "name": "Eastern Bank Limited",
      "image": "/assets/frontend/images/client-list/bank/Eastern_Bank_Limited.jpg"
    },
    {
      "name": "Exim Bank",
      "image": "/assets/frontend/images/client-list/bank/EXIM-Bank.jpg"
    },
    {
      "name": "Grameen Bank",
      "image": "/assets/frontend/images/client-list/bank/Grameen-Bank.jpg"
    },
    {
      "name": "Habib Bank",
      "image": "/assets/frontend/images/client-list/bank/Habib_Bank.jpg"
    },
    {
      "name": "Ific Bank",
      "image": "/assets/frontend/images/client-list/bank/IFIC-Bank.jpg"
    },
    {
      "name": "Islami Bank Bangladesh Logo",
      "image": "/assets/frontend/images/client-list/bank/Islami_Bank_Bangladesh_logo.jpg"
    },
    {
      "name": "Jamuna Bank",
      "image": "/assets/frontend/images/client-list/bank/jamuna_bank.jpg"
    },
    {
      "name": "Meghna Bank",
      "image": "/assets/frontend/images/client-list/bank/Meghna-Bank.jpg"
    },
    {
      "name": "Midland Bank",
      "image": "/assets/frontend/images/client-list/bank/Midland-Bank.jpg"
    },
    {
      "name": "Modhumoti Bank",
      "image": "/assets/frontend/images/client-list/bank/Modhumoti-Bank.jpg"
    },
    {
      "name": "Mutual Trust Bank",
      "image": "/assets/frontend/images/client-list/bank/Mutual-Trust-bank.jpg"
    },
    {
      "name": "National Bank Limited",
      "image": "/assets/frontend/images/client-list/bank/National-Bank-Limited.jpg"
    },
    {
      "name": "Nrb Global Bank",
      "image": "/assets/frontend/images/client-list/bank/NRB-Global-Bank.jpg"
    },
    {
      "name": "Nrb Bank Limited",
      "image": "/assets/frontend/images/client-list/bank/NRB-Bank-Limited.jpg"
    },
    {
      "name": "One Bank Logo",
      "image": "/assets/frontend/images/client-list/bank/one-bank-logo.jpg"
    },
    {
      "name": "Premier Bank",
      "image": "/assets/frontend/images/client-list/bank/Premier-Bank.png"
    },
    {
      "name": "Prime Bank",
      "image": "/assets/frontend/images/client-list/bank/Prime-bank.jpg"
    },
    {
      "name": "Shahjalal Islami Bank Limited",
      "image": "/assets/frontend/images/client-list/bank/Shahjalal-Islami-Bank-Limited.jpg"
    },
    {
      "name": "South Bangla Bank",
      "image": "/assets/frontend/images/client-list/bank/South-Bangla-Bank.jpg"
    },
    {
      "name": "Southeast Bank Limited",
      "image": "/assets/frontend/images/client-list/bank/southeast-bank-limited.jpg"
    },
    {
      "name": "Trust Bank",
      "image": "/assets/frontend/images/client-list/bank/Trust-Bank.png"
    },
    {
      "name": "Union Bank",
      "image": "/assets/frontend/images/client-list/bank/Union-Bank.jpg"
    },
    {
      "name": "Uttara Bank Logo",
      "image": "/assets/frontend/images/client-list/bank/uttara-bank-logo.jpg"
    },
    {
      "name": "First Finance",
      "image": "/assets/frontend/images/client-list/corporate/First-Finance.jpg"
    },
    {
      "name": "Islamic Finance And Investment Limited",
      "image": "/assets/frontend/images/client-list/corporate/Islamic-Finance-and-Investment-Limited.jpg"
    },
    {
      "name": "Hajfinance",
      "image": "/assets/frontend/images/client-list/Bank/hajfinance.jpg"
    }
  ],
  "corporate": [
    {
      "name": "Abul Khair Group",
      "image": "/assets/frontend/images/client-list/corporate/abul-khair-group.jpg"
    },
    {
      "name": "Aci Limited",
      "image": "/assets/frontend/images/client-list/corporate/Aci-Limited.jpg"
    },
    {
      "name": "Apex",
      "image": "/assets/frontend/images/client-list/corporate/APEX.jpg"
    },
    {
      "name": "Beximco Logo",
      "image": "/assets/frontend/images/client-list/corporate/beximco_logo.jpg"
    },
    {
      "name": "Bhbfc",
      "image": "/assets/frontend/images/client-list/corporate/bhbfc.jpg"
    },
    {
      "name": "Bikroy.Com",
      "image": "/assets/frontend/images/client-list/corporate/Bikroy.com.jpg"
    },
    {
      "name": "Brac Logo",
      "image": "/assets/frontend/images/client-list/corporate/BRAC_logo.jpg"
    },
    {
      "name": "Crown Cement",
      "image": "/assets/frontend/images/client-list/corporate/crown-cement.jpg"
    },
    {
      "name": "Dbl Group",
      "image": "/assets/frontend/images/client-list/corporate/Dbl-group.jpg"
    },
    {
      "name": "Dekko",
      "image": "/assets/frontend/images/client-list/corporate/dekko.jpg"
    },
    {
      "name": "Elite Paint",
      "image": "/assets/frontend/images/client-list/corporate/elite-paint.jpg"
    },
    {
      "name": "Esquire Knit Composite",
      "image": "/assets/frontend/images/client-list/corporate/esquire-knit-composite.jpg"
    },
    {
      "name": "Heritage Air Express",
      "image": "/assets/frontend/images/client-list/corporate/heritage-air-express.jpg"
    },
    {
      "name": "High Commission Of India",
      "image": "/assets/frontend/images/client-list/corporate/high-commission-of-india.jpg"
    },
    {
      "name": "Hrc",
      "image": "/assets/frontend/images/client-list/corporate/HRC.jpg"
    },
    {
      "name": "Huawei Technology",
      "image": "/assets/frontend/images/client-list/corporate/Huawei-technology.jpg"
    },
    {
      "name": "Ibn Sina",
      "image": "/assets/frontend/images/client-list/corporate/Ibn-sina.jpg"
    },
    {
      "name": "Karnaphuli Fertilizer",
      "image": "/assets/frontend/images/client-list/corporate/karnaphuli-fertilizer.jpg"
    },
    {
      "name": "Metlife Alico",
      "image": "/assets/frontend/images/client-list/corporate/metlife-alico.jpg"
    },
    {
      "name": "Noman Group",
      "image": "/assets/frontend/images/client-list/corporate/Noman-Group.jpg"
    },
    {
      "name": "Oriental Group",
      "image": "/assets/frontend/images/client-list/corporate/oriental-group.jpg"
    },
    {
      "name": "Orion Pharma ",
      "image": "/assets/frontend/images/client-list/corporate/orion-pharma-.jpg"
    },
    {
      "name": "Premier Cement",
      "image": "/assets/frontend/images/client-list/corporate/premier-cement.jpg"
    },
    {
      "name": "Prothom Alo",
      "image": "/assets/frontend/images/client-list/corporate/Prothom-alo.jpg"
    },
    {
      "name": "Renata Group",
      "image": "/assets/frontend/images/client-list/corporate/renata-group.jpg"
    },
    {
      "name": "Ruposhi Bangla Hotel",
      "image": "/assets/frontend/images/client-list/corporate/ruposhi-bangla-hotel.jpg"
    },
    {
      "name": "Save The Children India Logo",
      "image": "/assets/frontend/images/client-list/corporate/save-the-children-india-logo.jpg"
    },
    {
      "name": "Square",
      "image": "/assets/frontend/images/client-list/corporate/Square.jpg"
    },
    {
      "name": "Ucep",
      "image": "/assets/frontend/images/client-list/corporate/ucep.jpg"
    },
    {
      "name": "Undp Logo",
      "image": "/assets/frontend/images/client-list/corporate/undp_logo.jpg"
    },
    {
      "name": "Unilever",
      "image": "/assets/frontend/images/client-list/corporate/Unilever.jpg"
    },
    {
      "name": "Who",
      "image": "/assets/frontend/images/client-list/corporate/Who.jpg"
    },
    {
      "name": "Rsz 101 Arbabpolypack",
      "image": "/assets/frontend/images/client-list/Corporate/rsz_101_arbabpolypack.jpg"
    },
    {
      "name": "Rsz 202 Aristopharma Logo",
      "image": "/assets/frontend/images/client-list/Corporate/rsz_202_aristopharma-logo.jpg"
    },
    {
      "name": "Rsz 203 Best Electronics",
      "image": "/assets/frontend/images/client-list/Corporate/rsz_203_best_electronics.jpg"
    },
    {
      "name": "Rsz 204 Beximco Pharma",
      "image": "/assets/frontend/images/client-list/Corporate/rsz_204_beximco-pharma.jpg"
    },
    {
      "name": "Rsz 205 Concord Pharmaceuticals Limited",
      "image": "/assets/frontend/images/client-list/Corporate/rsz_205_concord-pharmaceuticals-limited.jpg"
    },
    {
      "name": "Rsz 206 Confidence Cement",
      "image": "/assets/frontend/images/client-list/Corporate/rsz_206_confidence-cement.jpg"
    },
    {
      "name": "Rsz 207 Ena Group",
      "image": "/assets/frontend/images/client-list/Corporate/rsz_207_ena_group.jpg"
    },
    {
      "name": "Rsz 208 Eon Group",
      "image": "/assets/frontend/images/client-list/Corporate/rsz_208_eon_group.jpg"
    },
    {
      "name": "Rsz 209 Ibna Sina Pharma",
      "image": "/assets/frontend/images/client-list/Corporate/rsz_209_ibna_sina_pharma.jpg"
    },
    {
      "name": "Rsz 210 Impressnewtex",
      "image": "/assets/frontend/images/client-list/Corporate/rsz_210_impressnewtex.jpg"
    },
    {
      "name": "Rsz 211 Institute Of Water Modelling",
      "image": "/assets/frontend/images/client-list/Corporate/rsz_211_institute_of_water_modelling.jpg"
    },
    {
      "name": "Rsz 212 Biopharma",
      "image": "/assets/frontend/images/client-list/Corporate/rsz_212_biopharma.jpg"
    },
    {
      "name": "Rsz 213 Mim Design",
      "image": "/assets/frontend/images/client-list/Corporate/rsz_213_mim_design.jpg"
    },
    {
      "name": "Rsz 214 Oriental Real Estate 300",
      "image": "/assets/frontend/images/client-list/Corporate/rsz_214_oriental-real-estate_300.jpg"
    },
    {
      "name": "Rsz 217 Unitex Group Logo",
      "image": "/assets/frontend/images/client-list/Corporate/rsz_217_unitex-group-logo.jpg"
    },
    {
      "name": "Rsz 218 Aristo Pharma",
      "image": "/assets/frontend/images/client-list/Corporate/rsz_218_aristo_pharma.jpg"
    },
    {
      "name": "Rsz 219 Emirates Logosvg",
      "image": "/assets/frontend/images/client-list/Corporate/rsz_219_emirates_logosvg.jpg"
    },
    {
      "name": "Rsz 220 Gizlogo Standard Rgb 72",
      "image": "/assets/frontend/images/client-list/Corporate/rsz_220_gizlogo-standard-rgb-72.jpg"
    },
    {
      "name": "Rsz 223 Jaijaidin",
      "image": "/assets/frontend/images/client-list/Corporate/rsz_223_jaijaidin.jpg"
    },
    {
      "name": "Rsz 224 Medinova Hospital",
      "image": "/assets/frontend/images/client-list/Corporate/rsz_224_medinova_hospital.jpg"
    },
    {
      "name": "Rsz 227 Room To Read",
      "image": "/assets/frontend/images/client-list/Corporate/rsz_227_room_to_read.jpg"
    },
    {
      "name": "Rsz 228 Rupayan Housing Estate Ltd Jobs Circular",
      "image": "/assets/frontend/images/client-list/Corporate/rsz_228_rupayan-housing-estate-ltd-jobs-circular.jpg"
    },
    {
      "name": "Rsz 229 Sajida Foundation",
      "image": "/assets/frontend/images/client-list/Corporate/rsz_229_sajida_foundation.jpg"
    },
    {
      "name": "Rsz 230 Square Tteksttaail",
      "image": "/assets/frontend/images/client-list/Corporate/rsz_230_square_tteksttaail.jpg"
    },
    {
      "name": "Rsz 231 Sts Group",
      "image": "/assets/frontend/images/client-list/Corporate/rsz_231_sts_group.jpg"
    },
    {
      "name": "Rsz Islam Garments",
      "image": "/assets/frontend/images/client-list/Corporate/rsz_islam_garments.jpg"
    },
    {
      "name": "Rsz Youth Group",
      "image": "/assets/frontend/images/client-list/Corporate/rsz_youth_group.jpg"
    },
    {
      "name": "Rsz 306 Bgmea",
      "image": "/assets/frontend/images/client-list/Government/rsz_306_bgmea.jpg"
    }
  ],
  "government": [
    {
      "name": "Airport Armed Police, Bangladesh (Logo)",
      "image": "/assets/frontend/images/client-list/government/Airport_Armed_Police,_Bangladesh_(logo).jpg"
    },
    {
      "name": "Badc",
      "image": "/assets/frontend/images/client-list/government/BADC.jpg"
    },
    {
      "name": "Bangladesh Army Symbol",
      "image": "/assets/frontend/images/client-list/government/bangladesh_army-symbol.jpg"
    },
    {
      "name": "Bangladesh Machine Tools Factory Logo",
      "image": "/assets/frontend/images/client-list/government/Bangladesh_Machine_Tools_Factory_logo.jpg"
    },
    {
      "name": "Bangladesh Cricket Board",
      "image": "/assets/frontend/images/client-list/government/Bangladesh-Cricket-Board.jpg"
    },
    {
      "name": "Bangladesh Customs",
      "image": "/assets/frontend/images/client-list/government/Bangladesh-Customs.jpg"
    },
    {
      "name": "Bangladesh Judicial Service Commission",
      "image": "/assets/frontend/images/client-list/government/Bangladesh-Judicial-Service-Commission.jpg"
    },
    {
      "name": "Bangladesh Navy",
      "image": "/assets/frontend/images/client-list/government/Bangladesh-Navy.jpg"
    },
    {
      "name": "Bangladesh Police",
      "image": "/assets/frontend/images/client-list/government/bangladesh-Police.jpg"
    },
    {
      "name": "Biwta",
      "image": "/assets/frontend/images/client-list/government/BIWTA.jpg"
    },
    {
      "name": "Btv",
      "image": "/assets/frontend/images/client-list/government/BTV.jpg"
    },
    {
      "name": "Cotton Development Board",
      "image": "/assets/frontend/images/client-list/government/Cotton-Development-Board.jpg"
    },
    {
      "name": "Dhaka South City Corporation",
      "image": "/assets/frontend/images/client-list/government/Dhaka-South-City-Corporation.jpg"
    },
    {
      "name": "Dhaka Wasa",
      "image": "/assets/frontend/images/client-list/government/Dhaka-Wasa.jpg"
    },
    {
      "name": "Lged",
      "image": "/assets/frontend/images/client-list/government/LGED.jpg"
    },
    {
      "name": "Lged 1",
      "image": "/assets/frontend/images/client-list/government/LGED-1.jpg"
    },
    {
      "name": "Ministry Of Fisheries",
      "image": "/assets/frontend/images/client-list/government/ministry-of-fisheries.jpg"
    },
    {
      "name": "Nbr",
      "image": "/assets/frontend/images/client-list/government/NBR.jpg"
    },
    {
      "name": "Pwd",
      "image": "/assets/frontend/images/client-list/government/PWD.jpg"
    },
    {
      "name": "Rab",
      "image": "/assets/frontend/images/client-list/government/RAB.jpg"
    },
    {
      "name": "Roads And Highway Department",
      "image": "/assets/frontend/images/client-list/government/roads-and-highway-department.jpg"
    },
    {
      "name": "Desco",
      "image": "/assets/frontend/images/client-list/corporate/Desco.jpg"
    },
    {
      "name": "Rsz 301  Bangladesh Chemical Industries Corporation",
      "image": "/assets/frontend/images/client-list/Government/rsz_301__bangladesh_chemical_industries_corporation.jpg"
    },
    {
      "name": "Rsz 302 Bangladesh Radio",
      "image": "/assets/frontend/images/client-list/Government/rsz_302_bangladesh_radio.jpg"
    },
    {
      "name": "Rsz 303 Bangladesh Telecommunications Company Limited Btcl Logo",
      "image": "/assets/frontend/images/client-list/Government/rsz_303_bangladesh_telecommunications_company_limited_btcl_logo.jpg"
    },
    {
      "name": "Rsz 304 Bangladeshrailwaylogo",
      "image": "/assets/frontend/images/client-list/Government/rsz_304_bangladeshrailwaylogo.jpg"
    },
    {
      "name": "Rsz 305 Bangldesh Navy Logo",
      "image": "/assets/frontend/images/client-list/Government/rsz_305_bangldesh-navy-logo.jpg"
    },
    {
      "name": "Rsz 307 Customs Excise Vat Commissionerate Jobs Circular",
      "image": "/assets/frontend/images/client-list/Government/rsz_307_customs-excise-vat-commissionerate-jobs-circular.jpg"
    },
    {
      "name": "Rsz 309 Petrobangla",
      "image": "/assets/frontend/images/client-list/Government/rsz_309_petrobangla.jpg"
    },
    {
      "name": "Rsz 310 Wdb",
      "image": "/assets/frontend/images/client-list/Government/rsz_310_wdb.jpg"
    },
    {
      "name": "Rsz 311 Bangladesh Protibondhi Foundation",
      "image": "/assets/frontend/images/client-list/Government/rsz_311_bangladesh_protibondhi_foundation.jpg"
    },
    {
      "name": "Rsz 312 Durniti Domon Commission Dudok Logo",
      "image": "/assets/frontend/images/client-list/Government/rsz_312_durniti-domon-commission-dudok-logo.jpg"
    }
  ],
  "university": [
    {
      "name": "Adamjee Cantonment College",
      "image": "/assets/frontend/images/client-list/university-college/adamjee-cantonment-college.jpg"
    },
    {
      "name": "Aiub",
      "image": "/assets/frontend/images/client-list/university-college/AIUB.jpg"
    },
    {
      "name": "Armed Police Battalion Public School Colleg",
      "image": "/assets/frontend/images/client-list/university-college/armed-police-battalion-public-school-colleg.jpg"
    },
    {
      "name": "Bangabandhu Sheikh Mujib Medical University",
      "image": "/assets/frontend/images/client-list/university-college/bangabandhu-sheikh-mujib-medical-university.jpg"
    },
    {
      "name": "Bangladesh Islami University",
      "image": "/assets/frontend/images/client-list/university-college/bangladesh-islami-university.jpg"
    },
    {
      "name": "Brac University",
      "image": "/assets/frontend/images/client-list/university-college/brac-university.jpg"
    },
    {
      "name": "Cambrian College",
      "image": "/assets/frontend/images/client-list/university-college/cambrian-college.jpg"
    },
    {
      "name": "Comilla Medical College Logo",
      "image": "/assets/frontend/images/client-list/university-college/Comilla_Medical_College_Logo.jpg"
    },
    {
      "name": "Comilla University",
      "image": "/assets/frontend/images/client-list/university-college/Comilla-University.jpg"
    },
    {
      "name": "Daffodil International University",
      "image": "/assets/frontend/images/client-list/university-college/daffodil-international-university.jpg"
    },
    {
      "name": "Dhaka University Logo",
      "image": "/assets/frontend/images/client-list/university-college/Dhaka_University_logo.jpg"
    },
    {
      "name": "Dhaka Residential Model College",
      "image": "/assets/frontend/images/client-list/university-college/dhaka-residential-model-college.jpg"
    },
    {
      "name": "Dhaka Residential Model College",
      "image": "/assets/frontend/images/client-list/university-college/dhaka-residential-model-college.jpg"
    },
    {
      "name": "Eastern University",
      "image": "/assets/frontend/images/client-list/university-college/eastern-university.jpg"
    },
    {
      "name": "Ibais University",
      "image": "/assets/frontend/images/client-list/university-college/Ibais-university.jpg"
    },
    {
      "name": "Jahangirnagar University",
      "image": "/assets/frontend/images/client-list/university-college/jahangirnagar-university.jpg"
    },
    {
      "name": "Millennium University",
      "image": "/assets/frontend/images/client-list/university-college/millennium-university.jpg"
    },
    {
      "name": "Northern University Bangladesh Logo",
      "image": "/assets/frontend/images/client-list/university-college/Northern-University-Bangladesh-Logo.jpg"
    },
    {
      "name": "Nsu Logo",
      "image": "/assets/frontend/images/client-list/university-college/NSU-Logo.JPG"
    },
    {
      "name": "Port City International University",
      "image": "/assets/frontend/images/client-list/university-college/port-city-international-university.jpg"
    },
    {
      "name": "Presidency University",
      "image": "/assets/frontend/images/client-list/university-college/presidency-university.jpg"
    },
    {
      "name": "Samorita Medical College",
      "image": "/assets/frontend/images/client-list/university-college/samorita-medical-college.jpg"
    },
    {
      "name": "Scholastica School",
      "image": "/assets/frontend/images/client-list/university-college/scholastica-school.jpg"
    },
    {
      "name": "Shanto Mariam University",
      "image": "/assets/frontend/images/client-list/university-college/shanto-mariam-university.jpg"
    },
    {
      "name": "Stamford University Bangladesh Logo",
      "image": "/assets/frontend/images/client-list/university-college/Stamford-University-Bangladesh-logo.jpg"
    },
    {
      "name": "United International University",
      "image": "/assets/frontend/images/client-list/university-college/United-International-University.jpg"
    },
    {
      "name": "Uttara University",
      "image": "/assets/frontend/images/client-list/university-college/uttara-university.jpg"
    },
    {
      "name": "Rsz 216 Spks Medical Institute",
      "image": "/assets/frontend/images/client-list/university-college/rsz_216_spks_medical_institute.jpg"
    },
    {
      "name": "Rsz 401 Bangladesh Islamic University",
      "image": "/assets/frontend/images/client-list/university-college/rsz_401_bangladesh_islamic_university.jpg"
    },
    {
      "name": "Rsz 401 Bf Shaheencollegelogo",
      "image": "/assets/frontend/images/client-list/university-college/rsz_401_bf_shaheencollegelogo.jpg"
    },
    {
      "name": "Rsz 402 Bangladesh University Of Textiles Admission 2015 16",
      "image": "/assets/frontend/images/client-list/university-college/rsz_402_bangladesh-university-of-textiles-admission-2015-16.jpg"
    },
    {
      "name": "Rsz 404 Central Medical College Comilla",
      "image": "/assets/frontend/images/client-list/university-college/rsz_404_central_medical_college_comilla.jpg"
    },
    {
      "name": "Rsz 405 Manarat School & College",
      "image": "/assets/frontend/images/client-list/university-college/rsz_405_manarat_school_&_college.jpg"
    },
    {
      "name": "Rsz 406 Medical College For Women Hospital",
      "image": "/assets/frontend/images/client-list/university-college/rsz_406_medical-college-for-women-hospital.jpg"
    },
    {
      "name": "Rsz 407 Bangladesh Agricultural University Crest",
      "image": "/assets/frontend/images/client-list/university-college/rsz_407_bangladesh_agricultural_university_crest.jpg"
    },
    {
      "name": "Rsz 408 Bangladesh Police Staff College Logo",
      "image": "/assets/frontend/images/client-list/university-college/rsz_408_bangladesh_police_staff_college_logo.jpg"
    },
    {
      "name": "Rsz 409 Shohid Bir Uttam Anwar Girls School & College",
      "image": "/assets/frontend/images/client-list/university-college/rsz_409_shohid_bir_uttam_anwar_girls_school_&_college.jpg"
    },
    {
      "name": "Rsz 410 Uits",
      "image": "/assets/frontend/images/client-list/university-college/rsz_410_uits.jpg"
    },
    {
      "name": "Rsz Samorita Medical College & Hospital",
      "image": "/assets/frontend/images/client-list/university-college/rsz_samorita_medical_college_&_hospital.jpg"
    }
  ]
};

export const galleryItems: GalleryItem[] = [
  {
    "full": "/assets/frontend/images/photogallery/1.jpg",
    "thumb": "/assets/frontend/images/photogallery/thumb/thumb-1.jpg"
  },
  {
    "full": "/assets/frontend/images/photogallery/2.jpg",
    "thumb": "/assets/frontend/images/photogallery/thumb/thumb-2.jpg"
  },
  {
    "full": "/assets/frontend/images/photogallery/3.jpg",
    "thumb": "/assets/frontend/images/photogallery/thumb/thumb-3.jpg"
  },
  {
    "full": "/assets/frontend/images/photogallery/4.jpg",
    "thumb": "/assets/frontend/images/photogallery/thumb/thumb-4.jpg"
  },
  {
    "full": "/assets/frontend/images/photogallery/6.jpg",
    "thumb": "/assets/frontend/images/photogallery/thumb/thumb-6.jpg"
  },
  {
    "full": "/assets/frontend/images/photogallery/7.jpg",
    "thumb": "/assets/frontend/images/photogallery/thumb/thumb-7.jpg"
  },
  {
    "full": "/assets/frontend/images/photogallery/8.jpg",
    "thumb": "/assets/frontend/images/photogallery/thumb/thumb-8.jpg"
  },
  {
    "full": "/assets/frontend/images/photogallery/9.jpg",
    "thumb": "/assets/frontend/images/photogallery/thumb/thumb-9.jpg"
  },
  {
    "full": "/assets/frontend/images/photogallery/10.jpg",
    "thumb": "/assets/frontend/images/photogallery/thumb/thumb-10.jpg"
  },
  {
    "full": "/assets/frontend/images/photogallery/12.jpg",
    "thumb": "/assets/frontend/images/photogallery/thumb/thumb-12.jpg"
  },
  {
    "full": "/assets/frontend/images/photogallery/13.jpg",
    "thumb": "/assets/frontend/images/photogallery/thumb/thumb-13.jpg"
  },
  {
    "full": "/assets/frontend/images/photogallery/14.jpg",
    "thumb": "/assets/frontend/images/photogallery/thumb/thumb-14.jpg"
  },
  {
    "full": "/assets/frontend/images/photogallery/16.jpg",
    "thumb": "/assets/frontend/images/photogallery/thumb/thumb-16.jpg"
  },
  {
    "full": "/assets/frontend/images/photogallery/18.jpg",
    "thumb": "/assets/frontend/images/photogallery/thumb/thumb-18.jpg"
  },
  {
    "full": "/assets/frontend/images/photogallery/20.jpg",
    "thumb": "/assets/frontend/images/photogallery/thumb/thumb-20.jpg"
  },
  {
    "full": "/assets/frontend/images/photogallery/23.jpg",
    "thumb": "/assets/frontend/images/photogallery/thumb/thumb-23.jpg"
  },
  {
    "full": "/assets/frontend/images/photogallery/24.jpg",
    "thumb": "/assets/frontend/images/photogallery/thumb/thumb-24.jpg"
  },
  {
    "full": "/assets/frontend/images/photogallery/25.jpg",
    "thumb": "/assets/frontend/images/photogallery/thumb/thumb-25.jpg"
  },
  {
    "full": "/assets/frontend/images/photogallery/26.jpg",
    "thumb": "/assets/frontend/images/photogallery/thumb/thumb-26.jpg"
  },
  {
    "full": "/assets/frontend/images/photogallery/27.jpg",
    "thumb": "/assets/frontend/images/photogallery/thumb/thumb-27.jpg"
  },
  {
    "full": "/assets/frontend/images/photogallery/28.jpg",
    "thumb": "/assets/frontend/images/photogallery/thumb/thumb-28.jpg"
  }
];

export const clientData = clientsData;
export const partners = partnerLogos.map((p, i) => ({ id: String(i + 1), ...p }));
