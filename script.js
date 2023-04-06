// ---------------------------------------------------#1
// function small(a,b) {
// 	if (a<b) {
// 		return a;
// 	} else {
// 		return b;
// 	}
// }
// console.log(small(6,6));
// ---------------------------------------------------#2
// let num = Number(prompt('введите число'));
// function chetNechet(a) {

// 	if (num % 2 === 0) {
// 		return 'число четное';
// 	} else {
// 		return 'число не четное';
// 	}
// }
// alert(chetNechet());
// ---------------------------------------------------#3
// let num = Number(prompt('введите число'));
// function squere(num) {
// 	console.log(num**2);
// }
// function squere2(num) {
// 	return num=num**2;

// }
// squere(num);
// console.log(`возврат ${squere2(num)}`);
// ---------------------------------------------------#4
// function age() {
// 	const years = (prompt('Введите сколько вам лет'));
// 	if (years < 0) {
// 		alert('Вы ввели не правильное число');
// 	}
// 	else if (years > 0 && years < 12){ 
// 			alert('Привет, друг!');
// 		}
// 		else{
// 			alert('Добро пожаловать!');
// 		} 
// 	}
// age();
// ---------------------------------------------------#5
// let num1 = Number(prompt('введите первое число'));
// let num2 = Number(prompt('введите второе число'));

// function checkNum(a,b) {
// 	if (isNaN(a) || isNaN(b)) {
// 		alert('Одно или оба значения не являются числом');
// 	} else {
// 		res = a+b;
// 		alert (`сумма равна ${res}`);
// 	}
// }
// checkNum(num1,num2);
// ---------------------------------------------------#6
// function checkNum(res) {
// 	num = Number(prompt('введите первое число'));
// 	if (isNaN(num)) {
// 		alert('Введеное значение не является числом');
// 	} else {
// 		res = Math.pow(num, 3);
// 		alert (`${num} в кубе, равно ${res}`);
// 	}
// }
// checkNum();
// ---------------------------------------------------#7
// function getCircleArea() {
// 	return this.radius**2 * Math.PI;
// }
// function getCirclePerimeter() {
// return this.radius*Math.PI*2;
// }
// const circle1 = {
// 	radius: 5,
// 	getArea: getCircleArea,
// 	getPerimeter: getCirclePerimeter
// };
// const circle2 = {
// 	radius: 8,
// 	getArea: getCircleArea,
// 	getPerimeter: getCirclePerimeter
// };
// console.log(`Площадь первого круга равна ${circle1.getArea()} у.е.`);
// console.log(`Периметр первого круга равна ${circle1.getPerimeter()} у.е.`);
// console.log(`Площадь второго круга равна ${circle2.getArea()} у.е.`);
// console.log(`Периметр второго круга равна ${circle2.getPerimeter()} у.е.`);
function timeYear(mounth) {
    mounth = Number(prompt('Введите порядковый номер месяца'));
    if (mounth>=3 && mounth<=5) {
        alert('Сейчас весна');
    } else 
    if (mounth>=6 && mounth<=8) {
        alert('Сейчас лето');
    }
    else
    if (mounth>=9 && mounth<=11 ) {
        alert('Сейчас осень');
    }    
    else
    if (mounth===12 || mounth===1 || mounth===2) {
        alert('Сейчас зима');
    }
    else
    alert('Ошибка ввода, попробуйте ещё раз');
}