module.exports = relatedTag;

function relatedTag(options) {
  return (files, metalsmith, done) => {
    setImmediate(done);

    Object.keys(files).forEach((file) => {
      let related = [];
      let context = file;
      let fileData = files[file];

      if (typeof fileData.category == 'undefined') { return; }

      Object.keys(files).forEach((file) => {
        if (typeof files[file].category == 'undefined') { return; }

        if (
          fileData.category === files[file].category &&
          file != context
        ) {
          related.push(files[file]);
        }
      });

      files[file].related = related.splice(0, 3);
    });
  }
}
