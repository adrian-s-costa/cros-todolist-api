import app, { init } from './app'

const port = process.env.PORT || 3001

init().then(() => {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`)
  })
})
