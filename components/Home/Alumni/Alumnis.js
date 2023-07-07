import React from 'react';
import Hiring from './Hiring';
import Testimonial from './Testimonial';

const alumnis = [
  {
    name: 'Harshaan',
    company: 'BigBinary',
    image: '/images/students/harshaan.webp',
    path: '/placements/harshaan-nihal-khan'
  },
  {
    name: 'Devika Misra',
    company: 'BigBinary',
    image: '/images/students/devika.webp',
    path: '/placements/devika-misra'
  },
  {
    name: 'Abid Rahim',
    company: 'LocoNav',
    image: '/images/students/abid.webp',
    path: '/placements/abid-rahim'
  },
  {
    name: 'Deepak Sharma',
    company: 'Credilio',
    image: '/images/students/deepak-sharma.webp',
    path: '/placements/deepak-sharma'
  },
  {
    name: 'Komal Raj',
    company: 'KheloMore',
    image: '/images/students/komal.webp',
    path: '/placements/komal-raj'
  },
  {
    name: 'Bimlendu',
    company: 'Arvolution',
    image: '/images/students/bimlendu.webp',
    path: '/placements/bimlendu-kumar'
  }
];

function Alumnis(props) {
  return (
    <section className="pb-24 bg-blur bg-no-repeat">
      <article className="container mx-auto px-8 sm:px-3">
        <h2 className="text-center font-bold text-gray-500 text-2xl">
          Meet some of our graduates
        </h2>
        <ul className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-10 lg:grid-cols-6">
          {alumnis.map((item) => (
            <li className="text-center" key={item.name}>
              <a href={item.path}>
                <figure>
                  <img
                    className="shadow-lg-custom rounded-full inline-block object-cover"
                    src={item.image}
                    alt={item.name + '- AltCampus alumni'}
                    width="170"
                    height="170"
                  />
                  <figcaption className="mt-4">
                    <cite className="text-base not-italic text-royal-blue-800 font-semibold">
                      {item.name}
                    </cite>
                    <br />
                    <cite className="text-xxs not-italic text-gray-500 tracking-normal uppercase">
                      {item.company}
                    </cite>
                  </figcaption>
                </figure>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-24">
          <Hiring />
        </div>
        <div className="mt-24">
          <Testimonial />
        </div>
        <footer className="text-center">
          <a
            href="/placements"
            className="hover-btn inline-block mt-16 py-5 px-10 border-2 border-solid border-royal-blue-800 rounded text-royal-blue-800 font-bold text-center "
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
