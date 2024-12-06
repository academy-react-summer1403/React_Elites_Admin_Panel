// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap'
import { useForm, Controller } from 'react-hook-form'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useGlobalState } from '../../state/state'
import { postCreateWork } from '../../services/api/CourseManagement/post-create-work'

const AddWork = ({id}) => {
    const [changed, setChanged] = useGlobalState('sthChangedCourseDetail')


  const defaultValues = {
    worktitle: "",
    workDescribe: "",
    assistanceId: id,
    workDate: ""
  }

  const onSubmit = async (value) => {
    let res = await postCreateWork(value)
    if(res.success == true){
      toast.success("کار اضافه شد")
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
                    عنوان کار
                </Label>
                <Controller
                id='worktitle'
                name='worktitle'
                control={control}
                render={({ field }) => <Input className='DannaM' {...field}/>}
                />
                </Col>
                <Col md='17' sm='12' className='mb-1 mt-1'>
                <Label className='form-label DannaM'>
                    توضیحات کار
                </Label>
                <Controller
                id='workDescribe'
                name='workDescribe'
                control={control}
                render={({ field }) => <Input className='DannaM' {...field}/>}
                />
                </Col>
                <Col md='17' sm='12' className='mb-1 mt-1'>
                <Label className='form-label DannaM'>
                    زمان کار
                </Label>
                <Controller
                id='workDate'
                name='workDate'
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
export default AddWork