import React from 'react';

const statsMenu = [
  {
    heading: '50 ',
    subHeading: 'Aluminis in 10 Months'
  },
  {
    heading: '7.2 Lacs ',
    subHeading: 'Average Package'
  },
  {
    heading: '16 Weeks',
    subHeading: 'Average Course Time'
  }
];

function ACStats(props) {
  return (
    <section className="pb-20">
      <article className="container mx-auto px-3 grid grid-cols-3 text-center stats-menu">
        {statsMenu.map((item) => (
          <div className="border-r border-solid border-royal-blue-200 stats-item">
            <h2>
              <strong className="text-5.5xl text-royal-blue-800 font-bold">
                {item.heading}
              </strong>
              <br />
              <strong className="text-gray-500 font-Karla text-2xl font-normal">
                {item.subHeading}
              </strong>
            </h2>
          </div>
        ))}
      </article>
    </section>
  );
}

export default ACStats;
