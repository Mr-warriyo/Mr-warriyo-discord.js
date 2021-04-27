const mongoose = require('/data/data/com.astrosohu/files/usr/lib/node_modules/mongoose')
const server = "mongodb+srv://discord:discord@discord.3omgj.mongodb.net/discord?retryWrites=true&w=majority"
module.exports = async () => {
  await mongoose.connect(server, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  return mongoose
}