import React from "react";
import "./Biography.css";

const Biography = () => {
  return (
    <div className="bio-outer">
      <div className="vid-box">
        <iframe
          title="Kirbys Intro"
          src="https://www.youtube.com/embed/EDyVeFEnhv0"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; encrypted-media"
        />
      </div>
      <div className="text-box">
        Hi! My name is Kirby Campbell. I'm a 29 year old from Louisiana, living
        in Portland Oregon. I am super passionate about coding, technology,
        music, health, and creativity. I love to finish projects, experiment
        with new ideas, and push the boundaries on the bleeding edge.
      </div>

      <div className="pic-box">
        <img
          className="pic-img"
          src="https://i.imgur.com/vKy4KbM.jpg"
          alt="chat-app"
        />
      </div>
      <div className="text-box">
        My first forays into the tech/creative world began at 14, when I began
        building my own PCs. I soon became highly skilled at Audio Production -
        co-producing my groups first album -{" "}
        <a
          href="http://www.offbeat.com/articles/givers-remain-in-light/"
          target="_blank"
          rel="noopener noreferrer"
        >
          In Light.
        </a>
      </div>
      <div className="pic-box">
        {" "}
        <img
          className="pic-img"
          src="https://i.imgur.com/eheUbZs.jpg"
          alt="band"
        />
      </div>
      <div className="text-box">
        After touring the world with my band from 2011-2016, I continued
        producing for other artists, but soon began to crave creating
        Interactive technological experiences. This initially brought me to
        learn how to program Virtual Reality Experiences for Oculus Rift using
        Unity & C++.
      </div>
      <div className="pic-box">
        {" "}
        <img
          className="pic-img"
          src="https://i.imgur.com/a6GZmdE.jpg"
          alt="onstage"
        />
      </div>
      <div className="text-box">
        I then took part in a nanodegree from Udacity for Virtual Reality
        Design. But I was left craving something more tangeable to the every day
        person, as VR felt like a niche thus far.
      </div>
      <div className="pic-box">
        {" "}
        <img
          className="pic-img"
          src="https://i.imgur.com/V1dWREs.jpg"
          alt="vr"
        />
      </div>
      <div className="text-box">
        This turn of events led me to FlatIron's FullStack Bootcamp. I
        absolutely loved learning Ruby, Javascript, SQL, and jQuery. Once I
        landed in the land of React and Redux, I was absolutely hooked. This is
        what I had been looking for.
      </div>
      <div className="pic-box">
        {" "}
        <img
          className="pic-img"
          src="https://i.imgur.com/BvdMGYg.jpg"
          alt="flatiron-cert"
        />
      </div>
      <div className="text-box">
        I completed FlatIron and focused on further honing my Full Stack skills
        over the 5 months, adding GraphQL, AWS, Hooks, Vue, and more to "very
        comfortable" skills list.
      </div>
      <div className="pic-box">
        {" "}
        <img
          className="pic-img"
          src="https://i.imgur.com/kaAFJgn.jpg"
          alt="skills-section"
        />
      </div>
      <div className="text-box">
        Beyond these tech skills, I'm very experienced in audio Programs like
        Pro Tools, Logic, and Ableton, as well as graphics programs like Maya
        and Unity. I'm also quite experienced in Adobe Premiere Pro & Photoshop.
        I'm flexible between Mac & PC having spent about 50% on each platform
        over the past 10 years. I've learned a good bit of C++ from the
        nanodegree and through college level Computer Science courses, and I am
        also familiar with UNIX and LINUX.
      </div>
      <div className="pic-box">
        {" "}
        <img
          className="pic-img too-tall"
          src="https://pbs.twimg.com/media/D5NXLNHU8AAwMqW?format=jpg&name=medium"
          alt="me-coding"
        />
      </div>
      <div className="text-box">
        I hope you feel more connected to me after reading this quick summary of
        my creative life and I would love to chat if you are interested in
        Hiring me or learning more! Contact info is below - Thanks!
      </div>
      <div className="pic-box">
        {" "}
        <img
          className="pic-img"
          src="https://i.imgur.com/wcWWr3e.jpg"
          alt="goodbye"
        />
      </div>
      <div>-Kirby</div>
    </div>
  );
};

export default Biography;
