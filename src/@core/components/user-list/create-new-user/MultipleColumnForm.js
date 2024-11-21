// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap'
import { useForm, Controller } from 'react-hook-form'
import { getCreateCourse } from '../../../services/api/CourseManagement/get-create-course'
import { useEffect, useState } from 'react'
import { number } from 'yup'
import { putCourseEdit } from '../../../services/api/CourseManagement/put-course-edit'
import SwitchIcons from './SwitchIcons'

const MultipleColumnForm = () => {

  const initialValues = {
    lastName: '',
    firstName: '',
    gmail: '',
    password: '',
    phoneNumber: '',
    isStudent: Boolean,
    isTeacher: Boolean
  }

  const onSubmit = async (value) => {

  }


  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    initialValues,
  })
  

  return (
    <Card>
      <CardHeader>
      </CardHeader>

      <CardBody>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label DannaM'>
                نام کاربر
              </Label>
              <Controller
              id='EditfirstName'
              name='firstName'
              control={control}
              render={({ field }) => <Input className='DannaM' {...field}/>}
            />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label DannaM'>
                نام خانوادگی کاربر
              </Label>
              <Controller
              id='EditlastName'
              name='lastName'
              control={control}
              render={({ field }) => <Input className='DannaM' {...field}/>}
            />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label DannaM'>
                جیمیل
              </Label>
              <Controller
              id='Editgmail'
              name='gmail'
              control={control}
              render={({ field }) => <Input className='DannaM' {...field}/>}
            />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label DannaM'>
                رمز عبور
              </Label>
              <Controller
              id='Editpassword'
              name='password'
              control={control}
              render={({ field }) => <Input className='DannaM' {...field}/>}
            />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label DannaM'>
                شماره همراه
              </Label>
              <Controller
              id='EditphoneNumber'
              name='phoneNumber'
              control={control}
              render={({ field }) => <Input className='DannaM' {...field}/>}
            />
            </Col>
            <Col>
            <SwitchIcons />
            </Col>
            <Col sm='12'>
              <div className='d-flex'>
                <Button className='me-1' color='primary' type='submit'>
                  Submit
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  )
}
export default MultipleColumnForm
