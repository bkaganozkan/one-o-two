"use client";
import { useEffect, useState } from "react";

import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Icon = ({ icon, active = false }: { icon: string, active: boolean }) => {

    const [progressValue, setProgressValue] = useState(0)

    useEffect(() => {
        if (active) {
            setProgressValue(100)
        } else { setProgressValue(0) }

        return () => { }
    })

    return (
        <div className={`w-14 h-14 ${active ? 'border-l-blue-[#0381FF]' : ''}`}>
            <CircularProgressbarWithChildren
                counterClockwise={true}
                value={progressValue} strokeWidth={3} styles={{
                    path: {
                        stroke: "#0381FF"
                    }
                }} className="" >
                <img src={icon} style={active ? { filter: "brightness(0) saturate(100%) invert(35%) sepia(28%) saturate(5916%) hue-rotate(197deg) brightness(102%) contrast(100%)" } : {}} className="w-8 h-8 self-center" />
            </CircularProgressbarWithChildren >
        </div>
    )
}


export default Icon;