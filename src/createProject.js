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
            const formWrapper = document.createElement('div'); // blocks input
            const formContainer = document.createElement('div');

            // buttons
            const closeForm = document.createElement('button');

            return {
                formWrapper,
                formContainer,
                closeForm,
            }
        })();

        (() => { // add ids to elements
            // divs
            CreateElements.formWrapper.setAttribute('id', 'project-form-wrapper');
            CreateElements.formContainer.setAttribute('id', 'project-form-container');

            //buttons
            CreateElements.closeForm.setAttribute('id', 'project-close-form');
        })();

        (() => { // add text content
            CreateElements.closeForm.textContent = 'X';
        })();

        (() => { // append elements to DOM
            document.body.appendChild(CreateElements.formWrapper);
            CreateElements.formWrapper.appendChild(CreateElements.formContainer);
            CreateElements.formContainer.append(CreateElements.closeForm);
        })();

        CreateElements.closeForm.addEventListener('click', ()=> {
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
    }
})();
