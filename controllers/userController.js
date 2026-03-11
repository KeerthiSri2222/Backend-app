import userModel from "../models/userModel.js";

const showUsers = async (req,res) => {
    const users = await userModel.find();
    res.render("users/index",{users})
}

const addUserPage = async (req,res) => {
    res.render("users/add")
}
const addUser = async (req,res) => {
    const {name,email,password,role} = req.body;
    await userModel.create({name,email,password,role})
    res.redirect("/users")
}
const editUserPage = async (req,res) => {
    const {id} = req.params;
    const user = await userModel.findById(id);
    res.render("users/edit",{user})
}   
const updateUser  = async (req,res) => {
    const {id} = req.params;
    const {name,email,password,role} = req.body;
    await userModel.findByIdAndUpdate(id,{name,email,password,role})
    res.redirect("/users")  
}
const deleteUser = async (req,res) => {
    const {id} = req.params;
    await userModel.findByIdAndDelete(id);
    res.redirect("/users")
}

 export {showUsers, addUserPage, addUser, editUserPage, updateUser, deleteUser}