console.log('yeah boiiiii');

const card = document.querySelectorAll('.card');

const item1 = document.createElement('h3')
const item2 = document.createElement('h3')
const item3 = document.createElement('h3')
item1.textContent = 'Do yoga'
item2.textContent = 'Study'
item3.textContent = 'Read books'

const openBtn = document.createElement('button');
/*openBtn.textContent = 'Open';*/
openBtn.innerHTML = `
    <a href="item.html">Open<a>
`


card.forEach((c) => {
    c.addEventListener('mouseenter', (event) => {
        c.append(item1, item2, item3);
        c.appendChild(openBtn)
        openBtn.classList.add('cardbtn')
})
    c.addEventListener('mouseleave',(event) => {
        item1.remove();
        item2.remove();
        item3.remove();
        openBtn.remove();
})

})
/*card.addEventListener('mouseenter', (event) => {
    card.append(item1, item2, item3);
    card.appendChild(openBtn)
    openBtn.classList.add('cardbtn')
})
card.addEventListener('mouseleave',(event) => {
    item1.remove();
    item2.remove();
    item3.remove();
    openBtn.remove();
})*/

/*
well add real code,
atm this is placeholder code.
*/