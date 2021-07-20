const placementData = require('../data/placement-data.json');
const slugify = require('slugify');

export const getAllAlumnisData = () => {
  return placementData.map((alumni) => ({
    ...alumni,
    slug: slugify(alumni.name && alumni.name.toLowerCase())
  }));
};

export const getIndividualAlumniData = (username) => {
  const result = getAllAlumnisData();
  return result.find((s) => username === s.slug);
};
