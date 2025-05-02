class SecurityService {
  constructor(password) {
    this.password = password
    this.securityFailures = []
    this.errorMessages = {
      blankSpaceError: 'Your password can not contain a blank space.',
      sizeError: 'Your password must have at least 8 characters.',
      uppercaseError: 'Your password must have at least an uppercase letter.',
      lowercaseError: 'Your password must have at least a lowercase letter.',
      numberError: 'Your password must have at least a number character.',
      specialcaseError: 'Your password must have at least a specialcase character.'
    }
  }

  validatePassword() {
    this.validateBlankSpace()
    this.validatePasswordSize()
    this.validateUppercaseLetter()
    this.validateLowercaseLetter()
    this.validateNumber()
    this.validateSpecialCase()

    return this.securityFailures
  }

  validateBlankSpace() {
    if (this.password.split(' ')[0] !== this.password) {
      this.securityFailures.push(this.errorMessages.blankSpaceError)
    }
  }
  
  validatePasswordSize() {
    if (this.password.length < 8) {
      this.securityFailures.push(this.errorMessages.sizeError)
    }
  }

  validatePasswordSize() {
    if (this.password.length < 8) {
      this.securityFailures.push(this.errorMessages.sizeError)
    }
  }

  validateUppercaseLetter() {
    if (!/[A-Z]/.test(this.password)) {
      this.securityFailures.push(this.errorMessages.uppercaseError)
    }
  }

  validateLowercaseLetter() {
    if (!/[a-z]/.test(this.password)) {
      this.securityFailures.push(this.errorMessages.lowercaseError)
    }
  }

  validateNumber() {
    if (!/[0-9]/.test(this.password)) {
      this.securityFailures.push(this.errorMessages.numberError)
    }
  }

  validateSpecialCase() {
    if (!/[-'/`~!#*$@_%+=.,^&(){}[\]|;:"<>?\\]/.test(this.password)) {
      this.securityFailures.push(this.errorMessages.specialcaseError)
    }
  }
}

module.exports = {
  SecurityService
}