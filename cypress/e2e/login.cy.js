import LoginPage from '../pages/LoginPage'

const loginPage = new LoginPage()

describe('Login Test Suite', () => {
  beforeEach(() => {
    loginPage.visit()
  })

  it('Login page loads successfully', () => {
    // Assert that the login page contains the heading 'Login Page'
    cy.contains('h2', 'Login Page').should('be.visible')
  })

  it('Valid login shows Secure Area', () => {
    loginPage.fillUsername('tomsmith')
    loginPage.fillPassword('SuperSecretPassword!')
    loginPage.submit()
    cy.url().should('include', '/secure')
    cy.contains('h2', 'Secure Area').should('be.visible')
  })

  it('Invalid username shows error', () => {
    loginPage.fillUsername('wronguser')
    loginPage.fillPassword('SuperSecretPassword!')
    loginPage.submit()
    loginPage.getAlert().should('contain', 'Your username is invalid!')
  })

  it('Invalid password shows error', () => {
    loginPage.fillUsername('tomsmith')
    loginPage.fillPassword('wrongpass')
    loginPage.submit()
    loginPage.getAlert().should('contain', 'Your password is invalid!')
  })
})
