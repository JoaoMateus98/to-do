import './style-sheets/project-form.css';
import './dom-builder';

const CreateProject = (() => {
    const CreateElements = (() => {
        const formContainer = document.createElement('div');

        return {
            formContainer,
        }
    })();

    (() => { // add ids to elements
        CreateElements.formContainer.setAttribute('id', 'project-form-container');
    })();

    (() => { // append elements to DOM
        
    })();
})();