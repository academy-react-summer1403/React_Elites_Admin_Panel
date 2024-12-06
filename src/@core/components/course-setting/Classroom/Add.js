// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap'
import { useForm, Controller } from 'react-hook-form'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { postCreateClass } from '../../../services/api/CourseSetting/ClassRoom/post-create-classroom'
import { getAllBildings } from '../../../services/api/CourseSetting/Building/get-all-buildings'

const Add = () => {
  const [buildingId, setbuildingId] = useState(1)
  const [allBuilding, setallBuilding] = useState([])

  const getBuliding = async () => {
    let res = await getAllBildings()
    setallBuilding(res)
  }

  useEffect(() => {
    getBuliding()
  }, [])

  const defaultValues = {
    id: 32,
    classRoomName: "",
    capacity: 1,
    buildingId: 1, 
  }

  const onSubmit = async (value) => {
    value.buildingId = buildingId
    let res = await postCreateClass(value)
    if(res.success == true){
      toast.success("کلاس اضافه شد")
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
                نام کلاس
              </Label>
              <Controller
              id='classRoomName'
              name='classRoomName'
              control={control}
              render={({ field }) => <Input className='DannaM' {...field}/>}
            />
            </Col>
            <Col md='17' sm='12' className='mb-1'>
              <Label className='form-label DannaM'>
                ظرفیت
              </Label>
              <Controller
              id='capacity'
              name='capacity'
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
                  {allBuilding.map((item, index) => {
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
