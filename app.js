const express = require('express');
const graphqlHTTP = require('express-graphql');

const schema = require('./schema/schema');

const PORT = process.env.PORT || 4000;

const app = express();

app.use('/graphql', graphqlHTTP({
    schema
}));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})