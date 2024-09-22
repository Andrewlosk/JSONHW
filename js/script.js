
'use strict';

const name = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const age = document.getElementById('age');
const course = document.getElementById('course');
const faculty = document.getElementById('faculty');
const subjects = document.getElementById('subjects');

const btn = document.getElementById('btn');

const tablePlace = document.getElementById('tablePlace')



const userData = {}

const addDataUser = () => {
    // const nameValue = name.value

    userData.name = name.value;
    userData.lastName = lastName.value;
    userData.age = age.value;
    userData.course = course.value;
    userData.faculty = faculty.value;
    userData.subjects = subjects.value;



}

// addDataUser()
let toJSONFormat;
let fromJSONFormat;


const addInfoAndRemove = () => {
    
    addDataUser()
    toJSONFormat = JSON.stringify(userData)
    console.log(toJSONFormat);
    fromJSONFormat = JSON.parse(toJSONFormat)
    console.log(fromJSONFormat);


    const tableElem = document.createElement('tr')
    tableElem.innerHTML = `
    <th>${fromJSONFormat.name}</th> 
    <th>${fromJSONFormat.lastName}</th>
    <th>${fromJSONFormat.age}</th>
    <th>${fromJSONFormat.course}</th>
    <th>${fromJSONFormat.faculty}</th>
    <th>${fromJSONFormat.subjects}</th>
    <th><button class="deleteBtn">delete</button></th>
    `



    tablePlace.appendChild(tableElem)

    const deleteBtn = tableElem.querySelector('.deleteBtn');
    deleteBtn.addEventListener('click', () => {
        tableElem.remove()
    })




}
console.log(userData);



btn.addEventListener('click', (e) => {
    e.preventDefault()
    addInfoAndRemove()
})





