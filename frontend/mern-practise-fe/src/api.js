const axios = require('axios');

const fetchAllUsers = () => {
    axios.get( 'http://localhost:8080/ages' )
    .then( data => {
        console.log( data );
        return data;
    } );
}

export default fetchAllUsers;