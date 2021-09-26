import type { FC } from 'react';
import React from 'react';
import { contact, form_input } from '../scss/contact.mod.scss';
export const FormInput: FC<{ name: string; placeholder: string }> = ({
  name,
  placeholder,
}) => {
  return (
    <div className={form_input}>
      <h1>{name}</h1>
      <input placeholder={placeholder}></input>
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
        <FormInput
          name="Message"
          placeholder="Anything you want to say to me"
        />
      </div>
    </div>
  );
};
