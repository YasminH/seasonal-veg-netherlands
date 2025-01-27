export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("img");
}

export const config = {
  dir: {
    input: "views",
    output: "dist",
  },
};
