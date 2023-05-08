import React from 'react';

const alumnis = [
  {
    name: 'Swastik',
    company: 'Freelancing',
    image: '/images/students/swastik.webp',
    path: '/placements/swastik-yadav',
    quote:
      "AltCampus was <strong>the best decision I have ever made</strong>. You don't need any prior knowledge of programming. The courses take you from ground zero and help you reach your escape velocity."
  },
  {
    name: 'Reetik',
    company: 'BigBinary',
    image: '/images/students/reetik.webp',
    path: '/placements/reettik-goswami',
    quote:
      'AltCampus has helped me develop postive attitude and problem solving. The <strong>courses are pretty epic and extremely detailed</strong>. I highly recommend it for anyone looking to learn web dev.'
  }
];

function Testimonial(props) {
  return (
    <ul className="">
      {alumnis.map((item) => (
        <li key={item.name}>
          <a
            href={item.path}
            className="block shadow-lg-custom bg-white px-6 sm:px-10 py-5 max-w-4xl mx-auto mt-7 rounded-lg animate-arrow"
          >
            <article className="flex items-center">
              <aside className="text-center">
                <img
                  className="w-16 h-16 min-w-max rounded-full object-cover"
                  src={item.image}
                  alt={item.name}
                  width="64"
                  height="64"
                />
                <div className="mt-4">
                  <h4 className="text-royal-blue-800 font-semibold text-base">
                    {item.name}
                  </h4>
                  <h6 className="text-xxs text-gray-500 uppercase font-normal mt-1">
                    {item.company}
                  </h6>
                </div>
              </aside>
              <blockquote className="sm:mx-16 ml-6 font-Karla text-xl text-gray-500 leading-normal sm:pr-9">
                <p dangerouslySetInnerHTML={{ __html: item.quote }} />
              </blockquote>

              <footer>
                <img
                  className="arrow-slide"
                  width="84"
                  src="/images/icons/arrow-right.svg"
                  alt="Arrow Right Icon"
                />
              </footer>
            </article>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Testimonial;
