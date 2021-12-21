import express from 'express';
import 'express-async-errors';

let tweets = [
    {
        id: '1',
        text: '드림코더 화이팅',
        createAt: Date.now().toString(),
        name: 'Bob',
        username: 'boob',
        usl: 'https://widgetwhats.com/app.uploads/2019/11/free-profile-photo-whatsapp-1.png',
    }
]
const router = express.Router();

// GET / tweets
// GET / tweets?username=:username
// GET / tweets /:id
// POST / tweets
// PUT / tweets/:id
// DELETE / tweets/:id
export default router;