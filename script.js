window.onload = function () {

    let input = document.getElementById('input');
    let addButton = document.getElementById('addButton');
    let shoppingListBox = document.getElementById('shoppingListBox');
    let clearButton = document.getElementById('clearButton');
    let errorP = document.getElementById('errorP');
    let storage = localStorage.shoppingArr;
    let successToastr = document.getElementById('successToastr');
    let clearToastr = document.getElementById('clearToastr');
    let deleteToastr = document.getElementById('deleteToastr');


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

                //toastr delete
                deleteToastr.style.display = 'block'

                //delete toastr
                setTimeout(() => {
                    deleteToastr.style.display = 'none'

                }, "1500");

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
            errorP.style.display = 'none'

            //toastr add
            successToastr.style.display = 'block'

            //remove toastr
            setTimeout(() => {
                successToastr.style.display = 'none'

            }, "1500");


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

                //toastr delete
                deleteToastr.style.display = 'block'

                //delete toastr
                setTimeout(() => {
                    deleteToastr.style.display = 'none'

                }, "1500");

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
        //toastr
        if (shoppingArr.length !== 0) {
            clearToastr.style.display = 'block';
        }
        //remove toastr
        setTimeout(() => {

            clearToastr.style.display = 'none'

        }, "1500");

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
