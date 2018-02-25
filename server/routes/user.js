const express = require('express');
const router = express.Router();
const databaseConnection = require('./../helper/connect.database');
const {sendHttpError, sendHttpSuccess} = require('./../helper/database.response');

router.route('/')
    .post((req, res) => {

        if(!req.body.user_id){
            sendHttpError({message: "invalid post data, user_id is required"}, res);
        }

        if(!req.body.name){
            sendHttpError({message: "invalid post data, name is required"}, res);
        }

        databaseConnection((db) => {
            db.collection('users')
                .insertOne({
                    "user_id": req.body.user_id,
                    "name": req.body.name
                })
                .then((user) => {
                    sendHttpSuccess("User added!", {}, true, res);
                })
                .catch((err) =>{
                    sendHttpError(err, res);
                })
        });
    })
    .get((req, res)=> {
        databaseConnection((db) => {
            db.collection('users')
                .find()
                .toArray()
                .then((users) => {
                    sendHttpSuccess("list of users", users, true, res);
                })
                .catch((err) => {
                    sendHttpError(err, res);
                });
        });
    });

//Get user by id
router.get('/:id', (req, res) => {
    databaseConnection((db) => {
        db.collection('users')
            .findOne({"user_id": req.params.id})
            .then((user) => {
                if(user === null){
                    sendHttpSuccess("Cannot find user with specific id", user, false, res);
                }else{
                    sendHttpSuccess("Current user", user, true, res);
                }
            })
            .catch((err) => {
                sendHttpError(err, res);
            })
    });
});

//Delete user by id
router.delete('/:id', (req, res) => {
    databaseConnection((db) => {
        db.collection('users')
            .findOneAndDelete(
                {"user_id": req.params.id}
            )
            .then((data) => {
                if(data.value === null){
                    sendHttpSuccess("Cannot find user with the provided id", {}, false, res);
                }else{
                    sendHttpSuccess("Delete user operation has been processed", data.value, true, res);
                }
            })
            .catch((err) => {
                sendHttpError(err, res);
            })
    })
});


// Update user by id
router.post('/:id', (req, res) => {

    if(!req.body.name){
        sendHttpError({message: "Invalid post data, name is required"}, res);
    }

    databaseConnection((db) => {
        db.collection('users')
            .findOneAndUpdate(
                {"user_id" : req.params.id},
                {"name" : req.body.name}
            )
            .then((data) => {
                if(data.value){
                    sendHttpSuccess("Update user", data.value, true, res);
                }else{
                    sendHttpSuccess("Cannot find user with provided user id", {}, false, res);
                }
            })
            .catch((err) => {
                sendHttpError(err, res);
            })
    });
});


module.exports = router;