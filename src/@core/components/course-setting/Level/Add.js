// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap'
import { useForm, Controller } from 'react-hook-form'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { postCreateStatus } from '../../../services/api/CourseSetting/Status/post-status'
import { postCreateLevel } from '../../../services/api/CourseSetting/Level/post-create-level'

const Add = () => {

  const defaultValues = {
    id: "32",
    levelName: "",
  }

  const onSubmit = async (value) => {
    let res = await postCreateLevel(value)
    console.log(value)
    if(res.success == true){
      toast.success("سطح اضافه شد")
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
                نام سطح
              </Label>
              <Controller
              id='levelName'
              name='levelName'
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
