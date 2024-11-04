// ** Third Party Components
import classnames from 'classnames'
import { Book, UserCheck, Users, Package } from 'react-feather'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col } from 'reactstrap'
import { useEffect, useState } from 'react'
import { statistics } from '../../services/api/Dashboard/Statistics'

const StatsCard = ({ cols }) => {

  const [dataArr, setDataArr] = useState([])

  const getStatisticsInfo = async () => {
    let res = await statistics();
    setDataArr(res)
    console.log(dataArr)
  }

  useEffect(() => {
    getStatisticsInfo();
  }, [])
  

  const renderData = () => {
      return (
        <>
        <Col {...cols}>
          <div className='d-flex align-items-center mt-2'>
            <Avatar color='#ff0000' icon={<Package />} className='me-2' />
            <div className='my-auto'>
              <h4 className='fw-bolder mb-0'>{dataArr.courseCount}</h4>
              <CardText className='font-small-3 mb-0'> دوره ها </CardText>
            </div>
          </div>
        </Col>

        <Col>
          <div className='d-flex align-items-center mt-2'>
            <Avatar color='#ff0000' icon={<Book />} className='me-2' />
            <div className='my-auto'>
              <h4 className='fw-bolder mb-0'>{dataArr.newsCount}</h4>
              <CardText className='font-small-3 mb-0'>بلاگ ها </CardText>
            </div>
          </div>
        </Col>

        <Col>
          <div className='d-flex align-items-center mt-2'>
            <Avatar color='#ff0000' icon={<Users />} className='me-2' />
            <div className='my-auto'>
              <h4 className='fw-bolder mb-0'>{dataArr.studentCount}</h4>
              <CardText className='font-small-3 mb-0'> دانش آموزان </CardText>
            </div>
          </div>
        </Col>

        <Col>
          <div className='d-flex align-items-center mt-2'>
            <Avatar color='#ff0000' icon={<UserCheck />} className='me-2' />
            <div className='my-auto'>
              <h4 className='fw-bolder mb-0'>{dataArr.teacherCount}</h4>
              <CardText className='font-small-3 mb-0'> اساتید </CardText>
            </div>
          </div>
        </Col>
        </>
      )
  }

  return (
    <Card className='containerStatistics'>
      <CardHeader>
        <CardTitle tag='h4'> آمار سایت </CardTitle>
      </CardHeader>
      <CardBody className='statistics-body'>
        <Row>{renderData()}</Row>
      </CardBody>
    </Card>
  )
}

export default StatsCard
