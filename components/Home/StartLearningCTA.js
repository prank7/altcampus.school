import React from 'react';

function StartLearningCTA(props) {
  return (
    <section className='cta py-20'>
      <div className='container mx-auto px-8'>
        <div className='md:px-12 text-center md:text-left md:flex md:items-center md:justify-center'>
          <h3 className='text-3xl text-white font-bold md:max-w-lg md:mr-8'>
            Every life-changing endeavor starts with a decision. Commit to being
            a better you.
          </h3>
          <a
            className='mt-4 md:mt-0 bg-white tracking-widest uppercase text-dark-blue-500 py-3 px-12 inline-block rounded shadow-md btn-hover font-semibold text-lg'
            href='https://try.altcampus.school?utm_source=start_learning_cta'
          >
            START FOR FREE
          </a>
        </div>
      </div>
    </section>
  );
}

export default StartLearningCTA;
