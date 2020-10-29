const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

//NAV

  const navItems = document.querySelectorAll('a')
  navItems[0].textContent = "Services";
  navItems[1].textContent = "Product";
  navItems[2].textContent = "Vision";
  navItems[3].textContent = "Features";
  navItems[4].textContent = "About";
  navItems[5].textContent = "Contact";

  const logo = document.querySelector('.logo');
  logo.src = "img/logo.png"

  //CTA

  const headerImg = document.getElementById('cta-img');
  headerImg.src = "img/header-img.png"


  const ctaH1 = document.querySelector('h1')
  ctaH1.textContent = 'DOM IS AWESOME';

  const button = document.querySelector('button')
  button.textContent = 'Get Started';

  // Main Content

  const features = document.querySelector('h4')
  features.textContent = 'Features';

  const featuresP = document.querySelector('p')
  featuresP.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
  
  const about = document.querySelector('.top-content div:nth-child(2) h4');
  about.textContent = 'About'
  
  const aboutP = document.querySelector('.top-content div:nth-child(2) p');
  aboutP.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

  const middleImg = document.querySelector('.middle-img')
  middleImg.src = "img/mid-page-accent.jpg";

  const services = document.querySelector('.bottom-content div:nth-child(1) h4')
  services.textContent = 'Services'

  const servicesP = document.querySelector('.bottom-content div:nth-child(1) p')
  servicesP.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
  
  const product = document.querySelector('.bottom-content div:nth-child(2) h4')
  product.textContent = 'Product'
  
  const productP = document.querySelector('.bottom-content div:nth-child(2) p')
  productP.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
 
  const vision = document.querySelector('.bottom-content div:nth-child(3) h4')
  vision.textContent = 'Vision'

  const visionP = document.querySelector('.bottom-content div:nth-child(3) p')
  visionP.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
  
  //CONTACT

  const contact = document.querySelector('.contact h4')
  contact.textContent = 'Contact'

  const contactAddress = document.querySelector('.contact p')
  contactAddress.textContent = '123 Way 456 Street, Somewhere, USA'
  
  const phone = document.querySelector('.contact p:nth-child(3)')
  phone.textContent = "1 (888) 888-8888"

  const email = document.querySelector('.contact p:nth-child(4)')
  email.textContent = "sales@greatidea.io"
 
  //Footer

  const copyright = document.querySelector('footer p')
  copyright.textContent = "Copyright Great Idea! 2018"


  