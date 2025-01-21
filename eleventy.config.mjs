export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
}

export const config = {
  dir: {
    input: "views",
    output: "dist",
  },
};
