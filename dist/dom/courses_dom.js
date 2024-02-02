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
    const gallery = document.querySelector('#courses_list');
    for (let course of courses) {
        gallery.appendChild(createCourseCard(course));
    }
}
function createCourseCard(course) {
    const cardDiv = document.createElement('div');
    cardDiv.setAttribute('id', course.id);
    cardDiv.classList.add('course-card'); // <-------------------class for css card
    cardDiv.appendChild(createImage(course.imageUrl, course.id));
    cardDiv.appendChild(createCourseTitle(course));
    cardDiv.appendChild(createCourseInfo(course));
    const button = createButton(course);
    cardDiv.appendChild(button);
    addClickHandler(button); // Добавляем обработчик клика к кнопке
    return cardDiv;
}
const createImage = (imageUrl, id) => {
    const image = document.createElement('img');
    image.setAttribute('src', `../content/images/${imageUrl}`);
    image.setAttribute('id', id);
    image.classList.add('course-image');
    return image;
};
const createCourseTitle = (course) => {
    const title = document.createElement('h2');
    title.classList.add('course-title');
    title.textContent = course.title;
    return title;
};
const createCourseInfo = (course) => {
    const info = document.createElement('div');
    info.classList.add('course-info');
    const course_number = document.createElement('p');
    course_number.textContent = `Course number: ${course.number}`;
    const description = document.createElement('p');
    description.textContent = course.description;
    const course_duration = document.createElement('p');
    course_duration.textContent = `Duration: ${course.duration}`;
    const course_startDate = document.createElement('p');
    course_startDate.textContent = `Next Start Date: ${formatDate(course.startDate)}`;
    info.appendChild(course_number);
    info.appendChild(description);
    info.appendChild(course_duration);
    info.appendChild(course_startDate);
    return info;
};
const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined);
    return formattedDate;
};
const createButton = (course) => {
    const button = document.createElement('button');
    button.classList.add('course-button');
    button.textContent = 'Read more...';
    button.setAttribute('id', course.id);
    return button;
};
const addClickHandler = (button) => {
    button.addEventListener('click', () => {
        const courseId = button.getAttribute('id');
        console.log(courseId);
        location.href = `/src/pages/course_details.html?id=${courseId}`;
    });
};
document.addEventListener('DOMContentLoaded', initPage);
