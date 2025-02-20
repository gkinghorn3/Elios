import "./find-us.scss";

const FindUs = () => {
  return (
    <section id="find-us" className="find-us-container" aria-label="Find Us">
      <div className="section-titles">
        <h3>Find Us</h3>
        <h2>- opening times -</h2>
      </div>
      <div className="find-us-content-container">
        <div className="venue-info">
          <div className="opening-hours-table">
            <p className="opening-days">
              <span aria-label="Opening days">Sunday - Thursday:</span> <br />
              <span aria-label="Opening days">Friday:</span> <br />
              <span aria-label="Opening days">Saturday:</span> <br />
            </p>
            <p className="opening-hours">
              <span aria-label="Opening hours">3pm - 3am</span> <br />
              <span aria-label="Opening hours">2pm - 3am</span> <br />
              <span aria-label="Opening hours">12pm - 3am</span> <br />
            </p>
          </div>
          <div className="phone-number">
            <a href="tel:01312253408" aria-label="Phone number">
              01312253408
            </a>
          </div>
          <div className="email">
            <a href="mailto:info@eliosedinburgh.com" aria-label="email">
              info@eliosedinburgh.com
            </a>
          </div>
        </div>
        <iframe
          className="map"
          title="Google Maps"
          style={{ border: 0 }}
          loading="lazy"
          src="https://www.google.com/maps/embed/v1/place?q=elios%20edinburgh%20&key=AIzaSyBbYedyRNVJlRpCSwxW0t3W-fWsYaRk6wM"
          aria-label="Google Maps"
        ></iframe>
      </div>
    </section>
  );
};

export default FindUs;
