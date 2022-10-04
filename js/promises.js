

function latestCommit(){fetch(`  https://api.github.com/users/${username}/events/public`, {
    headers: {
        'Authorization': PROMISES_PROMISES
    }
}).then(function(response){

    return response.json()

})
    .then(function (data) {
        console.log(data)
        const lastCommit = data[0].created_at
        console.log(lastCommit)
    })
}

latestCommit();



