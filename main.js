var name_of_the_student = [];
function submit() {
    
var s1 = document.getElementById("name_of_the_student_1").value;
var s2 = document.getElementById("name_of_the_student_2").value;
var s3 = document.getElementById("name_of_the_student_3").value;
var s4 = document.getElementById("name_of_the_student_4").value;
    
name_of_the_student.push(s1);
name_of_the_student.push(s2);
name_of_the_student.push(s3);
name_of_the_student.push(s4);
console.log(name_of_the_student);
document.getElementById("display_name").innerHTML = name_of_the_student;
document.getElementById("submit_button").style.display = "none";
document.getElementById("sort_button").style.display = "inline-block";
}
function sorting() {
    name_of_the_student.sort();
    console.log(name_of_the_student);
    document.getElementById("display_name").innerHTML = name_of_the_student;
}