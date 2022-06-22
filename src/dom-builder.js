import './style-sheets/index.css';

const CreateElements = (() => {
    // divs
    const projectsDiv =         {element: document.createElement('div'),
                                 id: 'projects-div'};

    const todoDiv =             {element: document.createElement('div'),
                                 id: 'todo-div'};

    const projectsContainer =   {element: document.createElement('div'),
                                 id: 'projects-container'};

    // text
    const projectsTitle =       {element: document.createElement('h1'),
                                 id: 'project-title',
                                 innerText: 'Projects'};

    const todoTitle =           {element: document.createElement('h1'),
                                 id: 'todo-title',
                                 innerText: 'Todo Placeholder'};

    //button
    const addProjectImg =       {element: document.createElement('img'),
                                 id: 'add-project-img',
                                 src: require('./icons/add.svg')};  

    const addProject =          {element: document.createElement('button'),
                                 id: 'add-project-button'};                  

    const elementsArray =   [projectsDiv, todoDiv, projectsContainer,
                             projectsTitle, todoTitle, addProjectImg, 
                             addProject]
    return {
        elementsArray,
        projectsDiv,
        projectsContainer,
        todoDiv,
        projectsTitle,
        todoTitle,
        addProjectImg,
        addProject
    }
}) ();

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

(() => { // append elements to DOM
    document.body.append(CreateElements.projectsDiv.element, CreateElements.todoDiv.element);
    CreateElements.addProject.element.appendChild(CreateElements.addProjectImg.element);
    CreateElements.projectsDiv.element.append(CreateElements.projectsTitle.element, CreateElements.projectsContainer.element, CreateElements.addProject.element);
    CreateElements.todoDiv.element.append(CreateElements.todoTitle.element);
})();