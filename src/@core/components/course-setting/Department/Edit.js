// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap'
import { useForm, Controller } from 'react-hook-form'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { putEditStatus } from '../../../services/api/CourseSetting/Status/put-status'
import { getDepartmentWithId } from '../../../services/api/CourseSetting/Department/get-department-with-id'
import { getAllBildings } from '../../../services/api/CourseSetting/Building/get-all-buildings'
import { putDepartment } from '../../../services/api/CourseSetting/Department/put-department'

const Edit = ({idItem}) => {
  const [detail, setdetail] = useState({})
  const [buildingId, setbuildingId] = useState(1)
  const [allBuilding, setallBuilding] = useState([])

  const getDetail = async () => {
    let detailObj = await getDepartmentWithId(idItem)
    setdetail(detailObj)
    console.log(detailObj)
  }

  const getBuliding = async () => {
    let res = await getAllBildings()
    setallBuilding(res)
  }

  useEffect(() => {
    getDetail()
    getBuliding()
  }, [])
  


  const defaultValues = {
    id: idItem,
    depName: detail.depName,
    buildingId: 1,
  }

  const onSubmit = async (value) => {
    value.buildingId = buildingId
    let res = await putDepartment(value)
    console.log(value)
    if(res.success == true){
      toast.success("دپارتمان ویرایش شد")
    }
    else{
      toast.error('دپارتمان غیر فعال است')
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
