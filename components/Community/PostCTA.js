import Link from 'next/link';
import React from 'react';

function PostCTA(props) {
  return (
    <section className='pt-12'>
      <div className=''>
        <div className='md:px-12 py-8 px-2 bg-green-theme-600 text-center md:text-left md:flex md:items-center md:justify-center'>
          <div className="flex-1">
            <p className='text-xl text-white font-semibold md:max-w-lg md:mr-8'>
              {props.ctaText}
            </p>
            {/* <h5 className='text-white font-bold text-lg pt-1 font-source'>
              Get on a call with our team.
            </h5> */}
          </div>

          <Link href="/" as="/" className="flex-1">
            <a
              className='px-8 py-2 text-sm mt-4 md:mt-0 bg-white tracking-wider uppercase text-dark-blue-500 inline-block rounded shadow-md btn-hover font-semibold'
              target='_blank'
              rel='noopener'
              href='https://altcampus.school'
            >
              START LEARNING
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PostCTA;
