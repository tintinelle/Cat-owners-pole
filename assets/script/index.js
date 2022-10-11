"use strict";

const buttonSave = document.getElementById('buttonSave');

buttonSave.addEventListener('click', (event) => {
    // предотвращаем перезагрузку страницы
    event.preventDefault();

    // const form = document.getElementById('form');

    fetch("https://httpbin.org/post", {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.log(error));
});


// Задание с созданием класса Cat (неделя 19)

// class Cat {
//     constructor(name, sex, age, breed, food) {
//         this.name = name;
//         this.sex = sex;
//         this.age = age;
//         this.breed = breed;
//         this.food = food;
//     }
// }

// buttonSave.addEventListener('click', (e) => {
//     const name = document.getElementById('catName').value;
//     const age = document.getElementById('catAge').value;
//     let sex = document.querySelectorAll('.sex');
//     const breed = document.getElementById('catBreed').options[document.getElementById('catBreed').selectedIndex].value;
//     const food = document.getElementsByName('food');

//     const foodObj = {};

//     // предотвращаем перезагрузку страницы
//     e.preventDefault();

//     for (let i of sex) {
//         if (i.checked) {
//             sex = i.value;
//         }
//     }

//     // если мы хотим записать в объект разные значения ( key - это id импутов, они меняются в зависимости от того какой элемент находится внутри forEach)  то надо использовать такую запись, через квадратные скобки.
//     food.forEach(elem => {
//         const key = elem.id
//         foodObj[key] = elem.checked;
//     })

//     const cat = new Cat(name, sex, age, breed, foodObj);
//     console.log(cat);

// })