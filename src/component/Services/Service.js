import Config from './Config';

export default class Service {
    constructor() {
        this.host = Config.host;
        this.sessionToken = this.getSessionToken();
    }

    getSessionToken() {
        return localStorage.getItem('sessionToken');
    }

    signUp(username, email, password, role) {
        return new Promise((resolve, reject) => {
            const signUpUrl = `${this.host}/register`;
            const xhr = new XMLHttpRequest();
            
            xhr.open('POST', signUpUrl, true);
            xhr.setRequestHeader('Content-Type', 'application/json');

            xhr.onload = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        const response = JSON.parse(xhr.responseText);
                        resolve(response);
                    } else {
                        reject(new Error(xhr.responseText || 'Sign-up failed'));
                    }
                }
            };

            xhr.onerror = () => {
                reject(new Error('Network error'));
            };

            xhr.ontimeout = () => {
                reject(new Error('Request timed out'));
            };

            const userData = { username, email, password, role };
            xhr.send(JSON.stringify(userData));
        });
    }

    signIn(username, password) {
        return new Promise((resolve, reject) => {
            const signInUrl = `${this.host}/login`;
            const xhr = new XMLHttpRequest();
    
            xhr.open('POST', signInUrl, true);
            xhr.setRequestHeader('Content-Type', 'application/json');
    
            xhr.onload = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        const response = JSON.parse(xhr.responseText);
                        if (response.sessionToken) {
                            localStorage.setItem('sessionToken', response.sessionToken);
                            resolve(response);
                        } else {
                            reject(new Error('Session token not found in response'));
                        }
                    } else {
                        reject(new Error(xhr.responseText || 'Sign-in failed'));
                    }
                }
            };
    
            xhr.onerror = () => {
                reject(new Error('Network error'));
            };
    
            xhr.ontimeout = () => {
                reject(new Error('Request timed out'));
            };
    
            const userData = { username, password };
            xhr.send(JSON.stringify(userData));
        });
    }

    checkCredentialCall(sessionToken) {
        return new Promise((resolve, reject) => {
            const checkUrl = `${this.host}/checkcredential`;
            const xhr = new XMLHttpRequest();

            xhr.open('POST', checkUrl, true);
            xhr.setRequestHeader('Content-Type', 'application/json');

            xhr.onload = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        const response = JSON.parse(xhr.responseText);
                        resolve(response);
                    } else {
                        reject(new Error(xhr.responseText || 'Check credential failed'));
                    }
                }
            };

            xhr.onerror = () => {
                reject(new Error('Network error'));
            };

            xhr.ontimeout = () => {
                reject(new Error('Request timed out'));
            };

            xhr.send(JSON.stringify({ sessionToken }));
        });
    }
}