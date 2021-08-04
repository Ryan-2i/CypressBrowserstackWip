Given('The endpoint {word} is available', (url) => {
    cy.request(url).then((resp) => {
            cy.wrap(resp).as('APIResponse');        
    })
})

Then ('The status code is {int}', (status) => {
    cy.get("@APIResponse").then((resp) => {
        cy.expect(resp.status).to.eq(status);
    })
})