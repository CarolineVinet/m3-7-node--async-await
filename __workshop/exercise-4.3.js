const request = require("request-promise");

let geekJoke = {
  url: "https://geek-jokes.sameerkumar.website/api?format=json",
  method: "GET",
};

const getGeekJoke = async () => {
  const response = await request(geekJoke);
  const data = JSON.parse(response);
  return data.joke;
};

getGeekJoke().then((data) => console.log(data));
