const { default: axios } = require("axios");
const express = require("express");
const app = express();
const cors = require("cors");
// const axios = require("axios");

// app.use( (req, res) => {
//     console.log('New request received');
//     res.status(200);
//     const msg = "Hey there pardner!"
//     res.send(`<h1 style="font-size: 40px; color: red;">${msg}</h1>`)
// })

app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use( express.json() )

const resourceArray = [
    {
        name: "Cillian",
        age: 30,
        id: 1
    },
    {
        name: "Callum",
        age: 31,
        id: 2
    },
    {
        name: "Tasha",
        age: 30,
        id: 3
    },
    {
        name: "Fearghal",
        age: 32,
        id: 4
    },
]

app.get( '/ages', (req, res) => {
    console.log('/ages endpoint');
    res.send( `<h1>Hey there</h1>` );
} )

// app.get('/', (req, res) => {
//     const msg = "Hey there pardner! You've hit home!"
//     res.send(`<h1 style="font-size: 40px; color: green;">${msg}</h1>`)
// } )

// // GET
// app.get('/about', (req, res) => {
//     const { about } = req.params;
//     const msg = `Hey there pardner! You've hit the about page`;
//     console.log(req.query)
//     res.send(`<h1 style="font-size: 40px; color: green;">${msg}</h1>`)
// } )

// app.get( '/about/:name', (req, res) => {
//     console.log(req.params)
//     const { name } = req.params;
//     const msg = `Hey there ${name}! You've hit the about page!`;
//     console.log(req.query)
//     res.send(`<h1 style="font-size: 40px; color: green;">${msg}</h1>`)
// } )

// app.get('/search', (req, res) => {
//     const { name } = req.query;
//     const msg = `Hey there pardner! You've hit the search page, and you've searched for '${name}'`;
//     console.log(req.query)
//     res.send(`<h1 style="font-size: 40px; color: green;">${msg}</h1>`)
// } )

// // POST
// app.post('/bill', (req, res) => {
//     console.log(req.body)
//     res.send('POST to /bill')
// } )

// ERRORS
app.get('*', (req, res) => {
    console.log(req.params['0']);
    const msg = `${req.params['0']} is not a valid route. Please use a valid route`;
    res.send(`<h1 style="font-size: 40px; color: red;">${msg}</h1>`)
} )

app.listen(8080, () => {
    console.log('I am listening on port 8080');
})

// const getDadJoke = async () => {
//     try {
//         const config = { headers: { Accept: 'application/json' } };
//         const res = await axios.get( "https://icanhazdadjoke.com/" );
//         console.log(res);
//     }
//     catch ( err ) {
//         console.log( err )
//     }
// }

// axios.get( "icanhazdadjoke.com" ).then( data => {
//     console.log('Axios resolved', data );
// } ).catch( err => console.log(err) );

// getDadJoke();

