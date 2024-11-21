// ** React Imports
import { useEffect, useRef, useState } from 'react'

// ** Custom Components
import Wizard from '@components/wizard'

// ** Steps
import Address from './steps-with-validation/Address'
import SocialLinks from './steps-with-validation/SocialLinks'
import PersonalInfo from './steps-with-validation/PersonalInfo'
import AccountDetails from './steps-with-validation/AccountDetails'

// ** Icons Imports
import { FileText, User, MapPin, Link, Info, File, Image, Layers, Clipboard } from 'react-feather'
import { getCreateCourse } from '../../services/api/CourseManagement/get-create-course'

const WizardModernVertical = () => {
  
  // ** Ref
  const ref = useRef(null)

  // ** State
  const [stepper, setStepper] = useState(null)
  const [courseTeachers, setcourseTeachers] = useState([])
  const [Trem, setTrem] = useState([])
  const [classRoom, setClassRoom] = useState([])
  const [courselevel, setcourselevel] = useState([])
  const [courseType, setcourseType] = useState([])
  const [courseTech, setcourseTech] = useState([])

  const [stepOneObj, setstepOneObj] = useState({})
  const [stepTwo, setstepTwo] = useState({})
  const [stepThree, setstepThree] = useState({})
  const [stepFour, setstepFour] = useState({})


  const [totalValue, settotalValue] = useState({})

  const getCreateCourseCall = async () => {
    let res = await getCreateCourse()
    setcourseTeachers(res.teachers)
    setTrem(res.termDtos)
    setClassRoom(res.classRoomDtos)
    setcourselevel(res.courseLevelDtos)
    setcourseType(res.courseTypeDtos)
    setcourseTech(res.technologyDtos)
  }


  useEffect(() => {
    getCreateCourseCall()
  }, [])
  

  const steps = [
    {
      id: 'account-details',
      title: 'اطلاعات دوره',
      subtitle: 'اطلاعات دوره را وارد کنید',
      icon: <Info size={18} />,
      content: <AccountDetails setstepOneObj={setstepOneObj} courseTeachers={courseTeachers} stepper={stepper} type='modern-vertical' />
    },
    {
      id: 'personal-info',
      title: 'جزییات دوره',
      subtitle: 'جزییات دوره را اضافه کنید',
      icon: <Clipboard size={18} />,
      content: <PersonalInfo setstepTwo={setstepTwo} Trem={Trem} classRoom={classRoom} stepper={stepper} type='modern-vertical' />
    },
    {
      id: 'step-address',
      title: 'عکس دوره',
      subtitle: 'عکس دوره را اضافه کنید',
      icon: <Image size={18} />,
      content: <Address setstepThree={setstepThree} stepper={stepper} type='modern-vertical' />
    },
    {
      id: 'social-links',
      title: 'دسته بندی دوره',
      subtitle: 'دسته بندی دوره را اضافه کنید',
      icon: <Layers size={18} />,
      content: <SocialLinks
      stepOneObj={stepOneObj}
      stepTwo={stepTwo}
      stepThree={stepThree}
      stepFour={stepFour}
      setstepFour={setstepFour} courseTech={courseTech} courseType={courseType} courselevel={courselevel} stepper={stepper} type='modern-vertical' />
    }
  ]

  return (
    <div className='modern-vertical-wizard'>
      <Wizard
        type='modern-vertical'
        ref={ref}
        steps={steps}
        options={{
          linear: false
        }}
        instance={el => setStepper(el)}
      />
    </div>
  )
}

export default WizardModernVertical
