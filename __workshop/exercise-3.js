// Exercise 3
// ----------

const doublesLater = (num) => {
  return new Promise((resolve, reject) => {
    const sum = num * 2;
    setTimeout(() => {
      console.log(sum);
      resolve(sum);
    }, 2000);
  });
  // 1. waits 2 seconds (You could console a message here. It might make the 2 second wait easier ;)
  // 2. returns the double of the num
};

// 3. handleSum function (async/await)
const handleSum = async (num) => {
  try {
    const firstDouble = await doublesLater(num);
    const secondDouble = await doublesLater(firstDouble);
    const thirdDouble = await doublesLater(secondDouble);
    return thirdDouble;
  } catch {}
};

// 4. verification
handleSum(10).then((data) => console.log("the result is", data));
