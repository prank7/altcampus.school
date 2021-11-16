import React from 'react';
import Testimonial from './Testimonial';

const alumnis = [
  {
    name: 'Ruchi Kharwar',
    company: 'Accelerate Business Solutions',
    image: '/images/students/ruchi.jpeg'
  },
  {
    name: 'Abid Rahim',
    company: 'LocoNav Pvt Ltd',
    image: '/images/students/abid.jpeg'
  },
  {
    name: 'Komal',
    company: 'KheloMore',
    image: '/images/students/Komal.jpg'
  },
  {
    name: 'Harshaan',
    company: 'BigBinary',
    image: '/images/students/Harshaan.jpeg'
  },
  {
    name: 'Alisha saxena',
    company: 'BigBinary',
    image: '/images/students/alisha.jpeg'
  },
  {
    name: 'Ashwin Kumar N',
    company: 'Wolken Software',
    image: '/images/students/ashwin.jpeg'
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
              <img
                className="w-40 h-40 rounded-full inline-block shadow-lg-custom object-cover"
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
            </li>
          ))}
        </ul>
        <div className="mt-24">
          <Testimonial />
        </div>
        <footer className="text-center">
          <a
            href="/placements"
            className="inline-block mt-16 py-5 px-10 border-2 border-solid border-royal-blue-800 rounded text-royal-blue-800 font-bold text-center capitalize"
          >
            Read how AltCampus changed their lives
          </a>
        </footer>
      </article>
    </section>
  );
}

export default Alumnis;
