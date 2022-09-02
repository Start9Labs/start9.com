const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
  let url = "https://api.github.com/orgs/start9labs/public_members";

  /* This returns a promise */
  return EleventyFetch(url, {
    duration: "1d", // save for 1 day
    type: "json"    // we’ll parse JSON for you
  });
};