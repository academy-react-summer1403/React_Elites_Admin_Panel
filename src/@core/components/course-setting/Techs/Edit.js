// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap'
import { useForm, Controller } from 'react-hook-form'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { getTechWithId } from '../../../services/api/CourseSetting/Techs/get-tech-with-id'
import { putEditTech } from '../../../services/api/CourseSetting/Techs/put-edit-tech'

const EditTech = ({techId}) => {
  const [detail, setdetail] = useState({})

  const getTechithIdCall = async () => {
    let detail = await getTechWithId(techId)
    setdetail(detail)
  }

  useEffect(() => {
    getTechithIdCall()
  }, [])
  


  const defaultValues = {
    techName: detail.techName,
    parentId: detail.parentId,
    describe: detail.describe,
    iconAddress: detail.iconAddress,
    id: detail?.id
  }

  const onSubmit = async (value) => {
    let res = await putEditTech(value)
    if(res.success == true){
      toast.success("تکنولوژی ویرایش شد")
    }
    else{
      toast.error('تکنولوژی غیر فعال است')
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
            <Col md='17' sm='12' className='mb-1'>
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
export default EditTech
