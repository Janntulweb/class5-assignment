//arrray and its object.here's address is working as an object.
var address = {
    name:"juma",
    roll:"1",
    class:"9",
    home:"ctg",
    phone:"0187595855",
}
document.write(address["name"])
document.write("<br>")
//we can write array as below object.variable
document.write(address.phone)
document.write("<br>")
document.write(address["class"])
document.write("<br>")
//function 
function add(a,b){
    return a+b;
}
document.write(add(5,6))
document.write("<br>")
function multi(x,y){
    return x*y;
}
document.write (multi(7,7))
document.write("<br>")
function sub(a,b){
    return a-b;
}
document.write(sub(8,4))

//method is when we write function inside the object.here fullname is a method.we have to write the method name before returning the function.
var cal = {
    sum: function add(a,b){
      return a+b;
    }
}
document.write(cal.sum(4,3))
var address = {
    firstName : "janntul",
    lastName : "nayeem",
    phone : "029373838",
    home : "ctg",
    fullName : function() {return this.firstName+" "+this.lastName
    }
}
document.write(address.fullName())
//to watch today date
document.write("<br>")
//this is a calender showing today's date
function dateofToday(){
const d =new Date()
var day =d.getDate()
var month =d.getMonth() +1
var year =d.getFullYear()
document.write(day+"/"+month+"/"+year)
}
dateofToday()

//clock making with javascript.here's d is an object and const which declares the date which is fixed.and var h is hours and we have to give ()on these variable.and for continously run the clock we have to write setTimeOut which is 1000part of a second.and at last we have to call the function named clock
document.write("<br>")

function clock() {
    const d = new Date();
    var h=d.getHours()
    var m=d.getMinutes()
    var s=d.getSeconds()
    if (h>=12){
        h=h-12
        
    }
    document.getElementById("clock").innerHTML = h+":"+m+":"+s
    setTimeout(clock,1000)
}
clock()

document.write("<br>")
document.write("<br>")
//function and if else use for bank deposite with interest 
function bank(deposit) {
    if (deposit>=1000) {
        return deposit +200
    }
    else if (deposit<1000){
        return deposit+100
    }
}
cash=bank(500)
document.write(cash)
document.write("<br>")
document.write("<br>")
cash=bank(1100)
document.write(cash)
//marksheet with if/else
document.write("<br>")

marks=66
if (marks>=80){
    document.write("A+");
}
else if (marks>=70 || 79 <=marks){
    document.write("A");
}
else if (marks>=60 || 69 <=marks){
    document.write("A-");
}
else {
    document.write("C");
}
//now its time for input the marks of different students using function call and if else
document.write("<br>")
function markfun(marks) {
    if (marks>=80){
        document.write("A+")
    }
    else if (marks>=70||79>=marks){
        document.write("A")
    }
    else if(marks>=60||69>=marks){
        document.write("A-")
    }
    else{
        document.write("<br>")
    }
}
markofRony=80
markofJony=70
document.write("Rony gets")+" "+markfun(markofRony)
document.write("<br>")
document.write("Jony gets")+" "+markfun(markofJony)