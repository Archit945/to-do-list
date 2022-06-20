//this anonimuse function use to add an item while the user click on the "Enret" button on the keyboard/
let input = document.querySelector('input');
input.addEventListener('keyup', function(e){
    if(e.keyCode === 13){
        document.getElementById("submit").click();// fire the submit button
        document.getElementById("addItem").value = ""; //clear the input bar after click "Enter"

    }     
})

//this function add an item to the list while the user enter an to-do line to the list.
var counter = 0;
var task = "task_"+counter;

function addItemToOrderList(){
    

    var list = document.getElementById('item-list');
    var firstItem = document.getElementById('addItem').value;
    var deleteItemBtn = document.createElement('button'); //boton to clear line.
    var entry = document.createElement('li');
    var doneItem = document.createElement("INPUT"); //checkbox

    entry.appendChild(document.createTextNode(firstItem));

    task = "task_"+counter;
    counter++;

    entry.setAttribute("id", task);
    deleteItemBtn.setAttribute("id", task);

    deleteItemBtn.setAttribute('onclick','clearOneLine(this.id);');

    doneItem.setAttribute("type", "checkbox");//set the attributes to cheakitem by adding the input as an input type checkbox.
    doneItem.style.float = "right";
    deleteItemBtn.style.float = "right";


    deleteItemBtn.innerHTML = "delete line!";
    doneItem.innerText = "cheack!";

    entry.appendChild(deleteItemBtn);
    entry.appendChild(doneItem);
    list.appendChild(entry);
    }




//this function delete all the items in the list.
function clearAllTheList(){
    document.getElementById("item-list").innerHTML = "";
}

function clearOneLine(task){
    list = document.getElementById("item-list");
    var elem = document.getElementById(task);
    list.removeChild(elem);
}
