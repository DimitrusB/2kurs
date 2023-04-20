// =============================#3
// самый оптимальный способ получения массива из строки (на мой взягляд) - это с помощью метода split(), есть несколько способ в зависимости от желаемого результата
// const str = 'Lorem ipsum dolor sit amet ? consectetur adipisicing elit. Illum esse,';
// const arr = str.split('');
// console.log(arr); //['L', 'o', 'r', 'e', 'm', ' ', 'i', 'p', 's', 'u', 'm', ' ', 'd', 'o', 'l', 'o', 'r', ' ', 's', 'i', 't', ' ', 'a', 'm', 'e', 't', ' ', '?', ' ', 'c', 'o', 'n', 's', 'e', 'c', 't', 'e', 't', 'u', 'r', ' ', 'a', 'd', 'i', 'p', 'i', 's', 'i', 'c', 'i', 'n', 'g', ' ', 'e', 'l', 'i', 't', '.', ' ', 'I', 'l', 'l', 'u', 'm', ' ', 'e', 's', 's', 'e', ','] в данном примере мы получим массив множества эллементов, для каждого симовола строки.


// const str = 'Lorem ipsum dolor sit amet ? consectetur adipisicing elit. Illum esse,';
// const arr = str.split(' '); //тут мы указали разделитель для массива
// console.log(arr);
// // ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', '?', 'consectetur', 'adipisicing', 'elit.', 'Illum', 'esse,']

// const str = 'Lorem ipsum dolor sit amet ? consectetur adipisicing elit. Illum esse,';
// const arr = str.split(' ', 5); //тут используем лимит равный 5
// console.log(arr);
// // ['Lorem', 'ipsum', 'dolor', 'sit', 'amet']

// const str = 'Lorem ipsum! dolor sit amet ? consectetur , adipisicing elit. Illum esse,';
// const arr = str.split(/[!,?,,,.]/);
// console.log(arr);
// // ['Lorem ipsum', ' dolor sit amet ', ' consectetur adipisicing elit', ' Illum esse', '']

// ТЕПЕРЬ (На мой взгляд!!!) менеее оптимальный варианты

// const str = 'Lorem ipsum dolor sit amet ? consectetur adipisicing elit. Illum esse,';
// const arr=[]; //создаем пустой массив для дальнейшей работы с ним
// for (const el of str) { //перебираем с пмощью цикла for..of строку
//    }
// //    arr.push(str[0]); //заносим в массим элемент по индексу
//    arr.push(...str); // можно с помощью rest оператора передать все символы в массив 
//    console.log(arr);


// =============================#4
// const numbers = [5,6,3,9,10, 44,5,3,5];

//   numbers.splice((numbers.length*0.5), 1); 

// console.log(numbers);




// ================================#5
// for (let i = 0; i < 10; i+2) { //произойдет зацикливание, и в конечном итоге закончится память. i+2 нет такого оператора инкремента (есть ++ увеличение на 1 и -- уменьшение на 1), тут если необходим шаг равный 2 , можно записать как i+=2
//     console.log(i);
//   }
// for (let i = 0; i < 10; i+=2) {
//     console.log(i);
//   } // на выходе получим 0,2,4,6,8 , 10 не будет, так как указано строго i строго меньше  10, чтобы вышла в консоле и 10 надо написать i<=10
