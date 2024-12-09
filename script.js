const numberhours = document.querySelector('.numbers-hours');

const numberElement = [];
for (let i = 1; i <= 12; i++) {
    numberElement.push(
        `<span style="--index:${i};"><p>${i}</p></span>`
    );
}
numberhours.insertAdjacentHTML("afterbegin", numberElement.join(""));

function updateClock() {
    const now = new Date();

    const hours = now.getHours() % 12; 
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hoursDeg = (hours + minutes / 60) * 30; 
    const minutesDeg = (minutes + seconds / 60) * 6; 
    const secondsDeg = seconds * 6; 

    document.querySelector('.hours i').style.transform = `rotate(${hoursDeg}deg)`;
    document.querySelector('.minutes i').style.transform = `rotate(${minutesDeg}deg)`;
    document.querySelector('.seconds i').style.transform = `rotate(${secondsDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock(); 
