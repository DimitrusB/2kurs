// // --------------------------------------1
// let password = 'пароль';
// let reqPass = String(prompt('Введите пароль'));
// reqPass = reqPass.toLocaleLowerCase();
// if (reqPass === password) {
//     console.log("Пароль введен верно");    
// } else {
//     console.log("Пароль введен неправильно");
// }
// // --------------------------------------2
// let c = Number(prompt('Введите число'));
// if (c>0 && c<10) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }
// // --------------------------------------3
// let d = Number(prompt('Введите число'));
// let e = Number(prompt('Введите число'));
// if (d > 100 || e > 100) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');   
// }
// // --------------------------------------4
// let a = '2';
// let b = '3';
// alert (parseInt(a) + parseInt(b));
// // --------------------------------------5
// let monthNumber = Number(prompt('Введите номер месяца в году, для определения сезона'));
// switch (monthNumber) {
//     case 1:
//         console.log('Сейчас зима');
//         break;
//     case 2:
//         console.log('Сейчас зима');
//         break;
//         case 1:
//     case 3:
//         console.log('Сейчас весна');
//         break;
//     case 4:
//         console.log('Сейчас весна');
//         break;
//     case 5:
//         console.log('Сейчас весна');
//         break;
//     case 6:
//         console.log('Сейчас лето');
//         break;
//     case 7:
//         console.log('Сейчас лето');
//         break;
//     case 8:
//         console.log('Сейчас лето');
//         break;
//     case 9:
//         console.log('Сейчас осень');
//         break;
//     case 10:
//         console.log('Сейчас осень');
//         break;
//     case 11:
//         console.log('Сейчас осень');
//         break;
//     case 12:
//         console.log('Сейчас зима');
//         break;
//     default:
//         console.log('Ошибка: такого месяца нет!!!');
//         break;
// }
// // --------------------------------------6 DOP
// let num = Number(prompt('Пожалуйста, введите любое число'));
// let result = num % 2;
// if (result != 0) {
//     alert('Число нечетное')
// } else {
//     alert('Число четное')    
// }
// // --------------------------------------7 DOP
// let clientOS = Number(prompt('Какую ОС вы тспользуете (0 — iOS, 1 — Android)'));
// if (clientOS === 1) {
//     alert('Установите версию приложения для Android по ссылке');
// } else if (clientOS === 0) {
//     alert('Установите версию приложения для iOS по ссылке');
// }
// else {
//     alert('Не верный выбор');
// }
// --------------------------------------8 DOP
// let clientOS = Number(prompt('Какую ОС вы тспользуете (0 — iOS, 1 — Android)'));
// let clientDeviceYear = Number(prompt('Год выпуска вашего телефона'));
// if (clientOS === 1 && clientDeviceYear >= 2015) {
//     alert('Установите версию приложения для Android по ссылке');
// } else if (clientOS === 0 && clientDeviceYear >= 2015) {
//     alert('Установите версию приложения для iOS по ссылке');
// }
// else if (clientOS === 1 && clientDeviceYear <= 2015) {
//     alert('Установите облегченную версию приложения для Android по ссылке');
// }
// else if (clientOS === 0 && clientDeviceYear <= 2015) {
//     alert('Установите облегченную версию приложения для iOS по ссылке');
// }
// else {
//     alert('Не верный выбор');
// }