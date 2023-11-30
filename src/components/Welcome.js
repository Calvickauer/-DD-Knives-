import React from 'react';

const Welcome = () => {
  return (
    <div className="home-container">
      <header>
        <h1>DD-Knives</h1>
        <p className='title__desc'>Sharp Elegance for Every Occasion</p>
      </header>

      <section className="about-us">
        <h2>About Us</h2>
        <p>
          Welcome to DD-Knives, your premier destination for hunting, pocket, and art knives.
          We are passionate about delivering high-quality blades for all your needs.
        </p>
      </section>

      <section className="featured-knives">
        <h2>Featured Knives</h2>
        <div className="knife-list">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="knife-card">
              <img
                className="knife-image"
                src={`https://via.placeholder.com/150?text=Knife${index + 1}`}
                alt={`Knife ${index + 1}`}
              />
              <p className="knife-description">
                Hunting Knife with Beautiful Handle Design and Durable Blade.
              </p>
              <p className="knife-price">$99.99</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-us">
        <h2>Contact Us</h2>
        <p>
          Have any questions or special requests? Feel free to{' '}
          <a href="mailto:info@ddknives.com">email us</a>.
        </p>
      </section>
    </div>
  );
};

export default Welcome;
