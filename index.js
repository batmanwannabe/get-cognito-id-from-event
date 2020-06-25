// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const authProvider = 'cognito-idp.us-west-2.amazonaws.com/us-west-2_VJehLel7Y,cognito-idp.us-west-2.amazonaws.com/us-west-2_VJehLel7Y:CognitoSignIn:a5e3bda5-efff-4aa1-9a2d-1299f46d29ad';
        const parts = authProvider.split(':');
        const userPoolIdParts = parts[parts.length - 3].split('/');
        const userPoolId = userPoolIdParts[userPoolIdParts.length - 1];
        const userPoolUserId = parts[parts.length - 1]; // == userid
        console.log("Cognito User: ", userPoolUserId);
        appDiv.innerHTML = `<h1>${userPoolUserId}</h1>`;