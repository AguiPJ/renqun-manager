import {request} from "./request";

const modePath = "jieshou"

export async function getTableData(page, pageSize) {
    return await request(`${modePath}/get/${page}/${pageSize}`,)
}

export async function addTableData(body) {
    return await request(`${modePath}/append`, {body, method: 'POST'})
}

export async function deleteTableData(bid) {
    return await request(`${modePath}/delete/${bid}`,)
}

export async function updateTableData(body) {
    return await request(`${modePath}/update`, {body, method: 'POST'})
}
