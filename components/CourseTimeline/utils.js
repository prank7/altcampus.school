export const calculateWeeklyBlockTasks = ({ trackTimings, hoursPerWeek }) => {
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

export const calculateWeeklyTopicTasks = ({ weeklyBlockTasks }) => {
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
