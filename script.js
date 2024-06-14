let spanElem = document.querySelector("span");
let adviceElem = document.querySelector(".advice");
let btn = document.getElementsByClassName("btn")


async function adviceFind() {
    const URL = "https://api.adviceslip.com/advice";
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    spanElem.innerHTML = data.slip.id;
    adviceElem.innerHTML = `"${data.slip.advice}"`;
}




adviceFind();
