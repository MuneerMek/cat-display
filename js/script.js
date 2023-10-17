var button = document.querySelector('.show-cat');
var cat = document.querySelector('.cat');

button.addEventListener('click', function () {
    if (cat.classList.contains('show')) {
        cat.classList.remove('show')
        button.classList.remove('disappear')
        button.innerText = 'BRING IT BACK!'
    } else {
    cat.classList.add('show')
    button.classList.add('disappear')
    button.innerText = 'Hide the Kitty'}
})