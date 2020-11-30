function recoverBookmarks() {
   if (!localStorage.bm){     
      bmList = [];  }         // No -so create empty list
   else {
      bmList = JSON.parse(localStorage.bm);
  
      if (!Array.isArray(bmList)) {   // should be an array - Check!
         alert('Saved forms not an array - resetting ...');
         bmList = [];
      }
   }
   return bmList;
}

function displaySubmissions() {
  bmList = recoverBookmarks();
  s = '';
  for (i=0; i<bmList.length; i++){
    q = bmList[i];
    s += "Time: "+q['date'] + ': '+"<br>" 
    	+ "Stay days from " + q['from']+" to "+q['to']+"<br>"
    	+ "Units: "+q['units']+"<br>"
    	+ "Adults: "+q['adults']+"<br>"
    	+ "Children: "+q['children']+"<br>"
    	+ "Title: "+q['ordertype']+"<br>"
    	+ "Guest information:"
    	+ "Name: "+q['firName']+q['lastName']+"<br>"
    	+ "Mobile: "+q['phone']+"<br>"
    	+ "E-mail: "+q['email']+"<br>"
    + "---------------------------------"+"<br>";
  }
  document.getElementById('myBM').innerHTML=s;
}

function submitForm() {
  bmList = recoverBookmarks();
  now = new Date();
  x = { date:now,
	  from:document.getElementById("from").value, 
	  to:document.getElementById("to").value,
	  units:document.getElementById("units").value,
	  adults:document.getElementById("adults").value,
	  children:document.getElementById("children").value,
	  ordertype:document.getElementById("ordertype").value,
	  firName:document.getElementById("firName").value,
	  lastName:document.getElementById("lastName").value, 
	  phone:document.getElementById("phone").value,
	  email:document.getElementById("email").value,
	  };
  bmList.push(x);
  localStorage.bm = JSON.stringify(bmList);
  alert('Successfully Submit!');
}





