// Add your code here

//Coding along with the lab lesson, below

/* 
const formData = {
    dogName: "Byron",
    dogBreed: "Poodle",
};

const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify(formData),
};

fetch ("http://localhost:3000/dogs", configurationObject)
.then(function (response) {
    return response.json();
})
.then(function (object) {
    console.log(object);
});
*/




//Now coding for the actual lab portion

//write a function, submitData, that takes two strings as arguments, one representing a user's name and the other representing a user's email.
const submitData = (userName, userEmail) => {

    const userData = {
        name: `${userName}`,
        email: `${userEmail}`,
    };

    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(userData),
    };

    fetch("http://localhost:3000/users", configurationObject)
    .then((response) => response.json())
    .then((dataObj) => renderUserID(dataObj));
    // .catch(function(error) {
    //     //When writing the callback function for your catch(), expect to receive an object on error with a property, message, containing info about what went wrong. Write code to append this message to the DOM when catch() is called.
    // })


    const renderUserID = (dataObj) => {
        console.log(dataObj);
        //Use a second then() to access this newly converted object. From this object, find the new id and append this value to the DOM.

        //this part directly below still needs work! rn just console logging, but will need to figure out what the new id is and how to append to the dom. probs similar to what we did on fetch on demand with forms lab!

        //If JSON Server is running and index.html is open in the browser, you can test your code in the console: calling submitData() in the console should cause an id number to appear on the pag
        //there is a user object with an id number in the db.json, so make sure to take note of that object name and key/value pair names, to use in here for sure!

        const userID = document.createElement('li');
        userID.innerText = dataObj.id;

        document.appendChild(userID);

    }


   // Test 4 - Return the Fetch Chain
    //An amazing feature of fetch() is that if you return it, other functions can tack on their own then() and catch() calls. For this lab, you will need to return the fetch() chain from our submitData function to ensure that the tests run correctly.




}