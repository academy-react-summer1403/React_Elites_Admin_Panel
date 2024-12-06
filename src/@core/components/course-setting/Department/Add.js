// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap'
import { useForm, Controller } from 'react-hook-form'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { postCreateStatus } from '../../../services/api/CourseSetting/Status/post-status'
import { postCreateDepartment } from '../../../services/api/CourseSetting/Department/post-department'
import { getAllBildings } from '../../../services/api/CourseSetting/Building/get-all-buildings'

const Add = () => {

  const [buildingId, setbuildingId] = useState(1)
  const [allBuildings, setallBuildings] = useState([])

  const defaultValues = {
    id: 50,
    depName: "",
    buildingId: 1,
  }

  const getBuliding = async () => {
    let res = await getAllBildings()
    setallBuildings(res)
  }

  useEffect(() => {
    getBuliding()
  }, [])

  const onSubmit = async (value) => {
    value.buildingId = buildingId
    let res = await postCreateDepartment(value)
    if(res.success == true){
      toast.success("دپارتمان اضافه شد")
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
                نام دپارتمان
              </Label>
              <Controller
              id='depName'
              name='depName'
              control={control}
              render={({ field }) => <Input className='DannaM' {...field}/>}
            />
            </Col>
            <Col md='17' sm='12' className='mb-1'>
              <Label className='form-label DannaM'>
                ساختمان
              </Label>
              <Controller
              id='buildingId'
              name='buildingId'
              control={control}
              render={({ field }) => <Input type='select' className='DannaM' {...field}>
                {allBuildings.map((item, index) => {
                  return (
                      <option key={index} onClick={() => setbuildingId(item.id)}>{item.buildingName}</option>
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
export default Add
