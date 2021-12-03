import React from 'react';
import Testimonial from './Testimonial';

const alumnis = [
  {
    name: 'Devika Misra',
    company: 'BigBinary',
    image: '/images/students/devika.svg',
    path: '/placements/devika-misra'
  },
  {
    name: 'Abid Rahim',
    company: 'LocoNav Pvt Ltd',
    image: '/images/students/abid.svg',
    path: '/placements/abid-rahim'
  },
  {
    name: 'Komal',
    company: 'KheloMore',
    image: '/images/students/komal.svg',
    path: '/placements/komal-raj'
  },
  {
    name: 'Harshaan',
    company: 'BigBinary',
    image: '/images/students/harshaan.svg',
    path: '/placements/harshaan-nihal-khan'
  },
  {
    name: 'Alisha saxena',
    company: 'BigBinary',
    image: '/images/students/alisha.svg',
    path: '/placements/alisha-saxena'
  },
  {
    name: 'Ashwin Kumar N',
    company: 'Wolken Software',
    image: '/images/students/ashwin.svg',
    path: '/placements/ashwin-kumar-n'
  }
];

function Alumnis(props) {
  return (
    <section className="pb-24 bg-blur bg-no-repeat">
      <article className="container mx-auto px-8 sm:px-3">
        <h3 className="text-center font-bold text-gray-500 text-2xl">
          Meet some of our graduates...
        </h3>
        <ul className="mt-10 md:grid grid-cols-6 hidden">
          {alumnis.map((item) => (
            <li className="text-center" key={item.name}>
              <a href={item.path}>
                <img
                  className="shadow-lg-custom rounded-full inline-block object-cover"
                  src={item.image}
                  alt={item.name}
                />
                <div className="mt-4">
                  <h4 className="text-royal-blue-800 font-semibold text-base">
                    {item.name}
                  </h4>
                  <h6 className="text-xxs text-gray-500 uppercase font-normal mt-1">
                    {item.company}
                  </h6>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-24">
          <Testimonial />
        </div>
        <footer className="text-center">
          <a
            href="/placements"
            className="hover-btn inline-block mt-16 py-5 px-10 border-2 border-solid border-royal-blue-800 rounded text-royal-blue-800 font-bold text-center capitalize"
          >
            <strong className="relative z-10">
              Read how AltCampus changed their lives
            </strong>
          </a>
        </footer>
      </article>
    </section>
  );
}

export default Alumnis;
