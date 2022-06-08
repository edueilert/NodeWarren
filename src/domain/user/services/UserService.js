const User = require("../mocks/UserMock")

class UserService {
  createUser (body) {
    console.log("chegou aqui",body)
    
  }
}

module.exports =  new UserService()
