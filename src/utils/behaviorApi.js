import tokenService from './tokenService';

const BASE_URL = '/api/dashboard/behavior';

export function createBehavior(behavior){
    return fetch(BASE_URL, {
        method: 'POST',
        body: behavior,
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => res.json());
}

export function getAllBehaviors(){
    return fetch(BASE_URL, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => {
        if (res.ok) return res.json();
        throw new Error('Bad Credentials')
    });
}