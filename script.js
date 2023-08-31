const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");


//EKLEME


const generateTemplate = todo => {
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
</li>`;
    
    list.innerHTML += html;

}

addForm.addEventListener('submit',function(e){
    e.preventDefault();
    const todo = addForm.add.value.trim();
    generateTemplate(todo);



});

//SİLME

list.addEventListener('click',function(a){
    if(a.target.classList.contains('delete')){
        a.target.parentElement.remove();
    }
})