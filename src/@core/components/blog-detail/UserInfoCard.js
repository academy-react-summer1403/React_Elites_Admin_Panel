// ** React Imports
import { useState, Fragment } from 'react'

// ** Reactstrap Imports
import { Card, CardBody, Button, Badge, Modal, ModalBody, ModalHeader } from 'reactstrap'

import { Check, Briefcase, X, User, MessageSquare, Eye } from 'react-feather'
import BlogEditModall from '../blog-list/edit-blog-modal'


const UserInfoCard = ({blogDetail}) => {
  // ** State
  const [show, setShow] = useState(false)

  const identifier = (item, ifFalse, ifTrue) => {
    if(item === true){
      return ifTrue;
    }
    else if(item === false){
      return ifFalse;
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
                src={blogDetail?.currentImageAddressTumb}
                className='img-fluid rounded mt-3 mb-2 imageDetail'
              />
              <div className='d-flex flex-column align-items-center text-center'>
                <div className='user-info'>
                  <h4 className='DannaM'>{blogDetail?.title}</h4>
                    {blogDetail?.active === true ? <Badge className='text-capitalize DannaM' color="light-success">
                      {identifier(blogDetail?.active)}
                    </Badge> : <Badge className='text-capitalize DannaM' color="light-danger">
                      {identifier(blogDetail?.active)}
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
                <h4 className='mb-0 DannaM'>{blogDetail?.commentsCount}</h4>
                <small className='DannaM'> کامنت ها </small>
              </div>
            </div>
            <div className='d-flex align-items-start'>
              <Badge color='light-primary' className='rounded p-75'>
                <Eye className='font-medium-2' />
              </Badge>
              <div className='ms-75'>
                <h4 className='mb-0 DannaM'>{(blogDetail?.currentView)}</h4>
                <small className='DannaM'> بازدید ها </small>
              </div>
            </div>
          </div>
          <h4 className='fw-bolder border-bottom pb-50 mb-1 DannaM'>جزئیات</h4>
          <div className='info-container'>
              <ul className='list-unstyled'>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 DannaM'>زمان شروع :</span>
                  <span className='DannaM'>{dateConvertor(blogDetail?.insertDate)}</span>
                </li>
              </ul>
              <ul className='list-unstyled'>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 DannaM'> اخرین تغییرات : </span>
                  <span className='DannaM'>{dateConvertor(blogDetail?.updateDate)}</span>
                </li>
              </ul>
              <ul className='list-unstyled'>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 DannaM'> عنوان گوگل : </span>
                  <span className='DannaM'>{blogDetail?.googleTitle}</span>
                </li>
              </ul>
              <ul className='list-unstyled'>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 DannaM'> توضیحات گوگل : </span>
                  <span className='DannaM'>{blogDetail?.googleDescribe}</span>
                </li>
              </ul>
              <ul className='list-unstyled'>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 DannaM'> توضیحات جزیی : </span>
                  <span className='DannaM'>{blogDetail?.miniDescribe}</span>
                </li>
              </ul>
              <ul className='list-unstyled'>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 DannaM'> توضیحات : </span>
                  <span className='DannaM'>{blogDetail?.describe}</span>
                </li>
              </ul>
              <ul className='list-unstyled'>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 DannaM'> امتیاز : </span>
                  <span className='DannaM'>{blogDetail?.currentRate}</span>
                </li>
              </ul>
              <ul className='list-unstyled'>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 DannaM'> لایک ها : </span>
                  <span className='DannaM'>{blogDetail?.currentLikeCount}</span>
                </li>
              </ul>
              <ul className='list-unstyled'>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 DannaM'> نویسنده : </span>
                  <span className='DannaM'>{blogDetail?.addUserFullName}</span>
                </li>
              </ul>
              <ul className='list-unstyled'>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 DannaM'> دسته بندی : </span>
                  <span className='DannaM'>{blogDetail?.newsCatregoryName}</span>
                </li>
              </ul>
              <ul className='list-unstyled'>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 DannaM'> دیسلایک ها : </span>
                  <span className='DannaM'>{blogDetail?.currentDissLikeCount}</span>
                </li>
              </ul>
          </div>
          <div className='d-flex justify-content-center pt-2'>
            <Button className='light-success DannaM' color='success' outline>
              فعال کردن
            </Button>
            <BlogEditModall blogDetail={blogDetail} />
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
        </ModalBody>
      </Modal>
    </Fragment>
  )
}

export default UserInfoCard
