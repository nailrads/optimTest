export const getCookie = (name: string, app: any = document) => {
    let matches = app.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
};

export const setCookie = (name: string, value: any, options: any = {}, app: any) => {
    options = {
        path: '/',
        // при необходимости добавьте другие значения по умолчанию
        ...options
    };

    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }

    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    app.cookie = updatedCookie;
};

// Пример использования:
// setCookie('user', 'John', {secure: true, 'max-age': 3600});

export const deleteCookie = (name: string, app: any): void => {
    setCookie(name, "", {
        'max-age': -1
    }, app)
};
