import db from '../models/index'
import CRUDService from '../services/CURDservice'

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render("homePage.ejs", {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e);
    }
}

let getCRUD = (req, res) => {
    return res.render('getCRUD.ejs');
}

let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send('post CRUD');
}

let getCRUDUs = async (req, res) => {
    let items = await CRUDService.finfAllOther();
    // console.log(items);
    return res.render('listUser.ejs', {items});
}


module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    getCRUDUs: getCRUDUs
}