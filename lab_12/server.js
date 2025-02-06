var express = require('express');
var app = express();
app.use(express.static('public'))
var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi({
    clientId: 'b61389fd0bb54b54ae2bba0ff41f5889',
    clientSecret: '67aeeeea812d4d30abfbeab096035ac6'
})

spotifyApi.clientCredentialsGrant().then(
    function(data) {
        console.log('The access token expires in ' + data.body['expires_in']);
        console.log('The access token is ' + data.body['access_token']);


        spotifyApi.setAccessToken(data.body['access_token']);
    },
    function (err) {
        console.log(
            'Something went wrong when retrieving an access token',
            err.message 
        );
    }
)


async function getTracks(searchterm, res) {

    spotifyApi.searchTracks(searchterm).then(function (data) {
        res.send(JSON.stringify(data.body));
    }, function (err) {
        console.error(err);
    });
}

app.get('/searchLove', function (req, res) {
    getTracks('love', res);
});
app.listen(8080);
