export default async function(eleventyConfig) {

  // Map location of files directly, instead of the default of creating
  // a subdirectory for every file and naming it `index.html`.
  eleventyConfig.addGlobalData("permalink", () => {
    return (data) => `${data.page.filePathStem}.${data.page.outputFileExtension}`;
  });

  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");  

  return {
    dir: {
      input: "src",          // Input files location
      output: "dist",        // Output files location
      includes: "_includes", // Location for includes like layouts
      data: "_data"          // Location for global data files
    }
  };
};
