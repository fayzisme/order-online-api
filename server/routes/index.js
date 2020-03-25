import Users from '../controllers/user';
import Orders from '../controllers/order';

export default (app) => {

app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to my API',
}));

app.post('/api/users', Users.signUp); // API route for user to signup
app.post('/api/users/:userId/orders', Orders.create); // API route for user to create a book
app.get('/api/orders', Orders.list); // API route for user to get all books in the database
app.put('/api/orders/:orderId', Orders.modify); // API route for user to edit a book
app.delete('/api/orders/:orderId', Orders.delete); // API route for user to delete a book

};