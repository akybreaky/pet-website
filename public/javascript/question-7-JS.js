function updateDateTime() {
    const dateTimeElement = document.getElementById('date-time');
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();
    dateTimeElement.textContent = `${formattedDate} ${formattedTime}`;
}

setInterval(updateDateTime, 1000);
updateDateTime();

function validateFormDog() {
    var breedDog = document.getElementById("breed-dog").value;
    var ageDog = document.getElementById("age-dog").value;
    var genderDog = document.querySelector('input[name="gender-dog"]:checked');
    var childrenDog = document.getElementById("children-dog").checked;
    var otherDogsDog = document.getElementById("other-dogs-dog").checked;
    var catsDog = document.getElementById("cats-dog").checked;

    if (breedDog === "" || ageDog === "" || !genderDog || (!childrenDog && !otherDogsDog && !catsDog)) {
        alert("Error: Please fill out all required fields.");
        return false; 
    }
    return true;
}

function validateFormCat() {
    var breedCat = document.getElementById("breed-cat").value;
    var ageCat = document.getElementById("age-cat").value;
    var genderCat = document.querySelector('input[name="gender-cat"]:checked');
    var childrenCat = document.getElementById("children-cat").checked;
    var dogsCat = document.getElementById("dogs-cat").checked;
    var otherCatsCat = document.getElementById("other-cats-cat").checked;

    if (breedCat === "" || ageCat === "" || !genderCat || (!childrenCat && !dogsCat && !otherCatsCat)) {
        alert("Please fill out all required fields.");
        return false;
    }
    return true;
}

function validateForm() {
    var animal = document.querySelector('input[name="animal"]:checked');
    var breed = document.getElementById("breed").value;
    var age = document.getElementById("age").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var children = document.getElementById("Smallchildren").checked;
    var dogs = document.getElementById("dogs").checked;
    var otherCats = document.getElementById("cats").checked;
    var comment = document.getElementById("comment").value;
    var fullName = document.getElementById("fname").value;
    var email = document.getElementById("email").value;

    if (!animal || breed === "" || age === "" || !gender || (!children && !dogs && !otherCats) || fullName === "" || email === "" || comment =="") {
        alert("Error: Please fill out all required fields.");
        return false; 
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Error: Please enter a valid email address.");
        return false;
    }

    return true;
}