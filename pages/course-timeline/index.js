import { addWeeks, format } from 'date-fns';
import { useState } from 'react';
import trackTimings from '../../data/track-timings.json';
import LayoutHome from '../../components/Home/Layout';
import Slider from '../../components/CourseTimeline/Slider';
import {
  calculateWeeklyBlockTasks,
  calculateWeeklyTopicTasks
} from '../../components/CourseTimeline/utils';
import TimelineTree from '../../components/CourseTimeline/TimelineTree';

const CourseTimeline = () => {
  const [hoursPerWeek, setHoursPerWeek] = useState(30);
  const track = trackTimings.tracks;

  const weeklyBlockTasks = calculateWeeklyBlockTasks({
    trackTimings: track,
    hoursPerWeek: hoursPerWeek
  });
  const weeklyTopicTasks = calculateWeeklyTopicTasks({ weeklyBlockTasks });
  // console.log(weeklyTopicTasks);

  const courseFinishDate = addWeeks(new Date(), weeklyTopicTasks.length);

  return (
    <LayoutHome>
      <section className="py-24 bg-royal-blue-100 px-16">
        <header className="text-center container">
          <h2 className="font-bold text-5xl text-dark-blue-500">
            Course Timeline
          </h2>
          <h4 className="pt-2 text-2xl text-gray-700">
            Find out when you're going to complete the course and how your
            upcoming weeks are going to look like
          </h4>
        </header>{' '}
        <div className="container mx-auto py-16">
          <Slider
            value={hoursPerWeek}
            min={10}
            max={60}
            step={5}
            setValue={setHoursPerWeek}
          />
          <p className="font-lato text-2xl mt-16 text-center text-royal-blue-600">
            Number of hours you're planning to put every week:{' '}
            <span className="font-bold">{hoursPerWeek} hrs</span>
          </p>
        </div>
        <div className="container mx-auto pt-4 pb-16 text-center font-lato">
          <p className="mt-6 text-xl leading-normal">
            By{' '}
            <span className="font-bold font-mono text-2xl">
              {format(courseFinishDate, 'MMM dd, yyyy')} (
              {weeklyTopicTasks.length} weeks)
            </span>
            , you will become a full stack software developer if you{' '}
            <a
              className="text-royal-blue-600 hover:underline"
              href="https://launchpad.altcampus.school/signup?utm_source=timeline"
            >
              join today
            </a>
          </p>
        </div>
        <div className="bg-white container mx-auto rounded-md shadow px-6 py-6">
          <TimelineTree weeklyTopicTasks={weeklyTopicTasks} />
        </div>
      </section>
    </LayoutHome>
  );
};

export default CourseTimeline;
