const clockCnotatiner = document.querySelector(".js-clock"),
 clockTitle = clockCnotatiner.querySelector("h1");

function getTime()
{
    const date = new Date();
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}
    getTime();
    setInterval(getTime, 1000);
