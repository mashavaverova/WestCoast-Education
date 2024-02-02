import { CourseModel } from "../models/BaseModel.js";
import { getAllCourses } from "../services/courses.js";
import { fetchData } from "../utilities/http.js";
import { ResponseModel } from "../models/ResponseModel.js";


async function initPage() {
    const result = await getAllCourses();
    console.log('result', result);
    displayCourses(result as unknown as [CourseModel]);
}
  

function displayCourses(courses: [CourseModel]) {
    const gallery = document.querySelector('#courses_admin_list') as HTMLDivElement;
    for (let course of courses) {
        gallery.appendChild(createAdminList(course));
    }
}

const createAdminList = (course: CourseModel) => {
    const container = createDiv();
        
    const titleSpan: HTMLElement = createSpan(course.title + ' ');
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

const createDiv = (): HTMLElement => {
    return document.createElement('div');
};

const createSpan = (text: string): HTMLElement => {
    const span: HTMLElement = document.createElement('span');
    span.innerText = text;
    return span;
};

const addClickHandler = (element: HTMLElement): void => {
    element.addEventListener('click', () => {
        const courseId = element.getAttribute('id');
        if (courseId) {
            console.log(courseId);
            location.href = `/src/pages_admin/edit_course.html?id=${courseId}`;
        }
    });
};


document.addEventListener('DOMContentLoaded', initPage);


