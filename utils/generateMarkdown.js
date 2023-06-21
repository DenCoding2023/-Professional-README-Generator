
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    return `https://opensource.org/licenses/${license}`;
  }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':
      return '## License\n\nThis project is licensed under the [MIT License](https://opensource.org/licenses/MIT).';
    case 'Apache-2.0':
      return '## License\n\nThis project is licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0).';
    case 'GPL-3.0':
      return '## License\n\nThis project is licensed under the [GNU General Public License v3.0](https://opensource.org/licenses/GPL-3.0).';
    // Add more cases for other licenses as needed
    default:
      return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Deployed Application URL
  ${data.link}
  ## Screenshot
  ![alt-text](${data.screenshot})
  ## Table of Contents
  * [Installations](#installations)
  * [Usage](#usage)
  * [How to Use This Application](#HowtoUseThisApplication)
  * [Contributors](#contributors)
  * [Testing](#testing)
  * [Questions](#questions)
  ## Features
  ${data.features}
  ## Languages & Dependencies
  ${data.require}
  ## How to Use This Application:
  ${data.usage}
  ## Contributors
  ${data.contributors}
  ## Testing
  ${data.test}
  ## Questions
  Please send your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  `;

  }


module.exports = generateMarkdown;
