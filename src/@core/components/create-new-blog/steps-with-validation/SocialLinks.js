// ** React Imports
import { Fragment, useEffect, useState } from 'react'

// ** Third Party Components
import { ArrowLeft } from 'react-feather'
import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { isObjEmpty } from '@utils'

// ** Reactstrap Imports
import { Label, Row, Col, Button, Form, Input, FormFeedback } from 'reactstrap'
import { postCreateCourse } from '../../../services/api/CourseManagement/post-create-course'
import { postCourseTech } from '../../../services/api/CourseManagement/post-course-tech'

const initialValues = {
  CourseLvlId: Number,
  CourseTypeId: Number,
}

const SocialLinks = ({ stepper }) => {


  const SignupSchema = yup.object().shape({
    CourseLvlId: yup.string().required("سطح دوره الزامیست"),
    CourseTypeId: yup.string().required("نوع دوره الزامیست"),
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

  const postTech = (value) => {
    if(value.success){
      setStep3(true)
    }
  }

  const onSubmit = async (value) => {
    if (isObjEmpty(errors)) {
      stepper.next()
    }
  }
  



  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0'>دسته بندی</h5>
        <small>دسته بندی دوره را اضافه کنید</small>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label DannaM' for='twitter'>
              سطح دوره
            </Label>
            <Controller
              id='CourseLvlId'
              name='CourseLvlId'
              control={control}
              render={({ field }) => (
                <Input className='DannaM' type='select' invalid={errors.CourseLvlId && true} {...field}>
                </Input>
              )}
            />
            {errors.CourseLvlId && <FormFeedback className='DannaM'>{errors.CourseLvlId.message}</FormFeedback>}
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label DannaM' for='twitter'>
              نوع دوره
            </Label>
            <Controller
              id='CourseTypeId'
              name='CourseTypeId'
              control={control}
              render={({ field }) => (
                <Input className='DannaM' type='select' invalid={errors.CourseTypeId && true} {...field}>
                </Input>
              )}
            />
            {errors.CourseTypeId && <FormFeedback className='DannaM'>{errors.CourseTypeId.message}</FormFeedback>}
          </Col>
        </Row>
        <div className='d-flex justify-content-between'>
          <Button color='primary' className='btn-prev' onClick={() => stepper.previous()}>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none'>قبلی</span>
          </Button>
          <Button type='submit' color='success' className='btn-submit'>
            تایید
          </Button>
        </div>
      </Form>
    </Fragment>
  )
}

export default SocialLinks
