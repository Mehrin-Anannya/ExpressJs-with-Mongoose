const handle = (req, res) => {
    console.log(req.app.locals.title)
    res.send('This is get method.' + req.app.locals.title);;
}

module.exports = handle;