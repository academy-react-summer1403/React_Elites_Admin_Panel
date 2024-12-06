// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap'
import { useForm, Controller } from 'react-hook-form'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { getStatusWithId } from '../../../services/api/CourseSetting/Status/get-status-with-id'
import { putEditStatus } from '../../../services/api/CourseSetting/Status/put-status'

const Edit = ({dataaid}) => {
  const [detail, setdetail] = useState({})

  const getDetail = async () => {
    let detailObj = await getStatusWithId(dataaid)
    setdetail(detailObj)
  }

  useEffect(() => {
    getDetail()
  }, [])
  


  const defaultValues = {
    statusName: detail.statusName,
    describe: detail.describe,
    statusNumber: detail.statusNumber,
    id: detail.id
  }

  const onSubmit = async (value) => {
    let res = await putEditStatus(value)
    console.log(value)
    if(res.success == true){
      toast.success("وضعیت ویرایش شد")
    }
    else{
      toast.error('وضعیت غیر فعال است')
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
                نام وضعیت
              </Label>
              <Controller
              id='statusName'
              name='statusName'
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
