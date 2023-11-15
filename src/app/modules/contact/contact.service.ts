import { IContact } from "./contact.interface";
import { Contact } from "./contact.model";

// Create a new Message
const createContat = async (
  contactData: Partial<IContact>
): Promise<Partial<IContact | null | Object>> => {
  contactData.isRead = false;
  const result = await Contact.create(contactData);
  return result;
};

// Get All Message
const getAllMessage = async (): Promise<Partial<IContact | null | Object>> => {
  const result = await Contact.find({});
  return result;
};

// Get Single Message
const getSingleMessage = async (
  id: string
): Promise<Partial<IContact | null | Object>> => {
  const result = await Contact.findById(id);
  return result;
};

// Get Single Message
const markAsRead = async (
  id: string
): Promise<Partial<IContact | null | Object>> => {
  const result = await Contact.findByIdAndUpdate(
    id,
    { isRead: true },
    { new: true }
  );
  return result;
};

export const ContactService = {
  createContat,
  getAllMessage,
  getSingleMessage,
  markAsRead,
};
