import '../style.css'
import javascriptLogo from '../javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter} from './counter.js'
import {getToki} from "../jsutil/getToki.js";
const clickevent=function (){
    const site = document.querySelector("#inputsite").value
    main(site).then();
}
document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    
    <div class="text"></div>
        

  </div>
`
const main = async (sourcesite) =>{
    var text ="";
    const parsed = await getToki(sourcesite,"#novel_content > div:nth-child(2)>p")

    parsed.toArray().forEach((i)=>{text+=`${(i.children[0].data)}\n`})
    document.querySelector(".text").innerText = text
    console.log(text)

};
setupCounter(document.querySelector('#counter'))
document.querySelector("#btn").addEventListener("click",()=>{clickevent()})

