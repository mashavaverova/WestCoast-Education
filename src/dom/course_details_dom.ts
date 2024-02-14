import { CourseModel } from "../models/BaseModel.js";
import { getCourseDetails } from "../services/course_details.js";

async function initPage() {
    const url = new URL(window.location.href);
    const id = url.searchParams.get("id");
    if (id) {
        await displayCourseDetails(id);
    }
}
async function displayCourseDetails(id: string): Promise<void> {
  const course = await getCourseDetails(id);  
  updateCourseDetails(course);
}
      
function updateCourseDetails(course: CourseModel): void {
  const detailsSection = document.getElementById('course_details');
  if (!detailsSection) return;
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
      
function createElement(tag: string, text: string, attributes?: { [key: string]: string }): HTMLElement {
  const element = document.createElement(tag);
  element.textContent = text;
  return element;
}
      
function createParagraph(text: string): HTMLParagraphElement {
  return createElement('p', text) as HTMLParagraphElement;
}
      
function appendChildren(parent: HTMLElement, ...children: HTMLElement[]): void {
  children.forEach(child => parent.appendChild(child));
}
      
function formatDate(dateString: string): string {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined);}
      
  
document.addEventListener('DOMContentLoaded', initPage);