import {request} from "./request";

const modePath = "jieshou"

export async function getTableData() {
    return await request(`${modePath}/get`,)
}
export async function addTableData(body) {
    return await request(`${modePath}/append`, {body, method: 'POST'})
}

export async function deleteTableData(bid) {
    return await request(`${modePath}/delete/${bid}`,)
}
