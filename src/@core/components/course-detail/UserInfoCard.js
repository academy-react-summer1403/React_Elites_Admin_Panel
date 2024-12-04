// ** React Imports
import { useState, Fragment } from 'react'

// ** Reactstrap Imports
import { Card, CardBody, Button, Badge, Modal, ModalBody, ModalHeader } from 'reactstrap'

import { Check, Briefcase, X, User, MessageSquare } from 'react-feather'
import CourseEditModal from '../course-list/edit-course-modal'
import { activeCourse } from '../../services/api/CourseManagement/active-course'
import toast from 'react-hot-toast'
import { useGlobalState } from '../../state/state'


const UserInfoCard = ({courseDetail, setCourseDetail}) => {
  // ** State
  const [show, setShow] = useState(false)

  const [changed, setChanged] = useGlobalState('sthChangedCourseDetail')

  const statusIdentifier = (item) => {
    if(item.isActive === true){
      return "فعال";
    }
    else if(item.isActive === false){
      return "غیر فعال";
    }
  }

  const dateConvertor = (date) => {
    let miladiRaw = `${date}`
    let miladi = miladiRaw.slice(0, 10)
    let year = miladi.slice(0, 4)
    let month = miladi.slice(5,7)
    if(month == 1){
      month = "ژانویه"
    }
    else if(month == 2){
      month = "فوریه"
    }
    else if(month == 3){
      month = "مارس"
    }
    else if(month == 4){
      month = "آوریل"
    }
    else if(month == 5){
      month = "می"
    }
    else if(month == 6){
      month = "ژوئن"
    }
    else if(month == 7){
      month = "جولای"
    }
    else if(month == 8){
      month = "آگوست"
    }
    else if(month == 9){
      month = "سپتامبر"
    }
    else if(month == 10){
      month = "اکتبر"
    }
    else if(month == 11){
      month = "نوامبر"
    }
    else if(month == 12){
      month = "دسامبر"
    }
    let day = miladi.slice(8,10)
    let dateMiladii = `${day} ${month} ${year}`
    return dateMiladii
  }

  return (
    <Fragment>
      <Card>
        <CardBody>
          <div className='user-avatar-section'>
            <div className='d-flex align-items-center flex-column'>
              <img
                alt='عکس دوره'
                src={courseDetail?.imageAddress}
                className='img-fluid rounded mt-3 mb-2 imageDetail'
              />
              <div className='d-flex flex-column align-items-center text-center'>
                <div className='user-info'>
                  <h4 className='DannaM'>{courseDetail?.title}</h4>
                    {courseDetail?.isActive === true ? <Badge className='text-capitalize DannaM' color="light-success">
                      {statusIdentifier(courseDetail)}
                    </Badge> : <Badge className='text-capitalize DannaM' color="light-danger">
                      {statusIdentifier(courseDetail)}
                    </Badge>}
                </div>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-around my-2 pt-75'>
            <div className='d-flex align-items-start me-2'>
              <Badge color='light-primary' className='rounded p-75'>
                <MessageSquare className='font-medium-2' />
              </Badge>
              <div className='ms-75'>
                <h4 className='mb-0 DannaM'>{courseDetail?.courseCommentTotal}</h4>
                <small className='DannaM'> کامنت ها </small>
              </div>
            </div>
            <div className='d-flex align-items-start'>
              <Badge color='light-primary' className='rounded p-75'>
                <User className='font-medium-2' />
              </Badge>
              <div className='ms-75'>
                <h4 className='mb-0 DannaM'>{courseDetail?.courseUserTotal}</h4>
                <small className='DannaM'> دانش آموزان </small>
              </div>
            </div>
          </div>
          <h4 className='fw-bolder border-bottom pb-50 mb-1 DannaM'>جزئیات</h4>
          <div className='info-container'>
              <ul className='list-unstyled'>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 DannaM'>زمان شروع :</span>
                  <span className='DannaM'>{dateConvertor(courseDetail?.startTime)}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 DannaM'>زمان پایان :</span>
                  <span className='DannaM'>{dateConvertor(courseDetail?.endTime)}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 DannaM'>تاریخ انتشار :</span>
                  <span className='DannaM'>{dateConvertor(courseDetail?.insertDate)}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 DannaM'>نام معلم :</span>
                  <span className='DannaM'>{dateConvertor(courseDetail?.teacherName)}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 DannaM'> شماره کلاس : </span>
                  <span>{courseDetail?.courseClassRoomName}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 DannaM'> نوع : </span>
                  <span className='DannaM'>{courseDetail?.courseTypeName}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 DannaM'> سطح دوره : </span>
                  <span className='DannaM'>{courseDetail?.courseLevelName}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 DannaM'> وضعیت : </span>
                  <span className='DannaM'>{courseDetail?.courseStatusName}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 DannaM'> پرداختی ها : </span>
                  <span className='DannaM'>{courseDetail?.paymentDoneTotal}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 DannaM'> قیمت : </span>
                  <span className='DannaM'>{courseDetail?.cost}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 DannaM'> پرداختی های انجام نشده : </span>
                  <span className='DannaM'>{courseDetail?.paymentNotDoneTotal}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 DannaM'> گروه ها : </span>
                  <span className='DannaM'>{courseDetail?.courseGroupTotal}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 DannaM'> رزرو ها : </span>
                  <span className='DannaM'>{courseDetail?.reserveUserTotal}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 DannaM'> دانش آموزان : </span>
                  <span className='DannaM'>{courseDetail?.courseUserTotal}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 DannaM'> تعداد لایک : </span>
                  <span className='DannaM'>{courseDetail?.courseLikeTotal}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 DannaM'> دانش آموزان : </span>
                  <span className='DannaM'>{courseDetail?.courseUserTotal}</span>
                </li>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 DannaM'>  تعداد کامنت : </span>
                  <span className='DannaM'>{courseDetail?.courseCommentTotal}</span>
                </li>
              </ul>
          </div>
          <div className='d-flex justify-content-center pt-2'>
          {courseDetail?.isActive === true ? 
            <Button className='light-danger DannaM' color='danger' outline onClick={ async () => {
              let res = await activeCourse({
              active: false, 
              id: `${courseDetail?.courseId}`
              })
              if(res.success === true){
                toast.success("دوره غیر فعال شد")
                setCourseDetail(courseDetail)
                setChanged(!changed)
              }
            }}>
            غیرفعال
            </Button> :
            <Button className='light-success DannaM' color='success' outline onClick={ async () => {
              let res = await activeCourse({
              active: true, 
              id: `${courseDetail?.courseId}`
              })
              if(res.success === true){
                toast.success("دوره فعال شد")
                setCourseDetail(courseDetail)
                setChanged(!changed)
              }
            }}>
            فعال
            </Button>
          }
            <CourseEditModal courseDetail={courseDetail} />
            <Button className='ms DannaM' color='danger' outline>
              حذف دوره
            </Button>
          </div>
        </CardBody>
      </Card>
    </Fragment>
  )
}

export default UserInfoCard
