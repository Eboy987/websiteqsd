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
function showHideNav() {
  var navbardisplay = document.getElementById('mainnav');
  if (navbardisplay.style.display!=='block') {
    navbardisplay.style.display='block';
    }
  else {
    navbardisplay.style.display='none';
    }
  }
  