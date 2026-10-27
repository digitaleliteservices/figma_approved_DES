import desWebCredibilityImg from '../assets/images/portfolio-assets/2 (1).jpg';
import dhsBillboardImg from '../assets/images/portfolio-assets/2.jpg';
import slcmsDegreeImg from '../assets/images/portfolio-assets/3.2.png';
import samrudhiFarmlandImg from '../assets/images/portfolio-assets/Creative 03_10.png';
import petsNHugsCareImg from '../assets/images/portfolio-assets/Creative 2.png';
import dhsFuturePlotImg from '../assets/images/portfolio-assets/Creative 20.png';
import aquaGoldCareImg from '../assets/images/portfolio-assets/Creative 7.png';
import aquaGoldBottleImg from '../assets/images/portfolio-assets/Creative 8.png';
import petsNHugsBoardingImg from '../assets/images/portfolio-assets/Creative-14.png';
import desWebDevImg from '../assets/images/portfolio-assets/DES_6.jpg';
import dhsAerialMasterplanImg from '../assets/images/portfolio-assets/DHSWTS.jpg';
import hyderabadHouseBiriyaniImg from '../assets/images/portfolio-assets/HHB- 2.png';
import hyderabadHousePaneerImg from '../assets/images/portfolio-assets/HHB-7.png';
import samrudhiLaunchImg from '../assets/images/portfolio-assets/Instagram post - 223.png';
import jainClothKidsImg from '../assets/images/portfolio-assets/JC_9.png';
import neelPowershellImg from '../assets/images/portfolio-assets/June_Powershell_13.jpg';
import mrclVillasFamilyImg from '../assets/images/portfolio-assets/MRCL_11.png';
import mrclVillasLuxuryImg from '../assets/images/portfolio-assets/MRCL_13.png';
import neelAzureCloudImg from '../assets/images/portfolio-assets/May_Azure_7.png';
import mercuryDistanceEduImg from '../assets/images/portfolio-assets/Mercury_0107_1.jpg';
import mercuryMcaOnlineImg from '../assets/images/portfolio-assets/Mercury_Aug_1.png';
import slcmsMbaAdmissionsImg from '../assets/images/portfolio-assets/SLCMS-MBA.jpg';

// New Creatives (23 High-Converting Deliverables)
import rushMeBananaSilkImg from '../assets/images/portfolio-assets/new-creatives/4.jpg';
import mkPaintingServicesImg from '../assets/images/portfolio-assets/new-creatives/Artboard 1.jpg';
import mrclLuxuryAddressImg from '../assets/images/portfolio-assets/new-creatives/Artboard 1-1.jpg';
import aquaGoldCommercialImg from '../assets/images/portfolio-assets/new-creatives/Artboard 4.jpg';
import autoVividNanoShieldImg from '../assets/images/portfolio-assets/new-creatives/Artboard 5.png';
import jainClothGaneshImg from '../assets/images/portfolio-assets/new-creatives/Artboard 5k.jpg';
import autoVividBrillianceImg from '../assets/images/portfolio-assets/new-creatives/Artboard 6.png';
import autoVividPpfFilmImg from '../assets/images/portfolio-assets/new-creatives/Artboard 7.png';
import autoVividCeramicArmorImg from '../assets/images/portfolio-assets/new-creatives/Artboard 8.png';
import eagleEyeCctvSecurityImg from '../assets/images/portfolio-assets/new-creatives/Artboard 9.jpg';
import naturenowRadianceImg from '../assets/images/portfolio-assets/new-creatives/Artboard 9 (1).jpg';
import jainClothFamilyFestiveImg from '../assets/images/portfolio-assets/new-creatives/Artboard 9 (2).jpg';
import jainClothHandloomSareeImg from '../assets/images/portfolio-assets/new-creatives/Artboard 10-1.png';
import eagleEyeSolarHeaterImg from '../assets/images/portfolio-assets/new-creatives/Artboard 13.jpg';
import mercuryFreedomLearnImg from '../assets/images/portfolio-assets/new-creatives/Artboard 15.png';
import mercuryOnlineMcaImg from '../assets/images/portfolio-assets/new-creatives/Artboard 19.png';
import matchingMatchingDressImg from '../assets/images/portfolio-assets/new-creatives/Artboard orange 5.jpg';
import royalmonkCateringSpreadsImg from '../assets/images/portfolio-assets/new-creatives/carousal 2.jpg';
import royalmonkCorporateEventsImg from '../assets/images/portfolio-assets/new-creatives/cm_rm.jpg';
import samrudhiGuruPurnimaImg from '../assets/images/portfolio-assets/new-creatives/guru poornima.png';
import satiPriyaMakeoverArtistImg from '../assets/images/portfolio-assets/new-creatives/sp-1.jpg';
import satiPriyaOccasionBeautyImg from '../assets/images/portfolio-assets/new-creatives/sp-6 copy.jpg';
import samrudhiVaramahalakshmiImg from '../assets/images/portfolio-assets/new-creatives/varamahalaksmi_k.jpg';

