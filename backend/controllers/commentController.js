const comment = require("../models/PostComments")

exports.saveComment = (req, res) => {
    let newComment = new comment(req.body)
    newComment.save((err, response) => {
        if (!err) {
            comment.find({}, (error, data) => {
                if (!error) {
                    console.log("succes save and retrieve process")
                    res.status(200).send({ 'commentStatus': 'GetSuccess', 'allComments': data })
                    return
                }
                console.error("error in save and retrieve is" + error)
            })
        }
    })
}

exports.allComments=(req,res)=>{
    comment.find({}, (error, data) => {
        if (!error) {
            console.log("succes get al process")
            res.status(200).send({ 'commentStatus': 'GetSuccess', 'allComments': data })
            return
        }
        console.error("error in retrieve is" + error)
    })
}