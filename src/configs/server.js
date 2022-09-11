import express from 'express';
import configViewEngine from './viewEngine';
import initWebRoute from '../route/web'

require('dotenv').config();

const app = express()
const port = process.env.PORT || 6969;

// setup view engine
configViewEngine(app)

// init web route
initWebRoute(app);

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, './index.html'))
// })

// app.get('/', (req, res) => {
//     res.render('index.ejs')
// })

// app.get('/about', (req, res) => {
//     res.send('About page')
// })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


