module.exports.register = function(req, res) {
    console.log("Enregistrement utilisateur: " + req.body.email);
    res.status(200);
    res.json({
        "message" : "utilisateur enregistré" + req.body.email
    });
};