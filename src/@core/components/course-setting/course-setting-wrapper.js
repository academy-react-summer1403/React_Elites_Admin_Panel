import { Button, Input } from "reactstrap"
import { useEffect, useState } from "react"
import { Terms } from "./Terms/Terms"
import { Techs } from "./Techs/Tech"
import { Status } from "./Status/Status"
import { Department } from "./Department/Department"
import { Level } from "./Level/level"
import { Classroom } from "./Classroom/Classroom"
import { Building } from "./Buildings/Building"


const CourseSettingWrapper = () => {
    
    return (
        <>
            <Terms />
            <Techs />
            <Status />
            <Department />
            <Level />
            <Classroom />
            <Building />
        </>
    )
}

export default CourseSettingWrapper