var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getAllCourses } from "../services/courses.js";
function initPage() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield getAllCourses();
        console.log('result', result);
        displayCourses(result);
    });
}
function displayCourses(courses) {
    const gallery = document.querySelector('#courses_admin_list');
    for (let course of courses) {
        gallery.appendChild(createAdminList(course));
    }
}
const createAdminList = (course) => {
    const container = createDiv();
    const titleSpan = createSpan(course.title + ' ');
    titleSpan.style.fontWeight = 'bold';
    container.appendChild(titleSpan);
    container.appendChild(createSpan(`Course Number: ${course.number} `));
    container.appendChild(createSpan(`Duration: ${course.duration} `));
    container.appendChild(createSpan(`Start Date: ${course.startDate} `));
    container.appendChild(createSpan(`Location: ${course.location}`));
    container.setAttribute('id', course.id);
    addClickHandler(container);
    return container;
};
const createDiv = () => {
    return document.createElement('div');
};
const createSpan = (text) => {
    const span = document.createElement('span');
    span.innerText = text;
    return span;
};
const addClickHandler = (element) => {
    element.addEventListener('click', () => {
        const courseId = element.getAttribute('id');
        if (courseId) {
            console.log(courseId);
            location.href = `/src/pages_admin/edit_course.html?id=${courseId}`;
        }
    });
};
document.addEventListener('DOMContentLoaded', initPage);
