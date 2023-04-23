window.onload = function () {

    let input = document.getElementById('input');
    let addButton = document.getElementById('addButton');
    let shoppingListBox = document.getElementById('shoppingListBox');
    let clearButton = document.getElementById('clearButton');
    let errorP = document.getElementById('errorP');
    
    let storage= localStorage.shoppingArr;

  //array
   let shoppingArr=[]
 


   if(storage !=  undefined ){

        
        shoppingArr =  JSON.parse(localStorage.getItem('shoppingArr'))
        


            for (i=0; i<shoppingArr.length; i++){
                let oldShopping = document.createElement('li')
                oldShopping.setAttribute('class', 'oldShopping')
                oldShopping.textContent = shoppingArr[i].name;
                shoppingListBox.appendChild(oldShopping)

                oldShopping.addEventListener('click', () => {
                        // newShopping.style.textDecoration = 'line-through'
                        if(shoppingArr.bValue===true){
                            shoppingArr.bValue=false
                           }else{
                            shoppingArr.bValue=true
                           }
            
                           if(shoppingArr.bValue==false){
                            oldShopping.style.textDecoration='line-through'
                           } else{
                            oldShopping.style.textDecoration='none'
                           }
            
                        

    
                })
                console.log(shoppingArr)

            
      
    }}



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



            let newShopping = document.createElement('li')
            newShopping.setAttribute('class', 'newShoppingList')
            newShopping.textContent = input.value;
            shoppingListBox.appendChild(newShopping)

            localStorage.setItem("shoppingArr", JSON.stringify(shoppingArr));

            localStorage.setItem("obj", JSON.stringify(obj));


           

            newShopping.addEventListener('click', () => {

              

               // newShopping.style.textDecoration = 'line-through'
               if(obj.bValue===true){
                obj.bValue=false
               }else{
                obj.bValue=true
               }

               if(obj.bValue===false){
                newShopping.style.textDecoration='line-through'
               } else{
                newShopping.style.textDecoration='none'
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
