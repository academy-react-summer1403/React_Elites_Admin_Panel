// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap'
import { useForm, Controller } from 'react-hook-form'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import { CourseAssistance } from '../../services/api/CourseManagement/post-course-assistance'
import { useGlobalState } from '../../state/state'
import { postSocialGroup } from '../../services/api/CourseManagement/post-social-group'

const AddSocialGroup = () => {

    const {id} = useParams()
    const [changed, setChanged] = useGlobalState('sthChangedCourseDetail')


  const defaultValues = {
    groupName: "",
    groupLink: "",
    courseId: id
  }

  const onSubmit = async (value) => {
    let res = await postSocialGroup(value)
    if(res.success == true){
      toast.success("گروه به دوره اضافه شد")
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
                    نام گروه
                </Label>
                <Controller
                id='groupName'
                name='groupName'
                control={control}
                render={({ field }) => <Input className='DannaM' {...field}/>}
                />
                </Col>
                <Col md='17' sm='12' className='mb-1 mt-1'>
                <Label className='form-label DannaM'>
                    لینک گروه
                </Label>
                <Controller
                id='groupLink'
                name='groupLink'
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
export default AddSocialGroup