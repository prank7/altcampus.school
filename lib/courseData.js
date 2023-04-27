import axios from 'axios';

const url = 'https://launchpad.altcampus.com/api/v1/s/public/tracks';

export const getCourses = async () => {
  var res = await axios.get(url);
  return res.data;
};

export const getCourseSlugs = async() => {
  var res = await axios.get(url);

  return res.data.tracks.map((course) => {
    return {
      params: {
        slug: course.slug,
      },
    };
  });
}

export const getCoursesWithBasicInfo = async() => {
  var courses = await getCourses();
  
  var coursesWithBasicInfo = courses.tracks.map((c, i) => {
    return {
      name: c.name, slug: c.slug, image: c.image, pricing: c.pricing, isMiniTrack: c.isMiniTrack, description: c.description
    }
  });
  
  return coursesWithBasicInfo;
}

export const getCourseData = async(slug) => {
  var res = await axios.get(url);
  var index = res.data.tracks.findIndex((t) => t.slug == slug);
  var course = res.data.tracks[index];

  var fullTracks = res.data.tracks.filter((t) => !t.isMiniTrack);

  // finding parent tracks of all specificSkills (Mini Courses) after removing unix and git
  var commonModuleName = 'Unix & Git';
  if(course.isMiniTrack) {
    course.parentTracks = [];
    var uniqueModulesInTheCourse = course.modules.filter(
      (m) => m.name != commonModuleName
    ); 
    
    fullTracks.forEach((track, j) => {
      track.deflatedModules = track.modules.map((m) => m._id)
      if(track.deflatedModules.indexOf(uniqueModulesInTheCourse[0]._id) !== -1) {
        course.parentTracks.push(track);
      }
    })
  }

  return course;
}

