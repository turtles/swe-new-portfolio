import React from "react";
import Navigation from "./navigation";
import Socials from "./socials";

const Header = (props) => {
    return (
        <div className='w-full lg:w-1/2 flex flex-col pb-8 lg:pb-24 self-center'>
            <h1 className='text-3xl lg:text-5xl subpixel-antialiased tracking-wide'>{props.data.name}</h1>
            <h2 className='text-surface-600 pt-2 text-base font-normal tracking-wider'>{props.data.headline}</h2>
            {/* <Navigation></Navigation> */}
            <Socials data={props.data.socials}></Socials>
        </div>
    )
}

export default Header