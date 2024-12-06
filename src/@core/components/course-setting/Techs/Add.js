// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap'
import { useForm, Controller } from 'react-hook-form'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { postCreateTech } from '../../../services/api/CourseSetting/Techs/post-tech'

const AddTech = () => {

  const initialValues = {
    techName: '',
    parentId: null,
    describe: '',
    iconAddress: ''
  }

  const onSubmit = async (value) => {
    let res = await postCreateTech(value)
    if(res.success == true){
      toast.success("تکنولوژی اضافه شد")
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
    initialValues,
  })
  

  return (
    <>
        <Form onSubmit={handleSubmit(onSubmit)} className='DannaM'>
            <Col md='17' sm='12' className='mb-1 mt-1'>
              <Label className='form-label DannaM'>
                نام تکنولوژی
              </Label>
              <Controller
              id='techName'
              name='techName'
              control={control}
              render={({ field }) => <Input className='DannaM' {...field}/>}
            />
            </Col>
            <Col md='17' sm='12' className='mb-1'>
              <Label className='form-label DannaM'>
                توضیحات
              </Label>
              <Controller
              id='describe'
              name='describe'
              control={control}
              render={({ field }) => <Input className='DannaM' {...field}/>}
            />
            </Col>
            <Col md='17' sm='12' className='mb-1 mt-1'>
              <Label className='form-label DannaM'>
                ایکون تکنولوژی
              </Label>
              <Controller
              id='iconAddress'
              name='iconAddress'
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
export default AddTech
