let http = {
    request(type, url, data, done) {
        let request = new XMLHttpRequest();

        request.onload = function() {
            if (request.status === 200) {
                done(request.responseText);
            }
        }
        
        request.open(type.toUpperCase(), url);
        request.send(data);
    }
};

const httpAdapter = {
    request(type, url, data, done) {
        fetch(url, {
            method: type,
            body: JSON.stringify(data)
        })
            .then(res => res.json)
            .then(data => done(null, data))
            .catch(error => done(error));
    }
};

class Repository {
    constructor(baseUrl, resource, http) {
        this.baseUrl = baseUrl;
        this.resource = resource;
        this.http = http;
    }

    get url() {
        return `${this.baseUrl}/${this.resource}`;
    }

    get(done) {
        http.request('get', this.url, null, done);
    }

    post(data, done) {
        http.request('post', this.url, data, done);
    }

    put(id, data) {
        http.request('put', `${this.url}/${id}`, data, done);
    }

    delete(id) {
        http.request('delete', `${this.url}/${id}`, data, done);
    }
}

const repo = new Repository('https://codedojo.ru', 'courses', httpAdapter);

repo.get(courses => console.log(courses));