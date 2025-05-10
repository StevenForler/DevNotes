
// function UserGreeting(props){
//     if(props.isLoggedIn){
//         return <h2>Welcome {props.username}</h2>
//     }
//     else{ // since return exits you don't need the else statement but it just isn't as explicit
//         return <h2>Please log in to continue</h2>
//     }
// }
function UserGreeting(props){
     return(props.isLoggedIn ?  <h2 className="welcome-message">Welcome {props.username}</h2> : 
                                <h2 className="login-prompt">Please log in to continue</h2> );
    
}


export default UserGreeting