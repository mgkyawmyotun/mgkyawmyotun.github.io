import type { FC } from 'react';
import React from 'react';
import { contact, form_input, form_textarea } from '../scss/contact.mod.scss';
type FormFill = { name: string; placeholder: string };
export const FormInput: FC<FormFill> = ({ name, placeholder }) => {
  return (
    <div className={form_input}>
      <h1>{name}</h1>
      <input placeholder={placeholder}></input>
    </div>
  );
};
export const FormTextArea: FC<FormFill> = ({ name, placeholder }) => {
  return (
    <div className={form_textarea}>
      <h1>{name}</h1>
      <textarea placeholder={placeholder}></textarea>
    </div>
  );
};
export const ContactForm: FC = () => {
  return (
    <div className={contact}>
      <h1>Contact Me</h1>
      <div></div>
      <div></div>
      <div>
        <FormInput name="Name" placeholder="How you like to call yourself" />
        <FormInput name="Email" placeholder="can you drop your email" />
        <FormTextArea
          name="Message"
          placeholder="Anything you want to say to me"
        />
        <button>Submit</button>
      </div>
    </div>
  );
};
