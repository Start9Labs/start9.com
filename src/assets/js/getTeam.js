const fetch = require("node-fetch");
module.exports = async function() {
return fetch(url)
        .then(res => res.json()) // node-fetch option to transform to json
        .then(json => {
          return {
            teamMembers: json
          };
        }).then(json => console.log(json));;
    }