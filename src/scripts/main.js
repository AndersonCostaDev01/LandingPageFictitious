AOS.init(); // Inicia o AOS Animate

/*
    Criação das variáveis do contador de tempo até o evento 
*/
const eventDate = new Date("jul 03, 2025 08:00:00");
const timeStampEvent = eventDate.getTime();
const collectTime = setInterval(function() {
    const now = new Date();
    const timeStampCurrent = now.getTime();

    const distanceToEvent = timeStampEvent - timeStampCurrent; // calcula a distancia entre a dat atual e a data definida

    /* 
        Variaveis para converter Ms em Dias, Horas e Minutos 
    */
    const daysInMs = 1000 * 60 * 60 * 24;
    const hoursInMs = 1000 * 60 * 60;
    const minutesInMs = 1000 * 60;

    /*
        Converte de tempo em Ms para tempo em Dias, Horas e Minutos e coloca dentro de variaveis 
    */
    const daysToEvent = Math.floor(distanceToEvent / daysInMs);
    const eventHours = Math.floor((distanceToEvent % daysInMs) / hoursInMs);
    const minutesToEvent = Math.floor((distanceToEvent % hoursInMs) / minutesInMs);
    const secondsToEvents =  Math.floor((distanceToEvent % minutesInMs) / 1000);

    /*
        Escreve em tela a contagem regresiva ate o evento
    */
    document.getElementById('counter').innerHTML = `${daysToEvent}d ${eventHours}h ${minutesToEvent}m ${secondsToEvents}s `;

    if (distanceToEvent < 0) {
        clearInterval(collectTime);
        document.getElementById('event').innerHTML = `O evento foi realizado a <br> ${daysToEvent}d ${eventHours}h ${minutesToEvent}m ${secondsToEvents}s`;
    }
}, 1000);
