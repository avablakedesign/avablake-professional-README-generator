//This returns a license section of the readme as well as the license link and the license badge.
function renderLicenseSection(license) {
  switch(license){
    case "mit":{
      return {license:"![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)", description:"This project is covered under MIT.", links:"https://mit-license.org"}
    }
    case "gpl3":{
      return {license:"![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)", description:"This project is covered under GPL v3.", links:"https://www.gnu.org/licenses/gpl-3.0.en.html"}
    }
    case "apache":{
      return {license:"![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)", description:"This project is covered under APACHE.", links:"https://www.apache.org/licenses/LICENSE-2.0.html"}
    }
    case "bsd":{
      return {license:"![License: BSD](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)", description:"Thi sproject is covered under BSD.", links:"https://codedocs.org/what-is/bsd-licenses"}
    }
    case "none":{
      return {license:"", description:"This project was created by Ava Blake Design. No license was chosen for this project", links:""}
    }
    default : return {license:"", description:"This project was created by Ava Blake Design. No license was chosen for this project.", links:""}
}
}

module.exports = renderLicenseSection
