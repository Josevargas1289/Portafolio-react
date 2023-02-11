import React from 'react';
import '../Contact/Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';



const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qcihdv8', 'template_twcti09', form.current, '7M01QDWgCwoVcON7R')
            .then((result) => {
                console.log(result.text);
                alert('Gracias por contactarme')
                
            }, (error) => {
                console.log(error.text);
            });
    };



    return (
        <div className="contact-form">
            {/* left side copy and paste from work section */}
            <div className="w-left">
                <div className="awesome-contact">
                    {/* darkMode */}
                    <span >Formulario de contacto</span>
                    <span>Contáctame</span>
                    <span className='span-Thanks'></span>

                </div>
            </div>
            {/* right side form */}
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className="user" placeholder="Name" />
                    <input type="email" name="user_email" className="user" placeholder="Email" />
                    <textarea name="message" className="user" placeholder="message" />
                    <input type="submit" value="Send" className="button" />
                    <div
                        className="blur c-blur1"
                        style={{ background: "var(--purple)" }}
                    ></div>
                </form>
            </div>
        </div>
    );
};

export default Contact;