let generateREADME = (data) => { 
   
   return `# **${data.project}**

## Author:**${data.name}** 

## Github Name: ${data.github}

## Github Repo: ${data.repo}

## Project Description:
${data.describe}

### Installation
${data.installation}

### Usage
${data.usage}

### Contributing 
${data.contributing}

### Tests
${data.tests}

### Licenses
${data.license}
`;
}
module.exports = generateREADME;