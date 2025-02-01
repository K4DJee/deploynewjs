const createPath = require('../helpers/createPath');

const errorfunction = (res,error)=>{
    console.log(error);
    res.render(createPath('error'));
}

const registerPage = (req,res) =>{
    res.render(createPath('register'), )
};
const loginPage = (req,res) =>{
    res.render(createPath('login'), )
}

const adminPage = (req,res)=>{
    res.render(createPath('admin-panel'))
    // .catch((error)=> errorfunction(res,error));

}


module.exports = {
    registerPage, loginPage, adminPage, 
}