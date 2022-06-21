import './style-sheets/project-form.css';
import './dom-builder';

const ProjectHandler = (() => {
    function openProjectForm() {
        const CreateElements = (() => {
            // divs
            const formWrapper = document.createElement('div'); // blocks input
            const formContainer = document.createElement('div');

            // buttons

            return {
                formWrapper,
                formContainer,
            }
        })();

        (() => { // add ids to elements
            CreateElements.formWrapper.setAttribute('id', 'project-form-wrapper');
            CreateElements.formContainer.setAttribute('id', 'project-form-container');
        })();

        (() => { // append elements to DOM
            document.body.appendChild(CreateElements.formWrapper);
            CreateElements.formWrapper.appendChild(CreateElements.formContainer);
        })();
    };

    function closeProjectForm() {

    }

    openProjectForm();
})();
