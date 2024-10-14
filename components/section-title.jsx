import React from "react";
import Navigation from "./navigation";
import Socials from "./socials";

const SectionTitle = (props) => {
    return (
        <h2 className='mb-8 uppercase text-primary-500 font-mono tracking-wide'>{props.title}</h2>
    )
}

export default SectionTitle