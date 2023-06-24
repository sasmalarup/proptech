/** @type {import('next').NextConfig} */
const nextConfig = { 
  env:{
    BASE_URL:"http://localhost:3000/",
    DB_HOST:"whuk-52764.whukhost.com",
    DB_USER:"rephil_mlspms2023",
    DB_PASSWORD:",nCcJk)@~%TK@pmsMLS2023",
    DB_DATABASE:"rephil_mlspms2023",
    IMG_URL:"https://www.rephil.app/",
    HOME_BLOCK_PROPERTY_IMG_URL:'img/p/pimg/su/370/300/',
    HOME_BANNER_IMG_URL:'img/b/hsb/s/1440/432/',
    BLOG_HOME_IMG_URL:'img/b/bimg/a/370/300/',
    HOME_FEATURE_BANNER_IMG_URL:'img/b/hsb/s/1200/411/',
    GALLERY_PROPERTY_IMG_URL:'img/p/pimg/su/500/430/',

  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.rephil.app',
        port: '',
        
      },
    ],
  },
}

const path = require('path');
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig
