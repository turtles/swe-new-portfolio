import React from "react";
import VolunteeringItem from "./volunteering-item";
import SectionTitle from '../section-title';

const Volunteering = (props) => {
    return (
        <div data-section id='volunteering' className='mb-16'>
            <SectionTitle title={'Volunteering'} />
            {props.data.map(function(object, index){
                return <VolunteeringItem  
                    key={`${object.position}+${object.startDate}`}
                    position={object.position}
                    event={object.event} 
                    organisation={object.organisation}
                    href={object.href}
                    startDate={object.startDate}
                    endDate={object.endDate ? object.endDate : ''}
                    description={object.description}
                />
            })}
        </div>
    )
}

export default Volunteering