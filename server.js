const express = require('express')
const hbs = require('hbs')

const app = express()

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'))

app.use((req, res, next) => {
    let now = new Date().toString()
    next();
})

hbs.registerHelper('getCurrentYear', () => {
    return (new Date().getFullYear())
})

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase()
})

app.get('/', (req, res) => {
    res.send({
        name: 'Jakob',
        address: 'Berlin'
    })
})

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: "About",
        text: "Welcome to our About page"
    })
})

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle request'
    })
})

const defaultPort = 3000

app.listen(defaultPort, () => {
    console.log(`server is running on port ${defaultPort}`)
})


