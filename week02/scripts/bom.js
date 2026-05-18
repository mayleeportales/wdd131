const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('______');

button.addEventListener('click', function() {
    if (input.value !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button')
        deleteButton.type = 'button';

        li.textContent = input.value;
        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', 'Remove' + input.value);

        li.append(deleteButton);
        list.append(li);
        
        deleteButton.addEventListener('click', function() {
            li.remove();
        });
        
        input.value = '';
        input.focus();
    } else {
        input.focus();
    }
});