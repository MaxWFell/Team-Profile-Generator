const fs = require('fs');

module.exports = pageHtml => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', pageHtml, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};