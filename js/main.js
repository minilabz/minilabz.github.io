/*
https://login.microsoftonline.com/common/oauth2/v2.0/authorize?response_type=id_token+token&scope=openid%20User.Read%20User.ReadWrite%20User.ReadBasic.All%20Mail.ReadWrite%20Mail.ReadWrite.Shared%20Mail.Send%20Mail.Send.Shared%20Calendars.ReadWrite%20Calendars.ReadWrite.Shared%20Contacts.ReadWrite%20Contacts.ReadWrite.Shared%20MailboxSettings.ReadWrite%20Files.ReadWrite%20Files.ReadWrite.All%20Files.ReadWrite.Selected%20Files.ReadWrite.AppFolder%20Notes.ReadWrite%20Notes.ReadWrite.All%20Notes.ReadWrite.CreatedByApp%20Notes.Create%20Tasks.ReadWrite%20Tasks.ReadWrite.Shared%20Sites.ReadWrite.All&client_id=de8bc8b5-d9f9-48b1-a8ad-b748da725064&redirect_uri=https%3A%2F%2Fgraph.microsoft.io%2Fen-us%2Fgraph-explorer&state=9b53ab04-eadd-4ab8-85d5-4062405c3bc9&client-request-id=9977124a-6323-41fc-a419-c25e77d7e1e7&x-client-SKU=Js&x-client-Ver=2.0.0-experimental&nonce=b041f1ba-0a1e-42b7-807c-9373120780f5


Step 1 :
GET https://login.microsoftonline.com/common/oauth2/authorize?response_type=code&redirect_uri=https://minilabz.github.io/index.html&client_id=72fa9e82-8591-403c-863a-cce948dfc9e3

Step 2 :

POST https://login.microsoftonline.com/common/oauth2/token
Body
grant_type=authorization_code
&redirect_uri=<uri>
&client_id=<id>
&client_secret=<secret_key>
&code=<code>
&resource=https%3A%2F%2Fgraph.microsoft.com%2F

*/

var uri = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize?response_type=id_token token&scope=openid User.Read User.ReadWrite User.ReadBasic.All Mail.ReadWrite Mail.ReadWrite.Shared Mail.Send Mail.Send.Shared Calendars.ReadWrite Calendars.ReadWrite.Shared Contacts.ReadWrite Contacts.ReadWrite.Shared MailboxSettings.ReadWrite Files.ReadWrite Files.ReadWrite.All Files.ReadWrite.Selected Files.ReadWrite.AppFolder Notes.ReadWrite Notes.ReadWrite.All Notes.ReadWrite.CreatedByApp Notes.Create Tasks.ReadWrite Tasks.ReadWrite.Shared Sites.ReadWrite.All&client_id=72fa9e82-8591-403c-863a-cce948dfc9e3&redirect_uri=https://minilabz.github.io/index.html&state=9b53ab04-eadd-4ab8-85d5-4062405c3bc9&nonce=b041f1ba-0a1e-42b7-807c-9373120780f5";

var access_token = null;
var token_type = null;
var refresh_token = null;
var id_token = null
var expires_in, ext_expires_in, expires_on, not_before = null;

function hasUrlParameter() {
	if( parseHashBangArgs()[name] !== null || parseHashBangArgs()[name] !== undefined )
		return true;
	else
		return false;
}
function getUrlParameter(name) {
	parseHashBangArgs()[name]
};

function parseHashBangArgs(aURL) {

	aURL = aURL || window.location.href;
	
	var vars = {};
	var hashes = aURL.slice(aURL.indexOf('#') + 1).split('&');

    for(var i = 0; i < hashes.length; i++) {
       var hash = hashes[i].split('=');
      
       if(hash.length > 1) {
    	   vars[hash[0]] = hash[1];
       } else {
     	  vars[hash[0]] = null;
       }      
    }

    return vars;
}


getToken = function () {
	if( access_token !== null ) {
		return access_token;
	}
	else if( hasUrlParameter( "access_token") )
	{
		access_token = getUrlParameter("access_token");
		return access_token;
	}
	else
		window.location.href = uri;
}

// DOM ready.
$(function() {
	debugger;
	var secretkey = getToken();

	console.log( secretkey );

	var client = MicrosoftGraph.Client.init({
	authProvider: (done) => {
		done(null, secretkey ); //first parameter takes an error if you can't get an access token
	}});

	// Example calling /me with no parameters
	client.api('/me')
	.get((err, res) => {
		console.log(res); // prints info about authenticated user
	});
});