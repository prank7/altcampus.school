import { addWeeks } from 'date-fns';
import { useState } from 'react';
import Slider, { SliderTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';
import trackTimings from '../../data/track-timings.json';
import LayoutHome from '../../components/Home/Layout';

const { Handle: SliderHandle } = Slider;

const Handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <SliderTooltip
      prefixCls="rc-slider-tooltip"
      overlay={`${value} hrs`}
      visible={dragging}
      placement="top"
      key={index}
    >
      <SliderHandle value={value} {...restProps} />
    </SliderTooltip>
  );
};

const calculateWeeklyBlockTasks = ({ trackTimings, hoursPerWeek }) => {
  const weeklyTasks = [];

  const allBlocksInSequence = trackTimings.modules
    .map((m) =>
      m.topics
        .map((t) =>
          t.exercises
            .map((e) => e.blocks.map((b) => ({ ...b, topic: t })))
            .flat()
        )
        .flat()
    )
    .flat()
    .filter((v) => v);

  // console.log(allBlocksInSequence);
  // return;
  let currentBlockIndex = 0;
  let currentWeekIndex = 0;
  // return;
  while (currentBlockIndex < allBlocksInSequence.length) {
    let currentBlock = allBlocksInSequence[currentBlockIndex];
    if (!currentBlock) {
      break;
    }
    let currentWeek = weeklyTasks[currentWeekIndex];
    if (!currentWeek) {
      weeklyTasks[currentWeekIndex] = {
        remainingTime: hoursPerWeek * 60,
        tasks: []
      };
      currentWeek = weeklyTasks[currentWeekIndex];
    }
    if (!currentBlock.estimatedTimeToComplete) {
      currentBlockIndex++;
      continue;
    }

    if (
      currentWeek.remainingTime > currentBlock.estimatedTimeToComplete ||
      currentWeek.tasks.length === 0
    ) {
      currentWeek.tasks.push(currentBlock);
      currentWeek.remainingTime =
        currentWeek.remainingTime - currentBlock.estimatedTimeToComplete;
      currentBlockIndex++;
    } else {
      currentWeekIndex++;
      continue;
    }
    // console.log(currentExercise, currentWeek);
    // break;
  }

  return weeklyTasks;
};

const calculateWeeklyTopicTasks = ({ weeklyBlockTasks }) => {
  return weeklyBlockTasks.map((weekTask) => {
    return {
      ...weekTask,
      tasks: weekTask.tasks.reduce((acc, blockTask) => {
        if (acc.find((t) => t._id === blockTask.topic._id)) {
        } else {
          acc.push(blockTask.topic);
        }
        return acc;
      }, [])
    };
  });
};

