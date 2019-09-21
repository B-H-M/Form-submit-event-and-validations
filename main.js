const form = document.querySelector('.signup-form');
    const username = document.querySelector('#username');
    const feedback = document.querySelector('.feedback');
    const usernamePattern = /^[a-zA-Z]{6,12}$/;


    form.addEventListener('keyup', e => {
    e.preventDefault();
    console.log(e);

    // console.log(form.username.value);

    if(usernamePattern.test(e.target.value)){
        //feedback
        form.username.setAttribute('class', 'success')
        // console.log('regEx');
    } else{
        //feedback
        form.username.setAttribute('class', 'error')
        // console.log('not regEx');
    }
  
  
    });
    