// ** Reactstrap Imports
import { Controller, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap'
import { postCourseGroup } from '../../services/api/CourseManagement/post-course-group'
import { useParams } from 'react-router-dom'
import { postCourseCommentReply } from '../../services/api/CourseManagement/post-add-reply-cousrse-comment'

const ColumnReply = ({commentId}) => {

  const {id} = useParams()

  const defaultValues = {
    CommentId: commentId,
    CourseId: id,
    Title: '',
    Describe: '',
  }

  const onSubmit = async (value) => {
    let res = await postCourseCommentReply(value)
    console.log(value)
    if(res.success == true){
      toast.success("پاسخ شما اضافه شد")
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
                عنوان پاسخ
              </Label>
              <Controller
              id='Title'
              name='Title'
              control={control}
              render={({ field }) => <Input className='DannaM' {...field}/>}
            />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label DannaM'>
                توضیحات پاسخ
              </Label>
              <Controller
              id='Describe'
              name='Describe'
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
export default ColumnReply
