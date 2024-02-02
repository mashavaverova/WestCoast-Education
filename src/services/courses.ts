
import { CourseModel } from "../models/BaseModel.js";
import { ResponseModel } from "../models/ResponseModel.js";
import { fetchData } from "../utilities/http.js";


export async function getAllCourses(): Promise<ResponseModel> {
    const result = await fetchData<ResponseModel>('courses');
    return result;

}
 
//export async function updateCourse(id: string): Promise<ResponseModel> {
   // const course:ResponseModel= await fetchData<ResponseModel>(`courses/${id}`, 'PUT');
  //  return course;
//  }