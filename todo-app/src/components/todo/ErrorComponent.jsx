import React, { Component } from 'react';

function ErrorComponent() {
    return (
        <div>
            An error occured. I don't know what to do! Contact support at abcd-efgh-ijkl
        </div>
    )
}

// function ShowInvalidCredentials(props) {
//     if(props.hasLoginFailed) {
//         return <div> Invalid Credentials</div>
//     }
//     return null
// }

// function ShowLoginSuccessMessage(props) {
//     if(props.showSuccessMessage) {
//         return <div> Login Successful</div>
//     }
//     return null
// }

export default ErrorComponent;