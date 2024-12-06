// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap'
import { useForm, Controller } from 'react-hook-form'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { getStatusWithId } from '../../../services/api/CourseSetting/Status/get-status-with-id'
import { putEditStatus } from '../../../services/api/CourseSetting/Status/put-status'
import { putClassRoom } from '../../../services/api/CourseSetting/ClassRoom/put-edit-classroom'
import { getAllBildings } from '../../../services/api/CourseSetting/Building/get-all-buildings'

const Edit = ({dataaid}) => {
  const [detail, setdetail] = useState({})
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
    id: dataaid,
    classRoomName: '',
    capacity: 10,
    buildingId: 2,
  }

  const onSubmit = async (value) => {
    value.buildingId = buildingId
    let res = await putClassRoom(value)
    console.log(value)
    if(res.success == true){
      toast.success("کلاس ویرایش شد")
    }
    else{
      toast.error('کلاس غیر فعال است')
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
            <Col md='17' sm='12' className='mb-1 mt-1'>
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
            <Col md='17' sm='12' className='mb-1 mt-1'>
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
export default Edit
