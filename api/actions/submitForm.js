
export default function submitForm(req) {

  const obj = {};


  if (getRandomInt(1, 3) === 1) {
    obj._error = "There's been some weird error.";
  } else {
    obj.data = {message: "foo bar"};
  }

  return new Promise(resolve => setTimeout(() => resolve(obj), 1000))
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}