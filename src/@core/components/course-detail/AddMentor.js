// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap'
import { useForm, Controller } from 'react-hook-form'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import { CourseAssistance } from '../../services/api/CourseManagement/post-course-assistance'
import { useGlobalState } from '../../state/state'

const AddMentor = () => {

    const {id} = useParams()
    const [changed, setChanged] = useGlobalState('sthChangedCourseDetail')


  const defaultValues = {
    courseId: id, 
    userId: '',
  }

  const onSubmit = async (value) => {
    let res = await CourseAssistance(value)
    if(res.success == true){
      toast.success("منتور به دوره اضافه شد")
      setChanged(!changed)
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
                    ایدی کاربر را به صورت دستی وارد نمایید
                </Label>
                <Controller
                id='userId'
                name='userId'
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
export default AddMentor