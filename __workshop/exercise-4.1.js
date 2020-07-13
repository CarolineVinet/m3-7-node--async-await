const request = require("request-promise");

const dadJoke = {
  uri: "https://icanhazdadjoke.com/",
  headers: {
    Accept: "application/json",
  },
  json: true,
};

const getDadJoke = () => {
  return request(dadJoke).then((response) => {
    return response.joke;
  });
};

// 4.1
//getDadJoke().then((data) => console.log(data));

module.exports = { getDadJoke };
