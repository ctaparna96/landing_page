
class Landingpage{
  // property
  dataBase = {
    "Milan":{username:"Milan",password:"milan123"},
    "Manju":{username:"Manju",password:"manju123"},
    "Mini":{username:"Mini",password:"mini123"},
    "Mathew":{username:"Mathew",password:"mathew123"}
  }
  
  saveData(){
    if(this.dataBase){
      localStorage.setItem("database",JSON.stringify(this.dataBase))
    }
  }
   
  getData(){
    this.dataBase=JSON.parse(localStorage.getItem("database"))
    console.log(this.dataBase);
  }

  // method to register an user
  register(){
    this.getData()
    let user = regusername.value
    let pswd = regpswd.value
    if(user=="" || pswd==""){
      alert('please fill the form completely')
    }
    else{
      if(user in this.dataBase){
        alert('Account already exist...please login')
      }
      else{
        this.dataBase[user] = {username:user,password:pswd}
        this.saveData()
        // navigate to login page
        window.location = 'index.html' 
      }
    }
  }

  // method to login

login(){
  let user = loginUsername.value 
  let pswd = loginPswd.value
  console.log(user , pswd);

  if(user=="" || pswd==""){
    alert('please fill the form completely')
  }
  else{
    if(user in this.dataBase){
      if(this.dataBase[user].password == pswd){
         localStorage.setItem("username",user)
         alert('login successfull')
         window.location ='home.html'
      }
      else{
        alert('incorrect username or password')
      }
    }
    else{
      alert('Account doesnot exist')
    }
  }

}

}

const obj = new Landingpage()
/* obj.saveData() */
obj.getData() 