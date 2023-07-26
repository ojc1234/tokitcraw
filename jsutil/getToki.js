import {load} from "cheerio";

export async function getToki(url,path) {
    var $;
    await fetch(url).then((i) => {
        return i.text()
    }).then((i)=>{$ = load(i)}
    )
    return $(path);
}