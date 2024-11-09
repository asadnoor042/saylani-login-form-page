function submit(){
    var country= document.getElementById("Country")
    var city= document.getElementById("City")
    var course= document.getElementById("course")
    var proficiency= document.getElementById("proficiency")
    var fullname= document.getElementById("fullname")
    var Fathername= document.getElementById("Fathername")
    var email= document.getElementById("email")
    var phone= document.getElementById("phone")
    var CNIC= document.getElementById("CNIC")
    var fatherCnic= document.getElementById("fathercnic")
    var dob= document.getElementById("dob")
    var gender= document.getElementById("Gender")
    var add= document.getElementById("Address")
    var Qualification= document.getElementById("Qualification")
    var Laptop= document.getElementById("Laptop")
  
    console.log(`
        Country  :  ${country.value} \n
        City  : ${city.value} \n
        Course  :  ${course.value}  \n
        Computer   :  Proficiency ${proficiency.value}  \n
        Full Name :  ${fullname.value}  \n
        Father's Name :  ${Fathername.value}  \n
        Father's Name  : ${Fathername.value}  \n
        Email  : ${email.value}  \n
        Phone  : ${phone.value}  \n
        CNIC  : ${CNIC.value}  \n
        Father CNIC  : ${fatherCnic.value} \n
        Date of Birth  : ${dob.value}  \n
        Gender  : ${gender.value}  \n
        Address  : ${add.value}  \n
        Qualification  : ${Qualification.value}
        Laptop  : ${Laptop.value}
        `)
}
