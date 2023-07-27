import '../style.css'
import { setupCounter} from './counter.js'
import {getToki} from "../jsutil/getToki.js";
const clickevent=function (){
    const site = document.querySelector("#inputsite").value
    main(site).then();
}
document.querySelector('#app').innerHTML = //html
`
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

