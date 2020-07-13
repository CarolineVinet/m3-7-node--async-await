const request = require("request-promise");
const trumpQuote = {
  uri: "https://api.tronalddump.io/random/quote",
  headers: {
    Accept: "application/json",
  },
};

const getTronaldDumpQuote = async () => {
  const response = await request(trumpQuote);
  const data = JSON.parse(response);
  return data.value;
};

getTronaldDumpQuote().then((data) => console.log(data));
