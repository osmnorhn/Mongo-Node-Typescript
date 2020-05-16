// /lib/routes/crmRoutes.ts
import { Request, Response } from "express";
import { ContactController } from "../controllers/contact.controller";

export class Routes {
  public contactController: ContactController = new ContactController();

  public routes(app): void {
    app.route("/contact").post(this.contactController.addNewContact);
    app.route("/contact").get(this.contactController.getContacts);
    app
      .route("/contact/:contactId")
      .get(this.contactController.getContactById)
      .put(this.contactController.updateContact)
      .delete(this.contactController.deleteContact);
  }
}
