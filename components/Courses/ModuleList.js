import Image from 'next/image';
import React from 'react';
import ModuleCard from './ModuleCard';

function TrackList({ course }) {
  return (
    <section className="py-12 ">
      <div className="max-w-6xl mx-auto px-8">
        <h4 className="text-xl text-gray-500 font-semibold text-center mb-8">
          Skills that you will learn in this course
        </h4>
        <div className="grid md:grid-cols-1 gap-4">
          {course.modules.map((module, i) => {
            return <ModuleCard key={i} module={module} />;
          })}

          {/* <TrackCard title="Javascript" icon="js-large" />
          <TrackCard title="React Js" icon="react-large" />
          <TrackCard title="EL 6" icon="mongo-large" />
          <TrackCard title="Mongo DB" icon="mongo-large" />
          <TrackCard title="Node Js" icon="node-large" /> */}
        </div>
      </div>
    </section>
  );
}

export default TrackList;
