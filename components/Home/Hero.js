import React from 'react';

function Hero(props) {
  return (
    <section className='hero'>
      <div className='container'>
        <div className='hero-main'>
          <h1>Everything you need to become a software developer</h1>
          <h3>
            A program designed to help you develop full-stack web development
            skills and <br />
            become job-ready
          </h3>
          <div className='hero-features'>
            <h5>100% online</h5>
            <span className='dot'></span>
            <h5>Project based</h5>
            <span className='dot'></span>
            <h5>Mentorship</h5>
          </div>
          <a href='https://launchpad.altcampus.school/signup' className='btn'>
            Start Learning
          </a>
        </div>
        <img
          className='bg-hero'
          src='/assets/media/bg-hero1.svg'
          alt='Hero Bg'
        />
      </div>
    </section>
  );
}

export default Hero;
