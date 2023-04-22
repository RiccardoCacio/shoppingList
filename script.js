window.onload = function () {

    let input = document.getElementById('input');
    let addButton = document.getElementById('addButton');
    let shoppingListBox = document.getElementById('shoppingListBox');
    let clearButton = document.getElementById('clearButton');
    let errorP = document.getElementById('errorP');

    let storage= localStorage.shoppingArr;

  
   let shoppingArr=[]


    if(storage !=  undefined ){

        
        shoppingArr =  JSON.parse(localStorage.getItem('shoppingArr'))
        


            for (i=0; i<shoppingArr.length; i++){
                let oldShopping = document.createElement('li')
                oldShopping.setAttribute('class', 'oldShopping')
                oldShopping.textContent = shoppingArr[i];
                shoppingListBox.appendChild(oldShopping)

                oldShopping.addEventListener('click', () => {
                    oldShopping.style.textDecoration = 'line-through'
    
    
                })
      
    }}









console.log(shoppingArr)








    addButton.addEventListener('click', () => {
   
        if (input.value === '') {
            //write  errorP
            errorP.style.display = 'block'
        } else {
            //add the object to the shoppingArr
            shoppingArr.push(input.value)

            // array lenght 
            let arrLenght = shoppingArr.length

            //remove errorP
            errorP.style.display = 'none'



            let newShopping = document.createElement('li')
            newShopping.setAttribute('class', 'newShoppingList')
            newShopping.textContent = shoppingArr[arrLenght - 1];
            shoppingListBox.appendChild(newShopping)

            localStorage.setItem("shoppingArr", JSON.stringify(shoppingArr));


            console.log(shoppingArr)

            newShopping.addEventListener('click', () => {
                newShopping.style.textDecoration = 'line-through'


            })
            input.value = '';
        
        
        



           
        }



    })
    //clear!
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
