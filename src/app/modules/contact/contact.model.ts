import { Model, Schema, model } from "mongoose";
import { ContactModel, IContact } from "./contact.interface";

const contactSchema = new Schema<IContact>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    isRead: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

export const Contact = model<IContact, ContactModel>("contact", contactSchema);
