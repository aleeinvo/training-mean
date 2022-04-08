let expire = (new Date(2022, 4, 26)).toUTCString();

function setCookie(name, value, expiry) {
    document.cookie = `${name}=${value}; SameSite=strict; expires=${expiry}`;
}

function setCookieWithMaxAge(name, value, age) {
    document.cookie = `${name}=${value}; SameSite=strict; max-age=${age}`;
}

setCookie('name', 'alee', expire);
setCookie('age', 28, expire);
setCookie('city', 'lahore', expire);
setCookieWithMaxAge('work', 'dev', 500);

function getCookies() {
    let cookies = {};

    document.cookie.split(';').forEach(cookie => {
        let [name, value] = cookie.split('=');

        if(name && value) {
            cookies[name.trim()] = value.trim();
        }
    });

    return cookies;
}

function deleteCookie(name)
{
    expiry = (new Date(1970, 1, 1)).toUTCString();
    document.cookie = `${name}=; SameSite=strict; expires=${expiry}`;
}

console.log(getCookies());
// deleteCookie('js_session');