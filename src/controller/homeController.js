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
    return res.render('listUser.ejs', { items });
}

let editUserPage = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await CRUDService.findUserById(id);

        return res.render('editUser.ejs', { user });
    } catch (e) {
        console.error(e);
        return res.status(500).send('Internal Server Error');
    }
}

let updateCRUDUser = async (req, res) => {
    try {
        const { id } = req.params; // Lấy id từ URL parameter
        const updateData = req.body; // Dữ liệu cập nhật từ form

        await CRUDService.updateUser(id, updateData); // Chuyển hướng sau khi cập nhật thành công

        return res.redirect('/all-user');
    } catch (e) {
        console.error(e);
        return res.status(500).send('Internam server error');
    }
}

let deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        await CRUDService.deleteUser(id);

        return res.redirect('/all-user');
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal server error');
    }
}


module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    getCRUDUs: getCRUDUs,
    editUserPage: editUserPage,
    updateCRUDUser: updateCRUDUser,
    deleteUser: deleteUser,
}