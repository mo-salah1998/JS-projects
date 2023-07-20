const UserSchema = new mongoose.Schema({
  username: {type: String, required: true},
firstName: {type: String, required: true},
lastName: {type: String, required: true},
email: {type: String, required: true},
password: {type: String, required: true},
phone: {type: String},
api: {
apiKey: {type: String},
nbRequest: {type: Number, default: 0}
}
})
