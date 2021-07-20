import React from 'react';

function Testimonials(props) {
  return (
    <section className='py-40 testimonial' id='testimonials'>
      <header className='text-center md:flex md:justify-center md:items-center mb-12'>
        <img
          className='inline-block w-12 md:mr-4'
          src='/assets/media/testimonial.svg'
          alt='testimonial'
        />
        <h2 className='font-bold text-4xl text-white'>From Our Alumni</h2>
      </header>

      <div className='text-white'>
        <div className='carousel-wrapper px-8 relative mt-12'>
          <label
            htmlFor='prev'
            className='w-12 h-12 bg-royal-blue-500 rounded-full absolute prev cursor-pointer'
          ></label>
          <label
            htmlFor='next'
            className='w-12 h-12 bg-royal-blue-500 rounded-full absolute next cursor-pointer'
          ></label>
          <div className='carousel flex'>
            <div className='carousel__photo initial flex items-center justify-between px-20 min-w-full'>
              <figure className='author flex items-center w-1/4'>
                <img
                  className='author-img w-20 h-20 object-cover rounded-full mr-8'
                  src='assets/media/sreyansh.jpg'
                  alt='sreyansh-image'
                />
                <div className='description'>
                  <p className='name uppercase text-gold-500 text-xl font-medium'>
                    Shreyansh
                  </p>
                  <p className='title'>Works at BigBinary</p>
                </div>
              </figure>
              <blockquote className='text-2xl pl-6 w-2/3 leading-loose italic font-normal'>
                AltCampus breaks the myth that you need a professional
                qualification to be a software developer. I was a CA dropout
                with no programming experience and currently I am working in a
                reputed company. This says all.
              </blockquote>
            </div>

            <div className='carousel__photo flex items-center justify-between px-20 min-w-full'>
              <figure className='author flex items-center w-1/4'>
                <img
                  className='author-img w-20 h-20 object-cover rounded-full mr-8'
                  src='assets/media/students/ashwani.jpeg'
                  alt='ashwani-image'
                />
                <div className='description'>
                  <p className='name uppercase text-gold-500 text-xl font-medium'>
                    Ashwani
                  </p>
                  <p className='title'>Works at ClearTax</p>
                </div>
              </figure>
              <blockquote className='text-2xl pl-6 w-2/3 leading-loose italic font-normal'>
                AltCampus has made my career. I am very grateful to the mentors
                of AltCampus who believed in me and were there with me at each
                step in my learning journey. I will always remember their
                contribution.
              </blockquote>
            </div>

            <div className='carousel__photo flex items-center justify-between px-20 min-w-full'>
              <figure className='author flex items-center w-1/4'>
                <img
                  className='author-img w-20 h-20 object-cover rounded-full mr-8'
                  src='assets/media/students/shashank.jpeg'
                  alt='Shashank-image'
                />
                <div className='description'>
                  <p className='name uppercase text-gold-500 text-xl font-medium'>
                    Shashank
                  </p>
                  <p className='title'>Works at BigBinary</p>
                </div>
              </figure>
              <blockquote className='text-2xl pl-6 w-2/3 leading-loose italic font-normal'>
                AltCampus's scheduled program, weekly demo sessions, hackathons,
                code reviews, etc. provided the necessary milieu to set the ball
                rolling. The full stack web development program at AltCampus,
                had the rigorousness in its curriculum to equip fairly for
                interviewing and getting a job.
              </blockquote>
            </div>

            <div className='carousel__photo flex items-center justify-between px-20 min-w-full'>
              <figure className='author flex items-center w-1/4'>
                <img
                  className='author-img w-20 h-20 object-cover rounded-full mr-8'
                  src='assets/media/komal.jpeg'
                  alt='komal-image'
                />
                <div className='description'>
                  <p className='name uppercase text-gold-500 text-xl font-medium'>
                    Komal Raj
                  </p>
                  <p className='title'>Works at KheloMore</p>
                </div>
              </figure>
              <blockquote className='text-2xl pl-6 w-2/3 leading-loose italic font-normal'>
                I feel proud to be a student of first batch. AltCampus provided
                me a platform to realize my potential. All mentors were
                outstanding and gave me the best guidance possible.
              </blockquote>
            </div>

            <div className='carousel__photo flex items-center justify-between px-20 min-w-full'>
              <figure className='author flex items-center w-1/4'>
                <img
                  className='author-img w-20 h-20 object-cover rounded-full mr-8'
                  src='assets/media/abid.jpg'
                  alt='abid-image'
                />
                <div className='description'>
                  <p className='name uppercase text-gold-500 text-xl font-medium'>
                    Abid
                  </p>
                  <p className='title'>Works at LocoNav</p>
                </div>
              </figure>
              <blockquote className='text-2xl pl-6 w-2/3 leading-loose italic font-normal'>
                After spending six good months being guided by the mentors,
                making new friends and dedicating myself into learning new
                skills, being at AltCampus was indeed a fulfilling experience.
              </blockquote>
            </div>

            <div className='carousel__photo flex items-center justify-between px-20 min-w-full'>
              <figure className='author flex items-center w-1/4'>
                <img
                  className='author-img w-20 h-20 object-cover rounded-full mr-8'
                  src='assets/media/amit.jpeg'
                  alt='amit-image'
                />
                <div className='description'>
                  <p className='name uppercase text-gold-500 text-xl font-medium'>
                    Amit
                  </p>
                  <p className='title'>Works at BigBinary</p>
                </div>
              </figure>
              <blockquote className='text-2xl pl-6 w-2/3 leading-loose italic font-normal'>
                AltCampus has a very well structured course curriculum to teach
                software development, especially for someone like me who is from
                a non-tech background. I went from learning the ABC's of
                programming to creating awesome softwares within a span of few
                months.
              </blockquote>
            </div>

            <div className='carousel__photo flex items-center justify-between px-20 min-w-full'>
              <figure className='author flex items-center w-1/4'>
                <img
                  className='author-img w-20 h-20 object-cover rounded-full mr-8'
                  src='assets/media/sasikant.jpg'
                  alt='sasikant-image'
                />
                <div className='description'>
                  <p className='name uppercase text-gold-500 text-xl font-medium'>
                    Sasikant
                  </p>
                  <p className='title'>Works at Morph.ai</p>
                </div>
              </figure>
              <blockquote className='text-2xl pl-6 w-2/3 leading-loose italic font-normal'>
                I was working in the tech support industry when I joined
                AltCampus. Each day, mentors pick a topic and explain it in
                layman's terms. They focus heavily on practice, which sets them
                apart. Mentors are always there to help with anything you need
                with regards to interview preps and job search.
              </blockquote>
            </div>
          </div>
        </div>
        <div className='dots'></div>
      </div>
    </section>
  );
}

export default Testimonials;
