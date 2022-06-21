import './style-sheets/project-form.css';
import './dom-builder';

(() => { // project handler
    const addProject = document.getElementById('add-project-button');
    addProject.addEventListener('click', () => {
        openProjectForm();
    });

    function openProjectForm() {
        const CreateElements = (() => {
            // divs
            const formWrapper =    {element: document.createElement('div'), // blocks input
                                    id: 'project-form-wrapper'};

            const formContainer =  {element: document.createElement('div'),
                                    id: 'project-form-container'};

            // form
            const projectForm =    {element: document.createElement('form'),
                                    id: 'project-form',
                                    action: '#'};
            
            const textInput =      {element: document.createElement('input'),
                                    id: 'project-name-input',
                                    type: 'text',
                                    placeholder: 'Some Project',
                                    name: 'project-name'};

            const textLabel =      {element: document.createElement('label'),
                                    id: 'project-name-label',
                                    for: textInput.id,
                                    innerText: 'Project Name'};                        

            const closeForm =      {element: document.createElement('button'),
                                    id: 'project-close-form',
                                    type: 'button',
                                    innerText: 'X'};

            const elementsArray =  [formWrapper, formContainer, projectForm, // because attributes
                                    textLabel, textInput, closeForm];

            return {
                elementsArray,
                formWrapper,
                formContainer,
                projectForm,
                textLabel,
                textInput,
                closeForm
            }
        })();

        (() => { // sets all attributes
            CreateElements.elementsArray.forEach(currentElement => {
                currentElement.element.textContent = currentElement.innerText; // inner text
                Object.keys(currentElement).forEach(key => { // attibutes
                    if (key === 'element'|| key === 'innerText') {
                        return;
                    } else {
                        currentElement.element.setAttribute(key, currentElement[key]);
                    }
                });
            });
        })();

        (() => { // append elements to form
            CreateElements.projectForm.element.append(CreateElements.textLabel.element, 
                                                        CreateElements.textInput.element,
                                                        CreateElements.closeForm.element);
        })();

        (() => { // append elements to DOM
            document.body.appendChild(CreateElements.formWrapper.element);
            CreateElements.formWrapper.element.appendChild(CreateElements.formContainer.element);
            CreateElements.formContainer.element.appendChild(CreateElements.projectForm.element);
        })();

        CreateElements.closeForm.element.addEventListener('click', () => { // grabs input
            const formData = new FormData(CreateElements.projectForm.element);
            const projectName = formData.get(CreateElements.textInput.name);
            console.log(projectName);
            closeProjectForm();
        });
    };

    function closeProjectForm() {
        const formWrapper = document.getElementById('project-form-wrapper');

        let child = formWrapper.lastElementChild;
        while (child) {
            formWrapper.removeChild(child);
            child = formWrapper.lastElementChild;
        }

        document.body.removeChild(formWrapper);
    };
})();
