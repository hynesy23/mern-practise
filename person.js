const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.connect( 'mongodb://localhost:27017/movieDB', { useNewUrlParser: true, useUnifiedTopology: true } )
.then( ( ) => 
{
    console.log("CONNECTION ESTABLISHED");
})
.catch( error => { console.log('ERROR'); handleError( error ) } );

const personSchema = new Schema(
    {
        firstName: String,
        lastName: String
    }
)

personSchema.virtual('fullName').get( function( ) {
    // console.log('hello')
    // const greeting = "I am";
    // return 4;
    return `${this.firstName} ${this.lastName}`;
})

const Person = mongoose.model( 'Person', personSchema);

const Mark = new Person(
    {
        firstName: "Mark",
        lastName: "Rambo"
    }
)

// Mark.save().then( data => console.log(data) );

console.log(Mark.fullName);



// const mongoose = require("mongoose");
// const { Schema } = mongoose;

// mongoose.connect( 'mongodb://localhost:27017/movieDB', { useNewUrlParser: true, useUnifiedTopology: true } )
// .then( ( ) => 
// {
//     console.log("CONNECTION ESTABLISHED");
// })
// .catch( error => { console.log('ERROR'); handleError( error ) } );

// const movieSchema = new Schema(
//     {
//         title: String,
//         director: String,
//         year: Number,
//         rating: Number
//     }
// )

// movieSchema.methods.sayHello = function( ) 
// {
//     console.log('HELLO');
// }

// const Movie = mongoose.model( 'Movie', movieSchema );

// const jPark = new Movie(
//     {
//         title: "Jurassic Park",
//         director: "Steven Spielberg",
//         year: 1992,
//         rating: 9.3
//     }
// )

// Movie.insertMany([
//     jPark,
//     { title: "Pulp Fiction", director: "Quentin Tarantino", year: 1994, rating: 9.5 },
//     { title: "Avengers", director: "Joss Whendon", year: 2010, rating: 9.1 },
//     { title: "The Incredibles", director: "Brad Bird", year: 2006, rating: 9.2 },
//     { title: "Spiderman", director: "Sam Raaimi", year: 2001, rating: 8.9 }
// ]).then( data => {
//     console.log(data);
// })

// Movie.deleteMany( {} ).then( () => console.log('Movies deleted'));

// Movie.updateOne( {title: 'Spiderman'}, {director: 'Sam Raimii'} ).then( res => console.log(res) );

// const newMovie = new Movie(
//     {
//         title: "Bad Baby",
//         director: "Julian Assange",
//         year: 2001,
//         rating: 3.4,

//     }
// )

// newMovie.save().then( data => console.log(data) );

// newMovie.sayHello();