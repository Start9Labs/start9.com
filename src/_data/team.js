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
      position: "co-founder & CEO",
      avatar_url: "https://avatars.githubusercontent.com/u/9935159?v=4",
      blurb: "Passionate leader by example with 12 years experience building products, teams, and companies. Matt is the founder and developer of WorkBlast, the co-creator of Borker, and the co-architect and former CTO of SALT Lending."
    },
    {
      name: "Aiden McClelland",
      position: "co-founder & lead developer",
      avatar_url: "https://avatars.githubusercontent.com/u/3732071?v=4",
      blurb: "Aiden is an expert developer with over a decade of experience building software applications from scratch. He specializes in security, blockchain-based technologies, and performance tuning in low resource environments. Aiden possesses a highly-advanced understanding of computer science and is skilled across an incredible spectrum of languages, frameworks, and technologies."
    },
    {
      name: "Lucy Cifferello",
      position: "developer",
      avatar_url: "https://avatars.githubusercontent.com/u/12953208?v=4",
      blurb: "Lucy is an experienced full stack developer and exceptional design resource with a background in psychology and art. Her understanding of cognition and behavior, the concepts of design, and the processes of software development lend to a multidisciplinary approach to solving both UX and logic problems. This adeptness is expressed in her ability to maneuver across teams, contributing not only to the development stack, but also to project management, product design, and interface design."
    },
    {
      name: "Mariusz Kogen",
      position: "service packager",
      avatar_url: "https://avatars.githubusercontent.com/u/3606313?v=4",
      blurb: "Mariusz is an early technology enthusiast and adopter who, after a long break in search of self-consciousness and freedom, decided to return and actively support the idea of digital sovereignty and the tools that are being built to free sovereign individuals."
    },
    {
      name: "Bluj",
      position: "backend developer",
      avatar_url: "https://avatars.githubusercontent.com/u/2364004?v=4",
      blurb: "BluJ is a senior software engineer and privacy enthusiast with over a decade of software development experience. Having worked at both S&P 500 companies and startups, he brings an advanced expertise of developing sophisticated and well-tested software."
    },
    {
      name: "David",
      position: "communications lead",
      avatar_url: "https://avatars.githubusercontent.com/u/39687477?v=4",
      blurb: "David has been working with Open Source tools for over 15 years with a focus on education and practical implementation. With one foot in development and another in the community, he ensures that engineering priorities are in sync with real-world needs, and that technological challenges are commonly understood. He also has over a decade of experience as a community organizer. David helps The People declare their sovereignty with Freedom-respecting technologies."
    },
    {
      name: "Kiara",
      position: "operations lead",
      avatar_url: "https://pbs.twimg.com/profile_images/1552349185332064256/hIbrPv8z_400x400.jpg",
      blurb: "Kiara has nearly a decade of experience in strategic operations spanning supply chain and logistics, business operations, and marketing and customer ops. Kiara has worked with early-stage and scaling startups as well as large corporations in both managerial and independent contributor roles. Her diverse background makes her a strong generalist and out-of-the-box problem solver. As such, Kiara is an integral part of Start9's supply chain operations, fulfillment and order management, support, event management, and partnerships."
    },
    {
      name: "Chris",
      position: "developer and service packager",
      avatar_url: "https://avatars.githubusercontent.com/u/7445670?v=4",
      blurb: "Chris is on a mission to bring the Lightning Network to the masses, and believes embassyOS is the best way to achieve this. In his view, the most important bottleneck in the bitcoin revolution is the democratization of knowledge, so he works tirelessly to mine the bitcoin ecosystem for knowledge and share it with others. His main area of expertise is packaging services for embassyOS and he is the lead maintainer on several services."
    },
    {
      name: "Lex",
      position: "community outreach and content creation",
      avatar_url: "https://avatars.githubusercontent.com/u/45926711?v=4",
      blurb: "Lex joined Start9 after voluntarily creating guides and videos for Start9 to benefit the community. Since joining the team, he has become a valuable support resource, community advocate, and consistent content creator in the form of videos, virtual events, and documentation."
    },
    {
      name: "Dread",
      position: "service packaging and community outreach",
      avatar_url: "https://avatars.githubusercontent.com/u/34528298?v=4",
      blurb: "Dread comes to Start9 as an established Bitcoin, Lightning Network, and Privacy evangelist. He has a talent for talking about technology in an approachable and impactful manner. At the core, Dread is an entrepreneur and full-time learner. His tinkering and experimentation have resulted in him becoming a lead service packager and documentation guide developer."
    },
    {
      name: "Rich",
      position: "accounting",
      avatar_url: "https://avatars.githubusercontent.com/u/53387992?s=200&v=4",
      blurb: "Rich has experience in crypto-accounting for businesses, applying his years of accounting experience to businesses who transact in bitcoin. He is currently augmenting these skills by learning software development though a full time education program."
    },
    {
      name: "George",
      position: "support and community outreach",
      avatar_url: "https://avatars.githubusercontent.com/u/106188942?v=4",
      blurb: "George has nearly two decades of experience in Information Technology, from startups to large corporations, with a focus on computer networks and Linux. A privacy advocate with a philosophy of voluntarism, George helps people free themselves by assisting them in their deployment and use of Start9's empowering software."
    },
  ]
};