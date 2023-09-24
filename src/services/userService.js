import db from "../models/index";
import bcrypt, { hash } from 'bcryptjs'
const salt = bcrypt.genSaltSync(10);

let handleUserLogin = (email, password) => {
    console.log('email nhan tu req.body: ', email);
    return new Promise(async (resolve, reject) => {
        try {
            let isExist = await checkUseEmail(email);
            let userData = {};
            if (isExist) {
                // user already exist

                let user = await db.User.findOne({
                    where: {
                        email: email
                    },
                    raw: true, //trả dạng object
                });
                // console.log(user.password)

                if (user) {
                    // compare password
                    // bscrypt.compareSync("not_bacon", hash); //flase
                    let comparePass = await bcrypt.compareSync(password, user.password);
                    if (comparePass) {
                        userData.errCode = 0;
                        userData.message = 'oke';
                        console.log(user)
                        delete user.password;
                        userData.user = user;
                    } else {
                        userData.errCode = 3;
                        userData.message = 'error compare passwork!';
                    }

                } else {
                    userData.errCode = 2;
                    userData.message = "Không có user!";
                }
            } else {
                userData.errCode = 1;
                userData.message = "Vui lòng nhập đúng Email!";
            }
            resolve(userData);
        } catch (e) {
            reject(e);
        }
    })

}

let checkUseEmail = (userEmail) => {
    // console.log('fwwfwef')
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: userEmail }
            });

            console.log(user, "èvefvfvef");

            if (user) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    handleUserLogin: handleUserLogin,
    checkUseEmail: checkUseEmail,
}