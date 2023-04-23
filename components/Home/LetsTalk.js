import React from 'react';

function LetsTalk(props) {
  return (
    <section className='cta py-24'>
      <div className='container mx-auto px-8'>
        <div className='md:px-12 text-center md:text-left md:flex md:items-center md:justify-center'>
          <div>
            <h3 className='text-3xl text-white font-semibold md:max-w-lg md:mr-8'>
              Still have doubts?
            </h3>
            <h5 className='text-white font-bold text-lg pt-1 font-source'>
              Try our step-by-step full stack web development course.
            </h5>
          </div>

          <a
            className='mt-4 md:mt-0 bg-white tracking-wider uppercase text-dark-blue-500 py-3 px-12 inline-block rounded shadow-md btn-hover font-semibold sm:ml-10'
            target='_blank'
            rel='noopener'
            href='https://try.altcampus.com?utm_source=lets_talk_cta'
          >
            TRY For Free!
          </a>
        </div>
      </div>
    </section>
  );
}

export default LetsTalk;
