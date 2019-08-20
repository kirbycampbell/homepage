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
  "Interactive Resume",
  "https://resume-app.jkirbycampbell.com",
  "React",
  "HTML/CSS",
  "Fully Responsive Resume app.",
  "https://github.com/kirbycampbell/kirby-resume/tree/master/src",
  "https://i.imgur.com/lxfHGh9.jpg"
);
let ticHackToe = new Project(
  "4X4 ~ Tic Hack Toe Game",
  "https://tichacktoe.jkirbycampbell.com",
  "React Hooks",
  "LocalStorage",
  "0, 1, & 2 Player games of 4x4 Tic Tac Toe built with challenging javascript ai!",
  "https://github.com/kirbycampbell/hikhakjoe/tree/master/src",
  "https://i.imgur.com/1tTko6L.jpg"
);
let drinkManager = new Project(
  "Drink Manager App",
  "https://the-one-who-works.herokuapp.com/",
  "React/Redux",
  "Rails API",
  "Final Project for Flatiron FullStack Bootcamp.",
  "https://github.com/kirbycampbell/oceanx",
  "https://i.imgur.com/Y6h9V9h.jpg"
);
let blogCreator = new Project(
  "Blog Creator",
  "https://blog-creator.jkirbycampbell.com",
  "React & Javascript",
  "Google Firestore",
  "Abstract Javascript & React example. Meant to resemble Medium.com.",
  "https://github.com/kirbycampbell/blog-site/tree/master/src",
  "https://i.imgur.com/NmffLct.jpg"
);

let vintageStore = new Project(
  "Vintage Store",
  "https://vintage-store.jkirbycampbell.com",
  "React & Javascript",
  "LocalStorage",
  "Modern Web Store page, exhibiting css styles & modern functionality.",
  "https://github.com/kirbycampbell/store-front/tree/master/src",
  "https://i.imgur.com/IHyZx0d.jpg"
);

let chatApp = new Project(
  "Instant Messager",
  "https://chat.jkirbycampbell.com",
  "React",
  "MongoDB & GraphQL",
  "Instant Subscription based Chat Application.",
  "https://github.com/kirbycampbell/chatterson-chatapp/tree/master/src",
  "https://i.imgur.com/nhWZSTd.jpg"
);

let journalApp = new Project(
  "News Site Clone",
  "https://journal-clone.jkirbycampbell.com",
  "Vue js & CSS",
  "AWS",
  "News page clone from scratch (CFR Clone).",
  "https://github.com/kirbycampbell/journalapp/tree/master/src",
  "https://i.imgur.com/IPZYU3e.jpg"
);

let meditationApp = new Project(
  "Meditation Timer",
  "https://meditation-app.jkirbycampbell.com",
  "React Hooks",
  "Javascript",
  "Meditation Timer App with sounds & profiles.",
  "https://github.com/kirbycampbell/meditation-timer-hooks/tree/master/src",
  "https://i.imgur.com/OrbbDks.jpg"
);

let artistcplusplusapp = new Project(
  "C++ Artist Management CLI",
  "https://github.com/kirbycampbell/LinkedListOverloadExperiments/blob/master/imp.cpp",
  "C++",
  "Virtual Pointers",
  "Example C++ Project showcasing virtual pointers & memory mgmt.",
  "https://github.com/kirbycampbell/LinkedListOverloadExperiments/blob/master/imp.cpp",
  "https://i.imgur.com/P2Pq1wp.jpg"
);

let pdxOutdoor = new Project(
  "Outdoor Activity Ruby Project",
  "https://github.com/kirbycampbell/pdx-outdoor",
  "Ruby",
  "Web Scraping",
  "A Ruby Project I created for Flatiron's Ruby Final Section",
  "https://github.com/kirbycampbell/pdx-outdoor/blob/master/lib/activities/hike.rb",
  "https://i.imgur.com/g8J7Ycq.jpg"
);

let statusVue = new Project(
  "Status Vue (Twitter Knockoff)",
  "https://status-vue.jkirbycampbell.com",
  "Vue & Node.js",
  "Express & MongoDB",
  "Full Stack Project featuring Node.js, Vue, Express.js, and MongoDB backend.",
  "https://github.com/kirbycampbell/backend-express/blob/master/server/routes/api/posts.js",
  "https://pbs.twimg.com/media/D-bLKyyUEAAKILn?format=jpg&name=4096x4096"
);

const projects = [
  chatApp,
  blogCreator,
  ticHackToe,
  statusVue,
  vintageStore,
  resumeApp,
  journalApp,
  drinkManager,
  meditationApp,
  artistcplusplusapp,
  pdxOutdoor
];

export { projects };
