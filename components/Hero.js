const Hero = () => {
  return (
    <div className="py-10 mx-auto max-w-screen-xl px-4 sm:px-6 md:py-16 lg:py-20 bg-gray-100">
      <div className="text-center">
        <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
          Welcome to the
          <br />
          <span className="text-indigo-600">AltCampus Community!</span>
        </h2>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Join the AltCampus community to learn and grow with other aspiring
          developers.
        </p>
      </div>
    </div>
  )
}

export default Hero;