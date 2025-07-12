class LoginPage {
  visit() {
    cy.visit('https://the-internet.herokuapp.com/login')
  }

  fillUsername(username) {
    cy.get('#username').type(username)
  }

  fillPassword(password) {
    cy.get('#password').type(password)
  }

  submit() {
    cy.get('button[type="submit"]').click()
  }

  getAlert() {
    return cy.get('#flash')
  }
}

export default LoginPage