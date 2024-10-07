document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const jsonDisplay = document.getElementById('jsonDisplay');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const formData = new FormData(form);
        const formObject = {};
        
        formData.forEach((value, key) => {

            if (key === 'hobbies') {
                if (!formObject[key]) {
                    formObject[key] = [];
                }
                formObject[key].push(value);
            } else {
                formObject[key] = value;
            }
        });

        jsonDisplay.textContent = JSON.stringify(formObject, null, 2);
    });
});