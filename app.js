// ASYNC BASICS EXERCISE
// 1
let name1 = "Falcon";
function falconName() {
    console.log(`Question 1`);
    console.log(name1);
}
function falcon(n, callback) {
    setTimeout(() => {
        name1 = n;
        callback(n);
    }, 1000);
}
falcon(`Sam Wilson`, falconName);
falconName();

// 2
let name2 = "Winter Soldier";
function winterSoldierName() {
    console.log(`Question 2`);
    console.log(name2);
}
function winterSoldier(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            name2 = n;
            resolve(name2);
        }, 2000);
    });
}
winterSoldier(`Bucky Barnes`)
    .then(m => {
        console.log(`Bucky Barnes`);
    });
winterSoldierName();

// 3
let name3 = "Agent 13";
function agent13Name() {
    console.log(`Question 3`);
    console.log(name3);
}
function agent13(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(n);
            name3 = n;
         }, 3000);
    });  
}
async function fun() {
    const n = await agent13(`Sharon Carter`);
    console.log(n);
}
fun();
agent13('Sharon Carter');
agent13Name();

// 4
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('First Promise')
    }, 2000);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Second Promise')
    }, 3000);
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Third Promise')
    }, 4000);
});

Promise.all([p1, p2, p3]).then(values => {
    return Promise.all(values.map(s => s.all()));
}).then(([p1, p2, p3]) => {
    console.log([p1, p2, p3]);
}).catch(e => {
    console.log(`Error`);
})