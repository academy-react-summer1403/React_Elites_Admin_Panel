// ** React Imports
import { useState, Fragment } from 'react'

// ** Reactstrap Imports
import { Card, CardBody, Button, Badge, Modal, ModalBody, ModalHeader } from 'reactstrap'

import { Check, Briefcase, X, User, MessageSquare } from 'react-feather'
import CourseEditModal from '../course-list/edit-course-modal'
import { activeCourse } from '../../services/api/CourseManagement/active-course'
import toast from 'react-hot-toast'


const UserInfoCard = ({courseDetail}) => {
  // ** State
  const [show, setShow] = useState(false)

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
            <Button className='light-success DannaM' color='danger' outline onClick={ async () => {
              let res = await activeCourse({
              active: false, 
              id: `${courseDetail?.courseId}`
              })
            }}>
            غیرفعال کردن
            </Button> :
            <Button className='light-success DannaM' color='success' outline onClick={ async () => {
              let res = await activeCourse({
              active: true, 
              id: `${courseDetail?.courseId}`
              })
            }}>
            فعال کردن
            </Button>
          }
            <CourseEditModal courseDetail={courseDetail} />
            <Button className='ms DannaM' color='danger' outline>
              حذف دوره
            </Button>
          </div>
        </CardBody>
      </Card>
      <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-lg'>
        <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
        <ModalBody className='px-sm-5 pt-50 pb-5'>
          <div className='text-center mb-2'>
            <h1 className='mb-1'>Edit User Information</h1>
            <p>Updating user details will receive a privacy audit.</p>
          </div>
          {/* <Form onSubmit={handleSubmit(onSubmit)}>
            <Row className='gy-1 pt-75'>
              <Col md={6} xs={12}>
                <Label className='form-label' for='firstName'>
                  First Name
                </Label>
                <Controller
                  defaultValue=''
                  control={control}
                  id='firstName'
                  name='firstName'
                  render={({ field }) => (
                    <Input {...field} id='firstName' placeholder='John' invalid={errors.firstName && true} />
                  )}
                />
              </Col>
              <Col md={6} xs={12}>
                <Label className='form-label' for='lastName'>
                  Last Name
                </Label>
                <Controller
                  defaultValue=''
                  control={control}
                  id='lastName'
                  name='lastName'
                  render={({ field }) => (
                    <Input {...field} id='lastName' placeholder='Doe' invalid={errors.lastName && true} />
                  )}
                />
              </Col>
              <Col xs={12}>
                <Label className='form-label' for='username'>
                  Username
                </Label>
                <Controller
                  defaultValue=''
                  control={control}
                  id='username'
                  name='username'
                  render={({ field }) => (
                    <Input {...field} id='username' placeholder='john.doe.007' invalid={errors.username && true} />
                  )}
                />
              </Col>
              <Col md={6} xs={12}>
                <Label className='form-label' for='billing-email'>
                  Billing Email
                </Label>
                <Input
                  type='email'
                  id='billing-email'
                  defaultValue={selectedUser.email}
                  placeholder='example@domain.com'
                />
              </Col>
              <Col md={6} xs={12}>
                <Label className='form-label' for='status'>
                  Status:
                </Label>
                <Select
                  id='status'
                  isClearable={false}
                  className='react-select'
                  classNamePrefix='select'
                  options={statusOptions}
                  theme={selectThemeColors}
                  defaultValue={statusOptions[statusOptions.findIndex(i => i.value === selectedUser.status)]}
                />
              </Col>
              <Col md={6} xs={12}>
                <Label className='form-label' for='tax-id'>
                  Tax ID
                </Label>
                <Input
                  id='tax-id'
                  placeholder='Tax-1234'
                  defaultValue={selectedUser.contact.substr(selectedUser.contact.length - 4)}
                />
              </Col>
              <Col md={6} xs={12}>
                <Label className='form-label' for='contact'>
                  Contact
                </Label>
                <Input id='contact' defaultValue={selectedUser.contact} placeholder='+1 609 933 4422' />
              </Col>
              <Col md={6} xs={12}>
                <Label className='form-label' for='language'>
                  language
                </Label>
                <Select
                  id='language'
                  isClearable={false}
                  className='react-select'
                  classNamePrefix='select'
                  options={languageOptions}
                  theme={selectThemeColors}
                  defaultValue={languageOptions[0]}
                />
              </Col>
              <Col md={6} xs={12}>
                <Label className='form-label' for='country'>
                  Country
                </Label>
                <Select
                  id='country'
                  isClearable={false}
                  className='react-select'
                  classNamePrefix='select'
                  options={countryOptions}
                  theme={selectThemeColors}
                  defaultValue={countryOptions[0]}
                />
              </Col>
              <Col xs={12}>
                <div className='d-flex align-items-center mt-1'>
                  <div className='form-switch'>
                    <Input type='switch' defaultChecked id='billing-switch' name='billing-switch' />
                    <Label className='form-check-label' htmlFor='billing-switch'>
                      <span className='switch-icon-left'>
                        <Check size={14} />
                      </span>
                      <span className='switch-icon-right'>
                        <X size={14} />
                      </span>
                    </Label>
                  </div>
                  <Label className='form-check-label fw-bolder' for='billing-switch'>
                    Use as a billing address?
                  </Label>
                </div>
              </Col>
              <Col xs={12} className='text-center mt-2 pt-50'>
                <Button type='submit' className='me-1' color='primary'>
                  Submit
                </Button>
                <Button
                  type='reset'
                  color='secondary'
                  outline
                  onClick={() => {
                    handleReset()
                    setShow(false)
                  }}
                >
                  Discard
                </Button>
              </Col>
            </Row>
          </Form> */}
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default UserInfoCard
