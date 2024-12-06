// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap'
import { useForm, Controller } from 'react-hook-form'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { getStatusWithId } from '../../../services/api/CourseSetting/Status/get-status-with-id'
import { putEditStatus } from '../../../services/api/CourseSetting/Status/put-status'
import { putClassRoom } from '../../../services/api/CourseSetting/ClassRoom/put-edit-classroom'
import { getAllBildings } from '../../../services/api/CourseSetting/Building/get-all-buildings'
import { putEditBuilding } from '../../../services/api/CourseSetting/Building/put-building'

const Edit = ({dataaid}) => {
  


  const defaultValues = {
    id: dataaid,
    buildingName: "",
    workDate: "2024-12-16",
    floor: 10,
    latitude: "90",
    longitude: "100",
    active: true
  }

  const onSubmit = async (value) => {
    let res = await putEditBuilding(value)
    console.log(value)
    if(res.success == true){
      toast.success("ساختمان ویرایش شد")
    }
    else{
      toast.error('ساختمان غیر فعال است')
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
export default Edit