const CourseTimeline = () => {
  const [hoursPerWeek, setHoursPerWeek] = useState(30);
  const track = trackTimings.tracks;

  const weeklyBlockTasks = calculateWeeklyBlockTasks({
    trackTimings: track,
    hoursPerWeek: hoursPerWeek
  });
  const weeklyTopicTasks = calculateWeeklyTopicTasks({ weeklyBlockTasks });
  // console.log(weeklyTopicTasks);

  // console.log(
  //   hoursPerWeek + " hours",
  //   calculateWeeklyBlockTasks({
  //     trackTimings: track,
  //     hoursPerWeek: hoursPerWeek,
  //   })
  //     .map((week) => week.remainingTime)
  //     .reduce((a, v) => a + Math.max(0, v), 0),

  //   calculateWeeklyBlockTasks({
  //     trackTimings: track,
  //     hoursPerWeek: hoursPerWeek,
  //   })
  //     .map((week) => week.remainingTime)
  //     .reduce((a, v) => a + Math.min(0, v), 0)
  // );

  const courseFinishDate = addWeeks(new Date(), weeklyTopicTasks.length);

  return (
    <LayoutHome>
      <div className="container mx-auto px-16">
        <h2 className="mb-4 text-2xl sm:text-5xl track-name-heading font-bold mt-4">
          {track.name}
        </h2>
        <Slider
          dots
          value={hoursPerWeek}
          min={10}
          max={60}
          step={5}
          dotStyle={{
            marginTop: '16px',
            height: '16px',
            width: '16px',
            bottom: '-6px',
            marginLeft: '-8px',
            borderWidth: '4px'
          }}
          handle={Handle}
          // activeDotStyle={{ height: "25px", width: "25px" }}
          handleStyle={{
            height: '28px',
            width: '28px',
            marginTop: '-12px',
            marginLeft: '0px',
            borderWidth: '4px'
          }}
          marks={new Array((60 - 10) / 5 + 1)
            .fill(null)
            .map((_, i) => 10 + i * 5)
            .reduce((acc, mark) => {
              acc[mark] = {
                label: mark,
                style: {
                  fontSize: '1rem',
                  color: hoursPerWeek === mark ? 'blue' : undefined,
                  fontWeight: hoursPerWeek === mark ? 'bold' : undefined
                },
                fontFamily: '"Source Sans Pro", sans-serif'
              };
              return acc;
            }, {})}
          onChange={(value) => setHoursPerWeek(value)}
        />{' '}
        <p className="mt-6">
          If you put <span className="font-bold">{hoursPerWeek} hours</span>{' '}
          every week, you'll become a full stack software developer in{' '}
          <span className="font-bold">{weeklyTopicTasks.length} weeks</span>
        </p>
        <p>
          If you join today, you'll become a full stack web developer by{' '}
          <span className="font-bold">{courseFinishDate.toDateString()} </span>
        </p>
        {weeklyTopicTasks.map((weekTask, i, allWeekTasks) => {
          const previousWeekTask = allWeekTasks[i - 1];
          const lastTaskOfPreviousWeek = previousWeekTask
            ? previousWeekTask.tasks[previousWeekTask.tasks.length - 1]
            : null;

          // console.log(lastTaskOfPreviousWeek);
          return (
            <>
              <div className="w-full text-center my-2 font-bold font-lato text-green-600 text-2xl">
                Week {i + 1}
              </div>

              {/* <h3>Remaining Time: {weekTask.remainingTime} minutes</h3> */}
              <div className="grid md:grid-cols-timeline-tree">
                {i % 2 === 1 ? (
                  <>
                    <div></div>
                    <div className="md:flex md:justify-center hidden text-center">
                      <div className=" border-green-600 border-l-2 h-full rounded-full border-solid"></div>
                    </div>
                  </>
                ) : null}
                <div
                  className={`justify-self-center w-full rounded p-6 box-border shadow bg-royal-blue-500`}
                >
                  {weekTask.tasks.map((task, i, arr) => {
                    const isFirstTask = i === 0;
                    const isLastTask = i + 1 === arr.length;
                    return (
                      <li className="text-white text-lg list-none grid grid-cols-timeline-item grid-gap-0 align-center ">
                        <div className="grid grid-rows-timeline-list-bullet">
                          {isFirstTask ? (
                            <div></div>
                          ) : (
                            <div className="flex items-center justify-center">
                              <div className="w-0.5 h-full bg-white"></div>
                            </div>
                          )}
                          <div className="flex items-center justify-center">
                            <div className="w-2 h-2 flex rounded-full self-center place-self-center border-2 border-solid border-white bg-royal-blue-500"></div>
                          </div>
                          {isLastTask ? (
                            <div></div>
                          ) : (
                            <div className="flex items-center justify-center">
                              <div className="w-0.5 h-full bg-white"></div>
                            </div>
                          )}
                        </div>

                        <p className="px-2 inline-block">
                          {task.name}
                          {isFirstTask
                            ? task._id === lastTaskOfPreviousWeek?._id
                              ? '(Contd.)'
                              : ''
                            : ''}
                        </p>
                      </li>
                    );
                  })}
                </div>
                {i % 2 === 0 ? (
                  <>
                    <div className="md:flex md:justify-center hidden text-center">
                      <div className=" border-green-600 border-l-2 h-full rounded-full border-solid"></div>
                    </div>{' '}
                    <div></div>
                  </>
                ) : null}
              </div>
            </>
          );
        })}
      </div>
    </LayoutHome>
  );
};

export default CourseTimeline;
