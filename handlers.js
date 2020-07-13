const { getGeekJoke } = require("./__workshop/exercise-4.3");
const { getDadJoke } = require("./__workshop/exercise-4.1");
const { getTronaldDumpQuote } = require("./__workshop/exercise-4.2");

const handleJoke = async (req, res) => {
  const jokeType = req.params.type;

  if (jokeType === "geek") {
    res.send(await getGeekJoke());
  } else if (jokeType === "dad") {
    res.send(await getDadJoke());
  } else if (jokeType === "donald") {
    res.send(await getTronaldDumpQuote());
  }
};
module.exports = { handleJoke };
