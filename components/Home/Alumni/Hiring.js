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
              src="/images/hiring-partner/cleartax.webp"
              alt="ClearTax"
              width="177"
              height="33"
            />
          </li>
          <li>
            <img
              className="w-full"
              src="/images/hiring-partner/fampay.webp"
              alt="Fampay"
              width="177"
              height="33"
            />
          </li>
          <li>
            <img
              className="w-full"
              src="/images/hiring-partner/ey.webp"
              alt="Ernst & Young"
              width="177"
              height="33"
            />
          </li>
          <li className="">
            <img
              className="w-full"
              src="/images/hiring-partner/big-binary.webp"
              alt="BigBinary"
              width="177"
              height="33"
            />
          </li>
          <li>
            <img
              className="w-full"
              src="/images/hiring-partner/loconav.webp"
              alt="LocoNav"
              width="177"
              height="33"
            />
          </li>
          <li>
            <img
              className="w-full"
              src="/images/hiring-partner/mclarencollege.webp"
              alt="Mclarencollege"
              width="177"
              height="33"
            />
          </li>
        </ul>
      </article>
    </section>
  );
}

export default Alumnis;