/**
 * Filter Categories for Portfolio
 */
export const PORTFOLIO_FILTERS = [
  { id: 'all', label: 'All Projects' },
  { id: 'brand', label: 'Brand Strategy' },
  { id: 'web', label: 'Web & Digital' },
  { id: 'engineering', label: 'Growth & Tech' },
  { id: 'creative', label: 'Creative & Ads' },
];

/**
 * Main Featured Client Case Studies (Rich Cards)
 */
export const PORTFOLIO_CASE_STUDIES = [
  {
    id: 1,
    category: 'web',
    tagBadge: 'WEB ARCHITECTURE',
    subtitle: 'MODERN HIGH-SPEED STOREFRONT & PORTAL',
    title: 'Website Development & Performance Platform',
    client: 'Digital Elite Services',
    summary: 'Engineered a modern, high-speed digital presence featuring sub-second load times, interactive micro-interactions, and conversion-optimized service delivery funnels.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Performance'],
    image: desWebDevImg,
    actionType: 'info',
  },
  {
    id: 2,
    category: 'brand',
    tagBadge: 'LUXURY REAL ESTATE',
    subtitle: 'EDITORIAL BRAND IDENTITY & CAMPAIGN',
    title: 'Unicon Sugarland — Own The Extraordinary',
    client: 'MRCL Infrastructure Pvt Ltd',
    summary: 'Comprehensive luxury brand storytelling, editorial promotional creatives, and targeted lead campaigns for 4BHK luxury villas on Bannerghatta-Jigani Road.',
    tags: ['Branding', 'Luxury Real Estate', 'Meta Ads', 'Lead Funnel'],
    image: mrclVillasLuxuryImg,
    actionType: 'info',
  },
  {
    id: 3,
    category: 'engineering',
    tagBadge: 'HIGHWAY OUTDOOR CAMPAIGN',
    subtitle: 'OUT-OF-HOME & DIGITAL REMARKETING',
    title: 'Defence Habitat Tapasihalli Billboard Engine',
    client: 'Defence Habitat Housing Co-operative Society',
    summary: 'Strategic highway billboard marketing and multi-channel acquisition campaign for Tapasihalli Phase-II plotted development in North Bangalore.',
    tags: ['OOH Billboard', 'Print High-Res', 'Geo-Targeting', 'Real Estate'],
    image: dhsBillboardImg,
    actionType: 'info',
  },
  {
    id: 4,
    category: 'brand',
    tagBadge: 'SUSTAINABLE LIVING',
    subtitle: 'FARMLAND IDENTITY & CREATIVE STRATEGY',
    title: 'Samrudhi Sylvan Retreat — Nature Living',
    client: 'Samrudhi Properties',
    summary: 'Art-directed "When Life Feels Natural" promotional campaign celebrating premium managed farmlands in Doddaballapura, North Bangalore.',
    tags: ['Farmland Living', 'Print Collateral', 'Copywriting', 'Ad Creative'],
    image: samrudhiFarmlandImg,
    actionType: 'info',
  },
  {
    id: 5,
    category: 'engineering',
    tagBadge: 'TECH UPSKILLING',
    subtitle: 'CLOUD ENGINEERING RECRUITMENT FUNNEL',
    title: 'Neel Technologies — Azure Cloud Career Campaign',
    client: 'Neel Technologies',
    summary: 'High-converting career transition campaign helping IT professionals advance to Microsoft Azure Cloud Engineering with hands-on lab projects.',
    tags: ['EdTech Marketing', 'Google Ads', 'Landing Funnel', 'Cloud Tech'],
    image: neelAzureCloudImg,
    actionType: 'info',
  },
  {
    id: 6,
    category: 'web',
    tagBadge: '3D PROPTECH ARCHITECTURE',
    subtitle: 'TOWNSHIP 3D MASTERPLAN PORTAL',
    title: 'Defence Habitat Masterplan Aerial Visualization',
    client: 'Defence Habitat Housing Society',
    summary: 'High-resolution aerial 3D masterplan township visualization illustrating connectivity to STRR, Airport, Foxconn, and ITIR/SEZ corridors.',
    tags: ['3D Masterplan', 'Township Portal', 'Aerial Rendering', 'Real Estate'],
    image: dhsAerialMasterplanImg,
    actionType: 'info',
  },
  {
    id: 7,
    category: 'brand',
    tagBadge: 'FOOD & HOSPITALITY',
    subtitle: 'CULINARY ART DIRECTION & LOCAL PROMOTION',
    title: 'Hyderabad House — Authentic Shahi Biriyani',
    client: 'Hyderabad House Bengaluru',
    summary: 'Mouth-watering culinary food styling, QR-integrated promotional posters, and hyper-local geo-targeted social acquisition for AECS Layout.',
    tags: ['Food Photography', 'Promotional Campaign', 'QR Marketing', 'Local Ads'],
    image: hyderabadHouseBiriyaniImg,
    actionType: 'plus',
  },
  {
    id: 8,
    category: 'engineering',
    tagBadge: 'HIGHER EDUCATION',
    subtitle: 'MBA ADMISSIONS & CAMPUS ENROLLMENT',
    title: 'Sri Lakshmi College — MBA Admissions Campaign',
    client: 'Sri Lakshmi College Of Management & Science',
    summary: 'Prestigious institutional campaign highlighting 20 years of academic excellence, corporate placements, and integrated IAS/KAS preparation.',
    tags: ['Higher Education', 'Admissions Funnel', 'Campus Enrollment', 'Lead Gen'],
    image: slcmsMbaAdmissionsImg,
    actionType: 'plus',
  },
  {
    id: 9,
    category: ['engineering', 'brand', 'creative'],
    tagBadge: 'AUTOMOTIVE DETAILING',
    subtitle: '3M CERAMIC COATING & PPF ARMOR',
    title: 'Auto Vivid — 3M Ceramic Coating Armor Campaign',
    client: 'Auto Vivid Car Care Bengaluru',
    summary: 'High-impact dark mode digital campaign engineered for luxury vehicle owners, delivering mirror shine, hydrophobic paint armor, and qualified local detailing leads.',
    tags: ['3M Ceramic', 'Automotive Detailing', 'PPF Protection', 'Lead Gen'],
    image: autoVividCeramicArmorImg,
    actionType: 'plus',
  },
];

