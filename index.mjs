import { prompt } from "./util.mjs"
import { compose, length, trim } from "ramda"

const countChars = (content) => `${content} has ${length(content)} characters.`

const p = prompt("What is the input string?")
p.run()
  .then(compose(console.log, countChars, trim))
  .catch((e) => console.error(e))
