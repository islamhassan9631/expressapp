const express = require("express")

const app = express()
const port = process.env.port || 3000
const path = require('path')
const direcTory = path.join(__dirname, '../public')
app.use(express.static(direcTory))

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/profile', (req, res) => {
//   res.send('done')
// })

// app.get('/pro', (req, res) => {
//   res.send('<h2>ok</h2><p>jhjfdsfj</p>')
// })
app.set('view engine', "hbs")
const view = path.join(__dirname, '../templates/views')

const hbs = require('hbs')
const partials = path.join(__dirname, '../templates/partials')
hbs.registerPartials(partials)

app.set('views', view)
app.get('', (req, res) => {
  res.render('index.hbs', {
    title: "user",
    name: 'islam'
  })
})

app.get('/help.hbs', (req, res) => {
  res.render('help.hbs', {
    title: "user",
    name: 'islam'
  })
})
const mappp = require('./tool/map')
const forcast = require('./tool/forcast')
app.get('/weather', (req, res) => {

  if (!req.query.address) {
    return res.send({
      error: "noooooo"
    })
  }
  mappp(req.query.address, (error, data) => {
   
    if (error) {
      return res.send({ error:error })
    }
    forcast(data.latitude, data.longtitude, (error, forcastdata) => {
      console.log(data.latitude,data.longtitude);
      if (error) {
        return res.send({ error })
      }
      res.send({
        Location:req.query.address,
        forcast: forcastdata
      })
    })
  })
})






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

