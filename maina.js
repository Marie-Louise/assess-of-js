

function one1()
{
  return {
      bar: "hello"
  };
}

function two2()
{
  return
  {
      bar: "hello"
  };
}


// How can you create an object in JavaScript?
var person = {
    firstName: "Marie",
    lastName : "Valary",
    id       : 1111111111111111111,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
  console.log(person)

// What are the scopes of a variable in JavaScript?

//   Global Scope
  function myFunction() {
    var carName = "mama";
//   Local Scope 
  myFunction();
function myFunction() {
  carName = "mama";
}

//   Block Scope.
carName = "Volvo";
alert(carName);
var carName;