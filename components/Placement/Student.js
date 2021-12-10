import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Student(props) {
  // const imageLoader = ({ src, width, quality }) => {
  //   return src;
  // };
  return (
    <Link href={`/placements/${props.slug}`} as={`/placements/${props.slug}`}>
      <a href={`/placements/${props.slug}`} className="text-center">
        <article className="text-center">
          <figure className="sm:h-52 sm:w-52 overflow-hidden rounded-full shadow-sm-custom border border-solid border-gray-50 text-center inline-block">
            <Image
              // loader={imageLoader}
              layout="responsive"
              width={300}
              height={300}
              quality={props.image[0].size / 1024 > 100 ? 75 : 90}
              className="rounded-lg rounded-b-none h-full w-full object-cover object-center inline-block"
              src={
                props.image[0].size / 1024 > 500
                  ? props.image[0].thumbnails?.large?.url
                    ? props.image[0].thumbnails?.large?.url
                    : props.image[0].url
                  : props.image[0].url
              }
              alt={props.name}
            />
          </figure>
          <div className="px-4 py-2">
            <h2 className="text-xl text-royal-blue-800 font-bold">
              {props.name}
            </h2>
            <h4 className="text-gray-500 text-sm h-12">
              {props.role}, {props.company}
            </h4>
            {/* <h4 className="text-right text-sm font-medium text-gray-500 mt-3 font-sans">
              Placement Package: {props.ctc}
            </h4> */}
          </div>
        </article>
      </a>
    </Link>
  );
}

export default Student;
