import React from "react";
import Image from "next/image";

function ExperienceItem(props) {
    return (
        <div className="group flex flex-row rounded-lg mb-4 p-1 lg:p-5 transition-all lg:hover:bg-surface-200">
            <div className="hidden lg:inline-block basis-1/4 mr-2">
                <Image src={props.logo} alt="Company Logo" width={70} height={70} className='object-contain object-top pt-2' />
            </div>
            <div className='flex flex-col lg:basis-3/4'>
                <div className='flex flex-row mb-1 lg:mb-0'>
                    <div className="mr-4 lg:hidden">
                        <Image src={props.logo} alt="Company Logo" width={70} height={70} className='object-contain object-top pt-2' />
                    </div>
                    <div className=''>
                        <a href={props.href} target="_blank" rel="noopener noreferrer" className='font-medium transition-all'>{props.title} | {props.company} </a>
                        <div className='mb-2 text-surface-600'>{props.startDate} - {props.endDate}</div>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className='text-surface-600 mb-4'>{props.description}</div>
                    <div className='flex flex-row flex-wrap'>
                        {props.skills ? props.skills.map(function(object, index){
                            return <div key={object} className='bg-surface-400 py-1 px-3 rounded-full text-xs mr-2 mb-2'>{object}</div>
                        }) : ""}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceItem