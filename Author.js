const books = [
    { title: 'The Hunger Games', author: 'suzanne collins', year: 2008 },
    { title: 'The Girl with the Dragon Tattoo', author: 'stieg larsson', year: 2005 },
    { title: 'The Help', author: 'kathryn stockett', year: 2009 },
    { title: 'The Road', author: 'cormac mccarthy', year: 2006 },
    { title: 'The Fault in Our Stars', author: 'john green', year: 2012 },
    { title: 'Gone Girl', author: 'gillian flynn', year: 2012 },
    { title: 'The Da Vinci Code', author: 'dan brown', year: 2003 }
];

const filteredBooks = books.filter(book => book.year <= 2010);
const capitalizedAuthors = filteredBooks.map(book => ({...book, author: book.author.toUpperCase() }));

console.log(capitalizedAuthors);