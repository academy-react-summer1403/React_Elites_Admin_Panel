// ** Third Party Components
import classnames from 'classnames'
import { Book, UserCheck, Users, Package } from 'react-feather'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col } from 'reactstrap'

const StatsCard = ({ cols, dataArr }) => {
  

  const renderData = () => {
      return (
        <>
        <Col {...cols}>
          <div className='d-flex align-items-center mt-2'>
            <Avatar color='light-primary' icon={<Package />} className='me-2' />
            <div className='my-auto'>
              <h4 className='fw-bolder mb-0  DannaM'>{dataArr.courseCount}</h4>
              <CardText className='font-small-3 mb-0 DannaM'> دوره ها </CardText>
            </div>
          </div>
        </Col>

        <Col>
          <div className='d-flex align-items-center mt-2'>
            <Avatar color='light-info' icon={<Book />} className='me-2' />
            <div className='my-auto'>
              <h4 className='fw-bolder mb-0  DannaM'>{dataArr.newsCount}</h4>
              <CardText className='font-small-3 mb-0 DannaM'>بلاگ ها </CardText>
            </div>
          </div>
        </Col>

        <Col>
          <div className='d-flex align-items-center mt-2'>
            <Avatar color='light-danger' icon={<Users />} className='me-2' />
            <div className='my-auto w75px'>
              <h4 className='fw-bolder mb-0  DannaM'>{dataArr.studentCount}</h4>
              <CardText className='font-small-3 mb-0 DannaM'> دانش آموزان </CardText>
            </div>
          </div>
        </Col>

        <Col>
          <div className='d-flex align-items-center mt-2'>
            <Avatar color='light-success' icon={<UserCheck />} className='me-2' />
            <div className='my-auto'>
              <h4 className='fw-bolder mb-0  DannaM'>{dataArr.teacherCount}</h4>
              <CardText className='font-small-3 mb-0 DannaM'> اساتید </CardText>
            </div>
          </div>
        </Col>
        </>
      )
  }

  return (
    <Card className='containerStatistics'>
      <CardHeader>
        <CardTitle tag='h4' className='DannaB'> آمار سایت </CardTitle>
      </CardHeader>
      <CardBody className='statistics-body'>
        <Row>{renderData()}</Row>
      </CardBody>
    </Card>
  )
}

export default StatsCard
