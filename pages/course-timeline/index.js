import { addWeeks } from 'date-fns';
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
      <div className="container mx-auto px-16">
        <h2 className="mb-4 text-2xl sm:text-5xl track-name-heading font-bold mt-4">
          {track.name}
        </h2>
        <Slider
          value={hoursPerWeek}
          min={10}
          max={60}
          step={5}
          setValue={setHoursPerWeek}
        />
        <p className="mt-6">
          If you put <span className="font-bold">{hoursPerWeek} hours</span>{' '}
          every week, you'll become a full stack software developer in{' '}
          <span className="font-bold">{weeklyTopicTasks.length} weeks</span>
        </p>
        <p>
          If you join today, you'll become a full stack web developer by{' '}
          <span className="font-bold">{courseFinishDate.toDateString()} </span>
        </p>
        <TimelineTree weeklyTopicTasks={weeklyTopicTasks} />
      </div>
    </LayoutHome>
  );
};

export default CourseTimeline;
