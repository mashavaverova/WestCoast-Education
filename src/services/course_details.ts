import { CourseModel } from "../models/BaseModel.js";
import  { fetchData } from "../utilities/http.js";


// getCourseDetails 

export async function getCourseDetails (id: string): Promise<CourseModel> {
    const result = await fetchData<CourseModel>(`courses/` + id);
    return result;
}



