import { useInView } from "react-intersection-observer";

import BtnMain from "../BtnMain/BtnMain";

import "./about.scss";

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });

  return (
    <section className=" about-container">
      <div className="section-titles">
        <h3>Our Story</h3>
        <h2>- ABOUT US -</h2>
      </div>
      <div className="about-content-container">
        <div className="about-content">
          <p>
            Established in 1978, under the original name ‘Madogs', our
            family-owned venue marks the very beginning of Edinburgh's cocktail
            culture.
            <br />
            <br />
            Over the years our bar has become something of a Scottish
            institution and has welcomed both royalty and renowned artists from
            the likes of Princess Anne to 'The Temptations'.
            <br />
            <br />
            Now passed from father to son, today, we proudly bear the name
            'Elio's' in loving memory of the man who brought warmth to every
            pour.
          </p>
        </div>
        <div className="about-image-container">
          <img
            ref={ref}
            src="/images/zombie1.webp"
            className={`first-img ${inView ? "first-img-animation" : ""}`}
          />
          <img
            ref={ref2}
            src="/images/mural.webp"
            className={`second-img ${inView2 ? "second-img-animation" : ""}`}
          />
        </div>
      </div>
      <BtnMain
        btnText="book now"
        link="https://bookings.designmynight.com/book?venue_id=6630f8138ce9bb509a3fedf8&source=partner"
      />
    </section>
  );
};

export default About;
