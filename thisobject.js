var object ={
    firstname : 'pandey',
    lastname : 'prafull',
    fullname :  function(){
       return this.firstname + ' ' + this.lastname
    }
}
console.log(object.fullname())