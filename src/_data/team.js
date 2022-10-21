// if you uncomment these sections, you can fetch data from the github api on build
//const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
  // let url = "https://api.github.com/orgs/start9labs/public_members";

  // /* This returns a promise */
  // return EleventyFetch(url, {
  //   duration: "1d", // save for 1 day
  //   type: "json"
  // });

  return [
    {
      name: "Matt Hill",
      login: "",
      position: "co-founder & CEO",
      avatar_url: "https://avatars.githubusercontent.com/u/9935159?v=4",
      url: "https://github.com/MattDHill",
      blurb: "Passionate leader by example with 12 years experience building products, teams, and companies. Matt is the founder and developer of WorkBlast, the co-creator of Borker, and the co-architect and former CTO of SALT Lending."
    },
    {
      name: "Keagan McClelland",
      login: "ProofOfKeags",
      position: "co-founder & director of technology",
      avatar_url: "https://avatars.githubusercontent.com/u/4033651?v=4",
      url: "https://github.com/ProofOfKeags",
      blurb: "Keagan has a decade of software development experience with expertise in cryptography, software security, formal methods, open-blockchain technology, and functional programming. His experience runs the gambit from large projects at the Department of Defense and Amazon, as well as small startups like Ionic Security and SALT Lending."
    },
    {
      name: "Aiden McClelland",
      login: "dr-bonez",
      position: "co-founder & lead developer",
      avatar_url: "https://avatars.githubusercontent.com/u/3732071?v=4",
      url: "https://github.com/dr-bonez",
      blurb: "Aiden is an expert developer with over a decade of experience building software applications from scratch. Aiden specializes in security, blockchain-based technologies, and performance tuning in low resource environments. Aiden possesses a highly-advanced understanding of computer science and is skilled across an incredible spectrum of languages, frameworks, and technologies."
    },
    {
      name: "Lucy Cifferello",
      login: "elvece",
      position: "developer",
      avatar_url: "https://avatars.githubusercontent.com/u/12953208?v=4",
      url: "https://github.com/elvece",
      blurb: "Having studied cognition and behavior, the processes of art, concepts of design, and the language of code, Lucy crafts with fused intent. Her background in psychology lends to a multidisciplinary approach to solving problems in both the logical and experiential realms, and this adeptness is expressed in her abilitiy to maneuver across the development stack."
    },
  ]
};