import React from 'react';

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
    name: 'Harshaan',
    company: 'BigBinary',
    image: '/images/students/Harshaan.jpeg'
  },
  {
    name: 'Chaduvula',
    company: 'BigBinary',
    image: '/images/students/Chaduvula.jpeg'
  }
];

function Testimonial(props) {
  return (
    <a
      href=""
      className="block shadow-lg-custom bg-white px-10 py-5 max-w-4xl mx-auto mt-7 rounded-lg"
    >
      <article className="flex items-center">
        <aside>
          <img src="/images/students/sachin.svg" alt="Sachin" />
          <div className="mt-4">
            <h4 className="text-royal-blue-800 font-semibold text-base">
              Sachin
            </h4>
            <h6 className="text-xxs text-gray-500 uppercase font-normal mt-1">
              ClearTax
            </h6>
          </div>
        </aside>
        <p className="mx-16 font-Karla text-xl text-gray-500 leading-normal pr-9">
          Sachin’s journey of choosing a different path, learning to code from
          AltCampus, and finally becoming a software developer.
        </p>
        <footer>
          <a href="">
            <img
              className="w-16"
              src="/images/icons/arrow-right.svg"
              alt="Arrow Right Icon"
            />
          </a>
        </footer>
      </article>
    </a>
  );
}

export default Testimonial;
