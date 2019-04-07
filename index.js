function displayUserRepos(data){
    console.log(data);
}

function getUserRepos(userInput){
    fetch(`https://api.github.com/users/${userInput}/repos`)
    .then(response => response.json())
    .then(responseJson => displayUserRepos(responseJson))
    .catch(error => console.log(error));
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