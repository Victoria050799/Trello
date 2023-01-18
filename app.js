const btnCreateList = document.getElementById('btn-create-list');
const btnResetList = document.getElementById('btn-reset-list');
const desk = document.getElementById('desk');
 const inputListName = document.getElementById('list-name');
let counter = 1;

let addList = (event) => {
    event.preventDefault();
    let list = document.createElement('li');
    list.classList.add('list');

    let h2 = document.createElement('h2');
    let editors = document.createElement('div');

    let cardList = document.createElement('div');
    cardList.classList.add('card-list');
    Array.from(cardList);

    let addCard = document.createElement('a');
    addCard.classList.add('add-card');
    addCard.innerText = 'Add Card +';
    addCard.addEventListener('click', editList);

    let changeIco = document.createElement('img');
    changeIco.setAttribute('src', 'https://cdn.icon-icons.com/icons2/67/PNG/96/mapediting_map_13573.png');
    changeIco.classList.add('edit-list');
    changeIco.addEventListener('click', editList);
    
    let deleteIco = document.createElement('img');
    deleteIco.setAttribute('src', 'https://cdn.icon-icons.com/icons2/102/PNG/96/exit_delete_17889.png');
    deleteIco.classList.add('delete-list');
    deleteIco.addEventListener('click', editList);
    
    let listName = document.getElementById('list-name').value;

    if(listName === '') {
        listName = `No name ${counter++}`;
    }

    h2.innerText = listName;
    list.append(h2);
    list.append(editors);
    editors.append(changeIco);
    editors.append(deleteIco);
    list.append(addCard);
    list.append(cardList);
    desk.append(list);

    btnResetList.addEventListener('click', (event) => {
        list.remove(desk);
        counter = 1;
    });
};

btnCreateList.addEventListener('click', addList);

function editList(event) {
    let obj = event.target;
    if (obj.classList.contains('edit-list')) {
        let list = obj.closest('.list');
        let h2 = list.querySelector('h2');
        h2.setAttribute('contenteditable', 'true');
        h2.focus();
        h2.innerText = '';
    }
    if(obj.classList.contains('delete-list')) {
        let list = obj.closest('.list');
        list.remove(obj);
    }

    if(obj.classList.contains('add-card')) {
        let cardText = document.createElement('textarea');
        cardText.classList.add('card-text');
        let cardList = obj.closest('.list').querySelector('.card-list');
        cardList.append(cardText);
        
        let deleteIco = document.createElement('img');
        deleteIco.setAttribute('src', 'https://cdn.icon-icons.com/icons2/102/PNG/96/exit_delete_17888.png');
        deleteIco.classList.add('delete-text');
        deleteIco.addEventListener('click', (elem) => {
            if(elem.target) cardList.removeChild(cardText);
           elem.target.style.display = 'none';
        })
        cardList.append(deleteIco);
    }
    
    if(obj.classList.contains('delete-text')) {
        let text = obj.closest('.card-list').querySelector('.card-text');
        text.remove(obj);
        let delIco = obj.closest('.card-list').querySelector('.delete-text');
        delIco.remove(obj);
    }
}