window.onload = function () {

    let input = document.getElementById('input');
    let addButton = document.getElementById('addButton');
    let shoppingListBox = document.getElementById('shoppingListBox');
    let clearButton = document.getElementById('clearButton');
    let errorP = document.getElementById('errorP');
    let storage = localStorage.shoppingArr;

    //array
    let shoppingArr = []



    if (storage != undefined) {


        shoppingArr = JSON.parse(localStorage.getItem('shoppingArr'))

        for (i = 0; i < shoppingArr.length; i++) {
            let newShopping = document.createElement('li')
            newShopping.setAttribute('class', 'newShoppingList')
            newShopping.dataset.index = i;
            newShopping.textContent = shoppingArr[i].name;
            shoppingListBox.appendChild(newShopping)

            //create delete button
            let deleteButton = document.createElement('img');
            deleteButton.setAttribute('class', 'deleteButton');
            deleteButton.src = 'trash.svg'
            newShopping.appendChild(deleteButton);

            deleteButton.addEventListener('click', (e) => {
                let element = e.currentTarget;
                let x = Number(element.dataset.index);


                shoppingArr.splice(x, 1)
                newShopping.remove();

                let list = document.querySelectorAll('.newShoppingList');

                list.forEach(function (listItem, i) {
                    listItem.dataset.index = i;

                    let listItemDelete = listItem.querySelector(".deleteButton");
                    listItemDelete.dataset.index = i;


                });
                localStorage.setItem("shoppingArr", JSON.stringify(shoppingArr));
            })



            newShopping.style.textDecoration = shoppingArr[i].bValue ? "none" : "line-through"


            newShopping.addEventListener('click', (e) => {

                const element = e.currentTarget;
                const i = Number(element.dataset.index);


                if (shoppingArr[i].bValue) {
                    shoppingArr[i].bValue = false;
                }
                else {
                    shoppingArr[i].bValue = true;
                }

                //console.log(shoppingArr[i].bValue)
                newShopping.style.textDecoration = shoppingArr[i].bValue ? "none" : "line-through"
                localStorage.setItem("shoppingArr", JSON.stringify(shoppingArr));
            })
        }
    }



    //button for add 
    addButton.addEventListener('click', () => {

        let obj = {
            'name': input.value,
            'bValue': true
        }

        // error empty input
        if (input.value === '') {
            //write  errorP
            errorP.style.display = 'block'
        } else {
            //add the object to the shoppingArr
            shoppingArr.push(obj)

            // array lenght 
            // let arrLenght = shoppingArr.length

            //remove errorP
            errorP.style.display = 'none'



            //create element list
            let newShopping = document.createElement('li')
            newShopping.setAttribute('class', 'newShoppingList')
            newShopping.textContent = input.value;

            shoppingListBox.appendChild(newShopping)
            localStorage.setItem("shoppingArr", JSON.stringify(shoppingArr));
            localStorage.setItem("obj", JSON.stringify(obj));

            //create delete button
            let deleteButton = document.createElement('img');
            deleteButton.setAttribute('class', 'deleteButton');
            deleteButton.src = 'trash.svg'
            newShopping.appendChild(deleteButton);

            for (i = 0; i < shoppingArr.length; i++) {
                deleteButton.dataset.index = i;
            }

            deleteButton.addEventListener('click', (e) => {
                let element = e.currentTarget;
                let x = Number(element.dataset.index);


                shoppingArr.splice(x, 1)
                newShopping.remove();

                let list = document.querySelectorAll('.newShoppingList');

                list.forEach(function (listItem, i) {
                    listItem.dataset.index = i;

                    let listItemDelete = listItem.querySelector(".deleteButton");
                    listItemDelete.dataset.index = i;
                    localStorage.setItem("shoppingArr", JSON.stringify(shoppingArr));

                });
            })

            //click to line-through
            newShopping.addEventListener('click', () => {


                // newShopping.style.textDecoration = 'line-through'
                if (obj.bValue === true) {
                    obj.bValue = false
                } else {
                    obj.bValue = true
                }

                if (obj.bValue === false) {
                    newShopping.style.textDecoration = 'line-through'
                } else {
                    newShopping.style.textDecoration = 'none'
                }

                localStorage.setItem("obj", JSON.stringify(obj));
                localStorage.setItem("shoppingArr", JSON.stringify(shoppingArr));



            })

            input.value = '';







        }



    })
    //button for clear!
    clearButton.addEventListener('click', () => {


        //remove shoppinglist
        shoppingListBox.innerHTML = ''
        //remove errorP
        errorP.style.display = 'none'
        //reset shoppingArr
        shoppingArr.length = 0;
        //reset localStorage
        localStorage.clear('shoppingArr')

    })

}
