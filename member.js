function skillsMember() {
    var member = document.getElementById("member").value;
    var member = member.toLowerCase();
    var member = member.replace(/\s/g, '');

    if (member === "simon") {
        window.location.href = "simon.html";
    } else if (member === "james") {
        window.location.href = "james.html";
    } else if (member === "jacob") {
        window.location.href = "jacob.html";
    } else if (member === "joe") {
        window.location.href = "joe.html";
    } else if (member === "tom") {
        window.location.href = "tom.html";
    } else if (member === "jake") {
        window.location.href = "jake.html";
    } else if (member === "matt") {
        window.location.href = "matt.html";
    } else if (member === "dave") {
        window.location.href = "dave.html";
    } else if (member === "mike") {
        window.location.href = "mike.html";
    } else if (member === "sam") {
        window.location.href = "sam.html";
    } else if (member === "josh") {
        window.location.href = "josh.html";
    } else if (member === "paul") {
        window.location.href = "paul.html";
    } else if (member === "dan") {
        window.location.href = "dan.html";
    } else if (member === "james") {
        window.location.href = "james.html";
    } else if (member === "kyle") {
        window.location.href = "kyle.html";
    } else if (member === "andy") {
        window.location.href = "andy.html";
    } else {
        alert("Member not found, please try again.");
    }
}