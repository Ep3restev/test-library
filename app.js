const add = document.querySelector(".add");
let deleteButton;
let library = [];

//Object constructor.

function Book(name, author){
    this.name = name
    this.author = author
}

//Function that adds new book to the library.

function addBookToLibrary(author,name){
    let newBook = new Book(name, author);
    library.unshift(newBook) 
    showBooks()
}


add.addEventListener("click", dataFromUser);

function dataFromUser(){
    let author = document.getElementById("author").value;
    let name = document.getElementById("name").value;
    //Return nothing if form is incomplete.
    if(author =="" || name==""){
        return;
    }
    addBookToLibrary(author,name)
}


function showBooks(){
    const container = document.querySelector(".container");  //Container with the books.
    //Updates boxes by deleting all of them and inserting by looping to avoid repetition.
    boxes = document.querySelectorAll(".box");
    boxes.forEach(box=>{
        box.remove();
    })
    for(let i = 0; i<library.length ; i++){ 
        container.innerHTML += `<div class='box'>
                                        <div class="text">
                                            ${library[i].author}
                                            ${library[i].name}
                                        </div>
                                        <div class="read">Read</div>
                                        <div class="remove" data-index ="${i}">Remove</div>
                                </div>`
    } 
    updateButtons();
}

function updateButtons(){
    deleteButton = document.querySelectorAll(".remove"); //Update remove buttons.
    console.log(deleteButton)
    deleteButton.forEach((dB)=>{
        dB.addEventListener("click", ()=>{
            const index = dB.getAttribute("data-index");
            library.splice(index, index)
            showBooks()
        });
    })
}






