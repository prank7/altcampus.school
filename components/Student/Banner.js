import React from 'react';

function Banner(props) {
  return (
    <section className="py-16 hero">
      <div className="container mx-auto px-8">
        <header className="">
          <h1 className="text-dark-blue-600 text-5xl font-bold text-center">
            {props.name}
          </h1>
          <div className="max-w-3xl mx-auto">
            {/* <img
              src="/images/icons/placed.svg"
              className="w-24 transform -rotate-12 inline-block"
              alt="Placed Stamp"
            /> */}
            <h3 className="text-royal-blue-500 text-xl font-semibold text-center">
              Placed as {props.role} at{' '}
              <a
                target="_blank"
                className="hover:underline"
                href={props.companyWebsite}
              >
                {props.company}
              </a>
            </h3>
            {/* <div className="text-center">
              <h4 className=" text-xl font-medium text-gray-500 mt-3 font-sans">
                Placement Package: {props.ctc}
              </h4>
            </div> */}
            <div className="review">
              <blockquote className="experience-quote mt-8 text-xl text-center font-source text-green-500 break-words italic font-semibold">
                {props.experineceAtAltCampus
                  ? props.experineceAtAltCampus.length > 280
                    ? props.experineceAtAltCampus.slice(0, 280) + ' ...'
                    : props.experineceAtAltCampus
                  : null}
              </blockquote>
            </div>

            <nav className="mt-10">
              <ul className="flex justify-center items-center">
                <li className="mx-3">
                  <a
                    target="_blank"
                    className="flex border px-4 py-1 rounded-md border-royal-blue-500 items-center"
                    style={{ color: '#40A8F5', borderColor: '#40A8F5' }}
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                      `https://altcampus.school/placements/${props.slug}`
                    )}`}
                  >
                    <img
                      className="h-5"
                      src="/images/icons/tweet-share.svg"
                      alt="Tweeter"
                    />
                    <span className="inline-block ml-2 font-semibold text-sm">
                      Tweet
                    </span>
                  </a>
                </li>
                <li className="mx-3">
                  <a
                    target="_blank"
                    className="flex border px-4 py-1 rounded-md border-royal-blue-500 items-center"
                    style={{ color: '#2C7FBA', borderColor: '#2C7FBA' }}
                    href={`http://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                      `https://altcampus.school/placements/${props.slug}`
                    )}`}
                  >
                    <img
                      src="/images/icons/linkedin-share.svg"
                      className="h-4"
                      alt="Linkedin"
                    />
                    <span className="inline-block ml-2 font-semibold text-sm">
                      Share
                    </span>
                  </a>
                </li>
                <li className="mx-3">
                  <a
                    target="_blank"
                    className="flex border px-4 py-1 rounded-md border-royal-blue-500 items-center"
                    style={{ color: '#4460A0', borderColor: '#4460A0' }}
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      `https://altcampus.school/placements/${props.slug}`
                    )}`}
                  >
                    <img
                      className="h-5"
                      src="/images/icons/fb-share.svg"
                      alt="Facebook"
                    />
                    <span className="inline-block ml-2 font-semibold text-sm">
                      Share
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    </section>
  );
}

export default Banner;
