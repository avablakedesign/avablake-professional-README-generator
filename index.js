//This is the packages included in this application.
const inquirer = require("inquirer");
const fs = require("fs");
const renderLicenseSection = require("./utils/generateMarkdown.js")
//This deconstructs the parameters used.
const generateREADME = ({title, description, description_motivation, description_why, description_what, description_learn, installation, usage, usage_screenshot, license, contributing, tests, questions_github, questions_email}) => {
const licenseData = renderLicenseSection(license)
//This allows multiple contributors to post their names and it displays their githubs and displays them on new lines.
const renderContributors = () => {
return contributing.split(", ").map((name) => {
    return `[${name}](https://github.com/${name})`
}).join("\n- ")    
}
return (
`# ${title}
${licenseData.license}
 ## Description
 ${description}

 What was your motivation?: ${description_motivation}

 Why did you build this project?: ${description_why}

 What problem does it solve?: ${description_what}

 What did you learn?: ${description_learn}
 ## Installation
 ${installation}
 ## Table of Contents
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)
 ## Usage
 ${usage_screenshot && `![screenshot](assets/images/${usage_screenshot})`}
 ## License
 ${licenseData.description}
${licenseData.links}
 ## Contributing
 -🏆${renderContributors()}
 ## How to Contribute
 [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)
 # Contributor Covenant Code of Conduct

 ## Our Pledge
 
 We as members, contributors, and leaders pledge to make participation in our
 community a harassment-free experience for everyone, regardless of age, body
 size, visible or invisible disability, ethnicity, sex characteristics, gender
 identity and expression, level of experience, education, socio-economic status,
 nationality, personal appearance, race, caste, color, religion, or sexual
 identity and orientation.
 
 We pledge to act and interact in ways that contribute to an open, welcoming,
 diverse, inclusive, and healthy community.
 
 ## Our Standards
 
 Examples of behavior that contributes to a positive environment for our
 community include:
 
 * Demonstrating empathy and kindness toward other people
 * Being respectful of differing opinions, viewpoints, and experiences
 * Giving and gracefully accepting constructive feedback
 * Accepting responsibility and apologizing to those affected by our mistakes,
   and learning from the experience
 * Focusing on what is best not just for us as individuals, but for the overall
   community
 
 Examples of unacceptable behavior include:
 
 * The use of sexualized language or imagery, and sexual attention or advances of
   any kind
 * Trolling, insulting or derogatory comments, and personal or political attacks
 * Public or private harassment
 * Publishing others' private information, such as a physical or email address,
   without their explicit permission
 * Other conduct which could reasonably be considered inappropriate in a
   professional setting
 
 ## Enforcement Responsibilities
 
 Community leaders are responsible for clarifying and enforcing our standards of
 acceptable behavior and will take appropriate and fair corrective action in
 response to any behavior that they deem inappropriate, threatening, offensive,
 or harmful.
 
 Community leaders have the right and responsibility to remove, edit, or reject
 comments, commits, code, wiki edits, issues, and other contributions that are
 not aligned to this Code of Conduct, and will communicate reasons for moderation
 decisions when appropriate.
 
 ## Scope
 
 This Code of Conduct applies within all community spaces, and also applies when
 an individual is officially representing the community in public spaces.
 Examples of representing our community include using an official e-mail address,
 posting via an official social media account, or acting as an appointed
 representative at an online or offline event.
 
 ## Enforcement
 
 Instances of abusive, harassing, or otherwise unacceptable behavior may be
 reported to the community leaders responsible for enforcement at
 [INSERT CONTACT METHOD].
 All complaints will be reviewed and investigated promptly and fairly.
 
 All community leaders are obligated to respect the privacy and security of the
 reporter of any incident.
 
 ## Enforcement Guidelines
 
 Community leaders will follow these Community Impact Guidelines in determining
 the consequences for any action they deem in violation of this Code of Conduct:
 
 ### 1. Correction
 
 **Community Impact**: Use of inappropriate language or other behavior deemed
 unprofessional or unwelcome in the community.
 
 **Consequence**: A private, written warning from community leaders, providing
 clarity around the nature of the violation and an explanation of why the
 behavior was inappropriate. A public apology may be requested.
 
 ### 2. Warning
 
 **Community Impact**: A violation through a single incident or series of
 actions.
 
 **Consequence**: A warning with consequences for continued behavior. No
 interaction with the people involved, including unsolicited interaction with
 those enforcing the Code of Conduct, for a specified period of time. This
 includes avoiding interactions in community spaces as well as external channels
 like social media. Violating these terms may lead to a temporary or permanent
 ban.
 
 ### 3. Temporary Ban
 
 **Community Impact**: A serious violation of community standards, including
 sustained inappropriate behavior.
 
 **Consequence**: A temporary ban from any sort of interaction or public
 communication with the community for a specified period of time. No public or
 private interaction with the people involved, including unsolicited interaction
 with those enforcing the Code of Conduct, is allowed during this period.
 Violating these terms may lead to a permanent ban.
 
 ### 4. Permanent Ban
 
 **Community Impact**: Demonstrating a pattern of violation of community
 standards, including sustained inappropriate behavior, harassment of an
 individual, or aggression toward or disparagement of classes of individuals.
 
 **Consequence**: A permanent ban from any sort of public interaction within the
 community.
 
 ## Attribution
 
 This Code of Conduct is adapted from the [Contributor Covenant][homepage],
 version 2.1, available at
 [https://www.contributor-covenant.org/version/2/1/code_of_conduct.html][v2.1].
 
 Community Impact Guidelines were inspired by
 [Mozilla's code of conduct enforcement ladder][Mozilla CoC].
 
 For answers to common questions about this code of conduct, see the FAQ at
 [https://www.contributor-covenant.org/faq][FAQ]. Translations are available at
 [https://www.contributor-covenant.org/translations][translations].
 
 [homepage]: https://www.contributor-covenant.org
 [v2.1]: https://www.contributor-covenant.org/version/2/1/code_of_conduct.html
 [Mozilla CoC]: https://github.com/mozilla/diversity
 [FAQ]: https://www.contributor-covenant.org/faq
 [translations]: https://www.contributor-covenant.org/translations

 ## Tests
 ${tests}
 ## Questions
 [My Github: ${questions_github}](https://github.com/${questions_github})

 My Email: ${questions_email} 
 If you have any questions you can reach me by email here.
`)}
// This is an array of questions that allow user input.
const GenerateQuestions = async () => {
    const questions = [];
const answers = await inquirer.prompt ([
    {
        type: "input",
        name: "title",
        message: "What is the title you would like the README to have?",
    },
    {
        type: "input",
        name: "description",
        message: "What is the description you would like the README to have?",
    },
    {
        type: "input",
        name: "description_motivation",
        message: "What was your motivation?"
    },
    {
        type: "input",
        name: "description_why",
        message: "Why did you build this project?",
    },
    {
        type: "input",
        name: "description_what",
        message: "What problem does it solve?"
    },
    {
        type: "input",
        name: "description_learn",
        message: "What did you learn?",
    },
    {
        type: "installation",
        name: "installation",
        message: "What installation instructions would you like the README to have?",
    },
    {
        type: "input",
        name: "usage",
        message: "what is the usage information you would like the README to have?",
    },
    {
        type: "input",
        name: "usage_screenshot",
        message: "Would you like to include a screenshot? Enter the file path.",
    },
    {
        type: "list",
        name: "license",
        message: "What is the license that you would like the README to have?",
        choices: [{
            name : "MIT", value: "mit", short: "MIT"
        },
        {
            name: "GPL v3", value: "gpl3", short: "GPL v3" 
        },
        {
            name: "APACHE", value: "apache", short: "APACHE"
        },
        {
            name: "BSD", value: "bsd", short: "BSD"
        },
        {
            name: "none", value: "none", short: "none"
        }]
    },
    {
        type: "input",
        name: "contributing",
        message: "Who contributed to your project that you would like to include in the README?"
    },
    {
        type: "input",
        name: "tests",
        message: "What test instruction information would you like the README to have?"
    },
    {
        type: "input",
        name: "questions_github",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "questions_email",
        message: "What is your email address?"
    }    
]);
console.log(answers);
const data = generateREADME(answers)
writeToFile(null, data)
}

// This function writes the README file and does so through syncing.
function writeToFile(err, data) {
    err ? console.log(err) : fs.writeFileSync("README.md", data)
}

//This initilizes the app by calling GenerateQuestions.
function init() {
   GenerateQuestions()
}

//By calling init() the app is initialized. 
init();