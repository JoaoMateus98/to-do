import projectsArray from "./createProject";

const BuildProject = (projectName) => {
  const CreateElement = (() => {
    const projectDiv = {
      element: document.createElement("button"),
      innerText: projectName,
      id: `${projectName}-button`,
    };

    return projectDiv;
  })();

  (() => {
    // set attributes
    CreateElement.element.textContent = CreateElement.innerText;
    Object.keys(CreateElement.element).forEach((key) => {
      if (key === "element" || key === "innerText") {
      } else {
        CreateElement.element.setAttribute(key, CreateElement.element[key]);
      }
    });
  })();

  CreateElement.element.addEventListener("click", () => {
    const todoTitle = document.getElementById("todo-title");
    todoTitle.textContent = projectName;
  });

  return CreateElement.element;
};

export default BuildProject;
