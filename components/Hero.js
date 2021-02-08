const Hero = () => {
  return (
    <div className='py-10 mx-auto max-w-screen-xl px-4 sm:px-6 md:py-16 lg:py-20 bg-gray-100'>
      <div className='text-center'>
        <h2 className='text-4xl tracking-tight leading-10 font-extrabold text-gray-900 text-dark-blue-600 sm:text-5xl sm:leading-none md:text-5xl'>
          Welcome to the
          <br />
          <span className='text-royal-blue-600'>AltCampus Community!</span>
        </h2>
        <p className='mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
          Join the AltCampus community to learn and grow with other aspiring
          developers.
        </p>

        <span className="inline-flex rounded-md shadow-sm pt-6">
          <a
            href="#"
            className="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-theme-600 hover:bg-green-theme-500 focus:outline-none focus:border-green-theme-700 focus:shadow-outline-green-theme active:bg-green-theme-700 transition ease-in-out duration-150"
          >
            Join the Community
          </a>
        </span>

      </div>
    </div>
  );
};

export default Hero;
