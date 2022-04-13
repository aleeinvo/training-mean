let nameField = document.getElementById('name');

nameField.addEventListener('input', (e) => {
    const f = e.target;
    if(f.validity.tooShort) {
        f.setCustomValidity('come one, at least 8 characters');
        f.reportValidity();
    } else {
        f.setCustomValidity('');
    }
})