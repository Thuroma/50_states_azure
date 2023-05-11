let express = require('express')
let states_api = require('./routes/states')
let path = require('path')

let app = express()

// Joining the location of the code with the dist
let vueAppPath = path.join(__dirname, 'client', 'dist')
app.use(express.static(vueAppPath))

app.use(express.json())

// Request here passed to states_api page
app.use('/api', states_api)

// Handles every other request that's not to a route listed above
app.use(function(req, res, next) {
    res.status(404).send('Not found')
})

app.use(function(err, req, res, next) {
    console.log(err)
    res.status(500).send('Server error')
})

let server = app.listen(process.env.PORT || 3000, function() {
    console.log('server running on port', server.address().port)
})