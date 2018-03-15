// python-shell allows us to execute python models inside our nodejs application

const { promisify } = require("util");
// python-shell is callback based, convert it to promise-based
let python_shell_run = promisify(require("python-shell").run); // we're turning run into a promise based method

export function sentilize(sentence) {
  return new Promise((resolve, reject) => {
    let options = {
      scriptPath: "src/",
      args: ["-s", '"' + sentence + '"']
    };
    python_shell_run("vader.py", options)
      .then(results => {
        let sentiment = results[0]; //pos,neg,neu
        let resp = { sentiment: "Neutral" };
        if (sentiment === "neg") {
          resp.sentiment = "Negative";
        } else if (sentiment === "pos") {
          resp.sentiment = "Positive";
        }
        resolve(resp);
      })
      .catch(err => {
        reject(err);
      });
  });
}
