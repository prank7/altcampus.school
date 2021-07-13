import React from 'react';

function Student(props) {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto grid grid-cols-6 gap-8 items-center">
        <p className="col-span-2 text-xl">
          A few companies where our Alumini are placed. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Illo quaerat laboriosam voluptas
        </p>
        <div className="col-span-4">
          <figure className="flex items-center flex-wrap">
            <img
              className="w-32 m-4"
              src="/images/hiring-partner/big-binary.svg"
              alt="BigBinary"
            />
            <img
              className="w-32 m-4"
              src="/images/hiring-partner/cleartax.png"
              alt="ClearTax"
            />
            <img
              className="w-32 m-4"
              src="/images/hiring-partner/loconav.png"
              alt="LocoNav"
            />

            <img
              className="w-32 m-4"
              src="/images/hiring-partner/khelomore.svg"
              alt="Khelomore"
            />
            <img
              className="w-32 m-4"
              src="/images/hiring-partner/big-binary.svg"
              alt="BigBinary"
            />
            <img
              className="w-32 m-4"
              src="/images/hiring-partner/cleartax.png"
              alt="ClearTax"
            />
            <img
              className="w-32 m-4"
              src="/images/hiring-partner/loconav.png"
              alt="LocoNav"
            />
            <img
              className="w-32 m-4"
              src="/images/hiring-partner/khelomore.svg"
              alt="Khelomore"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Student;
