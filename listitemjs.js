console.log('items checkuo!');

const modalcontainer = document.querySelector('.modal-container');

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
const additem = document.querySelector('#submit-item');

/*  and now, event listeners for our buttons. Creating elements in real time.*/

