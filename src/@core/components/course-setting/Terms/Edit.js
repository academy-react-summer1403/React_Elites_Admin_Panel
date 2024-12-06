// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap'
import { useForm, Controller } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { getTermWithId } from '../../../services/api/CourseSetting/Term/get-term-with-id'
import { putEditTerm } from '../../../services/api/CourseSetting/Term/update-term'
import toast from 'react-hot-toast'

const EditTerm = ({termId}) => {
  const [detail, setdetail] = useState({})

  const getTermWithIdCall = async () => {
    let detail = await getTermWithId(termId)
    setdetail(detail)
    console.log(detail)
  }

  useEffect(() => {
    getTermWithIdCall()
  }, [])
  


  const defaultValues = {
    startCloseDate: '',
    endCloseDate: '',
    termId: termId,
    closeReason: '',
    id: '21312312313131'
  }

  const onSubmit = async (value) => {
    let res = await putEditTerm(value)
    if(res.success == true){
      toast.success("ترم ویرایش شد")
    }
    else{
      toast.error('ترم غیر فعال است')
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
        <Form onSubmit={handleSubmit(onSubmit)} className='DannaM'> تاریخ بسته شدن
            <Col md='17' sm='12' className='mb-1 mt-1'>
              <Label className='form-label DannaM'>
                از
              </Label>
              <Controller
              id='startCloseDate'
              name='startCloseDate'
              control={control}
              render={({ field }) => <Input className='DannaM' {...field}/>}
            />
            </Col>
            <Col md='17' sm='12' className='mb-1'>
              <Label className='form-label DannaM'>
                تا
              </Label>
              <Controller
              id='endCloseDate'
              name='endCloseDate'
              control={control}
              render={({ field }) => <Input className='DannaM' {...field}/>}
            />
            </Col>
            <Col md='17' sm='12' className='mb-1'>
              <Label className='form-label DannaM'>
                دلیل بسته شدن
              </Label>
              <Controller
              id='closeReason'
              name='closeReason'
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
export default EditTerm
