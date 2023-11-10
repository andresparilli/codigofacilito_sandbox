async function showGitHubInfo(){
    let response = await fetch('https://api.github.com/users/aparilli');
    let repos = await response.json();
    console.log(repos);
}

showGitHubInfo();