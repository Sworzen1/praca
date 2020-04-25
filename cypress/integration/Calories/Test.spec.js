describe("Calories", function () {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  afterEach(() => {
    cy.window().then((win) => {
      win.document.activeElement.blur();
    });
  });

  context("LogIn, Register, StartForm, SubmitForm, LogOut", () => {
    it("LogIn", () => {
      cy.get(".MuiButton-label")
        .click()
        .should(() => {
          expect(localStorage.getItem("login")).to.eq("2");
        });
    });
    it("SingUp", () => {
      cy.get(".makeStyles-link-3")
        .click()
        .should(() => {
          expect(localStorage.getItem("login")).to.eq("1");
        });
    });
    it("FormStart", () => {
      cy.get(".makeStyles-link-3").click();
      cy.get(".MuiButton-label")
        .click()
        .should(() => {
          expect(localStorage.getItem("login")).to.eq("3");
        });
    });
    it("SubmitForm", () => {
      cy.get(".makeStyles-link-3").click();
      cy.get(".MuiButton-label").click();
      cy.get(":nth-child(1) > .makeStyles-input-8").type("Bartek");
      cy.get(":nth-child(2) > .makeStyles-input-8").type("23");
      cy.get(":nth-child(3) > .makeStyles-input-8").type("70");
      cy.get(":nth-child(4) > .makeStyles-input-8").type("170");
      cy.get(".MuiButton-label")
        .click()
        .should(() => {
          expect(localStorage.getItem("login")).to.eq("2");
        });
    });
    it("LogOut", () => {
      cy.get(".MuiButton-label").click();
      cy.get(".MuiButton-label")
        .click()
        .should(() => {
          expect(localStorage.getItem("login")).to.eq("0");
        });
    });
  });

  context("Menu", () => {
    it("Menu", () => {
      cy.get(".MuiButton-label").click();
      cy.get("path").click();
      cy.get('[href="/Foods"]').click();
      cy.url().should("eq", "http://localhost:3000/Foods");
      cy.get('[href="/MyFoods"]').click();
      cy.url().should("eq", "http://localhost:3000/MyFoods");
      cy.get('[href="/Contact"]').click();
      cy.url().should("eq", "http://localhost:3000/Contact");
      cy.get('[href="/Form"]').click();
      cy.url().should("eq", "http://localhost:3000/Form");
      cy.get('[href="/"]').click();
      cy.url().should("eq", "http://localhost:3000/");
    });
  });

  context("FillStartForm, FillForm, CheckSpecs", () => {
    it("FillStartForm", () => {
      cy.get(".makeStyles-link-3").click()
      cy.get(".MuiButton-label").click();
      cy.get(":nth-child(1) > .makeStyles-input-8").type("Bartek");
      cy.get(":nth-child(2) > .makeStyles-input-8").type("1");
      cy.get(":nth-child(3) > .makeStyles-input-8").type("1");
      cy.get(":nth-child(4) > .makeStyles-input-8").type("1");
      cy.get(".MuiButton-label").click()
      cy.get('.makeStyles-h2-179 > h2').contains("Bartek")

     
      })
      it("FillForm", () => {
        cy.get(".MuiButton-label").click();
        cy.visit("http://localhost:3000/Form")
        cy.get(':nth-child(1) > .makeStyles-input-134').type("23");
        cy.get(":nth-child(2) > .makeStyles-input-134").type("70");
         cy.get(":nth-child(3) > .makeStyles-input-134").type("170");
         cy.get('form > .MuiButtonBase-root > .MuiButton-label').click()
         cy.get('[type="number"]').then(($input) => {
             expect($input[0].validationMessage).to.eq("Wypełnij to pole.")
         })
        })
        it("CheckSpecs", () => {
            cy.get(".MuiButton-label").click();
            cy.visit("http://localhost:3000/Form")
        cy.get(':nth-child(1) > .makeStyles-input-134').type("23");
        cy.get(":nth-child(2) > .makeStyles-input-134").type("70");
         cy.get(":nth-child(3) > .makeStyles-input-134").type("170");
         cy.get('form > .MuiButtonBase-root > .MuiButton-label').click()    
         cy.visit("http://localhost:3000/")
            cy.get(':nth-child(1) > .makeStyles-h2-139').contains("23")
            cy.get('.makeStyles-h2-139 > h1').contains("70")
            cy.get(':nth-child(3) > .makeStyles-h2-139 > h2').contains("170")
            cy.get('.makeStyles-line-144').contains("Normal")
            cy.get('.makeStyles-h2-143 > h2').contains("24")
        })
  })

  context("LanguageSelector", () => {
    it("LanguageSelector", () => {
      cy.get(".MuiButton-label").click();
      cy.get('.MuiPaper-root > .makeStyles-select-120').select("Polish")
      cy.get(':nth-child(1) > .makeStyles-h1-156').contains("Wiek")
      cy.get('.MuiPaper-root > .makeStyles-select-120').select("English")
      cy.get(':nth-child(1) > .makeStyles-h1-156').contains("Age")
      cy.reload()
      cy.get('.MuiPaper-root > .makeStyles-select-73')
      cy.get("option:first").should("be.selected").and("have.value","english")

    })
  })

  context("AddDeleteMyFood, EatMyFood", () => {
    it("AddDeleteMyFood", () => {
      cy.get(".MuiButton-label").click();
      cy.visit("http://localhost:3000/Myfoods")
      cy.get('.makeStyles-input-135').type("Title")
      cy.get('[placeholder="Calories"]').type("1")
      cy.get('[placeholder="Carbos"]').type("1")
      cy.get('[placeholder="Proteins"]').type("1")
      cy.get('[placeholder="Fats"]').type("1")
      cy.get('.makeStyles-button-136').click()
      cy.get('.makeStyles-li-155').should("be.visible")
      cy.get('.fas').click()
      cy.get('.makeStyles-li-155').should("not.be.visible")
    })

    it("EatMyFood", () => {
      cy.get(".MuiButton-label").click();
      cy.visit("http://localhost:3000/Myfoods")
      cy.get('.makeStyles-input-135').type("Title")
      cy.get('[placeholder="Calories"]').type("1")
      cy.get('[placeholder="Carbos"]').type("2")
      cy.get('[placeholder="Proteins"]').type("3")
      cy.get('[placeholder="Fats"]').type("4")
      cy.get('.makeStyles-button-136').click()
      cy.get(':nth-child(1) > .MuiButton-label').click()
      cy.visit("http://localhost:3000/")
      cy.get('.makeStyles-text-147').contains("1")
      cy.get(':nth-child(1) > :nth-child(2) > .makeStyles-output-174').contains("2")
      cy.get(':nth-child(2) > :nth-child(2) > .makeStyles-output-174').contains("3")
      cy.get(':nth-child(3) > :nth-child(2) > .makeStyles-output-174').contains("4")
    })
  })
context("EatBreakfast, EatLunch, EatDinner, EatSnack, EatSupper, OpenRecipe ", () => {
  it("EatBreakfast", () => {
    cy.get(".MuiButton-label").click();
    cy.visit("http://localhost:3000/breakfast")
    cy.get(':nth-child(1) > .MuiPaper-root > .MuiCardActions-root > :nth-child(1) > .MuiButton-label').click()
    cy.get(':nth-child(2) > .MuiPaper-root > .MuiCardActions-root > :nth-child(1) > .MuiButton-label').click()
    cy.get(':nth-child(3) > .MuiPaper-root > .MuiCardActions-root > :nth-child(1) > .MuiButton-label').click()
    cy.get(':nth-child(4) > .MuiPaper-root > .MuiCardActions-root > :nth-child(1) > .MuiButton-label').click()
    cy.get(':nth-child(5) > .MuiPaper-root > .MuiCardActions-root > :nth-child(1) > .MuiButton-label').click()
    cy.get(':nth-child(6) > .MuiPaper-root > .MuiCardActions-root > :nth-child(1) > .MuiButton-label').click()
    cy.visit("http://localhost:3000/")
    cy.get('.makeStyles-text-147').contains("2607")
    cy.get(':nth-child(1) > :nth-child(2) > .makeStyles-output-174').contains("287")
    cy.get(':nth-child(2) > :nth-child(2) > .makeStyles-output-174').contains("160")
    cy.get(':nth-child(3) > :nth-child(2) > .makeStyles-output-174').contains("93")
  })
  it("EatLunch", () => {
    cy.get(".MuiButton-label").click();
    cy.visit("http://localhost:3000/lunch")
    cy.get(':nth-child(1) > .MuiPaper-root > .MuiCardActions-root > :nth-child(1) > .MuiButton-label').click()
    cy.get(':nth-child(2) > .MuiPaper-root > .MuiCardActions-root > :nth-child(1) > .MuiButton-label').click()
    cy.get(':nth-child(3) > .MuiPaper-root > .MuiCardActions-root > :nth-child(1) > .MuiButton-label').click()
    cy.get(':nth-child(4) > .MuiPaper-root > .MuiCardActions-root > :nth-child(1) > .MuiButton-label').click()
    cy.get(':nth-child(5) > .MuiPaper-root > .MuiCardActions-root > :nth-child(1) > .MuiButton-label').click()
    cy.get(':nth-child(6) > .MuiPaper-root > .MuiCardActions-root > :nth-child(1) > .MuiButton-label').click()
    cy.visit("http://localhost:3000/")
    cy.get('.makeStyles-text-147').contains("1944")
    cy.get(':nth-child(1) > :nth-child(2) > .makeStyles-output-174').contains("151")
    cy.get(':nth-child(2) > :nth-child(2) > .makeStyles-output-174').contains("110")
    cy.get(':nth-child(3) > :nth-child(2) > .makeStyles-output-174').contains("101")
  })
  it("EatDinner", () => {
    cy.get(".MuiButton-label").click();
    cy.visit("http://localhost:3000/dinner")
    cy.get(':nth-child(1) > .MuiPaper-root > .MuiCardActions-root > :nth-child(1) > .MuiButton-label').click()
    cy.get(':nth-child(2) > .MuiPaper-root > .MuiCardActions-root > :nth-child(1) > .MuiButton-label').click()
    cy.get(':nth-child(3) > .MuiPaper-root > .MuiCardActions-root > :nth-child(1) > .MuiButton-label').click()
    cy.get(':nth-child(4) > .MuiPaper-root > .MuiCardActions-root > :nth-child(1) > .MuiButton-label').click()
    cy.get(':nth-child(5) > .MuiPaper-root > .MuiCardActions-root > :nth-child(1) > .MuiButton-label').click()
    cy.get(':nth-child(6) > .MuiPaper-root > .MuiCardActions-root > :nth-child(1) > .MuiButton-label').click()
    cy.visit("http://localhost:3000/")
    cy.get('.makeStyles-text-147').contains("2630")
    cy.get(':nth-child(1) > :nth-child(2) > .makeStyles-output-174').contains("249")
    cy.get(':nth-child(2) > :nth-child(2) > .makeStyles-output-174').contains("167")
    cy.get(':nth-child(3) > :nth-child(2) > .makeStyles-output-174').contains("108")
  })
  it("EatSnack", () => {
    cy.get(".MuiButton-label").click();
    cy.visit("http://localhost:3000/snack")
    cy.get(':nth-child(1) > .MuiPaper-root > .MuiCardActions-root > :nth-child(1) > .MuiButton-label').click()
    cy.get(':nth-child(2) > .MuiPaper-root > .MuiCardActions-root > :nth-child(1) > .MuiButton-label').click()
    cy.get(':nth-child(3) > .MuiPaper-root > .MuiCardActions-root > :nth-child(1) > .MuiButton-label').click()
    cy.get(':nth-child(4) > .MuiPaper-root > .MuiCardActions-root > :nth-child(1) > .MuiButton-label').click()
    cy.get(':nth-child(5) > .MuiPaper-root > .MuiCardActions-root > :nth-child(1) > .MuiButton-label').click()
    cy.get(':nth-child(6) > .MuiPaper-root > .MuiCardActions-root > :nth-child(1) > .MuiButton-label').click()
    cy.visit("http://localhost:3000/")
    cy.get('.makeStyles-text-147').contains("1553")
    cy.get(':nth-child(1) > :nth-child(2) > .makeStyles-output-174').contains("260")
    cy.get(':nth-child(2) > :nth-child(2) > .makeStyles-output-174').contains("37")
    cy.get(':nth-child(3) > :nth-child(2) > .makeStyles-output-174').contains("47")
  })
  it("EatSupper", () => {
    cy.get(".MuiButton-label").click();
    cy.visit("http://localhost:3000/supper")
    cy.get(':nth-child(1) > .MuiPaper-root > .MuiCardActions-root > :nth-child(1) > .MuiButton-label').click()
    cy.get(':nth-child(2) > .MuiPaper-root > .MuiCardActions-root > :nth-child(1) > .MuiButton-label').click()
    cy.get(':nth-child(3) > .MuiPaper-root > .MuiCardActions-root > :nth-child(1) > .MuiButton-label').click()
    cy.get(':nth-child(4) > .MuiPaper-root > .MuiCardActions-root > :nth-child(1) > .MuiButton-label').click()
    cy.get(':nth-child(5) > .MuiPaper-root > .MuiCardActions-root > :nth-child(1) > .MuiButton-label').click()
    cy.get(':nth-child(6) > .MuiPaper-root > .MuiCardActions-root > :nth-child(1) > .MuiButton-label').click()
    cy.visit("http://localhost:3000/")
    cy.get('.makeStyles-text-147').contains("1264")
    cy.get(':nth-child(1) > :nth-child(2) > .makeStyles-output-174').contains("180")
    cy.get(':nth-child(2) > :nth-child(2) > .makeStyles-output-174').contains("45")
    cy.get(':nth-child(3) > :nth-child(2) > .makeStyles-output-174').contains("40")
  })
  it("OpenRecipe", () => {
    cy.get(".MuiButton-label").click();
    cy.visit("http://localhost:3000/supper")
    cy.get(':nth-child(1) > .MuiPaper-root > .MuiCardActions-root > :nth-child(2) > .MuiButton-label').click()
    cy.get('.MuiDialogContent-root').should("be.visible")
    cy.get('#customized-dialog-title > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root > path').click()
    cy.get('.MuiDialogContent-root').should("not.be.visible")
  })
})
});
