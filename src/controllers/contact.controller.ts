import * as mongoose from "mongoose";
import { ContactSchema } from "../models/contact";
import { Request, Response } from "express";

const Contact = mongoose.model("Contact", ContactSchema);

export class ContactController {
  public addNewContact(req: Request, res: Response) {
    let newContact = new Contact(req.body);

    newContact.save((error, contact) => {
      if (error) {
        res.send(error);
      }

      res.json(contact);
    });
  }

  public getContacts(req: Request, res: Response) {
    Contact.find({}, (error, contact) => {
      if (error) {
        res.send(error);
      }
      res.json(contact);
    });
  }

  public getContactById(req: Request, res: Response) {
    Contact.findById(req.params.contactId, (error, contact) => {
      if (error) {
        res.send(error);
      }
      res.json(contact);
    });
  }

  public updateContact(req: Request, res: Response) {
    Contact.findOneAndUpdate(
      { _id: req.params.contactId },
      req.body,
      { new: true },
      (error, contact) => {
        if (error) {
          res.send(error);
        }
        res.json(contact);
      }
    );
  }

  public deleteContact(req: Request, res: Response) {
    Contact.remove({ _id: req.params.contactId }, (error, contact) => {
      if (error) {
        res.send(error);
      }
      res.json({ message: "Successfully deleted contact!" });
    });
  }
}


