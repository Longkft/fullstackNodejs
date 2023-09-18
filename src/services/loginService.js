import bcrypt from 'bcryptjs'
import db from '../models/index';
const salt = bcrypt.genSaltSync(10);

let getInfo = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            // let hashPassword = await bcrypt.hashSync(password, salt);
            let allU = await db.User.findAll({
                attributes: ['email', 'password'],
            });
            resolve('oke create user succeed!', allU);
        } catch (e) {
            reject(e);
        }
    })
}

// let hasUserPassword = (password) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             let hashPassword = await bcrypt.hashSync(password, salt);
//             resolve(hashPassword);
//         } catch (e) {
//             reject(e);
//         }
//     })
// }

module.exports = {
    getInfo: getInfo,
}