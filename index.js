// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const authProvider = 'cognito-idp.us-west-2.amazonaws.com/us-west-2_randomtext,cognito-idp.us-west-2.amazonaws.com/us-west-2_randomtext:CognitoSignIn:123wd-32fa-hfgg-9a2d-sdfssd123';
        const parts = authProvider.split(':');
        const userPoolIdParts = parts[parts.length - 3].split('/');
        const userPoolId = userPoolIdParts[userPoolIdParts.length - 1];
        const userPoolUserId = parts[parts.length - 1]; // == userid
        console.log("Cognito User: ", userPoolUserId);
        appDiv.innerHTML = `<h1>${userPoolUserId}</h1>`;