import React from 'react';

const statsMenu = [
  {
    heading: '86.4%',
    subHeading: 'Get a Job After Course Completion'
  },
  {
    heading: '40+',
    subHeading: 'Projects to Build'
  },
  {
    heading: '188 Hours',
    subHeading: 'Of Bite Sized Video Content'
  }
];

function ACStats(props) {
  return (
    <section className="pb-20">
      <article className="container mx-auto px-8 sm:px-3 ">
        <header className="text-center mb-20">
          <h3 className="text-gray-500 font-bold font-Sora text-2xl">
            Our numbers speak for themselves
          </h3>
        </header>
        <div className="sm:grid grid-cols-3 stats-menu justify-between space-y-10 sm:space-y-0">
          {statsMenu.map((item) => (
            <div
              className="sm:border-r sm:border-solid sm:border-royal-blue-200 stats-item col-span-1 text-center"
              key={item.heading}
            >
              <h2>
                <strong className="text-5xl sm:text-4xl md:text-5.5xl text-royal-blue-800 font-bold">
                  {item.heading}
                </strong>
                <br />
                <strong className="text-gray-500 font-Karla text-2xl font-normal">
                  {item.subHeading}
                </strong>
              </h2>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

export default ACStats;
