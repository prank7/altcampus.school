import React from "react";

function TestimonialItem(props) {
  const { name, firm, img, content } = props.item;

  return (
    <div className="min-w-full flex flex-col md:flex-row  justify-center items-center px-24">
      <figure className="author flex flex-col md:flex-row items-center md:w-1/4">
        <img
          className="author-img w-20 h-20 object-cover rounded-full md:mr-8"
          src={img}
          alt="sreyansh-image"
        />
        <div className="description text-center md:text-left mb-8 md:mb-0 mt-4 md:mt-0">
          <p className="name uppercase text-gold-500 text-xl font-medium">
            {name}
          </p>
          <p className="title">Works at {firm}</p>
        </div>
      </figure>
      <blockquote className="text-2xl pl-6 md:w-2/3 leading-loose italic font-normal">
        {content}
      </blockquote>
    </div>
  );
}

export default TestimonialItem;
