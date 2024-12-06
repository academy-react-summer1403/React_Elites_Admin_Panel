// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap'
import { useForm, Controller } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { getTermWithId } from '../../../services/api/CourseSetting/Term/get-term-with-id'
import { putEditTerm } from '../../../services/api/CourseSetting/Term/update-term'
import toast from 'react-hot-toast'
import { getAllDepartment } from '../../../services/api/CourseSetting/get-all-department'
import { postTerm } from '../../../services/api/CourseSetting/Term/post-term'

const AddTerm = () => {

  const [allDepartment, setallDepartment] = useState([])
  const [departmentId, setdepartmentId] = useState(1)

  const getAllDepartmentCall = async () => {
    let allDepartment = await getAllDepartment()
    setallDepartment(allDepartment)
  }

  useEffect(() => {
    getAllDepartmentCall()
  }, [])
  

  const initialValues = {
    id: '123',
    termName: '',
    departmentId: '',
    startDate: '',
    endDate: ''
  }

  const onSubmit = async (value) => {
    value.departmentId = departmentId;
    let res = await postTerm(value)
    if(res.success == true){
      toast.success("ترم اضافه شد")
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
                از
              </Label>
              <Controller
              id='startDate'
              name='startDate'
              control={control}
              render={({ field }) => <Input className='DannaM' {...field}/>}
            />
            </Col>
            <Col md='17' sm='12' className='mb-1'>
              <Label className='form-label DannaM'>
                تا
              </Label>
              <Controller
              id='endDate'
              name='endDate'
              control={control}
              render={({ field }) => <Input className='DannaM' {...field}/>}
            />
            </Col>
            <Col md='17' sm='12' className='mb-1 mt-1'>
              <Label className='form-label DannaM'>
                نام ترم
              </Label>
              <Controller
              id='termName'
              name='termName'
              control={control}
              render={({ field }) => <Input className='DannaM' {...field}/>}
            />
            </Col>
            <Col md='17' sm='12' className='mb-1 mt-1'>
              <Label className='form-label DannaM'>
                دپارتمان
              </Label>
              <Controller
              id='departmentId'
              name='departmentId'
              control={control}
              render={({ field }) => <Input type='select' className='DannaM' {...field}>
                {allDepartment.map((item, index) => {
                  return (
                      <option key={index} onClick={() => setdepartmentId(item.id)}>{item.depName}</option>
                  )
              })}
              </Input>}
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
export default AddTerm
