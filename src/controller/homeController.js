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
let createNewUser = async(req, res) => {
    console.log('check req: ', req.body)
    // INSERT INTO table_name (column1, column2, column3, ...)
    // VALUES (value1, value2, value3, ...);
    let {firstName, lastName, email, address} = req.body;
    await pool.execute('insert into users(firstName, lastName, email, address) values (?, ?, ?, ?)', 
    [firstName, lastName, email, address]);
    return res.redirect('/')
}

let deleteUser = async(req, res) => {
    let userId = req.body.userId;
    // DELETE FROM table_name WHERE condition;
    await pool.execute('delete from users where id = ?', [userId])
    return res.redirect('/')
}

let getEditPage = async(req, res) => {
    let id = req.params.id;
    let [user] = await pool.execute('select * from users where id = ?', [id]);
    return res.render('update.ejs', {dataUser: user[0]}); // x <- y

}
let postUpdateUser = async (req, res) => {
    let {firstName, lastName, email, address, id} = req.body;
    // UPDATE table_name SET column1 = value1, column2 = value2, ... WHERE condition;
    await pool.execute('update users set firstName = ?, lastName = ?, email = ?, address = ? where id = ?',
     [firstName, lastName, email, address, id]);
    return res.redirect('/');

}
module.exports = {
    getHomePage, getDetailPage, createNewUser,
     deleteUser, getEditPage, postUpdateUser
     
}