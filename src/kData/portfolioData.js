class Project {
  constructor(name, website, framework, backend, info) {
    this.name = name;
    this.website = website;
    this.framework = framework;
    this.backend = backend;
    this.info = info;
  }
  name() {
    return this.name;
  }
  website() {
    return this.name;
  }
  framework() {
    return this.framework;
  }
  backend() {
    return this.backend;
  }
  info() {
    return this.info;
  }
}
let resumeApp = new Project(
  "ResumeApp",
  "https://pure-waters-94797.herokuapp.com",
  "React/CSS",
  "Built-in",
  "Fully Responsive Resume app."
);
let ticHackToe = new Project(
  "Tic Hack Toe",
  "https://damp-oasis-55552.herokuapp.com",
  "React Hooks",
  "LocalStorage",
  "Example of Javascript ai. Expanded version of Tic Tac Toe with a 4x4 Board, Previous Game Access, Move Order per game, & hard to beat ai."
);
let drinkManager = new Project(
  "Drink Manager",
  "https://the-one-who-works.herokuapp.com/",
  "React/Redux",
  "Rails API",
  "Final Project for Flatiron FullStack Bootcamp."
);
let blogCreator = new Project(
  "Blog Creator",
  "https://siq-blog.herokuapp.com/",
  "React & Javascript",
  "Google Firestore",
  "Abstract Javascript & React example. Meant to resemble Medium.com."
);

const projects = [
  resumeApp,
  ticHackToe,
  drinkManager,
  blogCreator,
  resumeApp,
  ticHackToe,
  drinkManager,
  blogCreator,
  drinkManager,
  blogCreator
];

export { projects };
