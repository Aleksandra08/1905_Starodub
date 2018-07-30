export class Ajax {
   //запрос данных с сервера
    static get(url, successCallback, errorCallback) {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', url);
        xhr.send();

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if(xhr.status === 200 || xhr.status === 304) {
                    const list = JSON.parse(xhr.response);
                    successCallback(list)
                } else {
                    errorCallback(xhr);
                }
            }
        }
    }
}