import React from 'react';
import Testimonial from './Testimonial';

const alumnis = [
  {
    name: 'Chaduvula',
    company: 'BigBinary',
    image: '/images/students/Chaduvula.jpeg'
  },
  {
    name: 'Harshaan',
    company: 'BigBinary',
    image: '/images/students/Harshaan.jpeg'
  },
  {
    name: 'Komal',
    company: 'KheloMore',
    image: '/images/students/Komal.jpg'
  },
  {
    name: 'Sachin',
    company: 'BibBinary',
    image: '/images/students/sachin.svg'
  },
  {
    name: 'Harshaa',
    company: 'BigBinary',
    image: '/images/students/Harshaan.jpeg'
  },
  {
    name: 'Prashant',
    company: 'BigBinary',
    image: '/images/students/Chaduvula.jpeg'
  }
];

function Alumnis(props) {
  return (
    <section className="pb-24 bg-blur bg-no-repeat">
      <article className="container mx-auto px-3">
        <h3 className="text-center font-bold text-gray-500 text-2xl">
          Meet some of our alumnis...
        </h3>
        <ul className="mt-10 grid grid-cols-6">
          {alumnis.map((item) => (
            <li className="text-center" key={item.name}>
              <img
                className="w-40 h-40 rounded-full inline-block shadow-lg-custom"
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
          <Testimonial />
        </div>
        <footer className="text-center">
          <a
            href="/stories"
            className="inline-block mt-16 py-5 px-10 border-2 border-solid border-royal-blue-800 rounded text-royal-blue-800 font-bold text-center capitalize"
          >
            Read their success stories
          </a>
        </footer>
      </article>
    </section>
  );
}

export default Alumnis;
