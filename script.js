document.getElementById("genderInput").value;
document.getElementById("ageInput").value;
document.getElementById("heightInput").value;
document.getElementById("weightInput").value;
document.getElementById("outputDetails").innerHTML;

function calculate() {
    let output = document.getElementById("outputDetails").innerHTML;
    var gender = document.getElementById("genderInput").value;
    var age = document.getElementById("ageInput").value;
    var height = document.getElementById("heightInput").value;
    var weight = document.getElementById("weightInput").value;

    output = (10 * weight) + (6.25 * height) - (5 * age);

    if (gender == "male") {
        output = output + 5;
    } else if (gender == "female") {
        output = output - 161;
    } else if (gender == "Prefer not to say") {
        output = output + 0;
    }

    document.getElementById("outputDetails").innerHTML = `Your estimated daily calorie needs: ${output} calories`;
    return;
}

function reset() {
    document.getElementById("genderInput").value = "";
    document.getElementById("ageInput").value = "";
    document.getElementById("heightInput").value = "";
    document.getElementById("weightInput").value = "";
    document.getElementById("outputDetails").innerHTML = "";
}
