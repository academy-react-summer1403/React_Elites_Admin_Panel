// ** React Imports
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// ** Reactstrap Imports
import { Row, Col} from 'reactstrap'

// ** User View Components
import UserTabs from './Tabs'
import UserInfoCard from './UserInfoCard'
import { getCourseById } from '../../services/api/CourseManagement/course-detail'
import { getCourseGroup } from '../../services/api/CourseManagement/course-group-by-id'
import { getCourseUser } from '../../services/api/CourseManagement/get-course-user'
import { getCoursePayment } from '../../services/api/CourseManagement/get-course-payment'
import { getCourseComment } from '../../services/api/CourseManagement/get-course-comment'
import { useGlobalState } from '../../state/state'

const UserView = () => {

  // ** Hooks
  const { id } = useParams()

  // ** States
  const [active, setActive] = useState('1')
  const [courseDetail, setCourseDetail] = useState({})
  const [courseGroupObj, setCourseGroupObj] = useState([]) 
  const [courseuser, setCourseuser] = useState([])
  const [coursenotDonePayment, setcoursenotDonePayment] = useState([])
  const [courseDonePayment, setcourseDonePayment] = useState([])
  const [courseComment, setcourseComment] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const [changed, setChanged] = useGlobalState('sthChangedCourseDetail')

  const toggleTab = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }

  const getCourseDetail = async () => {
    const Details = await getCourseById(id)
    setCourseDetail(Details)

    let res = await getCourseGroup(Details?.teacherId, id)
    setCourseGroupObj(res)

    let res2 = await getCourseUser(id, "1")
    setCourseuser(res2)

    let res3 = await getCoursePayment(id)
    setcoursenotDonePayment(res3.notDonePays)
    setcourseDonePayment(res3.donePays)

    let res4 = await getCourseComment(id)
    setcourseComment(res4)

    setisLoading(false)
  }

  useEffect(() => {
    getCourseDetail()
  }, [])

  useEffect(() => {
    getCourseDetail()
  }, [changed])

  return (
    <div className='app-user-view'>
      <Row>

        <Col xl='4' lg='5' xs={{ order: 1 }} md={{ order: 0, size: 5 }}>
          <UserInfoCard
          courseDetail={courseDetail}
          setCourseDetail={setCourseDetail}
          />
        </Col>

        <Col xl='8' lg='7' xs={{ order: 0 }} md={{ order: 1, size: 7 }}>
          <UserTabs isLoading={isLoading} courseComment={courseComment} courseDonePayment={courseDonePayment} coursenotDonePayment={coursenotDonePayment} courseuser={courseuser} active={active} toggleTab={toggleTab} courseDetail={courseDetail} courseGroupObj={courseGroupObj} />
        </Col>
        
      </Row>
    </div>
  )
}
export default UserView
