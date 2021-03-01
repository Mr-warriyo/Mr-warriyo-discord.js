const mongoose = require('/data/data/com.astrosohu/files/usr/lib/node_modules/mongoose')
const server = "mongo-server-url"
module.exports = async () => {
  await mongoose.connect(server, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  return mongoose
}
