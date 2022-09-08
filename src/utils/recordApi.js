import tokenService from './tokenService';

const BASE_URL = '/api/dashboard/behavior'

export function createRecord(id){
    return fetch(`${BASE_URL}/${id}/createRecord`, {
        method: 'POST',
        headers: {
            Authorization: 'Bearer ' + tokenService.getToken(),
        },
    }).then((res) => {
        if(res.ok) return res.json();
        throw new Error("Bad Credentials at record Api!")
    })
}