const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));


app.get('/echo', (req, res) => {
    const responseText = `Here are some details of your request:
      Base URL: ${req.baseUrl}
      Host: ${req.hostname}
      Path: ${req.path}
    `;
    res.send(responseText);
});

app.get('/greetings', (req, res) => {

    const name = req.query.name;
    const race = req.query.race;

    if (!name) {
        return res.status(400).send('Please provide a name');
    }

    if (!race) {
        return res.status(400).send('Please provide a race');
    }

    const greeting = `Greetings ${name} the ${race}, welcome to our kingdom.`;

 
    res.send(greeting);
});


app.get('/sum', (req, res) => {
    const a = req.query.a;
    const b = req.query.b;

    const numA = Number(a);
    const numB = Number(b);

    const sum = numA + numB;
    const sumText = `The sum of ${numA} and ${numB} is ${sum}`

    res.send(sumText);
})

app.get('/cipher', (req, res) => {
    const { text, shift } = req.query;

    
    if (!text) {
        return res
            .status(400)
            .send('text is required');
    }

    if (!shift) {
        return res
            .status(400)
            .send('shift is required');
    }

    const numShift = parseFloat(shift);

    if (Number.isNaN(numShift)) {
        return res
            .status(400)
            .send('shift must be a number');
    }

    const base = 'A'.charCodeAt(0);  

    const cipher = text
        .toUpperCase()
        .split('') 
        .map(char => { 
            const code = char.charCodeAt(0); //get the char code

    
            if (code < base || code > (base + 26)) {
                return char;
            }

            let diff = code - base;
            diff = diff + numShift;

  
            diff = diff % 26;

 
            const shiftedChar = String.fromCharCode(base + diff);
            return shiftedChar;
        })
        .join(''); 
    res
        .status(200)
        .send(cipher);
});


app.get('/queryViewer', (req, res) => {
    console.log(req.query);
    res.end(); 

app.get('/', (req, res) => {
    res.send('Hello Express!');
});

app.get('/burgers', (req, res) => {
    res.send('We have juicy cheese burgers!');
})

app.get('/pizza/pepperoni', (req, res) => {
    res.send('Your pizza is on the way!');
})

app.get('/pizza/pineapple', (req, res) => {
    res.send('We dont serve that here. Never call again!');
})

app.listen(8000, () => {
    console.log('Express server is listening on port 8000!');
});