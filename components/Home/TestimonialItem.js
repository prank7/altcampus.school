import React from "react";

function TestimonialItem(props) {
  const { name, firm, img, content } = props.item;

  return (
    <div className="min-w-full flex justify-center px-24">
      <figure className="author flex items-center w-1/4">
        <img
          className="author-img w-20 h-20 object-cover rounded-full mr-8"
          src={img}
          alt="sreyansh-image"
        />
        <div className="description">
          <p className="name uppercase text-gold-500 text-xl font-medium">
            {name}
          </p>
          <p className="title">Works at {firm}</p>
        </div>
      </figure>
      <blockquote className="text-2xl pl-6 w-2/3 leading-loose italic font-normal">
        {content}
      </blockquote>
    </div>
  );
}

export default TestimonialItem;
