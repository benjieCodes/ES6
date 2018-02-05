// github.com/airbnb/javascript

const presidentsJSON = 'http://mysafeinfo.com/api/data?list=presidents&format=json';
const statesJSON = 'http://mysafeinfo.com/api/data?list=states&format=json';

const presidentsPromise = fetch(presidentsJSON);
const statesPromise = fetch(statesJSON);


// chaining promises using Promise.all()
Promise
    .all([presidentsPromise, statesPromise])
    .then(responses => {
        return Promise.all(responses.map(res => res.json())) // converted it to JSON
    }).then(responses => console.log(responses)); // connected both JSON promises together!