import React from "react";
import ProjectItem from "./project-item";
import SectionTitle from '../section-title';

const Projects = (props) => {
    return (
        <div data-section id='projects' className='mb-16'>
            <SectionTitle title={'Projects'} />
            <div className='grid grid-cols-2 gap-2'>
                {props.data.map(function(object, index){
                    return <ProjectItem
                        key={object.name}
                        name={object.name}
                        stars={object.stars}
                        lib={object.framework}
                        description={object.description}
                        href={object.href}
                    />
                })}
            </div>
        </div>
    )
}

export default Projects