// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap'
import { useForm, Controller } from 'react-hook-form'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { postCreateClass } from '../../../services/api/CourseSetting/ClassRoom/post-create-classroom'
import { getAllBildings } from '../../../services/api/CourseSetting/Building/get-all-buildings'
import { postBuilding } from '../../../services/api/CourseSetting/Building/post-building'

const Add = () => {

  const defaultValues = {
    id: 32,
    buildingName: "",
    workDate: "",
    floor: 0,
    latitude: "",
    longitude: "",
    active: true
  }

  const onSubmit = async (value) => {

    let res = await postBuilding(value)
    if(res.success == true){
      toast.success("ساختمان اضافه شد")
    }
    else{
      toast.error('لطفا مقادیر رار درست وارد کنید')
    }
  }


  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
  })
  

  return (
    <>
        <Form onSubmit={handleSubmit(onSubmit)} className='DannaM'>
            <Col md='17' sm='12' className='mb-1 mt-1'>
              <Label className='form-label DannaM'>
                نام ساختمان
              </Label>
              <Controller
              id='buildingName'
              name='buildingName'
              control={control}
              render={({ field }) => <Input className='DannaM' {...field}/>}
            />
            </Col>
            <Col md='17' sm='12' className='mb-1 mt-1'>
              <Label className='form-label DannaM'>
                ساعت کاری
              </Label>
              <Controller
              id='workDate'
              name='workDate'
              control={control}
              render={({ field }) => <Input className='DannaM' {...field}/>}
            />
            </Col>
            <Col md='17' sm='12' className='mb-1 mt-1'>
              <Label className='form-label DannaM'>
                طبقه
              </Label>
              <Controller
              id='floor'
              name='floor'
              control={control}
              render={({ field }) => <Input className='DannaM' {...field}/>}
            />
            </Col>
            <Col md='17' sm='12' className='mb-1 mt-1'>
              <Label className='form-label DannaM'>
                عرض جغرافیایی
              </Label>
              <Controller
              id='latitude'
              name='latitude'
              control={control}
              render={({ field }) => <Input className='DannaM' {...field}/>}
            />
            </Col>
            <Col md='17' sm='12' className='mb-1 mt-1'>
              <Label className='form-label DannaM'>
                طول جغرافیایی
              </Label>
              <Controller
              id='longitude'
              name='longitude'
              control={control}
              render={({ field }) => <Input className='DannaM' {...field}/>}
            />
            </Col>
            <Col sm='12'>
              <div className='d-flex'>
                <Button className='me-1' color='primary' type='submit'>
                  تایید
                </Button>
              </div>
            </Col>
        </Form>
    </>
  )
}
export default Add
