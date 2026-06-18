function writeTy(person){
document.getElementById("message").innerHTML=("Thanks for contacting Quasar Discovery and Exploration, "+person+" !");
}
function checkReqFields() {
	var name=document.getElementById('nameinput').value;
	if (name==null || name=="") {
		alert("First name must be filled out");
	return false;
	}
	writeTy(name);
	document.forms('contact').reset();
}
