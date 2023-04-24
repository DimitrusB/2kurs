// // person — это объект
// const person = {
//     // name, family, age — это свойства, или ключи, объекта person
//     name: 'Анатолий',
//     age: 29,
//     // Объекты могут быть вложенными, в ключе family лежит объект со свойствами mother, father и children
//     family: {
//        mother: 'Елена',
//        father: 'Антон',
//        // В ключах объекта могут лежать массивы, в ключе children лежат дети Анатолия
//        children: ['Варвара', 'Леонид']
//    } 
//  };
 
//  // Так мы получаем значение свойства объекта
//  console.log(person.name); // => Анатолий
//  console.log(person.family.father); // => Антон
 
//  // Так мы можем изменить значение свойства в объекте
//  person.name = 'Иван'
//  console.log(person.name); // => Иван
 
 
//  // Так мы вызываем метод join у массива children
//  console.log(person.family.children.join(' и ')); // => Варвара и Леонид
 
//  // Так мы подставляем значения в строку с помощью шаблонных строк
//  console.log(`Имя: ${person.name}. Дети: ${person.family.children.join(' и ')}`); // => Имя: Иван. Дети: Варвара и Леонид
// //  ===========================================
// const buttonElement = document.getElementById("add-button");

// buttonElement.addEventListener("click", () => {
//   alert("Меня нажали");
// });
// const listElement = document.getElementById("list");

// // Выводит в консоль HTML-содержимое элемента списка
// console.log(listElement.innerHTML)
    // 1. Dom дерево
    // 2. Поиск элментов
    const buttonElement = document.getElementById("add-button");
    const listElement = document.getElementById("list");
    const nameInputElement = document.getElementById("name-input");
    const colorInputElement = document.getElementById("color-input");

    // 3. Добавить обработчик клика
    buttonElement.addEventListener("click", () => {
      // 4. Добавляет и убирает классы с элементов
      nameInputElement.classList.remove("error");

      // 6. Читаем значение аттрибутов html элементов
      if (nameInputElement.value === "") {
        nameInputElement.classList.add("error");
        return;
      }

      // 5. Управление внутренним html содержимым
      const oldListHtml = listElement.innerHTML;
      listElement.innerHTML =
        oldListHtml +
        `<li>
          ${nameInputElement.value}, любимый цвет <span style="color: ${colorInputElement.value}"> ${colorInputElement.value}</span>
        </li>`;

      nameInputElement.value = "";
    });
// ====================================