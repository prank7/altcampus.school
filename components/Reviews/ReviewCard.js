import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function ReviewCard(props) {
  // console.log(props);
  // const imageLoader = ({ src, width, quality }) => {
  //   return src;
  // };
  return (
    <Link href={`/placements/${props.slug}`} as={`/placements/${props.slug}`}>
      <a
        href={`/placements/${props.slug}`}
        // className="border rounded-lg shadow-sm"
      >
        <article>
          <div className="flex items-center py-2 px-4">
            <figure className="h-12 w-12 overflow-hidden relative flex-shrink-0">
              <Image
                // loader={imageLoader}
                layout="fill"
                // width={50}
                // height={50}
                quality={props.image[0].size / 1024 > 50 ? 20 : 75}
                className="rounded-full h-full w-full object-cover"
                src={
                  props.image[0].thumbnails?.large?.url
                    ? props.image[0].thumbnails?.large?.url
                    : props.image[0].url
                }
                alt={props.name}
              />
            </figure>
            <div className="ml-2">
              <h2 className="text-2xl leading-tight text-royal-blue-700 font-bold font-mukta">
                {props.name}
              </h2>
              <h4 className="text-gray-700 leading-tight text-md font-mukta">
                {props.role}, {props.company}
              </h4>
            </div>
          </div>
          <div className="review pt-2 pb-4 px-2">
            <blockquote className="experience-quote text-md font-source text-royal-blue-500 break-words italic font-semibold">
              {props.experienceAtAltCampus
                ? props.experienceAtAltCampus.length > 280
                  ? props.experienceAtAltCampus.slice(0, 280) + ' ...'
                  : props.experienceAtAltCampus
                : null}
            </blockquote>
          </div>
        </article>
      </a>
    </Link>
  );
}

export default ReviewCard;
