const numberhours = document.querySelector('.numbers-hours');

// Generar números del reloj
const numberElement = [];
for (let i = 1; i <= 12; i++) {
    numberElement.push(
        `<span style="--index:${i};"><p>${i}</p></span>`
    );
}
numberhours.insertAdjacentHTML("afterbegin", numberElement.join(""));

// Mover las manecillas
function updateClock() {
    const now = new Date();

    const hours = now.getHours() % 12; // Formato de 12 horas
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Calcular ángulos
    const hoursDeg = (hours + minutes / 60) * 30; // 360° / 12 horas
    const minutesDeg = (minutes + seconds / 60) * 6; // 360° / 60 minutos
    const secondsDeg = seconds * 6; // 360° / 60 segundos

    // Actualizar estilos
    document.querySelector('.hours i').style.transform = `rotate(${hoursDeg}deg)`;
    document.querySelector('.minutes i').style.transform = `rotate(${minutesDeg}deg)`;
    document.querySelector('.seconds i').style.transform = `rotate(${secondsDeg}deg)`;
}

// Actualizar cada segundo
setInterval(updateClock, 1000);
updateClock(); // Llamada inicial para no esperar el primer segundo
