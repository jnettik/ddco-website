module.exports = serviceCaseStudies;

function serviceCaseStudies(options) {
  return (files, metalsmith, done) => {
    setImmediate(done);

    Object.keys(files).forEach((file) => {
      let studies = [];
      let context = file;
      let fileData = files[file];

      if (fileData.collection.includes('services')) {
        Object.keys(files).forEach((file) => {
          if (typeof files[file].service == 'undefined') { return; }
          if (files[file].collection.includes('services')) { return; }

          if (files[file].service === fileData.service) {
            studies.push(files[file]);
          }
        });
      }

      files[file].studies = studies;
    });
  }
}
