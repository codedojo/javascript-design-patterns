const fs = require('fs');

class FsProxy {
    static readFile(path, format, callback) {
        if (!path.match(/.md$|.MD$/)) {
            return callback(new Error(`Can only read .md files`));
        }

        fs.readFile(path, format, callback);
    }
}

FsProxy.readFile('message.md', 'utf-8', (error, file) => {
    if (error) throw error;

    console.log(file);
});