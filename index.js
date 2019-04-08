function displayUserRepos(responseJson){
        console.log(responseJson);
        $('.userName').remove();
        $('ul').remove();
        let responseArray = [];
        responseArray = responseJson;
        $('.results').append(`<h1 class="userName">User: ${responseArray[0].owner.login}</h1>`);
        $('.results').removeClass('hidden');
        for(let i = 0; responseArray.length; i++){
            $('.results').append(`<ul><li>${responseArray[i].name}</li><li><a href="${responseArray[i].owner.html_url}">${responseArray[i].owner.html_url}</a>`)
        }
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