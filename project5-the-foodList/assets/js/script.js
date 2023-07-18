//Selection items from the DOM
//Add items container
const addItemsAction = document.querySelector('.addItems-action');
const input = document.querySelector('.addItems-input');
const submit = document.querySelector('.addItems-submit');

//Display items container
const list = document.querySelector('.grocery-list');
const displayItemsAction = document.querySelector('.displayItems-action');
const clear = document.querySelector('.displayItems-clear');

//Add event listeners
//Submit listener
submit.addEventListener('click', addItem);
//Check for local storage
document.addEventListener('DOMContentLoaded', displayStorage);
//Clear list
clear.addEventListener('click', removeItems);
//Listen to list to delete individual items
list.addEventListener('click', removeSingleItem);


//functions
function addItem (event) {
    event.preventDefault();
    let value = input.value;
    if (value === ''){
        showAction(addItemsAction, 'Please add grocery item', false);
    } else {
        showAction(addItemsAction, `${value} به فهرست اقلا،م اضافه شد`, true);
        createItem(value);
        updateStorage(value);
    }
}

function showAction (element, text, value){
    if (value === true){
        element.classList.add('success');
        element.innerText = text;
        input.value = '';
        setTimeout(function(){
            element.classList.remove('success');
        }, 3000)
    } else {
        element.classList.add('alert');
        element.innerText = text;
        input.value = '';
        setTimeout(function(){
            element.classList.remove('alert');
        }, 3000)
    }
}

// create item
function createItem (value) {
    let parent = document.createElement('div'); // in this line of code we create an div in the HTML file 
        parent.classList.add('grocery-item'); // then add this class to it
    parent.innerHTML = `<h4 class="grocery-item__title">${value}</h4> 
    <a href="#" class="grocery-item__link">
        <i class="far fa-trash-alt"></i>
    </a>`// then in  here we write an HTML code in our javascript 

    list.appendChild(parent); // then we append(add) the list element to the parent that previously we selected as an div element 
}

//update storage
function updateStorage  (value) {
    let groceryList;

    groceryList = localStorage.getItem('groceryList') ? JSON.parse(localStorage.getItem('groceryList')) : []; 
    // in the line above we search in the local storage for an item with the key "groceryList" then if we find it and the answer was true we convert the JSON value to a javascript value and if its null we store an empty array in it
    groceryList.push(value); // then we add a value that we get from the user to the groceryList 
    localStorage.setItem('groceryList', JSON.stringify(groceryList)); // then in the local storage we set the groceryList to a JSON value
}

//display items in local storage
function displayStorage () {
    let exists = localStorage.getItem('groceryList'); // in here we search in the local storage that if the groceryList exists and then store it in the "exists" variable

    if(exists){
        let storageItems = JSON.parse(localStorage.getItem('groceryList'));
        storageItems.forEach(function(element){
            createItem(element);
        }) // if the answer was true we do this function thats have a simple task
    }
}

//remove all items
function removeItems () {
    //delete from local storage
    localStorage.removeItem('groceryList'); // in here we remove the groceryItem from the local storage 
    let items = document.querySelectorAll('.grocery-item');

    if(items.length > 0){
        //remove each item from the list
        showAction(displayItemsAction, 'All items deleted', false);
        items.forEach(function(element){
            list.removeChild(element);
        })
    } else {
        showAction(displayItemsAction, 'No more items to delete', false);
    }
}

//remove single item

function removeSingleItem (event){
    event.preventDefault();

    let link = event.target.parentElement; // in here we said every event that in the calling of this function be pointed to we must do a activity to its parentELement
    if(link.classList.contains('grocery-item__link')){
        let text = link.previousElementSibling.innerHTML; // previous element siblings is like a two paragraph 
        let groceryItem = event.target.parentElement.parentElement; // we point to the parent element of the parent element 
        //remove from list

        list.removeChild(groceryItem);
        showAction(displayItemsAction,`${text} از فهرست اقلام حذف شد`, true);

        //remove from local storage
        editStorage(text);

    }
}

function editStorage (item) {
    let groceryItems = JSON.parse(localStorage.getItem('groceryList'));
    let index = groceryItems.indexOf(item); // in here we store the grocety Items index of the input in the index variable 

    groceryItems.splice(index, 1); // in here we remove one item from the groceryItems starting from the index
    //first delete existing list
    localStorage.removeItem('groceryList');
    //add new updated/edited list
    localStorage.setItem('groceryList', JSON.stringify(groceryItems));

}
