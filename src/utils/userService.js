import tokenService from './tokenService';

const BASE_URL = '/api/users/';

function signup(user){
    return fetch(BASE_URL + 'signup', {
        method: 'POST',
        body: user
    })
    .then(res => {
        if(res.ok) return res.json();
        console.log("Check server terminal!");
        throw new Error('Email already taken');
    })
    .then(({token}) => tokenService.setToken(token));
}

function login(creds){
    console.log(creds, "------creds------");
    return fetch(BASE_URL + 'login', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(creds)
    })
    .then(res => {
        if(res.ok) return res.json();
        throw new Error('Bad credentials');
    })
    .then(({token}) => tokenService.setToken(token));
}

function getUser(){
    return tokenService.getUserFromToken();
}

export default {
    signup,
    login,
    getUser
};