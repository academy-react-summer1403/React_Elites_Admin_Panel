// ** React Imports
import { Fragment, useState } from 'react'

// ** Third Party Components
import Select from 'react-select'
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Utils
import { selectThemeColors } from '@utils'
import { isObjEmpty } from '@utils'

// ** Reactstrap Imports
import { Label, Row, Col, Button, Form, Input, FormFeedback } from 'reactstrap'

// ** Styles
import '@styles/react/libs/react-select/_react-select.scss'

const initialValues = {
  MiniDescribe: '',
  UniqeUrlString: '',
  SessionNumber: Number,
  TremId: Number,
  ClassId: Number,
  GoogleTitle: '',
}

const PersonalInfo = ({ stepper, classRoom, Trem, setstepTwo }) => {

  const [classId, setclassId] = useState(1)
  const [termId, settermId] = useState(1)

  const SignupSchema = yup.object().shape({
    MiniDescribe: yup.string().required("توضیحات کوتاه الزامیست"),
    UniqeUrlString: yup.string().required("لینک الزامیست"),
    SessionNumber: yup.number().required("جلسات دوره الزامیست"),
    TremId: yup.string().required("ترم دوره الزامیست"),
    ClassId: yup.string().required("شماره کلاس دوره الزامیست"),
    GoogleTitle: yup.string().required("عنان گوگل الزامیست"),
  })

  // ** Hooks
  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({
    initialValues,
    resolver: yupResolver(SignupSchema)
  })

  const onSubmit = (value) => {
    if (isObjEmpty(errors)) {
      stepper.next()
    }
    value.TremId = termId
    value.ClassId = classId
    setstepTwo(value)
  }

  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0 DannaM'>جزییات دوره</h5>
        <small className='text-muted DannaM'>جزییات دوره را وارد کنید</small>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label DannaM' for='firstName'>
              توضیحات کوتاه
            </Label>
            <Controller
              id='MiniDescribe'
              name='MiniDescribe'
              control={control}
              render={({ field }) => <Input className='DannaM' placeholder='این دوره پایتون است' invalid={errors.MiniDescribe && true} {...field} />}
            />
            {errors.MiniDescribe && <FormFeedback className='DannaM'>{errors.MiniDescribe.message}</FormFeedback>}
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label DannaM' for='firstName'>
              شماره کلاس
            </Label>
            <Controller
              id='ClassId'
              name='ClassId'
              control={control}
              render={({ field }) => <Input type='select' className='DannaM' invalid={errors.ClassId && true} {...field}> 
              {classRoom.map((item, index) => {
                return(
                  <option key={index} onClick={() => setclassId(item.id)}>{item.classRoomName}</option>
                )
              })}
            </Input>}
            />
            {errors.ClassId && <FormFeedback className='DannaM'>{errors.ClassId.message}</FormFeedback>}
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label DannaM' for='firstName'>
              لینک
            </Label>
            <Controller
              id='UniqeUrlString'
              name='UniqeUrlString'
              control={control}
              render={({ field }) => <Input className='DannaM' placeholder='Url(...' invalid={errors.UniqeUrlString && true} {...field} />}
            />
            {errors.UniqeUrlString && <FormFeedback className='DannaM'>{errors.UniqeUrlString.message}</FormFeedback>}
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label DannaM' for='firstName'>
              تعداد جلسات
            </Label>
            <Controller
              id='SessionNumber'
              name='SessionNumber'
              control={control}
              render={({ field }) => <Input className='DannaM' placeholder='10' invalid={errors.SessionNumber && true} {...field} />}
            />
            {errors.SessionNumber && <FormFeedback className='DannaM'>{errors.SessionNumber.message}</FormFeedback>}
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label DannaM' for='firstName'>
              ترم
            </Label>
            <Controller
              id='TremId'
              name='TremId'
              control={control}
              render={({ field }) => <Input className='DannaM' type='select' invalid={errors.TremId && true} {...field} >
                {Trem.map((item, index) => {
                  return(
                    <option key={index} onClick={() => settermId(item.id)}>{item.termName}</option>
                  )
                })}
              </Input>}
            />
            {errors.TremId && <FormFeedback className='DannaM'>{errors.TremId.message}</FormFeedback>}
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label DannaM' for='firstName'>
              عنوان گوگل
            </Label>
            <Controller
              id='GoogleTitle'
              name='GoogleTitle'
              control={control}
              render={({ field }) => <Input className='DannaM' placeholder='دوره جامع پایتون' invalid={errors.GoogleTitle && true} {...field} />}
            />
            {errors.GoogleTitle && <FormFeedback className='DannaM'>{errors.GoogleTitle.message}</FormFeedback>}
          </Col>
        </Row>
        <div className='d-flex justify-content-between'>
          <Button type='button' color='primary' className='btn-prev' onClick={() => stepper.previous()}>
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

export default PersonalInfo
