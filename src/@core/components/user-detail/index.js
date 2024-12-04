// ** React Imports
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// ** Reactstrap Imports
import { Row, Col} from 'reactstrap'

// ** User View Components
import UserTabs from './Tabs'
import UserInfoCard from './UserInfoCard'
import { getUserDetail } from '../../services/api/UserManagement/get-user-detail'
import { useGlobalState } from '../../state/state'

const UserDetail = () => {

  // ** Hooks
  const { id } = useParams()

  const [changed, setChanged] = useGlobalState('sthChangedUserDetail')

  // ** States
  const [active, setActive] = useState('1')
  const [userDetail, setUserDetail] = useState({})
  const [userRole, setUserRole] = useState([])
  const [userCourse, setUserCourse] = useState([])
  const [userReserve, setUserReserve] = useState([])

  const toggleTab = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }

  const getCourseDetail = async () => {
    const Details = await getUserDetail(id)
    setUserDetail(Details)
    setUserRole(Details.roles)
    setUserCourse(Details.courses)
    setUserReserve(Details.coursesReseves)
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
          userDetail={userDetail}
          userRole={userRole}
          />
        </Col>

        <Col xl='8' lg='7' xs={{ order: 0 }} md={{ order: 1, size: 7 }}>
          <UserTabs active={active} toggleTab={toggleTab} userCourse={userCourse} userReserve={userReserve} userDetail={userDetail}/>
        </Col>
        
      </Row>
    </div>
  )
}
export default UserDetail
