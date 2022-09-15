import React from "react";

export default function Homepage() {
  return (
    <div>
      <h1>Home</h1>
      <hr />
      <title>Reformation process</title>
      <header>
        <a
          href="https://en.wikipedia.org/wiki/Prison_reform"
          target="_blank"
          rel="noreferrer"
        >
          <strong>What is prison reform?</strong>
        </a>
      </header>
      <div className="container">
        <div className="description">
          <p>
            I do not know much about prison seeing as how I have never been nor
            do I know anybody, but I know that things are not in their favor.
            The first thought that comes to peoples mind is that they are
            convicts and have commited a crime so why should we care. We should
            care because many prisoners are disconnected from society and do not
            really have a way to re enter society and are on their own. I
            understand that they are convicts but we can not just leave them in
            the situation they are in and expect them to just come out of prison
            as a productive member of society. The following video below
            describes Jennifer Thomas and her experience in prison.
          </p>
        </div>
        <div className="video">
          <iframe
            width="25%"
            height="315"
            src="https://www.youtube.com/embed/j8I749MuYbA?start=9"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="HomeVid"
          />
        </div>
        <div className="mypart">
          <p>
            Knowing that prison reform is a vast field I decided to choose a
            section of the field and work from there. I had read that many ex
            felons go back into prison within the next five years and one of the
            reasons why is because they cannot find a job or they find a job and
            are rejected because they a former felon. It is unfortunate that
            people go into prison serve their time get out of prison with the
            idea to be a productive member of society and not go back to prison,
            just to find out they can't because of their past. That's where I
            want to help out, I want to create a way that the people who want a
            second chance have a place to go and earn it. The video below shows
            that reformed prisoners can live a better life and help others.{" "}
            <a
              href="https://www.first72plus.org/"
              target="_blank"
              rel="noreferrer"
            >
              Heres a link to the website where they help formely incarcerated men called first72plus.
            </a>
          </p>
        </div>
        <div className="examples">
          <iframe
            width= '25%'
            height="315"
            src="https://www.youtube.com/embed/NczRZLkdtag"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="HomeVid"
          />
          <img src='https://static.wixstatic.com/media/eed588_c1333e81ce21443eb3db62be7909ff14~mv2.png/v1/fill/w_406,h_244,al_c,q_85,usm_0.66_1.00_0.01/eed588_c1333e81ce21443eb3db62be7909ff14~mv2.webp' alt='first72plus logo' id="first72plus"></img>
        </div>
      </div>
    </div>
  );
}
