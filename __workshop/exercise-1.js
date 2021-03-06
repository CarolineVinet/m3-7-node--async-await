// Exercise 1
// ------------

const makeAllCaps = (array) => {
  return new Promise((resolve, reject) => {
    array.every((word) => typeof word === "string")
      ? resolve(array.map((word) => word.toUpperCase()))
      : reject("Error: Not all items in the array are strings!");
  });
};

const sortWords = (array) => {
  return new Promise((resolve, reject) => {
    array.every((word) => typeof word === "string")
      ? resolve(array.sort())
      : reject("Error: Something went wrong with sorting words.");
  });
};

const textTransform = async (array) => {
  try {
    const firstPromise = await makeAllCaps(array);
    const secondPromise = await sortWords(firstPromise);
    //console.log(secondPromise);
  } catch (err) {
    console.log("ERROR", err);
  }
};

textTransform(["cucumber", "tomatos", "avocado"]);
textTransform(["cucumber", 44, true]);
