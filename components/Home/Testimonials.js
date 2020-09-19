import React from 'react';

function Testimonials(props) {
  return (
    <section className='testimonial-heading padding' id='testimonials'>
      <div className='testimonial-head'>
        <img src='/assets/media/testimonial.svg' alt='testimonial' />
        <h2>From our old folks</h2>
      </div>

      <div className='testimonials'>
        <div className='carousel-wrapper'>
          <div className='carousel'>
            <div className='carousel__photo initial'>
              <figure className='author'>
                <img
                  className='author-img'
                  src='assets/media/sreyansh.jpg'
                  alt='sreyansh-image'
                />
                <div className='description'>
                  <p className='name'>Shreyansh</p>
                  <p className='title'>Works at BigBinary</p>
                </div>
              </figure>
              <blockquote>
                AltCampus breaks the myth that you need a professional
                qualification to be a software developer. I was a CA dropout
                with no programming experience and currently I am working in a
                reputed company. This says all.
              </blockquote>
            </div>

            <div className='carousel__photo'>
              <figure className='author'>
                <img
                  className='author-img'
                  src='assets/media/students/ashwani.jpeg'
                  alt='ashwani-image'
                />
                <div className='description'>
                  <p className='name'>Ashwani</p>
                  <p className='title'>Works at ClearTax</p>
                </div>
              </figure>
              <blockquote>
                AltCampus has made my career. I am very grateful to the mentors
                of AltCampus who believed in me and were there with me at each
                step in my learning journey. I will always remember their
                contribution.
              </blockquote>
            </div>

            <div className='carousel__photo'>
              <figure className='author'>
                <img
                  className='author-img'
                  src='assets/media/students/shashank.jpeg'
                  alt='Shashank-image'
                />
                <div className='description'>
                  <p className='name'>Shashank</p>
                  <p className='title'>Works at BigBinary</p>
                </div>
              </figure>
              <blockquote>
                AltCampus's scheduled program, weekly demo sessions, hackathons,
                code reviews, etc. provided the necessary milieu to set the ball
                rolling. The full stack web development program at AltCampus,
                had the rigorousness in its curriculum to equip fairly for
                interviewing and getting a job.
              </blockquote>
            </div>

            <div className='carousel__photo'>
              <figure className='author'>
                <img
                  className='author-img'
                  src='assets/media/komal.jpeg'
                  alt='komal-image'
                />
                <div className='description'>
                  <p className='name'>Komal Raj</p>
                  <p className='title'>Works at KheloMore</p>
                </div>
              </figure>
              <blockquote>
                I feel proud to be a student of first batch. AltCampus provided
                me a platform to realize my potential. All mentors were
                outstanding and gave me the best guidance possible.
              </blockquote>
            </div>

            <div className='carousel__photo'>
              <figure className='author'>
                <img
                  className='author-img'
                  src='assets/media/abid.jpg'
                  alt='abid-image'
                />
                <div className='description'>
                  <p className='name'>Abid</p>
                  <p className='title'>Works at LocoNav</p>
                </div>
              </figure>
              <blockquote>
                After spending six good months being guided by the mentors,
                making new friends and dedicating myself into learning new
                skills, being at AltCampus was indeed a fulfilling experience.
              </blockquote>
            </div>

            <div className='carousel__photo'>
              <figure className='author'>
                <img
                  className='author-img'
                  src='assets/media/amit.jpeg'
                  alt='amit-image'
                />
                <div className='description'>
                  <p className='name'>Amit</p>
                  <p className='title'>Works at BigBinary</p>
                </div>
              </figure>
              <blockquote>
                AltCampus has a very well structured course curriculum to teach
                software development, especially for someone like me who is from
                a non-tech background. I went from learning the ABC's of
                programming to creating awesome softwares within a span of few
                months.
              </blockquote>
            </div>

            <div className='carousel__photo'>
              <figure className='author'>
                <img
                  className='author-img'
                  src='assets/media/sasikant.jpg'
                  alt='sasikant-image'
                />
                <div className='description'>
                  <p className='name'>Sasikant</p>
                  <p className='title'>Works at Morph.ai</p>
                </div>
              </figure>
              <blockquote>
                I was working in the tech support industry when I joined
                AltCampus. Each day, mentors pick a topic and explain it in
                layman's terms. They focus heavily on practice, which sets them
                apart. Mentors are always there to help with anything you need
                with regards to interview preps and job search.
              </blockquote>
            </div>
          </div>
          <div className='carousel__button--next'></div>
          <div className='carousel__button--prev'></div>
        </div>
        <div className='dots'></div>
      </div>
    </section>
  );
}

export default Testimonials;
