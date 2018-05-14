class HttpService {
    static getInstance() {
        if (!HttpService.instance) {
            HttpService.instance = new HttpService();
        }

        return HttpService.instance;
    }

    constructor(baseUrl) {
        if (!HttpService.instance) {
            this.baseUrl = baseUrl;
            HttpService.instance = this;
        }
        
        return HttpService.instance;
    }

    get(resource) {
        //return fetch(`${this.baseUrl}/${resource}`);
    }

    post() {

    }

    put() {

    }

    patch() {

    }

    delete() {
        
    }
}

const http = new HttpService('https://codedojo.ru/api');;

const http2 = new HttpService();

const http3 = HttpService.getInstance();

console.log(http2);
console.log(http3);