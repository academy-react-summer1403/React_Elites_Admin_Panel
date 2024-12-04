// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap'
import { useForm, Controller } from 'react-hook-form'
import { getCreateCourse } from '../../../services/api/CourseManagement/get-create-course'
import { useEffect, useState } from 'react'
import { number } from 'yup'
import { putCourseEdit } from '../../../services/api/CourseManagement/put-course-edit'
import { useGlobalState } from '../../../state/state'

const MultipleColumnForm = ({courseDetail}) => {

  const [courseTypeArr, setcourseTypeArr] = useState([])
  const [courseTerm, setcourseTerm] = useState([])
  const [courseClass, setcourseClass] = useState([])
  const [courseLvl, setcourseLvl] = useState([])
  const [courseTeacher, setcourseTeacher] = useState([])
  const [changed, setChanged] = useGlobalState('sthChangedCourseDetail')

  const [type, settype] = useState(1)
  const [term, setterm] = useState(1)
  const [classId, setClassID] = useState(1)
  const [level, setlevel] = useState(1)
  const [teacher, setteacher] = useState(1)

  const defaultValues = {
    Id: courseDetail?.courseId,
    Title: courseDetail?.title,
    Describe: courseDetail?.describe,
    MiniDescribe: 'ksdhfksdfsdjgh',
    Capacity: Number,
    SessionNumber: Number,
    TremId: Number,
    CourseLvlId: Number,
    TeacherId: Number,
    CourseTypeId: Number,
    ClassId: Number,
    Cost: Number,
    UniqeUrlString: '',
    StartTime: '',
    EndTime: '',
    GoogleTitle: '',
    TumbImageAddress: courseDetail?.imageAddress,
  }

  const onSubmit = async (value) => {
    value.TremId = term
    value.CourseLvlId = level
    value.CourseTypeId = type
    value.ClassId = classId
    value.TeacherId = teacher
    console.log(value)
    let res = await putCourseEdit(value)
    setChanged(!changed)
  }


  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
  })

  const getCreateCourseCall = async () => {
    let res = await getCreateCourse();
    setcourseTypeArr(res.courseTypeDtos)
    setcourseTerm(res.termDtos)
    setcourseClass(res.classRoomDtos)
    setcourseLvl(res.courseLevelDtos)
    setcourseTeacher(res.teachers)
  }

  useEffect(() => {
    getCreateCourseCall()
  }, [])
  

  return (
    <Card>
      <CardHeader>
      </CardHeader>

      <CardBody>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label DannaM'>
                عنوان دوره
              </Label>
              <Controller
              id='EditTitle'
              name='Title'
              control={control}
              render={({ field }) => <Input className='DannaM' {...field}/>}
            />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label DannaM'>
                توضیحات دوره
              </Label>
              <Controller
              id='EditDescribe'
              name='Describe'
              control={control}
              render={({ field }) => <Input className='DannaM' {...field}/>}
            />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label DannaM'>
                ظرفیت دوره
              </Label>
              <Controller
              id='EditCapacity'
              name='Capacity'
              control={control}
              render={({ field }) => <Input className='DannaM' {...field}/>}
            />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label DannaM'>
                تعداد جلسات
              </Label>
              <Controller
              id='EditSessionNumber'
              name='SessionNumber'
              control={control}
              render={({ field }) => <Input className='DannaM' {...field}/>}
            />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label DannaM'>
                نوع دوره
              </Label>
              <Controller
              id='EditCourseTypeId'
              name='CourseTypeId'
              control={control}
              render={({ field }) => <Input type='select' className='DannaM' {...field}>
                {courseTypeArr.map((item, index) => {
                  return (
                    <option key={index} onClick={() => settype(item.id)}>{item.typeName}</option>
                  )
                })}
              </Input>}
            />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label DannaM'>
                ترم دوره
              </Label>
              <Controller
              id='EditTremId'
              name='TremId'
              control={control}
              render={({ field }) => <Input type='select' className='DannaM' {...field}>
                {courseTerm.map((item, index) => {
                  return (
                    <option key={index} onClick={() => setterm(item.id)}>{item.termName}</option>
                  )
                })}
              </Input>}
            />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label DannaM'>
                شماره کلاس
              </Label>
              <Controller
              id='EditClassId'
              name='ClassId'
              control={control}
              render={({ field }) => <Input type='select' className='DannaM' {...field}>
                {courseClass.map((item, index) => {
                  return (
                    <option key={index} onClick={() => setClassID(item.id)}>{item.classRoomName}</option>
                  )
                })}
              </Input>}
            />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label DannaM'>
                سطح دوره
              </Label>
              <Controller
              id='EditCourseLvlId'
              name='CourseLvlId'
              control={control}
              render={({ field }) => <Input type='select' className='DannaM' {...field}>
                {courseLvl.map((item, index) => {
                  return (
                    <option key={index} onClick={() => setlevel(item.id)}>{item.levelName}</option>
                  )
                })}
              </Input>}
            />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label DannaM'>
                استاد دوره
              </Label>
              <Controller
              id='EditTeacherId'
              name='TeacherId'
              control={control}
              render={({ field }) => <Input type='select' className='DannaM' {...field}>
                {courseTeacher.map((item, index) => {
                  return (
                    <option key={index} onClick={() => setteacher(item.teacherId)}>{item.fullName}</option>
                  )
                })}
              </Input>}
            />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label DannaM'>
                قیمت
              </Label>
              <Controller
              id='EditCost'
              name='Cost'
              control={control}
              render={({ field }) => <Input className='DannaM' {...field}/>}
            />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label DannaM'>
                لینک
              </Label>
              <Controller
              id='EditUniqeUrlString'
              name='UniqeUrlString'
              control={control}
              render={({ field }) => <Input className='DannaM' {...field}/>}
            />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label DannaM'>
                زمان شروع
              </Label>
              <Controller
              id='EditStartTime'
              name='StartTime'
              control={control}
              render={({ field }) => <Input className='DannaM' {...field}/>}
            />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label DannaM'>
                زمان پایان
              </Label>
              <Controller
              id='EndTime'
              name='EndTime'
              control={control}
              render={({ field }) => <Input className='DannaM' {...field}/>}
            />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label DannaM'>
                عنوان گوگل
              </Label>
              <Controller
              id='GoogleTitle'
              name='GoogleTitle'
              control={control}
              render={({ field }) => <Input className='DannaM' {...field}/>}
            />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label DannaM'>
                لینک عکس
              </Label>
              <Controller
              id='TumbImageAddress'
              name='TumbImageAddress'
              control={control}
              render={({ field }) => <Input className='DannaM' {...field}/>}
            />
            </Col>
            <Col sm='12'>
              <div className='d-flex'>
                <Button className='me-1' color='primary' type='submit'>
                  Submit
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
