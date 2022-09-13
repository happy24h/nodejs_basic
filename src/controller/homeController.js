import pool from '../configs/connectDB';
let getHomePage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `users`', );
    return res.render('index.ejs', {dataUser: rows, test: "abc string test"})

}
let getDetailPage = async(req, res) => {
    // console.log('check request', req.params)
    let userId = req.params.id;
    let [user] = await pool.execute(`select * from users where id = ?`, [userId])
    console.log('check request', user)
    return res.send(JSON.stringify(user))
}
module.exports = {
    getHomePage, getDetailPage
}