module.exports.controller = (app) => {
    // get homepage
    app.get('/', (req, res) => {
        res.render('index', { title: 'Express', description: 'This is the description of the index' });    })
   }
   