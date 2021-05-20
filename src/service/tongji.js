import {request} from "./request";

export async function getStatistics(){
    return await request(`/statistics`,)
}
