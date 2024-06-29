// Rewrite using async/await
// Rewrite this example code from the chapter Promises chaining using async/await instead of .then/catch:

function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        });
}

loadJson('https://javascript.info/no-such-user.json')
    .catch(alert); // Error: 404


//SOLUTION:
async function loadJson(url) {
    let result = await fetch(url)
        if (response.status == 200) {
            return response.json();
        } else {
            throw new Error(response.status);
        }
    
}

loadJson('https://javascript.info/no-such-user.json')
    .catch(alert);