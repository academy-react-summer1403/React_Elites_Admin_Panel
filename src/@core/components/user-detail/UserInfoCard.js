// ** React Imports
import { useState, Fragment } from 'react'

// ** Reactstrap Imports
import { Card, CardBody, Button, Badge, Modal, ModalBody, ModalHeader } from 'reactstrap'

import { Check, Briefcase, X, User, MessageSquare } from 'react-feather'

import ColumnEditUserWrapper from './ColumnReply'


const UserInfoCard = ({userDetail, userRole}) => {
  // ** State


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
  const [show, setShow] = useState(false)

  return (
    <Fragment>
      <Card>
        <CardBody>
          <div className='user-avatar-section'>
            <div className='d-flex align-items-center flex-column'>
              <img
                alt='عکس دوره'
                src={userDetail?.currentPictureAddress}
                className='img-fluid rounded mt-3 mb-2 userImageDetail' 

              />
              <div className='d-flex flex-column align-items-center text-center'>
                <div className='user-info'>
                  <h4 className='DannaM'>{userDetail?.fName + " " + userDetail?.lName}</h4>
                    {userDetail?.active === true ? <Badge className='text-capitalize DannaM' color="light-success">
                      {identifier(userDetail.active, "غیرفعال", "فعال")}
                    </Badge> : <Badge className='text-capitalize DannaM' color="light-danger">
                      {identifier(userDetail.active, "غیرفعال", "فعال")}
                    </Badge>}
                </div>
                <div className='userRoles'>
                  {userRole.map((item, index) => {
                    return(
                    <Badge key={index} className='text-capitalize DannaM' color="light-primary">
                      {item.roleName}
                    </Badge>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          <h4 className='fw-bolder border-bottom pb-50 mb-1 DannaM'>جزئیات</h4>
          <div className='info-container'>
              <ul className='list-unstyled'>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 DannaM'> تاریخ ساخت حساب : </span>
                  <span className='DannaM'>{dateConvertor(userDetail?.insertDate)}</span>
                </li>
              </ul>
              <ul className='list-unstyled'>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 DannaM'> متولد : </span>
                  <span className='DannaM'>{dateConvertor(userDetail?.birthDay)}</span>
                </li>
              </ul>
              <ul className='list-unstyled'>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 DannaM'> جیمیل : </span>
                  <span className='DannaM'>{userDetail?.gmail}</span>
                </li>
              </ul>
              <ul className='list-unstyled'>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 DannaM'> شماره همراه : </span>
                  <span className='DannaM'>{userDetail?.phoneNumber}</span>
                </li>
              </ul>
              <ul className='list-unstyled'>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 DannaM'> ایمیل ریکاوری : </span>
                  <span className='DannaM'>{userDetail?.recoveryEmail}</span>
                </li>
              </ul>
              <ul className='list-unstyled'>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 DannaM'> تایید دو مرحله ای : </span>
                  <span className='DannaM'>{identifier(userDetail.twoStepAuth, "غیرفعال", "فعال")}</span>
                </li>
              </ul>
              <ul className='list-unstyled'>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 DannaM'> درباره کاربر : </span>
                  <span className='DannaM'>{userDetail?.userAbout}</span>
                </li>
              </ul>
              <ul className='list-unstyled'>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 DannaM'> اعلان ها : </span>
                  <span className='DannaM'>{identifier(userDetail?.receiveMessageEvent, "غیرفعال", "فعال")}</span>
                </li>
              </ul>
              <ul className='list-unstyled'>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 DannaM'> جنسیت : </span>
                  <span className='DannaM'>{identifier(userDetail?.gender, "مونث", "مذکر")}</span>
                </li>
              </ul>
              <ul className='list-unstyled'>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 DannaM'> کد ملی : </span>
                  <span className='DannaM'>{userDetail?.nationalCode}</span>
                </li>
              </ul>
              <ul className='list-unstyled'>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 DannaM'></span>
                  <span className='DannaM'>{userDetail?.gmail}</span>
                </li>
              </ul>
              <ul className='list-unstyled'>
                <li className='mb-75'>
                  <span className='fw-bolder me-25 DannaM'></span>
                  <span className='DannaM'>{userDetail?.gmail}</span>
                </li>
              </ul>
          </div>
          <div className='d-flex justify-content-center pt-2'>
            <Button className='DannaM' color='primary' outline onClick={() => setShow(!show)}>
              ویرایش
            </Button>
            <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-lg'>
            <ModalHeader className='bg-transparent' toggle={() => setShow2(!show)}></ModalHeader>
              <ModalBody>
                <ColumnEditUserWrapper uservalues={userDetail} userId={userDetail?.id} />
              </ModalBody>
          </Modal>
          </div>
        </CardBody>
      </Card>
    </Fragment>
  )
}

export default UserInfoCard
