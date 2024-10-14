import React from "react";
import ExperienceItem from "./experience-item";
import SectionTitle from '../section-title';

const Experiences = (props) => {
    return (
        <div data-section id='experiences' className='mb-16'>
            <SectionTitle title={'Experiences'} />
            <div className="flex-col">
            {props.data.map(function(object, index){
                return <ExperienceItem  
                    key={`${object.title}+${object.startDate}`}
                    title={object.title}
                    company={object.company}
                    href={object.href}
                    startDate={object.startDate}
                    endDate={object.endDate}
                    description={object.description}
                    logo={object.logo}
                    skills={object.skills}
                />
            })}</div>
        </div>
    )
}

export default Experiences