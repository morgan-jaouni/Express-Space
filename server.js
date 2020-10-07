// DEPENDENCIES
const express = require('express');
const app = express();
const missions = require('./models/Mission')
// run `npm install` to install dependencies in package.json

// * Your mission is to complete the app
// * The app will need routes for index and show
// * The app will need views for index and show
//
// * MAIN GOAL:
// * User should be able to click on a mission’s name on the index page, and be taken to that mission’s show page
//
// * Bonus/Hungry for More: add images to the data and have them display (google how)
// * Bonus/Hungry for More: add static css to style the pages (google how)

// NOTES:
// ejs has not been installed
// views folder has not been created
// views/missions folder has not been created

// PORT
const port = 3000;

// DATA - put into marsMissions.js file inside of a models folder, for module.exports
// remember to require it in the server


//View Engine
app.set('view engine', 'ejs');



// INDEX Route
app.get('/', (req,res) => {
    // send data to 'missions/index.ejs' view
    res.render('missions/index', {missions: missions});
       
});




//show route
app.get('/missions/:id', (req, res) => {
  
  const missionsId = req.params.id;
  const mission = missions[missionsId];
  
  // the view should display all the data for a single mission
   res.render('missions/show', {

     mission: mission
    
    });
});


// LISTENER
app.listen(port, function() {
  console.log('Missions to Mars running on port: ', port);
})

module.exports = app;
