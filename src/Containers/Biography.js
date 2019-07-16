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
        Hi! My name is Kirby Campbell. I'm a 29 year old from Louisiana, now
        living in Portland Oregon. I am super passionate about coding,
        technology, music, health, and creativity. I love to finish projects,
        experiment with new ideas, and push the boundaries on the cutting edge.
      </div>

      <div className="pic-box">
        <img
          className="pic-img"
          src="https://i.imgur.com/vKy4KbM.jpg"
          alt="chat-app"
        />
      </div>
      <div className="text-box">
        My first journey into the tech/creative world began at 14, when I began
        building my own PCs. I soon became highly skilled at Audio Production -
        co-producing my group's first album -{" "}
        <a
          href="https://en.wikipedia.org/wiki/Givers"
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
        After touring the world with my band, GIVERS, from 2011-2016, I
        continued producing for other artists, but soon began to crave creating
        interactive technological experiences. This initially brought me to
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
        Design, but I was left craving something more tangeable to the every day
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
        arrived in the land of React and Redux, I was totally hooked. This is
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
        over the next 5 months, adding GraphQL, AWS, React Hooks, Vue, and more
        to my skills list.
      </div>
      <div className="pic-box">
        {" "}
        <img
          className="pic-img"
          src="https://i.imgur.com/r9lyIsI.jpg"
          alt="skills-section"
        />
      </div>
      <div className="text-box">
        Beyond these tech skills, I'm very experienced in audio programs like
        Pro Tools, Logic, and Ableton, as well as graphics programs like Maya,
        Unity, and Blender. I'm also quite experienced in Adobe Premiere &
        Photoshop. I've learned a good bit of C++ through college level Computer
        Science courses as well as the nanodegree. Additionally, I am familiar
        with UNIX and Linux. I'm incredibly driven to learn new frameworks and
        skills, as I am willing to tackle any challenge.
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
        hiring me or learning more! Contact info is below - Thanks!
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
