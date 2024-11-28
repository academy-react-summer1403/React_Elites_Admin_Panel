// ** Reactstrap Imports
import { Controller, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap'
import { postCourseGroup } from '../../services/api/CourseManagement/post-course-group'

const MultipleColumnForm = ({courseDetail}) => {

  const defaultValues = {
    GroupName: 'نام گروه',
    CourseId: courseDetail.courseId,
    GroupCapacity: 12,
  }

  const onSubmit = async (value) => {
    let res = await postCourseGroup(value)
    if(res.success == true){
      toast.success("دوره به گروه اضافه شد")
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
    <Card>
      <CardHeader>
      </CardHeader>

      <CardBody>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col sm='12'>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label DannaM'>
                نام گروه
              </Label>
              <Controller
              id='GroupName'
              name='GroupName'
              control={control}
              render={({ field }) => <Input className='DannaM' {...field}/>}
            />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label DannaM'>
                ظرفیت گروه
              </Label>
              <Controller
              id='GroupCapacity'
              name='GroupCapacity'
              control={control}
              render={({ field }) => <Input className='DannaM' {...field}/>}
            />
            </Col>
              <div className='d-flex'>
                <Button className='me-1' color='primary' type='submit'>
                  ثبت
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  )
}
export default MultipleColumnForm
