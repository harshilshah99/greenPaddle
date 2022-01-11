const contactForm=document.querySelector('.email-form');

let email=document.getElementById('linkmail');


contactForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    let formData={
        email: email.value,   

    }
    let xhr = new XMLHttpRequest();
    xhr.open('POST','/');
    xhr.setRequestHeader('content-type' , 'application/json');
    xhr.onload=function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Email sent');
            email.value = '';
        }else{
            alert('Something went wrong')
        }
    }
    xhr.send(JSON.stringify(formData))
})