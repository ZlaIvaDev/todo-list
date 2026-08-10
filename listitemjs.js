console.log('items checkuo!');

const modalcontainer = document.querySelector('.modal-container');
const main = document.querySelector('main');

const modalbtn = document.getElementById('openmodal');
modalbtn.addEventListener('click', function event() {
    console.log('clicked modal button');
    modalcontainer.classList.remove('hide');
    modalcontainer.classList.add('show');

});


const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    /* get each element from droodowns*/
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    /* we are using this in order to have multiple 
        dropdowns on the page to work */
    
        /* now we have to add a click event listener to select */
    select.addEventListener('click', () => {
        /* add clicked seelct styles to select item */
        select.classList.toggle('select-clicked')
        /* add rotate styles to caret */
        caret.classList.toggle('caret-rotate')
        /* add open styles to the menu element */
        menu.classList.toggle('menu-open')

    })

    /* loop throught all options elemetns */
    options.forEach(option => {
        /* add a click event to option element */
        option.addEventListener('click', () => {
            /* change seelcted inner text to chosen option */
            selected.innerText = option.innerText;
            /* add the clicked select styles to the select element */
            select.classList.remove('select-clicked')
            // add the rotate styles to the caret el
            caret.classList.remove('caret-rotate');
            // add the open styles to the menu el
            menu.classList.remove('menu-open');
            // remove active class from all option elems
            options.forEach(option => {
                option.classList.remove('active');
            });
            // add active class to clicked option element
            option.classList.add('active');
        });
    });
});

const cancel = document.querySelector('#cancel');
cancel.addEventListener('click', () => {
    modalcontainer.classList.remove('show');
    modalcontainer.classList.add('hide');

})

/* now onto truly adding items to file.*/
const additem = document.getElementById('submit-item');
additem.addEventListener('click', (e) => {
    const new_card = document.createElement('div');
    new_card.classList.add('task-card');
    


    const card_name = document.createElement('h2');
    card_name.classList.add('task-name');
    card_name.textContent = document.getElementById('input-name').value;


    const card_prio = document.createElement('h4');
    card_prio.classList.add('prio');
    card_prio.textContent = document.querySelector('.selected').textContent;
    if (card_prio.textContent == 'Low') {
        card_prio.classList.add('low-prio')
    } else if (card_prio.textContent == 'Medium') {
        card_prio.classList.add('med-prio')
    } else if (card_prio.textContent == 'High') {
        card_prio.classList.add('high-prio')
    } else {
        card_prio.classList.add('compl')
    }

    const card_date = document.createElement('h6');
    card_date.classList.add('task-date');
    card_date.textContent = document.getElementById('time_n_date').value;

    const notes_div = document.createElement('div');
    const notes_text = document.createElement('p');
    notes_div.classList.add('notes-input-text');
    notes_text.classList.add('notes-text');
    notes_text.textContent = document.getElementById('notes').value;
    notes_div.appendChild(notes_text);

    const btns_div = document.createElement('div');
    btns_div.classList.add('card-btns');
    const btnCompleted = document.createElement('button')
    const btnArchive = document.createElement('button');
    const btnDel = document.createElement('button');
    btnCompleted.classList.add('mark-completed','item-card-btn');
    btnCompleted.textContent = 'completed';
    btnArchive.classList.add('send-to-archive','item-card-btn');
    btnArchive.textContent = 'archive';
    btnDel.classList.add('delete-card','item-card-btn');
    btnDel.textContent = 'delete';
    btns_div.append(btnCompleted, btnArchive, btnDel);

    new_card.append(card_name, card_prio, card_date, notes_div, btns_div);
    main.appendChild(new_card);
    modalcontainer.classList.remove('show');
    modalcontainer.classList.add('hide');

})
