import {load} from "cheerio";

export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
export async function getToki(url) {
  var $;
  await fetch(url).then((i) => {
    return i.text()
  }).then((i)=>{$ = load(i)},null,false)
  return $("h1").text();
}