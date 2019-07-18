(function () {
    "use strict";

    function wait(number) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (number) {
                    resolve();
                } else {
                    reject();
                }
            }, number);
        });
    }

    wait(1000).then(() => console.log('You\'ll see this after 1 second'));
    wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


    const getLastPush = function(userName) {
        const gitUrl = "https://api.github.com/users/" + userName + "/events";
        return fetch(gitUrl, {
            headers: {
                'Authorization': `token ${gitHubAPI}`
            }
        })
            .then(response => response.json())
            .then(events => {
                for (let event of events) {
                    if (event.type === "PushEvent") {
                        // console.log(`${event.type} at ${event.type.created_at}`)
                        return (event.created_at);
                    }
                }
            })
    };

    let userName = prompt('what is your user name?');
console.log(getLastPush(userName))


})();
