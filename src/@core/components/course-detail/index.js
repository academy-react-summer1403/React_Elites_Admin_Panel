// ** React Imports
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// ** Reactstrap Imports
import { Row, Col} from 'reactstrap'

// ** User View Components
import UserTabs from './Tabs'
import UserInfoCard from './UserInfoCard'
import { getCourseById } from '../../services/CourseManagement/course-detail'
import { getCourseGroup } from '../../services/CourseManagement/course-group-by-id'

const UserView = () => {

  // ** Hooks
  const { id } = useParams()

  // ** States
  const [active, setActive] = useState('1')
  const [courseDetail, setCourseDetail] = useState({})
  const [courseGroupObj, setCourseGroupObj] = useState([]) 

  const toggleTab = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }

  const getCourseDetail = async () => {
    const Details = await getCourseById(id)
    setCourseDetail(Details)
    let res = await getCourseGroup("1", id)
    setCourseGroupObj(res)
  }

  useEffect(() => {
    getCourseDetail()
  }, [])

  return (
    <div className='app-user-view'>
      <Row>

        <Col xl='4' lg='5' xs={{ order: 1 }} md={{ order: 0, size: 5 }}>
          <UserInfoCard
          courseDetail={courseDetail}
          />
        </Col>

        <Col xl='8' lg='7' xs={{ order: 0 }} md={{ order: 1, size: 7 }}>
          <UserTabs active={active} toggleTab={toggleTab} courseDetail={courseDetail} courseGroupObj={courseGroupObj} />
        </Col>
        
      </Row>
    </div>
  )
}
export default UserView
