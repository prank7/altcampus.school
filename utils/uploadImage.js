const axios = require('axios');
const AWS = require('aws-sdk');

const DO_SPACES_ACCESS_KEY = process.env.DO_SPACES_ACCESS_KEY;
const DO_SPACES_SECRET_KEY = process.env.DO_SPACES_SECRET_KEY;
const DO_SPACES_BUCKET_NAME = process.env.DO_SPACES_BUCKET_NAME;

const s3 = new AWS.S3({
  endpoint: new AWS.Endpoint('https://sfo3.digitaloceanspaces.com'),
  accessKeyId: DO_SPACES_ACCESS_KEY,
  secretAccessKey: DO_SPACES_SECRET_KEY
});

async function downloadAndUploadImage(imageUrl, filename) {
  if (!imageUrl) return null;
  try {
    const response = await axios.get(imageUrl, {
      responseType: 'arraybuffer'
    });

    return new Promise((resolve, reject) => {
      s3.upload(
        {
          Bucket: DO_SPACES_BUCKET_NAME,
          Key: `placements/${filename}`,
          Body: response.data,
          ACL: 'public-read',
          ContentType: response.headers.get('content-type')
        },
        (err, data) => {
          if (err) {
            console.error('Error uploading image:', err);
            reject(err);
          } else {
            resolve(data.Location);
          }
        }
      );
    });
  } catch (error) {
    console.error('Error downloading image:', error);
  }
}

downloadAndUploadImage();

module.exports = { downloadAndUploadImage };
