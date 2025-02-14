const booksData = [
    {
        "bookId": 101,
        "title": "JavaScript: The Good Parts",
        "author": {
            "name": "Douglas Crockford",
            "birthDate": "1947-12-15",
            "nationality": "American"
        },
        "publisher": {
            "name": "O'Reilly Media",
            "yearFounded": 1980,
            "location": "USA"
        },
        "genres": ["Programming", "Web Development", "JavaScript"],
        "reviews": [
            {
                "user": "Alice",
                "rating": 5,
                "comment": "A must-read for every JavaScript developer!",
                "date": "2021-05-10"
            },
            {
                "user": "Bob",
                "rating": 4,
                "comment": "Great book but could include more examples.",
                "date": "2021-06-15"
            }
        ],
        "price": {
            "currency": "USD",
            "amount": 30.99
        },
        "available": true,
        "languages": ["English", "Spanish"],
        "tags": ["beginner", "web dev"]
    },


    {
        "bookId": 102,
        "title": "The Pragmatic Programmer",
        "author": {
            "name": "Andrew Hunt",
            "birthDate": "1960-12-21",
            "nationality": "American"
        },
        "publisher": {
            "name": "Addison-Wesley",
            "yearFounded": 1942,
            "location": "USA"
        },
        "genres": ["Programming", "Software Development", "Tech"],
        "reviews": [
            {
                "user": "Charlie",
                "rating": 5,
                "comment": "One of the best books on software engineering.",
                "date": "2020-07-11"
            },
            {
                "user": "Dave",
                "rating": 4,
                "comment": "Useful but a bit dated in some concepts.",
                "date": "2022-01-22"
            }
        ],
        "price": {
            "currency": "USD",
            "amount": 39.99
        },
        "available": false,
        "languages": ["English"],
        "tags": ["advanced", "software engineering"]
    },



    {
        "bookId": 103,
        "title": "Clean Code",
        "author": {
            "name": "Robert C. Martin",
            "birthDate": "1952-12-05",
            "nationality": "American"
        },
        "publisher": {
            "name": "Prentice Hall",
            "yearFounded": 1913,
            "location": "USA"
        },
        "genres": ["Programming", "Software Engineering", "Best Practices"],
        "reviews": [
            {
                "user": "Eve",
                "rating": 5,
                "comment": "Transformative book on writing clean code.",
                "date": "2023-01-02"
            },
            {
                "user": "Frank",
                "rating": 4,
                "comment": "Extremely valuable, but challenging for beginners.",
                "date": "2023-01-10"
            }
        ],
        "price": {
            "currency": "USD",
            "amount": 45.50
        },
        "available": true,
        "languages": ["English", "French", "German"],
        "tags": ["advanced", "best practices"]
    }
]

// helper functions for idea: filter(), map(), reduce(), and sort()



// challenge 1
/*const getGenre = booksData.filter(trueOnes);

function trueOnes(element) {
    return element.available === true;
}

console.log(getGenre); */

// challenge 2
 /*let num = Number(prompt("Enter book number:"));

let c = booksData.filter(findIt);
function findIt(element) {
    return element.bookId === num;
}
console.log(c);

if (c.length!==0){

let result = c.reduce(function (acc, book) {
    book.reviews.forEach(function (review) {
        acc.total += review.rating;
        acc.count++;
    });
    return acc;
}, { total: 0, count: 0 });

let total = result.total;
let count = result.count;
let averageRating = total / count;

console.log(averageRating);
}
else{
    console.log(`rating for given id is ${null}`);
} */

// challenge 3
/*let names = prompt('Enter author name:');
let find =booksData.filter(toDo);

function toDo(element) {
    return element.author.name === names ;
}

console.log(find);   */


// challenge 4

/* let num1 = prompt('Enter publisher name:');
let findP =booksData.filter(toDoPublisher);

function toDoPublisher(element) {
    return element.publisher.name === num1 ;
}

console.log(findP); */

// challenge 5

/* let multiple = prompt('Enter genre name:');

let bookGenre = booksData.map(genreBook);

function genreBook(element) {
    for (let i = 0; i < element.genres.length; i++) {
        if (element.genres[i] === multiple) {
            return element.title;
        }
    }
}
console.log(bookGenre);   */

// challenge 6

/* let p = Number(prompt('Enter the price:'));

let takePrice = booksData.filter(getPrice);

function getPrice(element) {
    return element.price.amount < p;
    }

let final = takePrice.map(titles);
function titles(element) {
    return element.title;
}
console.log(final);   */

// challenge 10

 /*let expensive = booksData.reduce(getBook);
function getBook(a,e) {
    if (a.price.amount < e.price.amount) {
        a=e;
    }
    return a;
}
console.log(expensive.title);  */

// challenge 7

/* let r = Number(prompt('Enter the no  of reviews:'));
let booksWithReview = booksData.filter(noOfReview);

function noOfReview(element) {
    return element.reviews.length>= r;
}
console.log(booksWithReview); */

// challenge 9
 /*let languagesIn = [ 'English','German'];
let useSelect = booksData.filter(inLanguagess)
function inLanguagess(element) {
    for (let i = 0; i < element.languages.length; i++) {
        for (let j = 0; j < languagesIn.length; j++) {
            if (element.languages[i] === languagesIn[j]) {
                return element;
            }
        }
    }
}
console.log(useSelect);  */

// challenge 8
























