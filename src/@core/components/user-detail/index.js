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
import { getUserSkills } from '../../services/api/UserManagement/get-user-skills'
import { getUserJobs } from '../../services/api/UserManagement/get-user-jobs'

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
  const [userSkills, setuserSkills] = useState([])
  const [userJobs, setuserJobs] = useState([])

  const toggleTab = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }

  const getUserJobsCall = async () => {
    let res = await getUserJobs()
    let filtered = res.filter(el => el.userId == id)
    setuserJobs(filtered)
  }

  const getCourseDetail = async () => {
    const Details = await getUserDetail(id)
    setUserDetail(Details)
    setUserRole(Details.roles)
    setUserCourse(Details.courses)
    setUserReserve(Details.coursesReseves)
  }

  const getUserSkillss = async () => {
    let res = await getUserSkills(id)
    setuserSkills(res)
  }

  useEffect(() => {
    getCourseDetail()
    getUserSkillss()
    getUserJobsCall()
  }, [])

  useEffect(() => {
    getCourseDetail()
    getUserJobsCall()
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
          <UserTabs userJobs={userJobs} active={active} toggleTab={toggleTab} userCourse={userCourse} userReserve={userReserve} userDetail={userDetail}/>
        </Col>
        
      </Row>
    </div>
  )
}
export default UserDetail
