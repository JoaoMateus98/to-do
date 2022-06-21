const CreateElements = (() => {
    // divs
    const projectsDiv = document.createElement('div');
    const todoDiv = document.createElement('div');

    // text
    const projectsTitle = document.createElement('h1');
    const todoTitle = document.createElement('h1');

    //button
    const addProject = document.createElement('button');

    return {
        projectsDiv,
        todoDiv,
        projectsTitle,
        todoTitle,
        addProject
    }
}) ();

(() => { // add ids to elements
    // divs
    CreateElements.projectsDiv.setAttribute('id', 'projects-div');
    CreateElements.todoDiv.setAttribute('id', 'todo-div');

    // text 
    CreateElements.projectsTitle.setAttribute('id', 'project-title');
    CreateElements.todoTitle.setAttribute('id', 'todo-title');

    //button
    CreateElements.addProject.setAttribute('id', 'add-project-button');
})();

(() => { // add text content
    CreateElements.projectsTitle.textContent = 'Projects';
    CreateElements.todoTitle.textContent = 'Todo Placeholder'; // will update based on projects name
    CreateElements.addProject.textContent = '+';
})();

(() => { // append elements to DOM
    document.body.append(CreateElements.projectsDiv, CreateElements.todoDiv);
    CreateElements.projectsDiv.append(CreateElements.projectsTitle, CreateElements.addProject);
    CreateElements.todoDiv.append(CreateElements.todoTitle);
})();