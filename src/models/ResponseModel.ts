import { CourseModel , UserModel } from "../models/BaseModel.js";
export interface ResponseModel {
    page: number;
    total_pages: number;
    total_results: number;
    results: (CourseModel | UserModel)[];
    //results:[any];
}