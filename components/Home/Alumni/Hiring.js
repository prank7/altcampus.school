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
    <section className="">
      <article className="">
        <h3 className="text-center font-bold text-gray-500 text-2xl mb-10">
          Companies they were hired at…
        </h3>
        <ul className="grid grid-cols-6 items-center gap-x-14">
          <li className="">
            <img
              className="w-full"
              src="/images/hiring-partner/vegrow.png"
              alt="Vegrow"
            />
          </li>
          <li>
            <img
              className="w-full"
              src="/images/hiring-partner/betaflux.png"
              alt="Betaflux"
            />
          </li>
          <li>
            <img
              className="w-full"
              src="/images/hiring-partner/cleartax.png"
              alt="ClearTax"
            />
          </li>
          <li>
            <img
              className="w-full"
              src="/images/hiring-partner/loconav.png"
              alt="LocoNav"
            />
          </li>
          <li>
            <img
              className="w-full"
              src="/images/hiring-partner/mclarencollege.png"
              alt="Mclarencollege"
            />
          </li>
          <li>
            <img
              className="w-full"
              src="/images/hiring-partner/thunderpod.png"
              alt="Thunderpod"
            />
          </li>
        </ul>
      </article>
    </section>
  );
}

export default Alumnis;
