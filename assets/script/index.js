"use strict";

const buttonSave = document.getElementById('buttonSave');

class Cat {
    constructor(name, sex, age, breed, dryFood, wetFood, naturalFood) {
        this.name = name;
        this.sex = sex;
        this.age = age;
        this.breed = breed;
        this.dryFood = dryFood;
        this.wetFood = wetFood;
        this.naturalFood = naturalFood;
    }
}

// Вариант записи  номер 1

buttonSave.addEventListener('click', () => {
    const cat = new Cat ();
    const sex = document.querySelectorAll('.sex');
    const dryFood = document.getElementById('dryFood');
    const wetFood = document.getElementById('wetFood');
    const naturalFood = document.getElementById('naturalFood');

    cat.name = document.getElementById('catName').value;
    cat.age = document.getElementById('catAge').value;
    cat.breed = document.getElementById('catBreed').options[document.getElementById('catBreed').selectedIndex].value;

    for (let i of sex) {
        if (i.checked) {
            cat.sex = i.value;
        }
    }

    if (dryFood.checked) {
        cat.dryFood = true;
    }
    else {
        cat.dryFood = false;
    }

    if (wetFood.checked) {
        cat.wetFood = true;
    }
    else {
        cat.wetFood = false;
    }

    if (naturalFood.checked) {
        cat.naturalFood = true;
    }
    else {
        cat.naturalFood = false;
    }

    console.log(cat);
});


// Вариант записи  номер 2

// buttonSave.addEventListener('click', () => {
//     const name = document.getElementById('catName').value;
//     const age = document.getElementById('catAge').value;
//     let sex = document.querySelectorAll('.sex');
//     let dryFood = document.getElementById('dryFood');
//     let wetFood = document.getElementById('wetFood');
//     let naturalFood = document.getElementById('naturalFood');
//     const breed = document.getElementById('catBreed').options[document.getElementById('catBreed').selectedIndex].value;

//     for (let i of sex) {
//         if (i.checked) {
//             sex = i.value;
//         }
//     }

//     if (dryFood.checked) {
//         dryFood = true;
//     } else {
//         dryFood = false;
//     }

//     if (wetFood.checked) {
//         wetFood = true;
//     } else {
//         wetFood = false;
//     }

//     if (naturalFood.checked) {
//         naturalFood = true;
//     } else {
//         naturalFood = false;
//     }

//     const cat = new Cat(name, sex, age, breed, dryFood, wetFood, naturalFood);
//     console.log(cat);
// });




