const formId = '679d5fa2037dfbb3f8247ea2';
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

            //tipos de campo
            let newField
            if(field.type === 'text'){
                newField = document.createElement('input');
                newField.setAttribute('type', 'text');
                newField.setAttribute('id', 'text-field');
                newField.setAttribute('class', 'text-field');
                newField.setAttribute('placeholder', 'Digite algo...');
            }else if(field.type === 'number'){
                newField = document.createElement('input');
                newField.setAttribute('type', 'number');
                newField.setAttribute('id', 'number-field');
                newField.setAttribute('class', 'number-field');
                newField.setAttribute('placeholder', 'Insira um número...');
            }else if(field.type === 'list'){
                //cria a lista
                newField = document.createElement('select');
                newField.setAttribute('id', 'selectField');
                newField.setAttribute('class', 'select-field');
                newField.setAttribute('placeholder', 'Selecione uma opção...');
                //adiciona as opções da lista
                if(field.listOptions && field.listOptions.length > 0){
                    for(let i = 0; i < field.listOptions.length; i++){
                        const option = document.createElement('option');
                        option.setAttribute('value', i+1);
                        option.textContent = field.listOptions[i];
                        newField.appendChild(option);
                    }
                }
            }
            
            if(field.required === true){
                newField.setAttribute('required', true);
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

