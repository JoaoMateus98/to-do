"use strict";
(self["webpackChunkto_do"] = self["webpackChunkto_do"] || []).push([["createProject"],{

/***/ "./src/createProject.js":
/*!******************************!*\
  !*** ./src/createProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_builder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-builder */ "./src/dom-builder.js");


console.log(document.getElementById('project-title'));

/***/ }),

/***/ "./src/dom-builder.js":
/*!****************************!*\
  !*** ./src/dom-builder.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const CreateDOM = (() => {
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
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateDOM);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/createProject.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlUHJvamVjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBdUI7O0FBRXZCOzs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTCxhQUFhO0FBQ2I7QUFDQSxtRUFBbUU7QUFDbkU7QUFDQSxLQUFLOztBQUVMLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRCxpRUFBZSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvY3JlYXRlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9kb20tYnVpbGRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vZG9tLWJ1aWxkZXInO1xuXG5jb25zb2xlLmxvZyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10aXRsZScpKTsiLCJjb25zdCBDcmVhdGVET00gPSAoKCkgPT4ge1xuICAgIGNvbnN0IENyZWF0ZUVsZW1lbnRzID0gKCgpID0+IHtcbiAgICAgICAgLy8gZGl2c1xuICAgICAgICBjb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgLy8gdGV4dFxuICAgICAgICBjb25zdCBwcm9qZWN0c1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblxuICAgICAgICAvL2J1dHRvblxuICAgICAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHByb2plY3RzRGl2LFxuICAgICAgICAgICAgdG9kb0RpdixcbiAgICAgICAgICAgIHByb2plY3RzVGl0bGUsXG4gICAgICAgICAgICB0b2RvVGl0bGUsXG4gICAgICAgICAgICBhZGRQcm9qZWN0XG4gICAgICAgIH1cbiAgICB9KSAoKTtcbiAgICBcbiAgICAoKCkgPT4geyAvLyBhZGQgaWRzIHRvIGVsZW1lbnRzXG4gICAgICAgIC8vIGRpdnNcbiAgICAgICAgQ3JlYXRlRWxlbWVudHMucHJvamVjdHNEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0cy1kaXYnKTtcbiAgICAgICAgQ3JlYXRlRWxlbWVudHMudG9kb0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZG8tZGl2Jyk7XG5cbiAgICAgICAgLy8gdGV4dCBcbiAgICAgICAgQ3JlYXRlRWxlbWVudHMucHJvamVjdHNUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3QtdGl0bGUnKTtcbiAgICAgICAgQ3JlYXRlRWxlbWVudHMudG9kb1RpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kby10aXRsZScpO1xuXG4gICAgICAgIC8vYnV0dG9uXG4gICAgICAgIENyZWF0ZUVsZW1lbnRzLmFkZFByb2plY3Quc2V0QXR0cmlidXRlKCdpZCcsICdhZGQtcHJvamVjdC1idXR0b24nKTtcbiAgICB9KSgpO1xuXG4gICAgKCgpID0+IHsgLy8gYWRkIHRleHQgY29udGVudFxuICAgICAgICBDcmVhdGVFbGVtZW50cy5wcm9qZWN0c1RpdGxlLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcbiAgICAgICAgQ3JlYXRlRWxlbWVudHMudG9kb1RpdGxlLnRleHRDb250ZW50ID0gJ1RvZG8gUGxhY2Vob2xkZXInOyAvLyB3aWxsIHVwZGF0ZSBiYXNlZCBvbiBwcm9qZWN0cyBuYW1lXG4gICAgICAgIENyZWF0ZUVsZW1lbnRzLmFkZFByb2plY3QudGV4dENvbnRlbnQgPSAnKyc7XG4gICAgfSkoKTtcblxuICAgICgoKSA9PiB7IC8vIGFwcGVuZCBlbGVtZW50cyB0byBET01cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoQ3JlYXRlRWxlbWVudHMucHJvamVjdHNEaXYsIENyZWF0ZUVsZW1lbnRzLnRvZG9EaXYpO1xuICAgICAgICBDcmVhdGVFbGVtZW50cy5wcm9qZWN0c0Rpdi5hcHBlbmQoQ3JlYXRlRWxlbWVudHMucHJvamVjdHNUaXRsZSwgQ3JlYXRlRWxlbWVudHMuYWRkUHJvamVjdCk7XG4gICAgICAgIENyZWF0ZUVsZW1lbnRzLnRvZG9EaXYuYXBwZW5kKENyZWF0ZUVsZW1lbnRzLnRvZG9UaXRsZSk7XG4gICAgfSkoKTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZURPTTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=