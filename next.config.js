/** @type {import('next').NextConfig} */
const nextConfig = { 
  env:{
    BASE_URL:"http://localhost:3000/",
    DB_HOST:"whuk-52764.whukhost.com",
    DB_USER:"rephil_mlspms2023",
    DB_PASSWORD:",nCcJk)@~%TK@pmsMLS2023",
    DB_DATABASE:"rephil_mlspms2023"

  }
}

const path = require('path');
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig
