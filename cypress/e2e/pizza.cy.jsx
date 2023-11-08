/// <reference types="cypress" />

describe("Pizza Form Testleri", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/pizza");
  });

  it("Test form: ", () => {
    // Pizza Size Selection
    const mediumSize = cy.get("#medium");
    mediumSize.check();
    mediumSize.should("be.checked");

    // Pizza Dough Selection

    const dough = cy.get("#ticknessDough");
    dough.select("thin");
    dough.should("have.value", "thin");

    //Checkbox Additional item selection

    cy.get("#ananas").check();
    cy.get("#salam").check();
    cy.get("#biber").check();
    cy.get("#jalepeno").check();
    cy.get("#misir").check();
    cy.get("#izgara").check();

    cy.get("#ananas").should("be.checked");
    cy.get("#salam").should("be.checked");
    cy.get("#biber").should("be.checked");
    cy.get("#jalepeno").should("be.checked");
    cy.get("#misir").should("be.checked");
    cy.get("#izgara").should("be.checked");

    // Input that ask for name
    const nameInput = cy.get("#name-input");
    nameInput.type("Murat");
    nameInput.should("have.attr", "value").should("have.length.gte", 2);

    // Order Note
    const specialText = cy.get("#special-text");
    specialText.type("Kapida odeme");

    // Order button click
    const btn = cy.get("#order-button");
    btn.click();
  });
});
//     it("Isim inputuna isim yazmak.", () => {
//       /// Gorev1 ve 2
// const btn = cy.get("#btn-input");
//       btn.click();
//       const nameInput = cy.get("#isim-inputu");

//       nameInput.type("Murat");

//       nameInput.invoke("val").should("eq", "Murat");

//       //Gorev 3

//       const mailInput = cy.get("#mail-inputu");

//       mailInput.type("muratsimseekk@gmail.com");

//       //Gorev 4

//       const sifreInput = cy.get("#sifre-inputu");
//       sifreInput.type("123456789");

//       //Gorev5

//       const checkboxInput = cy.get("#active");
//       checkboxInput.click();
//       checkboxInput.should("be.checked");

//       //Gorev6

//       const btn = cy.get("#btn-input");
//       btn.click();

//       //Gorev7

//       const vldControl = cy.get(".validation");
//       vldControl.should("be.hidden");

//       // const nameInput = cy.get("#name-input");

//       // nameInput.type("as");

//       // cy.get("#name-validation")
//       //   .should("be.visible")
//       //   .should("have.text", "Ürün ismi 3 karakterden az olamaz.");

//       // nameInput.type("{backspace}{backspace}");

//       // cy.get("#name-validation")
//       //   .should("be.visible")
//       //   .should("have.text", "İsim alanı boş bırakılamaz!");

//       // nameInput.type("ornek urun 1");

//       // cy.get("#name-validation").should("be.hidden");
//     });
//   });

//   /*
