import React from 'react';

function ReadyToBuild(props) {
  return (
    <section className='cta py-24'>
      <div className='container mx-auto px-8'>
        <div className='md:px-12 text-center md:text-left md:flex md:items-center md:justify-center'>
          <h3 className='text-3xl text-white md:max-w-lg md:mr-8 font-bold'>
            Ready to build stuff? Get started now.
          </h3>

          <a
            className='mt-4 md:mt-0 bg-white tracking-wider uppercase text-dark-blue-500 py-3 px-12 inline-block rounded shadow-md btn-hover font-semibold text-lg'
            href='https://try.altcampus.school?utm_source=start_building_cta'
          >
            START BUILDING
          </a>
        </div>
      </div>
    </section>
  );
}

export default ReadyToBuild;
