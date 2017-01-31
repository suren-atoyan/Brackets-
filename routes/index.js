module.exports = function(app) {

  // main page
  app.get('/', require('./main').get);

}
