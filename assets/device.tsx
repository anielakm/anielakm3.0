const size = {
    mobileS: '320px',
    mobileM: '520px',
    mobile: '768px',
    tablet: '992px',
    laptop: '1024px',
    laptopM: '1200px',
    laptopL: '1440px',

    maxMobileS: '319.9px',
    maxMobileM: '519.9px',
    maxMobile: '767.9px',
    maxTablet: '991.9px',
    maxLaptop: '1023.9px',
    maxLaptopM: '1199.9px',
    maxLaptopL: '1439.9px',
  
  }
  
  export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobile: `(min-width: ${size.mobile})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopM: `(min-width: ${size.laptopM})`,
    laptopL: `(min-width: ${size.laptopL})`,

    maxMobileS: `(max-width: ${size.maxMobileS})`,
    maxMobileM: `(max-width: ${size.maxMobileM})`,
    maxMobile: `(max-width: ${size.maxMobile})`,
    maxTablet: `(max-width: ${size.maxTablet})`,
    maxLaptop: `(max-width: ${size.maxLaptop})`,
    maxLaptopM: `(max-width: ${size.maxLaptopM})`,
    maxLaptopL: `(max-width: ${size.maxLaptopL})`,
 
  }