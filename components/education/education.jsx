import React from "react";
import EducationItem from "./education-item";
import SectionTitle from '../section-title';

const Education = (props) => {
    return (
        <div data-section id='education' className='mb-16'>
            <SectionTitle title={'Education'} />
            {props.data.map(function(object, index){
                return <EducationItem
                    key={`${object.subject}+${object.startDate}`}  
                    subject={object.subject}
                    degree={object.degree}
                    university={object.university}
                    href={object.href}
                    startDate={object.startDate} 
                    endDate={object.endDate ? object.endDate : ''} 
                    description={object.description}
                />
            })}
        </div>
    )
}

export default Education