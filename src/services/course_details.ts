import { CourseModel } from "../models/BaseModel.js";
import  { fetchData } from "../utilities/http.js";

export async function getCourseDetails (id: string): Promise<CourseModel> {
    const result = await fetchData<CourseModel>(`courses/` + id);
    return result;
}



