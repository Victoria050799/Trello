const btnCreateList = document.getElementById("btn-create-list");
const btnResetList = document.getElementById("btn-reset-list");
const desk = document.getElementById("desk");
const inputListName = document.getElementById("list-name");

let counter=1;

let addList=(event)=>{
    event.preventDeafault();
    let list =document.createElement('li');
    list.classList.add('list');
    let h2 = document.createElement('h2');
    h2.classList.add('h2');
    let editors = document.createElement('div');
    editors.classList.add('div');
    let cardList= document.createElement('div');
    cardList.classList.add('card-list');
    let addCard =document.createElement('a');
    addCard.classList.add('add-card');
    addCard.innerText = 'Add Card +';

    let changeIco =document.createElement('img');
    changeIco.setAttribute('scr','https://cdn.icon-icons.com/icons2/67/PNG/512/mapediting_map_13573.png ');
    let deleteIco =document.createElement('img');
    deleteIco.setAttribute('scr','https://cdn.icon-icons.com/icons2/10/PNG/256/remove_delete_exit_close_1545.png');
    deleteIco.classList.add('delete-list');

};

let listName = document.getElementById('list-name').value;
if(listName ===""){
    listName=`Без названия ${counter++}`;
    
}

h2.innerText=listName;
list.append(h2);
list.append(editors);
editors.append(changeIco);
editors.append(deleteIco);
list.append(addCard);
list.append(cardList);
desk.append(list);

btnResetList.addEventListener('click',(event)=>{
    list.remove(desk);
    counter=1;
});
btnCreateList.addEventListener('click',addList);
const editList=(event)=>{
    let obj =event.target;
    if(obj.classList.contains('edit-list')){
        let list=obj.closest('.list');
        let h2= list.querySelector('h2');
        h2.setAttribute('contenteditable','true');
        h2.focus();
        if(obj.classList.contains('delete-list')){
            let list=obj.closest('.list');
            list.remove(obj);
        }
    }
}

if (obj.classList.contains('add-card')){
    let cardText=document.createElement('textarea');
    cardText.classList.add('card-text');
    let cardList= obj.closest('.list').querySelector('.card-list');
    cardList.append(cardText);
    let deleteIco =document.createElement('img');
    deleteIco.setAttribute('scr',);
    deleteIco.classList.add('delete-text');
    cardList.append(deleteIco);
}
if (obj.classList.contains('delete-text')){
    let text = obj.closest('.card-list').querySelector('.card-text');
    text.remove(obj);
    let delIco =obj.closest('.card-list').querySelector('.delete-text');
    delIco.remove(obj);
}