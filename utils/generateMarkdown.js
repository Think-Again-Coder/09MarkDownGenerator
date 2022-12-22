// The function returns a license badge based on which license is selected...
// If there is no license, an empty string is returned. 

function renderLicenseBadge(license) {
  let licenseType = license;
  let yourLicense = ''
  if(licenseType === 'MIT') {
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseType === 'GPLv3') {
    yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (licenseType === 'GPL') {
    yourLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
  } else {
    license = " "
  }
  return yourLicense;
};

// This function returns the license section of the README file
// If there is no license, an empty string is returned
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## This application is under the ${license}.`
  } else `${renderLicenseBadge}`;

};

// a function to generate markdown for README Template.
function generateMarkdown(data) {
  return `# *${data.title}*
  ---
  ## Description:  
  ### ${data.description}

  ![ Image](./Assets/Insert-Image-Here.png "Image description")
  ---  
  ## Table of Contents: 

  * [Instructions for use](#installation-guide)  
  * [Testing](#Testing) 
  * [Contributions](#contributions-by) 
  * [Contact Info](#contact) 
  * [License](#license-type) 
  
  ---
  
  ## Installation Guide: 

  ### ${data.installation}

  ## Testing: 

  ### ${data.tests}
  
  ## Contributions by:  
  ${data.contributions}
  
  ## License Type: 

  ## ${renderLicenseBadge(data.license)}

  ---
  
  ## Contact

  You can find the link to my gitHub page here: [${data.title}](https://github.com/${data.user}).

  ### or reach out to me directly --> ${data.email}

`;
}

module.exports = generateMarkdown;