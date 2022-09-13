import express from "express";
import homeController from '../controller/homeController'

let router = express.Router();


const initWebRoute = (app) => {
    
    router.get('/', homeController.getHomePage)
    router.get('/detail/user/:id', homeController.getDetailPage)
    router.post('/create-new-user', homeController.createNewUser)

    router.get('/test', (req, res) => {
        res.render('test/index.ejs')
    })

    app.get('/about', (req, res) => {
        res.send('About page')
    })
    
    return app.use('/', router)

}


// module.exports = initWebRoute;
export default initWebRoute;