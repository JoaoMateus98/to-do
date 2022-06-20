const CreateDOM = (() => {
    const CreateElements = (() => {
        // divs
        const projectsDiv = document.createElement('div');
        const todoDiv = document.createElement('div');

        return {
            projectsDiv,
            todoDiv
        }
    })();
    
    (() => { // add ids to elements
        CreateElements.projectsDiv.setAttribute('id', 'projects-div');
        CreateElements.todoDiv.setAttribute('id', 'todo-div');
    })();

    (() => { // append elements to DOM
        document.body.append(CreateElements.projectsDiv, CreateElements.todoDiv);
    })();
})();

export default CreateDOM;