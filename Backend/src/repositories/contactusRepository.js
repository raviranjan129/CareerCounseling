import Contact from "./../schema/contactSchema.js"
import crudRepository from "./crudRepository.js";


export const contactRepository={
...crudRepository(Contact)
}