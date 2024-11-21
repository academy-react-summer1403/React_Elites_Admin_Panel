// ** React Imports
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// ** Reactstrap Imports
import { Row, Col} from 'reactstrap'

// ** User View Components
import UserTabs from './Tabs'
import UserInfoCard from './UserInfoCard'
import { getBlogDetail } from '../../services/api/BlogManagement/get-blog-by-id'
import { getBlogFile } from '../../services/api/BlogManagement/get-blog-file'
import { getBlogComment } from '../../services/api/BlogManagement/get-blog-comment'

const GetBlogDetail = () => {

  // ** Hooks
  const { id } = useParams()

  // ** States
  const [active, setActive] = useState('1')
  const [blogDetail, setBlogDetail] = useState({})
  const [blogFiles, setBlogFiles] = useState([])
  const [blogComment, setBlogComment] = useState([])

  const toggleTab = tab => {
    if (active !== tab) {
      setActive(tab)
    }
  }

  const getBlogDetailCall = async () => {
    const Details = await getBlogDetail(id)
    setBlogDetail(Details.detailsNewsDto)
    let res = await getBlogFile(id)
    setBlogFiles(res)
    let res2 = await getBlogComment(id)
    setBlogComment(res2)
  }

  useEffect(() => {
    getBlogDetailCall()
  }, [])

  return (
    <div className='app-user-view'>
      <Row>

        <Col xl='4' lg='5' xs={{ order: 1 }} md={{ order: 0, size: 5 }}>
          <UserInfoCard
            blogDetail={blogDetail}
          />
        </Col>

        <Col xl='8' lg='7' xs={{ order: 0 }} md={{ order: 1, size: 7 }}>
          <UserTabs blogComment={blogComment} blogFiles={blogFiles} active={active} toggleTab={toggleTab} blogDetail={blogDetail} />
        </Col>
        
      </Row>
    </div>
  )
}
export default GetBlogDetail
