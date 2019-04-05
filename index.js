function getUserRepos(userInput){
    fetch(`https://github.com//users/${userInput}/repos`)
    .then(response => response.json())
    .then(response => displayUserRepos(responseJson))
    .catch(error => alert('Something went wrong. Try again later. '));
}

function watchForm(){
    $('form').submit(function(event){
        event.preventDefault();
        let userInput = $('#userInput').val();
        console.log(userInput);
        getUserRepos(userInput);
    })
}

$(function(){
    console.log('GitHub user repo search app loaded. Waiting for user input.')
    watchForm();
});