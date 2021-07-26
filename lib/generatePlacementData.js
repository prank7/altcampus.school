const fs = require('fs');
const path = require('path');
var Airtable = require('airtable');
require('dotenv').config();
const prettier = require('prettier');

var base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  'app5zVPV7qvCAN30T'
);
const getAllAlumnisData = async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');

  const result = await new Promise((resolve, reject) => {
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
              dateOfBirth: record.get('Date Of Birth') || '',
              role: record.get('Role') || '',
              ctc: record.get('CTC') || 'NA',
              projects: [
                {
                  title: record.get('Project 1 Title') || '',
                  description: record.get('Project 1 Description') || '',
                  liveURL: record.get('Project 1 Live') || '',
                  code: record.get('Project 1 URL') || ''
                },
                {
                  title: record.get('Project 2 Title') || '',
                  description: record.get('Project 2 Description') || '',
                  liveURL: record.get('Project 2 Live') || '',
                  code: record.get('Project 2 URL') || ''
                },
                {
                  title: record.get('Project 3 Title') || '',
                  description: record.get('Project 3 Description') || '',
                  liveURL: record.get('Project 3 Live') || '',
                  code: record.get('Project 3 URL') || ''
                },
                {
                  title: record.get('Project 4 Title') || '',
                  description: record.get('Project 4 Description') || '',
                  liveURL: record.get('Project 4 Live') || '',
                  code: record.get('Project 4 URL') || ''
                }
              ],
              blogPosts: [
                {
                  title: record.get('Blog 1 Title') || '',
                  description: record.get('Blog 1 Description') || '',
                  liveURL: record.get('Blog 1 URL') || ''
                },
                {
                  title: record.get('Blog 2 Title') || '',
                  description: record.get('Blog 2 Description') || '',
                  liveURL: record.get('Blog 2 URL') || ''
                },
                {
                  title: record.get('Blog 3 Title') || '',
                  description: record.get('Blog 3 Description') || '',
                  liveURL: record.get('Blog 3 URL') || ''
                },
                {
                  title: record.get('Blog 4 Title') || '',
                  description: record.get('Blog 4 Description') || '',
                  liveURL: record.get('Blog 4 URL') || ''
                }
              ],
              highestEducation: record.get('Highest Education') || '',
              email: record.get('Email') || '',
              twitter: record.get('Twitter URL') || '',
              linkedin: record.get('LinkedIn URL') || '',
              github: record.get('GitHub URL') || '',
              image: record.get('Image') || {},
              experienceAtAltCampus:
                record.get('Experience at AltCampus') || '',
              experineceAtAltCampus:
                record.get('Experience at AltCampus') || '',
              shortTestimonial: record.get('Testimonial (Short)') || '',
              interviewLink: record.get('Interview Link') || '',
              graduationYear: record.get('Graduation Year') || '',
              companyWebsite: record.get('Company Website') || ''
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

  const fileName = '../data/placement-data.json';

  const formatted = prettier.format(JSON.stringify(result), {
    ...prettierConfig,
    parser: 'json'
  });
  fs.writeFile(path.join(__dirname, fileName), formatted, function (err) {
    if (err) return console.log(err);
    console.log(`generated file > ${fileName}`);
  });

  return result;
};

getAllAlumnisData();
