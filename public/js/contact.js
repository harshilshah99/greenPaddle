const contactForm=document.querySelector('.contact-form');
let name=document.getElementById('name');
let email=document.getElementById('email');
let phone=document.getElementById('phone');
let message=document.getElementById('message');

contactForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    let formData={
        name: name.value,
        email: email.value,
        phone: phone.value,
        message: message.value

    }
    let xhr = new XMLHttpRequest();
    xhr.open('POST','/faqs');
    xhr.setRequestHeader('content-type' , 'application/json');
     xhr.onload=function(){
        alert('Thank you')
    //     console.log(xhr.responseText);
    //     if(xhr.responseText == 'success'){
    //         alert('Email sent');
            name.value = '';
            email.value = '';
            phone.value = '';
            message.value = '';
    //     }else{
    //         alert('Something went wrong')
    //     }
     }

    xhr.send(JSON.stringify(formData))
})

