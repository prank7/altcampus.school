var Airtable = require('airtable');
var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  'app5zVPV7qvCAN30T'
);

const dataStore = {};

const promiseStore = {};

const getCachedData = async (queryKey, getDataFunction) => {
  const cachedData = dataStore[JSON.stringify(queryKey)];
  // console.log(Object.keys(dataStore));
  if (!cachedData) {
    let result;
    if (promiseStore[queryKey]) {
      result = await promiseStore[queryKey];
    } else {
      // console.log('Reading data from airtable', queryKey);
      result = await getDataFunction();
    }
    dataStore[JSON.stringify(queryKey)] = result;
    return result;
  }
  // console.log('Reading data from cache', queryKey);
  return cachedData;
};

export const getAllAlumnisData = async () => {
  const result = await getCachedData(['alumnis', 'all'], () => {
    return new Promise((resolve, reject) => {
      const arr = [];
      base('Alumni Data')
        .select({
          maxRecords: 1000,
          view: 'Grid view'
        })
        .eachPage(
          function page(records, fetchNextPage) {
            records.forEach(function (record) {
              arr.push({
                name: record.get('Name') || '',
                about: record.get('About') || '',
                username: record.get('GitHub Username') || '',
                company: record.get('Company') || '',
                dateOfBirth:record.get('Date Of Birth') || '',
                role: record.get('Role') || '',
                ctc: record.get('CTC') || 'NA',
                projects: [
                   {
                    title: record.get('Project 1 Title') || '',
                    description: record.get('Project 1 Description') || '',
                    liveURL: record.get('Project 1 Live') || '',
                    code:record.get('Project 1 URL') || ''
                  },
                 {
                    title: record.get('Project 2 Title') || '',
                    description: record.get('Project 2 Description') || '',
                    liveURL: record.get('Project 2 Live') || '',
                    code:record.get('Project 2 URL') || ''
                  },
                   {
                    title: record.get('Project 3 Title') || '',
                    description: record.get('Project 3 Description') || '',
                    liveURL: record.get('Project 3 Live') || '',
                    code:record.get('Project 3 URL') || ''
                  },
                  {
                    title: record.get('Project 4 Title') || '',
                    description: record.get('Project 4 Description') || '',
                    liveURL: record.get('Project 4 Live') || '',
                    code:record.get('Project 4 URL') || ''
                  },
                ],
                blogPosts: [
                   {
                    title: record.get('Blog 1 Title') || '',
                    description: record.get('Blog 1 Description') || '',
                    liveURL: record.get('Blog 1 URL') || '',
                  },
                   {
                    title: record.get('Blog 2 Title') || '',
                    description: record.get('Blog 2 Description') || '',
                    liveURL: record.get('Blog 2 URL') || '',
                  },
                   {
                    title: record.get('Blog 3 Title') || '',
                    description: record.get('Blog 3 Description') || '',
                    liveURL: record.get('Blog 3 URL') || '',
                  },
                  {
                    title: record.get('Blog 4 Title') || '',
                    description: record.get('Blog 4 Description') || '',
                    liveURL: record.get('Blog 4 URL') || '',
                  },
                ],
                highestEducation: record.get('Highest Education') || '',
                email: record.get('Email') || '',
                twitter: record.get("Twitter URL") || '',
                linkedin: record.get("LinkedIn URL") || '',
                github: record.get("GitHub URL") || '',
                image: record.get('Image') || '',
                experineceAtAltCampus: record.get('Experience at AltCampus') || '',
                interviewLink: record.get('Interview Link') || '',
                graduationYear: record.get('Graduation Year') || '',
                companyWebsite:record.get('Company Website') || ''

              });
            });
            fetchNextPage();
          },
          function done(err) {
            if (err) return reject(err);
            // console.log(arr);
            resolve(arr);
          }
        );
    });
  });
  return result;
};

export const getIndividualAlumniData = async (username) => {
  const result = await getAllAlumnisData();
  return result.find((s) => username === s.username);
};
