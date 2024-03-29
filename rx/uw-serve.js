const express = require('express');
const app = express();
app.use(express.json());

const books = [
    { title: 'Harry Potter', id: 1 },
    { title: 'Twilight', id: 2 },
    { title: 'Lorien Legacies', id: 3 }
]

//READ Request Handlers
app.get('/', (req, res) => {
    res.send('Welcome to Edurekas REST API with Node.js Tutorial!!');
});

app.get('/api/books', (req, res) => {
    res.send(books);
});

app.get('/api/books/:id', (req, res) => {
    const book = books.find(c => c.id === parseInt(req.params.id));

    if (!book) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>');
    res.send(book);
});

//CREATE Request Handler
app.post('/api/books', (req, res) => {

    const { error } = validateBook(req.body);
    if (error) {
        res.status(400).send(error.details[0].message)
        return;
    }
    const book = {
        id: books.length + 1,
        title: req.body.title
    };
    books.push(book);
    res.send(book);
});


//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));
