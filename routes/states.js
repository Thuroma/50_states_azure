let express = require('express')
let States = require('../models').States

let router = express.Router()

// Matches parts of URL after /api/ to one of these routes

// Get - fetch all of the states
router.get('/states', function(req, res, next) {
    // States model finds all of the states and orders them by name
    States.findAll({ order: ['name']}).then( states => {
        // Express converts to json then returns
        return res.json(states)
    })
    .catch( err => next(err) )
})

// Fetch only states that have been visited
router.get('/states/visited', function(req, res, next) {
    States.findAll({ where: {visited: true}, order: ['name']}).then( statesVisited => {
        return res.json(statesVisited)
    })
})

// Get - get all info about one state
// state/California or state/Iowa
router.get('/state/:name', function(req, res, next) {
    let stateName = req.params.name
    States.findOne( {where: {name: stateName}})
        .then( state => {
            if (state) {
                return res.json(state)
            } else {
                return res.status(404).send('State not found')
            }
        })
        .catch( err => next(err) )
})

// Patch - update a state - visited or not
// request to states/Iowa would update Iowa
router.patch('/states/:name', function(req, res, next) {
    let stateName = req.params.name
    // req.body is json {visited:true}
    let stateVisited = req.body.visited

    States.update( { visited: stateVisited }, { where: { name: stateName }})
        .then( rowsUpdated => {
            let numberOfRowsUpdated = rowsUpdated[0]
            if (numberOfRowsUpdated == 1) {
                return res.send('ok')   /// status code 200
            }
            return res.status(404).send('State not found')
        })
        .catch( err => next(err) )
})



module.exports = router