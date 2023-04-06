// let numbers = [1 , 2 , 3 , 5];
// console.log(numbers);
// numbers[3]=4;
// numbers[4]=5;
// const nameUser = ['alex', 'dima', 'sergey'];
// console.log(nameUser);
// nameUser[nameUser.length] = 'John'; //добавление в конец массива , тоже самое если бы мы написали [3]
// console.log(numbers);
// console.log(nameUser);
// ---------------------------------------------------
// const numbs = [2, 4, 5, 6, 8];

// console.log(numbs[0]); // 2
// console.log(numbs[1]); // 4
// console.log(numbs[2]); // 5
// console.log(numbs[3]); // 6
// console.log(numbs[4]); // 8
// ---------------------------------------------- то же самое только короче
// const numbs = [2, 4, 5, 6, 8];

// for (let i = 0; i < numbs.length; i++) {
// 	console.log(numbs[i]);
// }
// -------------------------------------------------
// Также в JS существует метод forEach(), с помощью которого мы можем перебирать элементы массива:
// const numbs = [2, 4, 5, 6, 8];

// numbs.forEach((el) => {
// 	console.log(el);
// });
// ------------------------------------------Теперь наш вывод содержит и индекс элемента, и сам элемент.
// const numbs = [2, 4, 5, 6, 8];

// numbs.forEach((el, index) => {
// 	console.log(`${index}: ${el}`);
// });
// -----------------------------------------------------
// let greetings='hello';
// greetings = greetings.split('');
// console.log(greetings);
// greetings = greetings.sort();
// console.log(greetings);
// greetings = greetings.join('');
// console.log(greetings);
//==================================================
// let word = ('привет=как=дела');
// word=word.split('=');
// console.log(word);
// word=word.sort();
// console.log(word);
// word=word.join(' ');
// console.log(word);
//============================================
// let products = ['кресло' , 'стул' , 'стол'];
// products= products.pop();
// console.log(products);
// products = products.push('комод');
// console.log(products);
// ==========================================
// let products = ['кресло' , 'стул' , 'стол'];
// products = products.push('комод');
// console.log(products);
// ===========================
// const salary = [45000, 39000, 105000, 76000, 77000];

// const totalSalary = salary.reduce((a, b) =>a+b);
// console.log(totalSalary);
// =========================многомерный массив
// let arr = [
//     [3, 2, 1],
//     [4, 5, 2],
//     [8, 6, 7],
// ];
// console.log(arr);
// console.log(arr[0] [0]);
// ------------------------------------------
// let products = ['кресло' , 'стул' , 'стол'];
// for (let item of products) {
//     console.log(item);
// }
// let arr = [
//     [3, 2, 1],
//     [4, 5, 2],
// ];
//     for (let arrIn of arr) { //где arrIn это элементы массивов [3,2,1] и [4,5,2] 
//         for (let element of arrIn) { // element элементы дочерхних массивов 3,2,1 и 4,5,2
//             console.log(element);
//         }
//     }
// ==============================================поиск искомого элемента
// let numbers = [1,2,3,4,5,6,7,8,9];
// let num = Number(prompt('введите число для поиска массиве'));
// search = numbers.includes(num);
// if (search===true) {
//     console.log(search);//если находит 5 возвращает значение true
// } else {
//     alert(` элемента ${num} нет`);//если находит 5 возвращает значение true
// }
// ======================================== spread - ...
// let arrMax = [1,3,4,5,6,33,6,7];
// let max=Math.max(...arrMax);
// console.log(max);
// console.log(arrMax);
// ===================================== rest использование остатка в массиве
// let arrSum = [1,3,4,5,6,33,6,7];
// const sum =(a,b,c, ...rest) => {
//     let result = a+b+c;

//     console.log(result);
//     console.log(rest);
// }
// console.log(sum(...arrSum));
const newspaper = {
	sports: {
		title: 'ARod Hits Home Run',
		writers: ['Miramon Nuevo', 'Rick Reilly', 'Woddy Paige'],
	},
	business: {
		title: 'GE Stock Dips Again',
		writers: ['Adam Smith', 'Albert Humphrey', 'Charles Handy'],
	},
	movies: {
		title: 'Superman Is A Flop',
		writers: ['Rogert Ebert', 'Andrew Sarris', 'Wesley Morris'],
	},
};

console.log(newspaper.sports.title); // ARod Hits Home Run
console.log(newspaper.business.writers[0]); // Adam Smith
console.log(newspaper['movies']['title']); // Superman Is A Flop
