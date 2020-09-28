import React from "react";

function TestimonialItem(props) {
  return (
    <div className="min-w-full flex justify-center px-24">
      <figure className="author flex items-center w-1/4">
        <img
          className="author-img w-20 h-20 object-cover rounded-full mr-8"
          src="assets/media/sreyansh.jpg"
          alt="sreyansh-image"
        />
        <div className="description">
          <p className="name uppercase text-gold-500 text-xl font-medium">
            {props.name}
          </p>
          <p className="title">Works at {props.firm}</p>
        </div>
      </figure>
      <blockquote className="text-2xl pl-6 w-2/3 leading-loose italic font-normal">
        AltCampus breaks the myth that you need a professional qualification to
        be a software developer. I was a CA dropout with no programming
        experience and currently I am working in a reputed company. This says
        all.
      </blockquote>
    </div>
  );
}

export default TestimonialItem;
