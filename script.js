var users = [];

function deleteUser(address){
    users = users.filter((n)=>(n.email) !== address);
    displayUsers();
}

function signUp(){
    if(users.length===0){
        users.push({
            email:document.getElementById("emailSignup").value,
            firstname:document.getElementById("firstname").value,
            lastname:document.getElementById("lastname").value,
            password:document.getElementById("passSignup").value
        });
        document.getElementById("emailSignup").value="";
        document.getElementById("passSignup").value="";
        document.getElementById("firstname").value="";
        document.getElementById("lastname").value="";
        document.getElementById("message").innerHTML = "";
    }else{
        var userCheck = users.filter((n)=>(n.email)===document.getElementById("emailSignup").value).length;
        console.log(userCheck);
        if(userCheck === 1){
            document.getElementById("message").innerHTML = "<p>email ID already exists!</p>";
        }else{
            users.push({
                email:document.getElementById("emailSignup").value,
                firstname:document.getElementById("firstname").value,
                lastname:document.getElementById("lastname").value,
                password:document.getElementById("passSignup").value
            });
            document.getElementById("emailSignup").value="";
            document.getElementById("passSignup").value="";
            document.getElementById("firstname").value="";
            document.getElementById("lastname").value="";
            document.getElementById("message").innerHTML = "";
        }
    }
    displayUsers();
}

function displayUsers(){
    document.getElementById('rows').innerHTML="";
    var tbodyRef = document.getElementById('rows');
    for(var user=0;user<users.length;user++){

        var newRow = tbodyRef.insertRow();
    
        // Insert a cell at the end of the row
        var newCell = newRow.insertCell();
        
        // Append a text node to the cell
        var newText = document.createTextNode(user+1);
        newCell.appendChild(newText);

        var newCell = newRow.insertCell();
        var newText = document.createTextNode(users[user].email);
        newCell.appendChild(newText);
        var newCell = newRow.insertCell();
        var newText = document.createTextNode(users[user].firstname);
        newCell.appendChild(newText);
        var newCell = newRow.insertCell();
        var newText = document.createTextNode(users[user].lastname);
        newCell.appendChild(newText);
        var newCell = newRow.insertCell();
        var newText = document.createTextNode(users[user].password);
        newCell.appendChild(newText);

        var newCell = newRow.insertCell();
        var button = document.createElement("button");
        button.className="btn btn-danger";
        let a = users[user].email;
        button.onclick = function(){deleteUser(a)};
        // button.onclick = ;
        var trash = document.createElement("i");
        trash.className="fa fa-trash-o";
        button.appendChild(trash);
        newCell.appendChild(button);
    }
}

function check(){
    let email = document.getElementById("emailLogin").value;
    let password = document.getElementById("passLogin").value;
    var userCheck = users.filter((n)=>(n.email)===document.getElementById("emailLogin").value).length;
    if(userCheck === 0){
        document.getElementById("loginmessage").innerHTML = "<p>User Does not exists</p>";
        document.getElementById("loginmessage").style.color="red";
    }else{
        let result = false;
        for(var i=0;i<users.length;i++){
            if(users[i].email === email && users[i].password === password){
                document.getElementById("loginmessage").innerHTML = "<p>You have logged in successfully!</p>";
                document.getElementById("loginmessage").style.color="green";
            }else{
                document.getElementById("loginmessage").innerHTML = "<p>Password is incorrect!</p>";
                document.getElementById("loginmessage").style.color="red";
            }
        }
    }
}