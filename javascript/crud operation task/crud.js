function onsubmitfrom() {
	var first=document.getElementById("fname").value;

    var table = document.getElementById('employeelist');
    var newRow = table.insertRow(table.rows.length);

    var cell1 = newRow.insertCell(0);
    //var cell2 = newRow.insertCell(1);

    cell1.innerHTML = first;
}

// function readformData(){
// 	var formdata={};
// 	formdata["fname"]= document.getElementById('fname').value;
// 	formdata["lname"]= document.getElementById('lname').value;
// 	formdata["mail"]= document.getElementById('mail').value;
// 	fromdata["city"]= document.getElementById('city').value;
// 	fordata["contact"]= document.getElementById('contact').value;
// 	return fromdata;

// }

// function insertNew(data){
// 	var table = document.getElementById("employeelist").getElementByTagName('tbody')[0];
// 	var newRow = table.inserRow(table.length);
// 	fulln
// }
