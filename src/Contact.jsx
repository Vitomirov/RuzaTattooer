import React from "react";
import { Link } from "react-router-dom";


function Contact() {
    
    return (
        <>
            <h1 className="title">Contact</h1>
            <br />
            <p className="contact">Appoint a meeting:</p>
            <a href="mailto:dejan.vitomirov@gmail.com"
                className="contact">
                <em>ruza.tattooer@gmail.com</em></a>
            <br />
            <address className="contact">Address:
                <p>Mike Alasa 34, 11000 Belgrade</p>
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2829.7208315716225!2d20.460152175242804!3d44.82725167571238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6534b57d63fb%3A0xb5c5ff240b6bf440!2sMike%20Alasa%2034%2C%20Beograd!5e0!3m2!1sen!2srs!4v1716394622468!5m2!1sen!2srs"
                width="400"
                height="250"
                style= {{border: "0"}}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
                </iframe>   
            </address>    
            <p className="link"><Link to="/">Home</Link></p>
   
        </>
    );
}

export default Contact;