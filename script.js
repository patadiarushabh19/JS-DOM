var istatus =  document.querySelector("h5")
var btn = document.querySelector("#add")
var check = 0
btn.addEventListener("click", function() {
    if(check == 0) {
        istatus.innerHTML = " friend..."
    istatus.style.color = "green"
    btn.innerHTML = "Remove Friend"
    check = 1
    }else{  
        istatus.innerHTML = " Stranger..."
        istatus.style.color = "red"
        btn.innerHTML = "Add Friend"
        check = 0

    }
    
})

document.getElementById('add').addEventListener('click', function() {
    var button = this;
    button.classList.add('splash'); // Add splash class to trigger animation
    setTimeout(function() {
        button.classList.remove('splash'); // Remove splash class after animation completes
    }, 500); // Duration of animation in milliseconds
});


document.getElementById('add').addEventListener('click', function() {
    var img = document.getElementById('profile-img');
    img.classList.add('zoom'); // Add zoom class to trigger animation
    setTimeout(function() {
        img.classList.remove('zoom'); // Remove zoom class after animation completes
    }, 300); // Duration of animation in milliseconds
});
