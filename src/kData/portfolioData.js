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
  "https://github.com/kirbycampbell/kirby-resume/tree/master/src",
  "https://i.imgur.com/lxfHGh9.jpg"
);
let ticHackToe = new Project(
  "Tic Hack Toe",
  "https://damp-oasis-55552.herokuapp.com",
  "React Hooks",
  "LocalStorage",
  "0, 1, & 2 Player games of 4x4 Tic Tac Toe built with challenging javascript ai!",
  "https://github.com/kirbycampbell/hikhakjoe/tree/master/src",
  "https://i.imgur.com/1tTko6L.jpg"
);
let drinkManager = new Project(
  "Drink Manager",
  "https://the-one-who-works.herokuapp.com/",
  "React/Redux",
  "Rails API",
  "Final Project for Flatiron FullStack Bootcamp.",
  "https://github.com/kirbycampbell/oceanx/tree/master/src",
  "https://i.imgur.com/Y6h9V9h.jpg"
);
let blogCreator = new Project(
  "Blog Creator",
  "https://siq-blog.herokuapp.com/",
  "React & Javascript",
  "Google Firestore",
  "Abstract Javascript & React example. Meant to resemble Medium.com.",
  "https://github.com/kirbycampbell/blog-site/tree/master/src",
  "https://i.imgur.com/NmffLct.jpg"
);

let vintageStore = new Project(
  "Vintage Store",
  "https://master.d3pkegk0xsoqlf.amplifyapp.com/",
  "React & Javascript",
  "LocalStorage",
  "Modern Web Store page, exhibiting css styles & modern functionality.",
  "https://github.com/kirbycampbell/store-front/tree/master/src",
  "https://i.imgur.com/IHyZx0d.jpg"
);

let chatApp = new Project(
  "Instant Messager",
  "https://master.d2lekjvl9w1h5q.amplifyapp.com/",
  "React & GraphQL",
  "MongoDB & AWS Amplify",
  "Instant Subscription based Chat Application.",
  "https://github.com/kirbycampbell/chatterson-chatapp/tree/master/src",
  "https://i.imgur.com/nhWZSTd.jpg"
);

let journalApp = new Project(
  "News Site Clone",
  "https://vue-journal-app-20190524193634-hostingbucket-vue.s3-us-west-2.amazonaws.com/index.html#/",
  "Vue js & CSS",
  "AWS Amplify",
  "News page clone from scratch (CFR Clone).",
  "https://github.com/kirbycampbell/journalapp/tree/master/src",
  "https://i.imgur.com/AGv9362.jpg"
);

const projects = [
  resumeApp,
  ticHackToe,
  drinkManager,
  blogCreator,
  vintageStore,
  chatApp,
  journalApp,
  resumeApp
];

export { projects };
