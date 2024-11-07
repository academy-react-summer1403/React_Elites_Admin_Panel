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
import { allBlogsListD, allBlogsListD2 } from '../../services/api/Dashboard/AllBlogsD'
import { useEffect, useState } from 'react'

const BlogsListDash = () => {

  const [blogsList, setBlogsList] = useState([])

  const getBlogsList = async () => {
    let res = await allBlogsListD();
    let res2 = await allBlogsListD2();
    setBlogsList([...res2.news, ...res.news])
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
    getBlogsList()
  }, [])
  



  const colorsArr = {
    Technology: 'light-primary',
    Grocery: 'light-success',
    Fashion: 'light-warning'
  }

  return (
    <Card className='containerCourseList'>
      <Table responsive>
        <thead>
          <tr>
            <th className='DannaN'>بلاگ</th>
            <th className='DannaN'>دسته بندی</th>
            <th className='DannaN'>بازدیدها</th>
            <th className='DannaN'>تاریخ</th>
            <th className='DannaN'>وضعیت</th>
          </tr>
        </thead>
        <tbody>
          {blogsList.map((item, index) => {
            return (
                    <tr key={index}>
                    <td>
                      <div className='d-flex align-items-center'>
                        <div className='avatar rounded'>
                          <div className='avatar-content'>
                            <img src={item.currentImageAddressTumb} className='imgCourseListD'/>
                          </div>
                        </div>
                        <div>
                          <div className='fw-bolder DannaM titleD'>{item.title}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className='d-flex align-items-center'>
                        <span className='DannaM category'>{item.newsCatregoryName}</span>
                      </div>
                    </td>
                    <td className='text-nowrap'>
                      <div className='d-flex flex-column'>
                        <span className='fw-bolder mb-25 DannaM'>{item.currentView}</span>
                      </div>
                    </td>
                    <td className='DannaM'>{item.insertDate}</td>
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

export default BlogsListDash
