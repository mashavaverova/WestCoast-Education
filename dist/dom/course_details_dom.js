var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getCourseDetails } from "../services/course_details.js";
function initPage() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = new URL(window.location.href);
        const id = url.searchParams.get("id");
        if (id) {
            yield displayCourseDetails(id);
        }
    });
}
function displayCourseDetails(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const course = yield getCourseDetails(id);
        updateCourseDetails(course);
    });
}
function updateCourseDetails(course) {
    const detailsSection = document.getElementById('course_details');
    if (!detailsSection)
        return;
    detailsSection.innerHTML = '';
    const title = createElement('h2', course.title);
    const image = createElement('img', '', { src: `../content/images/${course.imageUrl}`, alt: 'Course Image' });
    const info = createElement('div', '');
    const number = createParagraph(`Course Number: ${course.number}`);
    const description = createParagraph(`Description: ${course.description_long}`);
    const duration = createParagraph(`Duration: ${course.duration}`);
    const startDate = createParagraph(`Next Start Date: ${formatDate(course.startDate)}`);
    const location = createParagraph(`Location: ${course.location}`);
    const price = createParagraph(`Price: ${course.price}`);
    const enrollButton = createElement('button', 'Enroll', { class: 'enroll-button' });
    enrollButton.addEventListener('click', () => {
        //console.log('Enroll button clicked');
        window.location.href = '/src/pages/registration.html';
    });
    appendChildren(info, enrollButton, number, description, duration, startDate, location);
    appendChildren(detailsSection, title, image, info);
}
function createElement(tag, text, attributes) {
    const element = document.createElement(tag);
    element.textContent = text;
    return element;
}
function createParagraph(text) {
    return createElement('p', text);
}
function appendChildren(parent, ...children) {
    children.forEach(child => parent.appendChild(child));
}
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined);
}
document.addEventListener('DOMContentLoaded', initPage);
