const {
  SecurityService
} = require('./service')

class SecurityController {
  constructor(req, res) {
    this.req = req
    this.res = res
  }

  validatePassword() {
    try {
      const { password } = this.req.body
      const service = new SecurityService(password)
      const validationsResponse = service.validatePassword()

      if(!validationsResponse.length) this.res.status(204)
      else {
        this.res.status(400)
        return validationsResponse
      }
    } catch (error) {
      throw new Error(error)
    }
  }
}

module.exports = {
  SecurityController
}