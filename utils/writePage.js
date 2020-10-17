const fs = require('fs');

module.exports = employees => {   
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/employees.html', employees, err => {
            if(err){
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: `====================================
 HTML file created in dist folder!!
====================================`
            })
        })
    })
}