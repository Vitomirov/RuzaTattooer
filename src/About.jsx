import React from "react";
import { Link } from "react-router-dom";

function About() {
    return (
        <>
        <h1 className="title">About</h1>
            <p className="about">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Nesciunt enim quisquam fugiat voluptatem mollitia quo aliquam id ipsam sunt. Id minus maiores
            nulla ut unde odit cumque reprehenderit animi accusantium.
            </p>
            <hr />
            <p className="link"><Link to="/">Home</Link></p>

        </>
    );
}

export default About;
