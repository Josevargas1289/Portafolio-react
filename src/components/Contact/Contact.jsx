import React from 'react';
import '../Contact/Contact.css'

const Contact = () => {



    return (
        <div className="contact-form">
            {/* left side copy and paste from work section */}
            <div className="w-left">
                <div className="awesome-contact">
                    {/* darkMode */}
                    <span >Formulario de contacto</span>
                    <span>Contactame</span>
                    <span className='span-Thanks'>{"Gracias"}</span>

                </div>
            </div>
            {/* right side form */}
            <div className="c-right">
                <form >
                    <input type="text" name="user_name" className="user" placeholder="Nombre" />
                    <input type="email" name="user_email" className="user" placeholder="Email" />
                    <textarea name="message" className="user" placeholder="Mensaje" />
                    <input type="submit" value="Enviar" className="button" />
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