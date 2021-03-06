// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

var url = 'http://sandbox.bittsdevelopment.com/code1/';

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', url + 'fetchemployees.php' , true);

request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  var isFeatured = document.getElementById('featureicon');
  var empPicSrc = document.getElementById('profilepic');
  var empName = document.getElementById('empname');
  var empBio = document.getElementById('empbio');
  var empRoles = document.getElementById('rolename');
  var empRoleColor;
  var empId= [];
  var empPic;
  var empRoleId = [];
  var RolesColor = [];
  var RoleName =[];
    //console.log(data)

  
  if (request.status >= 200 && request.status < 400) {
    
    for(eid in data){
        //console.log(data[i].employeefname)
        empId.push(data[eid].employeeid);
    }

    //console.log(empId);
    for(i in data){
      isFeatured.innerHTML += data[i].employeeisfeatured;

        if(data[i].employeeisfeatured == 0){
          isFeatured.innterHTML = isFeatured.style.display = "inline";
        }
        var empPic = data[i].employeehaspic;
        if(empPic == 1){
          //console.log('has pic')
            empPicSrc.src =  url + 'employeepics/' + data[i].employeeid + '.jpg';
            document.getElementById('profilepic').innerHTML += '\n';
        }
        empName.innerHTML += "<br>" + data[i].employeefname;
        empName.innerHTML += data[i].employeelname + "<br>";
        empBio.innerHTML += data[i].employeebio + "<br>";

        for(j in data[i].roles){
         
          //console.log(data[i].roles[j].roleid);
         
          empRoleColor = data[i].roles[j].rolecolor;
          empRoles.innerHTML += data[i].roles[j].rolename;
          empRoles.style.backgroundColor = empRoleColor;
        }
    }
    
  } else {
    console.log('error')
  }
}

// Send request
request.send()