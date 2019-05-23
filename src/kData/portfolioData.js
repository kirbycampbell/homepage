class Project {
  constructor(name, website, framework, backend, info, github, image) {
    this.name = name;
    this.website = website;
    this.framework = framework;
    this.backend = backend;
    this.info = info;
    this.github = github;
    this.image = image;
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
  github() {
    return this.github;
  }
  image() {
    return this.image;
  }
}
let resumeApp = new Project(
  "ResumeApp",
  "https://pure-waters-94797.herokuapp.com",
  "React/CSS",
  "Built-in",
  "Fully Responsive Resume app.",
  "https://github.com/kirbycampbell/kirby-resume",
  "https://i.imgur.com/lxfHGh9.jpg"
);
let ticHackToe = new Project(
  "Tic Hack Toe",
  "https://damp-oasis-55552.herokuapp.com",
  "React Hooks",
  "LocalStorage",
  "0, 1, & 2 Player games of 4x4 Tic Tac Toe built with challenging javascript ai!",
  "https://github.com/kirbycampbell/hikhakjoe",
  "https://i.imgur.com/1tTko6L.jpg"
);
let drinkManager = new Project(
  "Drink Manager",
  "https://the-one-who-works.herokuapp.com/",
  "React/Redux",
  "Rails API",
  "Final Project for Flatiron FullStack Bootcamp.",
  "https://github.com/kirbycampbell/oceanx",
  "https://i.imgur.com/Y6h9V9h.jpg"
);
let blogCreator = new Project(
  "Blog Creator",
  "https://siq-blog.herokuapp.com/",
  "React & Javascript",
  "Google Firestore",
  "Abstract Javascript & React example. Meant to resemble Medium.com.",
  "https://github.com/kirbycampbell/blog-site",
  "https://i.imgur.com/NmffLct.jpg"
);

const projects = [
  resumeApp,
  ticHackToe,
  drinkManager,
  blogCreator,
  resumeApp,
  ticHackToe,
  drinkManager,
  resumeApp
];

export { projects };
