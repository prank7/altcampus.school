const placementData = require('../data/placement-data.json');

export const getAllAlumnisData = () => {
  return placementData;
};

export const getIndividualAlumniData = (username) => {
  const result = placementData;
  return result.find((s) => username === s.username);
};
