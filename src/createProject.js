import './style-sheets/project-form.css';
import './dom-builder';
import BuildProject from './project-builder';

let projectsArray = [];
(() => { // project handler
    const addProject = document.getElementById('add-project-button');
    addProject.addEventListener('click', () => {
        openProjectForm();
    });

    function openProjectForm() {
        const CreateElements = (() => {
            // divs
            const formWrapper =     {element: document.createElement('div'), // blocks input
                                     id: 'project-form-wrapper'};

            const formContainer =   {element: document.createElement('div'),
                                     id: 'project-form-container'};

            // form
            const projectForm =     {element: document.createElement('form'),
                                     id: 'project-form',
                                     action: '#'};
            
            const textInput =       {element: document.createElement('input'),
                                     id: 'project-name-input',
                                     type: 'text',
                                     placeholder: 'Some Project',
                                     name: 'project-name'};

            const textLabel =       {element: document.createElement('label'),
                                     id: 'project-name-label',
                                     for: textInput.id,
                                     innerText: 'Project Name:'};

            // buttons
            const submitFormImg =   {element: document.createElement('img'),
                                     id: 'project-submit-img',
                                     src: require('./icons/check.svg')};                      

            const submitForm =      {element: document.createElement('button'),
                                     id: 'project-submit-form',
                                     type: 'button'};

            const cancelFormImg =   {element: document.createElement('img'),
                                     id: 'project-cancel-img',
                                     src: require('./icons/close.svg')};                      

            const cancelForm =      {element: document.createElement('button'),
                                     id: 'project-cancel-form',
                                     type: 'button'};

            const elementsArray =  [formWrapper, formContainer, projectForm, // because attributes
                                    textLabel, textInput, submitFormImg, submitForm,
                                    cancelFormImg, cancelForm];

            return {
                elementsArray,
                formWrapper,
                formContainer,
                projectForm,
                textLabel,
                textInput,
                submitFormImg,
                submitForm,
                cancelFormImg,
                cancelForm
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
            CreateElements.submitForm.element.appendChild(CreateElements.submitFormImg.element);
            CreateElements.cancelForm.element.appendChild(CreateElements.cancelFormImg.element);
            CreateElements.projectForm.element.append(CreateElements.textLabel.element, 
                                                        CreateElements.textInput.element,
                                                        CreateElements.submitForm.element,
                                                        CreateElements.cancelForm.element);
        })();

        (() => { // append elements to DOM
            document.body.appendChild(CreateElements.formWrapper.element);
            CreateElements.formWrapper.element.appendChild(CreateElements.formContainer.element);
            CreateElements.formContainer.element.appendChild(CreateElements.projectForm.element);
        })();

        CreateElements.submitForm.element.addEventListener('click', () => { // grabs input
            const formData = new FormData(CreateElements.projectForm.element);
            const projectName = formData.get(CreateElements.textInput.name);
            if (projectName.length === 0) {
                alert('Project name must be longer than 1 character!')
            } else { // adds to projects array
                projectsArray.push(BuildProject(projectName));
                resetProjectList(projectsArray);
                closeProjectForm();
            };
        });

        CreateElements.cancelForm.element.addEventListener('click', () => { // closes pop up
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

    function resetProjectList(projectsArray) {
        const projectsContainer = document.getElementById('projects-container');

        let child = projectsContainer.lastElementChild;
        while (child) {
            projectsContainer.removeChild(child);
            child = projectsContainer.lastElementChild;
        }

        projectsArray.forEach(element => {
            projectsContainer.appendChild(element);
        })
    };
})();


export default projectsArray;