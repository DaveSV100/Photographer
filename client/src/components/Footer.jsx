// import React from 'react';
import './Footer.scss';
import mail from '../assets/mail.png';
import whatsapp from '../assets/whatsapp.png'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <p>Contáctanos</p>
          <div className="links">
            <a className="footer-item" href="mailto:contacto@huastex.com?subject=Información%20&body=Deseo%20saber%20más%20información">
                            <img className='mail' src={mail} alt="correo"></img>
                            <span>contacto@huastex.com</span>
                    </a>
                    <a className="footer-item" href="https://wa.me/+527851070156?text=Hola,%20deseo%20saber%20más%20información">
                        <img className='whatsapp' src={whatsapp} alt="Whatsapp ícono" />
                        <span>7851070156</span>
                    </a>   
          </div>      
      </div>
    </>
  );
};

export default Footer;
