import React from 'react';
import Testimonial from './Testimonial';

function Alumnis(props) {
  return (
    <section className="">
      <article className="">
        <h3 className="text-center font-bold text-gray-500 text-2xl mb-10">
          Graduates of our courses work at
        </h3>
        <ul className="grid grid-cols-3 md:grid-cols-6 items-center gap-14">
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
              src="/images/hiring-partner/fampay.svg"
              alt="Fampay"
            />
          </li>
          <li>
            <img
              className="w-full"
              src="/images/hiring-partner/ey.svg"
              alt="Ernst & Young"
            />
          </li>
          <li className="">
            <img
              className="w-full"
              src="/images/hiring-partner/big-binary.svg"
              alt="BigBinary"
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
        </ul>
      </article>
    </section>
  );
}

export default Alumnis;
