var express = require('express');
var router = express.Router();
const authHandler = require("../middleware/authHandler")
const urlOperations = require("../middleware/urlOperations")
const responseHandler = require("../services/utils/packResponse")
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json()


router.post('/login', jsonParser, async function(req, res) {

    try {
        let username = req.body.username;
        let password = req.body.password;
        console.log(username)
        console.log(password)

        let loggedInUser = await authHandler.login(username, password)
        if (username == loggedInUser) {
            res.send(responseHandler.success("Login Success !", req.body.username));
        }
    } catch (error) {
        console.log(error)
        res.send(responseHandler.error("Login Failure !", error));
    }

});
router.post('/getUrlData', jsonParser, async function(req, res) {
    let urlData = await urlOperations.getAllUrls()
    res.send(responseHandler.success("getAllUrls Success !", urlData));
});
router.get('/getAllUrls', jsonParser, async function(req, res) {
    let urlData = await urlOperations.getAllUrls()
    res.send(responseHandler.success("getAllUrls Success !", urlData));
});
router.post('/generateShortUrl', jsonParser, async function(req, res) {
    let shortUrl = await urlOperations.generateShortUrl(req.body.expandedUrl)
    res.send(responseHandler.success("generateShortUrl Success !", { shortenedUrl: shortUrl }));
});
router.post('/generateExpandedUrl', jsonParser, async function(req, res) {

    try {
        let shortenedUrl = req.body.shortenedUrl;
        let expandedUrl = await urlOperations.generateExpandedUrl(shortenedUrl)
        res.send(responseHandler.success("Login Success !", expandedUrl));
    } catch (error) {
        console.log(error)
        res.send(responseHandler.error("Login Failure !", error));
    }



    if (req.body.shortenedUrl == "regex101.com")

        res.send(responseHandler.success("generateExpandedUrl Success !", "google.com"));
});
router.delete('/deleteUrl/:urlId', async function(req, res) {

    await urlOperations.deleteUrlRecord(req.params.urlId)



    urlDeleteResponse = {
        deletedUrlId: req.params.urlId,
        deletedUrl: {
            urlId: 0,
            creationDate: "2020-09-05T14:15:34.171Z",
            shortenedUrl: "google.com",
            expandedUrl: "google.com"
        }
    }
    res.send(responseHandler.success("deleteUrl Success !", urlDeleteResponse));
});

module.exports = router;