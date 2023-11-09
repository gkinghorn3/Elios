import "./about.scss";

const About = () => {
  return (
    <section className=" about-container">
      <div className="about-us-title">
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
            <br/ >
            <br />
            Now passed from
            father to son, today, we proudly bear the name 'Elio's' in loving
            memory of the man who brought warmth to every pour.
          </p>
        </div>
        <div className="about-image-container">
          <img src="/images/mural.webp" />
        </div>
      </div>
    </section>
  );
};

export default About;
