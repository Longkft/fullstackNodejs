import userService from "../services/userService";
import db from "../models";

const handleLogin = async (req, res) => {
    let email = req.body.email; // gửi giá trị email
    console.log("you email: ", email);
    let password = req.body.password;
    console.log("you password: ", password);

    // check email người dùng có tồn tại hay không
    // so sánh password user != password db.use
    // return userInfor
    // access_token: JWT

    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!',
        })
    }

    // console.log("dàdsdfsdf", req.body)
    let userData = await userService.handleUserLogin(email, password);
    // let checkUseEmail = await userService.checkUseEmail;
    console.log(userData, "us");
    // console.log(req.body.email, "aaaaa");
    // let user = await db.User.findOne({
    //     where: { email: email }
    // });
    // console.log('user nhan duoc : ', user)

    return res.status(200).json({
        // errCode: '123',
        // message: '123',
        message: userData.message,
        message: userData.message,
        user: userData.user ? userData.user : {},
    })
}

module.exports = {
    handleLogin: handleLogin,
}