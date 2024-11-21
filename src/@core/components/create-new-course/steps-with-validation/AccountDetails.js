// ** React Imports
import { Fragment, useState } from 'react'

// ** Utils
import { isObjEmpty } from '@utils'

// ** Third Party Components
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Reactstrap Imports
import { Form, Label, Input, Row, Col, Button, FormFeedback } from 'reactstrap'
import { postCreateCourse } from '../../../services/api/CourseManagement/post-create-course'

const initialValues = {
  Title: '',
  Describe: '',
  Capacity: Number,
  TeacherId: Number,
  Cost: Number,
  StartTime: "",
  EndTime: "",
}

const AccountDetails = ({ stepper, courseTeachers, setstepOneObj }) => {

  const [teacherId, setTeacherId] = useState(1)

  const SignupSchema = yup.object().shape({
    Title: yup.string().required("عنوان دوره الزامیست"),
    Describe: yup.string().required("توضیحات دوره الزامیست"),
    Capacity: yup.number().required("ظرفیت دوره الزامیست"),
    TeacherId: yup.string().required("استاد دوره الزامیست"),
    Cost: yup.number().required("قیمت دوره الزامیست"),
    StartTime: yup.date().required("تاریخ شروع دوره الزامیست"),
    EndTime: yup.date().required("تاریخ دوره الزامیست"),
  })

  // ** Hooks

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    initialValues,
    resolver: yupResolver(SignupSchema)
  })

  const onSubmit = async (value) => {
    if (isObjEmpty(errors)) {
      stepper.next()
    }
    value.TeacherId = teacherId;
    setstepOneObj(value)
    // let res = await postCreateCourse(value)
    // console.log(res)
  }

  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0 DannaM'>اطلاعات دوره</h5>
        <small className='text-muted DannaM'> اطلاعات دوره را وارد کنید </small>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label DannaM' for='username'>
              عنوان
            </Label>
            <Controller
              id='Title'
              name='Title'
              control={control}
              render={({ field }) => <Input className='DannaM' placeholder='دوره پایتون' invalid={errors.Title && true} {...field} />}
            />
            {errors.Title && <FormFeedback className='DannaM'>{errors.Title.message}</FormFeedback>}
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label DannaM' for={`email`}>
              توضیحات
            </Label>
            <Controller
              control={control}
              id='Describe'
              name='Describe'
              render={({ field }) => (
                <Input className='DannaM' placeholder='دوره پایتون مخصوص برنامه نویسان ...' invalid={errors.Describe && true} {...field} />
              )}
            />
            {errors.Describe && <FormFeedback className='DannaM'>{errors.Describe.message}</FormFeedback>}
          </Col>
        </Row>
        <Row>
          <div className='form-password-toggle col-md-6 mb-1'>
            <Label className='form-label DannaM' for='password'>
              ظرفیت
            </Label>
            <Controller
              id='Capacity'
              name='Capacity'
              control={control}
              render={({ field }) => <Input className='DannaM' placeholder='20' invalid={errors.Capacity && true} {...field} />}
            />
            {errors.Capacity && <FormFeedback className='DannaM'>{errors.Capacity.message}</FormFeedback>}
          </div>
          <div className='form-password-toggle col-md-6 mb-1'>
            <Label className='form-label DannaM' for='confirmPassword'>
              استاد دوره
            </Label>
            <Controller
              control={control}
              id='TeacherId'
              name='TeacherId'
              render={({ field }) => <Input type='select' className='DannaM' invalid={errors.TeacherId && true} {...field}>
                {courseTeachers.map((item, index) => {
                  return(
                    <option onClick={() => setTeacherId(item.teacherId)} key={index}>{item.fullName}</option>
                  )
                })}
              </Input>}
            />
            {errors.TeacherId && <FormFeedback className='DannaM'>{errors.TeacherId.message}</FormFeedback>}
          </div>
          <div className='form-password-toggle col-md-6 mb-1'>
            <Label className='form-label DannaM' for='confirmPassword'>
              قیمت(تومان)
            </Label>
            <Controller
              control={control}
              id='Cost'
              name='Cost'
              render={({ field }) => <Input placeholder='150000' className='DannaM' invalid={errors.Cost && true} {...field} />}
            />
            {errors.Cost && <FormFeedback className='DannaM'>{errors.Cost.message}</FormFeedback>}
          </div>
          <div className='form-password-toggle col-md-6 mb-1'>
            <Label className='form-label DannaM' for='confirmPassword'>
              زمان شروع
            </Label>
            <Controller
              control={control}
              id='StartTime'
              name='StartTime'
              render={({ field }) => <Input placeholder='YYYY-MM-DD' className='DannaM' invalid={errors.StartTime && true} {...field} />}
            />
            {errors.StartTime && <FormFeedback className='DannaM'>{errors.StartTime.message}</FormFeedback>}
          </div>
          <div className='form-password-toggle col-md-6 mb-1'>
            <Label className='form-label DannaM' for='confirmPassword'>
              زمان پایان
            </Label>
            <Controller
              control={control}
              id='EndTime'
              name='EndTime'
              render={({ field }) => <Input placeholder='YYYY-MM-DD' className='DannaM' invalid={errors.EndTime && true} {...field} />}
            />
            {errors.EndTime && <FormFeedback className='DannaM'>{errors.EndTime.message}</FormFeedback>}
          </div>
        </Row>
        <div className='d-flex justify-content-between'>
          <Button color='secondary' className='btn-prev' outline disabled>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none DannaM'>قبلی</span>
          </Button>
          <Button type='submit' color='primary' className='btn-next'>
            <span className='align-middle d-sm-inline-block d-none DannaM'>بعدی</span>
            <ArrowRight size={14} className='align-middle ms-sm-25 ms-0'></ArrowRight>
          </Button>
        </div>
      </Form>
    </Fragment>
  )
}

export default AccountDetails