/**
 * 14 Complete Visual Showcase Portfolio Items
 */
export const PORTFOLIO_SHOWCASE_ITEMS = [
  {
    id: 'sc-1',
    category: 'web',
    badge: 'WEB DESIGN UX',
    title: 'Credibility Web Design & UX Strategy',
    client: 'Digital Elite Services',
    image: desWebCredibilityImg,
  },
  {
    id: 'sc-2',
    category: 'brand',
    badge: 'DTC PET CARE',
    title: 'Pets N Hugs Professional Pet Boarding',
    client: 'Pets N Hugs',
    image: petsNHugsCareImg,
  },
  {
    id: 'sc-3',
    category: 'engineering',
    badge: 'PLOTTED COMMUNITY',
    title: 'A Clear View of Your Future — Tapasihalli',
    client: 'Defence Habitat Housing Society',
    image: dhsFuturePlotImg,
  },
  {
    id: 'sc-4',
    category: 'brand',
    badge: 'HEALTH & FMCG',
    title: 'AQUAGold+ Circle of Care Water Purifier',
    client: 'Goodwill Creation',
    image: aquaGoldCareImg,
  },
  {
    id: 'sc-5',
    category: 'web',
    badge: 'FASHION RETAIL',
    title: "Jain Cloth Centre — Lil Flex Kid's Collection",
    client: 'Jain Cloth Centre',
    image: jainClothKidsImg,
  },
  {
    id: 'sc-6',
    category: 'engineering',
    badge: 'DISTANCE EDUCATION',
    title: 'Mercury Academy — Success Without Campus',
    client: 'Mercury Academy',
    image: mercuryDistanceEduImg,
  },
  {
    id: 'sc-7',
    category: 'brand',
    badge: 'F&B SIZZLE',
    title: 'Hyderabad House Wok-Tossed Paneer Chilli',
    client: 'Hyderabad House',
    image: hyderabadHousePaneerImg,
  },
  {
    id: 'sc-8',
    category: 'engineering',
    badge: 'ONLINE MCA DEGREE',
    title: 'Dayananda Sagar Online MCA — AI & Cloud',
    client: 'Mercury Academy & DSU Online',
    image: mercuryMcaOnlineImg,
  },
  {
    id: 'sc-9',
    category: 'brand',
    badge: 'PROJECT LAUNCH',
    title: 'Samrudhi Sylvan Retreat Project Launch',
    client: 'Samrudhi Properties',
    image: samrudhiLaunchImg,
  },
  {
    id: 'sc-10',
    category: 'engineering',
    badge: 'CIVIL SERVICES',
    title: 'Degree + IAS/KAS Integrated Admissions',
    client: 'Sri Lakshmi College Of Management',
    image: slcmsDegreeImg,
  },
  {
    id: 'sc-11',
    category: 'brand',
    badge: 'BEVERAGE LAUNCH',
    title: 'AQUAGold+ Packaged Water Splash Teaser',
    client: 'Goodwill Creation',
    image: aquaGoldBottleImg,
  },
  {
    id: 'sc-12',
    category: 'engineering',
    badge: 'IT AUTOMATION',
    title: 'Neel Technologies — PowerShell Automation',
    client: 'Neel Technologies',
    image: neelPowershellImg,
  },
  {
    id: 'sc-13',
    category: 'brand',
    badge: 'LOCAL BRANDING',
    title: 'Pets N Hugs — Leave Happy Return Happier',
    client: 'Pets N Hugs RMV 2nd Stage',
    image: petsNHugsBoardingImg,
  },
  {
    id: 'sc-14',
    category: 'engineering',
    badge: 'PREMIUM VILLAS',
    title: 'Unicon Sugarland 4BHK Family Living',
    client: 'MRCL Infrastructure',
    image: mrclVillasFamilyImg,
  },
  {
    id: 'sc-15',
    category: ['brand', 'creative'],
    badge: 'ETHNIC FASHION',
    title: 'Rush-Me Ethnics — Banana Silk Saree Drape Campaign',
    client: 'Rush-Me Ethnics',
    summary: 'High-conversion DTC social ad campaign highlighting timeless drape elegance, fabric luxury, and festive shopping.',
    tags: ['E-Commerce', 'Meta Ads', 'Ethnic Wear', 'DTC Growth'],
    image: rushMeBananaSilkImg,
  },
  {
    id: 'sc-16',
    category: ['engineering', 'creative'],
    badge: 'HOME SERVICES',
    title: 'MK Home Services — Professional Painting Solutions',
    client: 'MK Home Services',
    summary: 'Local lead-generation creative campaign promoting residential and commercial painting with transparent on-time service.',
    tags: ['Lead Gen', 'Local Services', 'Home Improvement', 'Social Ads'],
    image: mkPaintingServicesImg,
  },
  {
    id: 'sc-17',
    category: ['brand', 'creative'],
    badge: 'LUXURY REAL ESTATE',
    title: 'Unicon Sugarland — 4 BHK Premium Luxury Villa Address',
    client: 'MRCL Infrastructure',
    summary: 'Editorial high-ticket villa campaign targeting HNI homebuyers across South Bangalore with site visit conversion hooks.',
    tags: ['Luxury Real Estate', 'Meta Ads', 'HNI Acquisition', 'Lead Funnel'],
    image: mrclLuxuryAddressImg,
  },
  {
    id: 'sc-18',
    category: ['brand', 'creative'],
    badge: 'HEALTH & FMCG',
    title: 'AQUAGold+ — Pure Water Commercial Dispenser Units',
    client: 'Goodwill Creation',
    summary: 'B2B commercial purifier ad showcasing high-capacity safe water solutions for offices, hotels, and hospitals.',
    tags: ['B2B Marketing', 'Commercial FMCG', 'Water Purification', 'Performance Ads'],
    image: aquaGoldCommercialImg,
  },
  {
    id: 'sc-19',
    category: ['engineering', 'creative'],
    badge: 'AUTOMOTIVE CARE',
    title: 'Auto Vivid — Ultra Nano Shield Paint Protection',
    client: 'Auto Vivid Car Care',
    summary: 'High-impact dark mode creative engineered for luxury automobile owners focusing on self-healing properties and gloss finish.',
    tags: ['Automotive Detailing', 'PPF Protection', 'High-Ticket Ads', 'Instagram Creatives'],
    image: autoVividNanoShieldImg,
  },
  {
    id: 'sc-20',
    category: ['brand', 'creative'],
    badge: 'FESTIVE CAMPAIGN',
    title: 'Jain Cloth Centre — Ganesh Chaturthi Festive Wishes',
    client: 'Jain Cloth Centre',
    summary: 'Auspicious festive greeting creative connecting tradition, prosperity, and premium saree collections in regional markets.',
    tags: ['Festive Branding', 'Regional Campaign', 'Retail Marketing', 'Cultural Identity'],
    image: jainClothGaneshImg,
  },
  {
    id: 'sc-21',
    category: ['engineering', 'creative'],
    badge: 'AUTOMOTIVE CARE',
    title: 'Auto Vivid — Invisible Protection, Unmistakable Brilliance',
    client: 'Auto Vivid Car Care',
    summary: 'Technical showcase graphic for hydrophobic nano shield protection, emphasizing stain resistance and long-lasting gloss.',
    tags: ['Car Care', 'Nano Coating', 'Visual Identity', 'Performance Marketing'],
    image: autoVividBrillianceImg,
  },
  {
    id: 'sc-22',
    category: ['engineering', 'creative'],
    badge: 'AUTOMOTIVE CARE',
    title: 'Auto Vivid — Crystal-Clear Paint Protection Film (PPF)',
    client: 'Auto Vivid Car Care',
    summary: 'Direct response promotion for 3M crystal-clear PPF with transparent pricing and scratch-resistant durability proof points.',
    tags: ['PPF Film', 'Lead Generation', 'Automotive Aftermarket', 'Bangalore Local Ads'],
    image: autoVividPpfFilmImg,
  },
  // {
  //   id: 'sc-23',
  //   category: ['engineering', 'creative'],
  //   badge: 'AUTOMOTIVE CARE',
  //   title: 'Auto Vivid — 3M Ceramic Coating Armor Protection',
  //   client: 'Auto Vivid Car Care',
  //   summary: 'Dramatic studio-lit ceramic coating advertisement highlighting mirror shine, water repellency, and deep paint armor.',
  //   tags: ['3M Ceramic', 'Luxury Automobiles', 'Premium Branding', 'Digital Ad Creative'],
  //   image: autoVividCeramicArmorImg,
  // },
  {
    id: 'sc-24',
    category: ['engineering', 'creative'],
    badge: 'SECURITY TECH',
    title: 'Eagle Eye Technologies — 24/7 CCTV Surveillance Systems',
    client: 'Eagle Eye Technologies',
    summary: 'Modern smart security campaign focusing on round-the-clock protection, real-time monitoring, and crime prevention.',
    tags: ['Smart Security', 'CCTV Automation', 'Commercial Tech', 'Lead Gen'],
    image: eagleEyeCctvSecurityImg,
  },
  {
    id: 'sc-25',
    category: ['brand', 'creative'],
    badge: 'BEAUTY & WELLNESS',
    title: 'Naturenow — Radiance Elixir Skincare Daily Glow',
    client: 'Naturenow',
    summary: 'DTC skincare social ad with natural sunlight photography, product benefit callouts, and clean organic aesthetics.',
    tags: ['Skincare DTC', 'Beauty Brand', 'Social Commerce', 'Product Launch'],
    image: naturenowRadianceImg,
  },
  {
    id: 'sc-26',
    category: ['brand', 'creative'],
    badge: 'FASHION RETAIL',
    title: 'Jain Cloth Centre — New Family Festive Collection',
    client: 'Jain Cloth Centre',
    summary: 'Warm, emotional family apparel advertisement capturing festive togetherness across women, men, and kids collections.',
    tags: ['Retail Apparel', 'Family Fashion', 'Store Footfall', 'Festive Campaigns'],
    image: jainClothFamilyFestiveImg,
  },
  {
    id: 'sc-27',
    category: ['brand', 'creative'],
    badge: 'HANDLOOM FASHION',
    title: 'Jain Cloth Centre — Handcrafted Handloom Sarees',
    client: 'Jain Cloth Centre',
    summary: 'High-aesthetic handloom saree visual spotlighting artisanal weaving, timeless heritage borders, and premium craftsmanship.',
    tags: ['Handloom Weaves', 'Heritage Fashion', 'E-commerce Creatives', 'Catalog Ads'],
    image: jainClothHandloomSareeImg,
  },
  {
    id: 'sc-28',
    category: ['engineering', 'creative'],
    badge: 'CLEAN ENERGY',
    title: 'Eagle Eye Technologies — Solar Water Heater Energy Savings',
    client: 'Eagle Eye Technologies',
    summary: 'Eco-conscious green tech promotion demonstrating lower electricity bills and zero-compromise hot water for homes.',
    tags: ['Clean Energy', 'Solar Solutions', 'Eco Tech', 'Direct Response'],
    image: eagleEyeSolarHeaterImg,
  },
  {
    id: 'sc-29',
    category: ['engineering', 'creative'],
    badge: 'EDTECH & DISTANCE',
    title: 'Mercury Academy — Freedom To Learn Independence Campaign',
    client: 'Mercury Academy',
    summary: 'Patriotic Independence Day education campaign inspiring professionals to upskill and achieve career independence.',
    tags: ['EdTech Branding', 'Higher Education', 'Independence Day', 'Student Enrollment'],
    image: mercuryFreedomLearnImg,
  },
  {
    id: 'sc-30',
    category: ['engineering', 'creative'],
    badge: 'EDTECH DEGREE',
    title: 'Mercury Academy — Online MCA Degree For Working Professionals',
    client: 'Mercury Academy & DSU Online',
    summary: 'High-converting admissions ad with salary-friendly EMI hooks, live weekend classes, and high-demand cloud/AI curriculum.',
    tags: ['Distance Learning', 'MCA Degree', 'Career Upskilling', 'Education Leads'],
    image: mercuryOnlineMcaImg,
  },
  {
    id: 'sc-31',
    category: ['brand', 'creative'],
    badge: 'WOMEN APPAREL',
    title: 'Matching Matching Wear — Grace In Every Detail Collection',
    client: 'Matching Matching Wear',
    summary: 'Chic patterned dress showcase focusing on tie-up sleeve detailing, breathable fabric, and all-day comfort fits.',
    tags: ['Women Fashion', 'Casual Wear', 'Instagram Ads', 'DTC Catalog'],
    image: matchingMatchingDressImg,
  },
  {
    id: 'sc-32',
    category: ['brand', 'creative'],
    badge: 'HOSPITALITY & EVENTS',
    title: 'Royalmonk Events — Premium Catering & Gourmet Spreads',
    client: 'Royalmonk Events',
    summary: 'Luxury culinary service advertisement featuring live food counters, buffet setups, and tailored wedding menus.',
    tags: ['Event Catering', 'Luxury Hospitality', 'Weddings', 'Lead Acquisition'],
    image: royalmonkCateringSpreadsImg,
  },
  {
    id: 'sc-33',
    category: ['brand', 'creative'],
    badge: 'CORPORATE EVENTS',
    title: 'Royal Monk Events — Executive Impact & Corporate Gatherings',
    client: 'Royal Monk Events',
    summary: 'Sophisticated corporate networking ad targeting enterprise conference managers and annual business summits.',
    tags: ['Corporate Events', 'B2B Services', 'Event Management', 'Executive Summits'],
    image: royalmonkCorporateEventsImg,
  },
  {
    id: 'sc-34',
    category: ['brand', 'creative'],
    badge: 'REAL ESTATE PLOTS',
    title: 'Samrudhi Properties — Guru Purnima Investment in Land',
    client: 'Samrudhi Properties',
    summary: 'Philosophical investment storytelling highlighting gated residential plot living and securing wealth across generations.',
    tags: ['Plotted Land', 'Bangalore Real Estate', 'Cultural Marketing', 'Site Visits'],
    image: samrudhiGuruPurnimaImg,
  },
  {
    id: 'sc-35',
    category: ['brand', 'creative'],
    badge: 'BEAUTY & MAKEOVER',
    title: 'Sati Priya Makeover — Certified Bridal & Party Artistry',
    client: 'Sati Priya Makeover',
    summary: 'Glamourous bridal makeover promotional creative spotlighting HD bridal makeup, traditional jewelry, and certified styling.',
    tags: ['Bridal Makeover', 'Beauty Influencer', 'Local Bookings', 'Wedding Season'],
    image: satiPriyaMakeoverArtistImg,
  },
  {
    id: 'sc-36',
    category: ['brand', 'creative'],
    badge: 'BEAUTY & MAKEOVER',
    title: 'Sati Priya Makeover — Beauty For Every Occasion Styling',
    client: 'Sati Priya Makeover',
    summary: 'Multi-look makeover campaign demonstrating event, bridal, and reception transformations for special celebrations.',
    tags: ['Party Makeover', 'Occasion Beauty', 'Portfolio Showcase', 'Social Bookings'],
    image: satiPriyaOccasionBeautyImg,
  },
  {
    id: 'sc-37',
    category: ['brand', 'creative'],
    badge: 'FESTIVE CAMPAIGN',
    title: 'Samrudhi Properties — Varamahalakshmi Festive Beginnings',
    client: 'Samrudhi Properties',
    summary: 'Warm festival campaign welcoming Mahalakshmi into new property foundations and premium farmland estates.',
    tags: ['Festive Real Estate', 'Farmland Living', 'Auspicious Booking', 'Local Leads'],
    image: samrudhiVaramahalakshmiImg,
  },
];
