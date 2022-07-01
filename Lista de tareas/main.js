const input = document.querySelector('input');
const addBtn = document.querySelector('.btn-add');
const ul = document.querySelector(ul);
const empty = document.querySelector('.empty');

addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const text = input.value;
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = text;
    li. appendChild(p);
    li.appendChild(addDeletBtn());
    ul.appendChild(li);
    input.value = '';
})

function addDeletBtn () {
    const deletBtn = document.createElement('button');
    deletBtn.textContent = 'X';
    deletBtn.className = 'btn-delete';
    deletBtn.addEventListener('click', (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);
    }); 
    return
}