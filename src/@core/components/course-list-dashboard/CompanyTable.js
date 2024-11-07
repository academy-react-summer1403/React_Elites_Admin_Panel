// ** Custom Components
import Avatar from '@components/avatar'

// ** Reactstrap Imports
import { Table, Card } from 'reactstrap'

// ** Icons Imports
import { Monitor, Coffee, Watch, TrendingUp, TrendingDown } from 'react-feather'

// ** Icons Imports
import starIcon from '@src/assets/images/icons/star.svg'
import bookIcon from '@src/assets/images/icons/book.svg'
import brushIcon from '@src/assets/images/icons/brush.svg'
import rocketIcon from '@src/assets/images/icons/rocket.svg'
import toolboxIcon from '@src/assets/images/icons/toolbox.svg'
import speakerIcon from '@src/assets/images/icons/speaker.svg'
import parachuteIcon from '@src/assets/images/icons/parachute.svg'
import { useEffect, useState } from 'react'
import { allCourseListD } from '../../services/api/Dashboard/AllCourselistD'

const CourseListDash = () => {

  const [courseList, setCourseList] = useState([])

  const getAllCourseList = async () => {
    let res = await allCourseListD(50);
    setCourseList(res.courseDtos)
  }

  const statusIdentifier = (item) => {
    if(item.isActive === true){
      return "فعال";
    }
    else if(item.isActive === false){
      return "غیر فعال";
    }
  }

  useEffect(() => {
    getAllCourseList();
  }, [])

  return (
    <Card className='containerCourseList'>
      <Table responsive>
        <thead>
          <tr>
            <th className='DannaM'>دوره</th>
            <th className='DannaM'>دسته بندی</th>
            <th className='DannaM'>رزرو ها</th>
            <th className='DannaM'>پرداخت ها</th>
            <th className='DannaM'>وضعیت</th>
          </tr>
        </thead>
        <tbody>
        {courseList.map((item, index) => {
      return (
        <tr key={index}>
          <td>
            <div className='d-flex align-items-center'>
              <div className='avatar rounded'>
                <div className='avatar-content'>
                  <img src={item.tumbImageAddress} className='imgCourseListD' />
                </div>
              </div>
              <div>
                <div className='fw-bolder DannaM titleD'>{item.title}</div>
              </div>
            </div>
          </td>
          <td>
            <div className='d-flex align-items-center'>
              <span className='DannaM'>{item.typeName}</span>
            </div>
          </td>
          <td className='text-nowrap'>
            <div className='d-flex flex-column'>
              <span className='fw-bolder mb-25'>{item.reserveCount}</span>
              <span className='font-small-2 text-muted DannaM'>{Number(item.cost) * 10}ريال</span>
            </div>
          </td>
          <td>${item.title}</td>
          <td>
            <div className='d-flex align-items-center'>
              <span className={item.isActive ?  "activeD" : "notActive"}>{statusIdentifier(item)}</span>
            </div>
          </td>
        </tr>
    )})}
        </tbody>
      </Table>
    </Card>
  )
}

export default CourseListDash