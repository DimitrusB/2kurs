
// ================================================
// const timer = (deadline) => {
//     if (isNaN(+deadline)) { // + - приводим значение к number, если это NaN,
//         console.log('Передано некорректное число'); // выводим сообщение
//         return; // выходим из функции
//     }

//     let time = deadline;
//     const interval = setInterval(() => {
//         time -= 1;
//         console.log(time);
//     }, 1000);

//     setTimeout(() => {
//         clearInterval(interval);
//         console.log('Время истекло!')
//     }, deadline * 1000)
// };

// const deadline = prompt('На сколько секунд вы хотите поставить таймер?');
// timer(deadline);
