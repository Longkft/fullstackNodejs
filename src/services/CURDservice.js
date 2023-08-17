import bcrypt from 'bcryptjs'
import db from '../models/index';
const salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hasUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                gender: data.gender === 1 ? true : false,
                roleId: data.role,
                phoneNumber: data.ipPhoneNumber,
            })
            resolve('oke create user succeed!');
        } catch (e) {
            reject(e);
        }
    })
}

let hasUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
    })
}

let finfAllOther = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let allUser = await db.User.findAll();
            resolve(allUser);
        }catch(e){
            reject(e);
        }
    })
}

module.exports = {
    createNewUser: createNewUser,
    finfAllOther: finfAllOther
}