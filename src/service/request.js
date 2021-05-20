export const BASE_URL = "localhost:7000/"


function parseJSON(response) {
    return response.json();
}

function checkCode(data) {
    return data
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

export function request(url, options = null, debug = false) {
    const defaultOption = {
        headers: {
            "Content-Type": "application/json",
        },
        method: 'GET',
    };
    if (options && options.body) options.body = JSON.stringify(options.body)

    let overUrl = ''

    if (debug) {
        overUrl = url
    } else {
        overUrl = `http://${BASE_URL}${url}`
    }
    return fetch(overUrl, {
        ...defaultOption,
        ...options
    })
        .then(checkStatus)
        .then(parseJSON)
        .then(checkCode)
        .then(data => data)
        .catch(err => ({
            err
        }));
}
