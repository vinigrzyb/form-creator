const formId = '679836d947c53c863fd719eb';
const url = `http://localhost:3000/forms/${formId}`;

//puxa o json do form
function getForm(){
    fetch(url).then(res => {
        return res.json();
    }).then(data => {
        console.log(data);
        
        const formContainer = document.getElementById('formContainer');

        //adiciona o titulo
        const title = document.createElement('h1');
        title.textContent = data.title;
        formContainer.appendChild(title);

        const formExecution = document.createElement('div');
        formExecution.setAttribute('id', 'formExecution');

        //cria os campos
        data.fields.forEach(field => {
            //div do campo
            const formGroup = document.createElement('div');
            formGroup.setAttribute('class', 'form-group');

            //adiciona o label do campo
            const label = document.createElement('label');
            label.setAttribute('for', 'text-field');
            label.textContent = field.label;
            formGroup.appendChild(label);

            //campo texto
            let newField
            if(field.type === 'text'){
                newField = document.createElement('input');
                newField.setAttribute('type', 'text');
                newField.setAttribute('id', 'text-field');
                newField.setAttribute('class', 'text-field');
                newField.setAttribute('placeholder', 'Digite algo...');
            }
            formGroup.appendChild(newField);
            
            formExecution.appendChild(formGroup);
            formContainer.appendChild(formExecution);
        })

        //cria a div de botões
        const buttonDiv = document.createElement('div');
        buttonDiv.setAttribute('class', 'form-button');

        //cria o botão enviar
        const submitButton = document.createElement('button');
        submitButton.textContent = 'Enviar';
        submitButton.setAttribute('type', 'submit');
        submitButton.setAttribute('id', 'submitButton');
        buttonDiv.appendChild(submitButton);

        formContainer.appendChild(buttonDiv);

    })
}

getForm()

