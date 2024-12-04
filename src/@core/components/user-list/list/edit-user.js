import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap'
import { useForm, Controller } from 'react-hook-form'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { putUserDetail } from '../../../services/api/UserManagement/put-user-detail'

const EditUser = ({userId, uservalues}) => {

const defaultValues =  {
    id: userId,
    fName: uservalues.fName,
    lName: uservalues.lName,
    userName: uservalues.userName,
    gmail: uservalues.gmail,
    phoneNumber: uservalues.phoneNumber,
    active: uservalues.active,
    isDelete: uservalues.isDelete,
    isTecher: uservalues.isTecher,
    isStudent: uservalues.isStudent,
    recoveryEmail: uservalues.recoveryEmail,
    twoStepAuth: uservalues.twoStepAuth,
    userAbout: uservalues.userAbout,
    currentPictureAddress: uservalues.currentPictureAddress,
    linkdinProfile: uservalues.linkdinProfile,
    telegramLink: uservalues.telegramLink,
    receiveMessageEvent: uservalues.receiveMessageEvent,
    homeAdderess: uservalues.homeAdderess,
    nationalCode: uservalues.nationalCode,
    gender: uservalues.gender,
    latitude: uservalues.latitude,
    longitude: uservalues.longitude,
    insertDate: uservalues.insertDate,
    birthDay: uservalues.birthDay,
    userProfileId: '12'
  }

const onSubmit = async (value) => {
    let res = await putUserDetail(value)
    if(res.success == true){
        toast.success("اطلاعات کاربر ویرایش شد")
    }
    console.log(res)
    console.log(value)
}

const {
  control,
  handleSubmit,
  formState: { errors }
} = useForm({
  defaultValues,
})

return  (
  <Card>
    <CardHeader>
    </CardHeader>

    <CardBody>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md='6' sm='12' className='mb-1'>
            <Label className='form-label DannaM'>
              نام
            </Label>
            <Controller
            id='fName'
            name='fName'
            control={control}
            render={({ field }) => <Input className='DannaM' {...field}/>}
          />
          </Col>
          <Col md='6' sm='12' className='mb-1'>
            <Label className='form-label DannaM'>
              نام خانوادگی
            </Label>
            <Controller
            id='lName'
            name='lName'
            control={control}
            render={({ field }) => <Input className='DannaM' {...field}/>}
          />
          </Col>
          <Col md='6' sm='12' className='mb-1'>
            <Label className='form-label DannaM'>
              نام کاربری
            </Label>
            <Controller
            id='userName'
            name='userName'
            control={control}
            render={({ field }) => <Input className='DannaM' {...field}/>}
          />
          </Col>
          <Col md='6' sm='12' className='mb-1'>
            <Label className='form-label DannaM'>
              جیمیل
            </Label>
            <Controller
            id='gmail'
            name='gmail'
            control={control}
            render={({ field }) => <Input className='DannaM' {...field}/>}
          />
          </Col>
          <Col md='6' sm='12' className='mb-1'>
            <Label className='form-label DannaM'>
              شماره همراه
            </Label>
            <Controller
            id='phoneNumber'
            name='phoneNumber'
            control={control}
            render={({ field }) => <Input className='DannaM' {...field}/>}
          />
          </Col>
          <Col md='6' sm='12' className='mb-1'>
            <Label className='form-label DannaM'>
              ایمیل ریکاوری
            </Label>
            <Controller
            id='recoveryEmail'
            name='recoveryEmail'
            control={control}
            render={({ field }) => <Input className='DannaM' {...field}/>}
          />
          </Col>
          <Col md='6' sm='12' className='mb-1'>
            <Label className='form-label DannaM'>
              درباره کاربر
            </Label>
            <Controller
            id='userAbout'
            name='userAbout'
            control={control}
            render={({ field }) => <Input className='DannaM' {...field}/>}
          />
          </Col>
          <Col md='6' sm='12' className='mb-1'>
            <Label className='form-label DannaM'>
              پروفایل
            </Label>
            <Controller
            id='currentPictureAddress'
            name='currentPictureAddress'
            control={control}
            render={({ field }) => <Input className='DannaM' {...field}/>}
          />
          </Col>
          <Col md='6' sm='12' className='mb-1'>
            <Label className='form-label DannaM'>
              لینکدین
            </Label>
            <Controller
            id='linkdinProfile'
            name='linkdinProfile'
            control={control}
            render={({ field }) => <Input className='DannaM' {...field}/>}
          />
          </Col>
          <Col md='6' sm='12' className='mb-1'>
            <Label className='form-label DannaM'>
              تلگرام
            </Label>
            <Controller
            id='telegramLink'
            name='telegramLink'
            control={control}
            render={({ field }) => <Input className='DannaM' {...field}/>}
          />
          </Col>
          <Col md='6' sm='12' className='mb-1'>
            <Label className='form-label DannaM'>
              آدرس خانه
            </Label>
            <Controller
            id='homeAdderess'
            name='homeAdderess'
            control={control}
            render={({ field }) => <Input className='DannaM' {...field}/>}
          />
          </Col>
          <Col md='6' sm='12' className='mb-1'>
            <Label className='form-label DannaM'>
              کد ملی
            </Label>
            <Controller
            id='nationalCode'
            name='nationalCode'
            control={control}
            render={({ field }) => <Input className='DannaM' {...field}/>}
          />
          </Col>
          <Col md='6' sm='12' className='mb-1'>
            <Label className='form-label DannaM'>
              تاریخ
            </Label>
            <Controller
            id='insertDate'
            name='insertDate'
            control={control}
            render={({ field }) => <Input className='DannaM' {...field}/>}
          />
          </Col>
          <Col md='6' sm='12' className='mb-1'>
            <Label className='form-label DannaM'>
              متولد
            </Label>
            <Controller
            id='birthDay'
            name='birthDay'
            control={control}
            render={({ field }) => <Input className='DannaM' {...field}/>}
          />
          </Col>
            <div className='d-flex'>
              <Button className='me-1' color='primary' type='submit'>
                ثبت
              </Button>
            </div>
        </Row>
      </Form>
    </CardBody>
  </Card>
)}

export {EditUser}