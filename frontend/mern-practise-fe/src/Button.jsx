import fetchAllUsers from './api';

function getAllUsers() {
    fetchAllUsers().then( ({data}) => console.log( data ) );
}


function Button() {
    return(
        <button onClick={ getAllUsers }>Get Users</button>
    )
}

export default Button