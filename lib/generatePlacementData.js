const fs = require('fs');
const path = require('path');
var Airtable = require('airtable');
require('dotenv').config();
const prettier = require('prettier');
const { downloadAndUploadImage } = require('../utils/uploadImage');

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
        async function page(records, fetchNextPage) {
          const recordsToSave = await Promise.all(
            records.map(async function (record) {
              const image = await Promise.all(
                record.get('Image').map(async (image) => {
                  const uploadedImageUrl = await Promise.all([
                    downloadAndUploadImage(
                      image?.url,
                      `${image?.id}-original-${image?.filename}`
                    ),
                    downloadAndUploadImage(
                      image?.thumbnails.small.url,
                      `${image?.id}-small-${image?.filename}`
                    ),
                    downloadAndUploadImage(
                      image?.thumbnails.large.url,
                      `${image?.id}-large-${image?.filename}`
                    ),
                    downloadAndUploadImage(
                      image?.thumbnails.full.url,
                      `${image?.id}-full-${image?.filename}`
                    )
                  ]);

                  const [originalImage, smallImage, largeImage, fullImage] =
                    uploadedImageUrl;

                  return {
                    ...image,
                    url: originalImage,
                    thumbnails: {
                      ...image.thumbnails,
                      small: {
                        ...image.thumbnails.small,
                        url: smallImage
                      },
                      large: {
                        ...image.thumbnails.large,
                        url: largeImage
                      },
                      full: {
                        ...image.thumbnails.full,
                        url: fullImage
                      }
                    }
                  };
                })
              );

              return {
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
                image: image || {},
                experineceAtAltCampus:
                  record.get('Experience at AltCampus') || '',
                interviewLink: record.get('Interview Link') || '',
                graduationYear: record.get('Graduation Year') || '',
                companyWebsite: record.get('Company Website') || ''
              };
            })
          );
          recordsToSave.forEach((record) => {
            arr.push(record);
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
