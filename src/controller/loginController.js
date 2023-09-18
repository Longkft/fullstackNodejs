import db from '../models/index';
import loginService from '../services/loginService';

let getUserPass = async (req, res) => {
    try {
        let show = res.body;
        let data = await loginService.getInfo(show);
        return res.render("../views/homePage.ejs", {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e);
    }
}

let getCRUD = (req, res) => {
    return res.render('getCRUD.ejs');
}

module.exports = {
    getUserPass: getUserPass,
}