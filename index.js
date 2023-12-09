import * as contactsService from "./contacts.js";
import { program } from "commander";

const invokeAction = async ({ action, id, ...data }) => {
  switch (action) {
    case "list":
      const contacts = await contactsService.listContacts();
      return console.table(contacts);
    case "get":
      const oneContact = await contactsService.getContactById(id);
      return console.log(oneContact);
    case "remove":
      const deleteCont = await contactsService.removeContact(id);
      return console.log(deleteCont);
    case "add":
      const addCont = await contactsService.addContact(data);
      return console.log(addCont);
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

program
  .option("--action <type>")
  .option("--id, <type>")
  .option("--name <type>")
  .option("--email <type>")
  .option("--phone <type>");

program.parse();

const option = program.opts();

invokeAction(option);
