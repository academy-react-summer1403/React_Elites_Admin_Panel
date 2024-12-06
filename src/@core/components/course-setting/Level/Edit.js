// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap'
import { useForm, Controller } from 'react-hook-form'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { getStatusWithId } from '../../../services/api/CourseSetting/Status/get-status-with-id'
import { putEditStatus } from '../../../services/api/CourseSetting/Status/put-status'
import { putEditLevel } from '../../../services/api/CourseSetting/Level/put-level'

const Edit = ({dataaid}) => {

  const defaultValues = {
    id: dataaid,
    levelName: '',
  }

  const onSubmit = async (value) => {
    let res = await putEditLevel(value)
    console.log(value)
    if(res.success == true){
      toast.success("سطح ویرایش شد")
    }
    else{
      toast.error('سطح غیر فعال است')
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
                نام سطج
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
export default Edit
