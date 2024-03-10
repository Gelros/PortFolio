import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form:any = useRef();
      
        const sendEmail = (e:any) => {
          e.preventDefault();
      
          emailjs.sendForm('service_5rn3zzw', 'template_2pwsx5c', form.current, 'gV_s2OwolrtItcx5-')
            .then((result) => {
                console.log(result.text);
                console.log("Message envoyé");
            }, (error) => {
                console.log(error.text);
            });
        };
    return (
        <div className='contact-section' data-aos="zoom-in">
            <form ref={form} onSubmit={sendEmail}>
              <label>Nom</label>
              <input type="text" name="user_name" placeholder='Veuillez inscrire votre nom et prénom'/>
              <label>Email</label>
              <input type="email" name="user_email" placeholder='Veuillez renseigner votre email'/>
              <label>Message</label>
              <textarea name="message" />
              <input className="submit" type="submit" value="Envoyer" placeholder='Écrivez-moi ce que vous voulez me dire'/>
            </form>
        </div>
    );
};

export default Contact;