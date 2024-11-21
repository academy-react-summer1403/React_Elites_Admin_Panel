// ** React Imports
import { Fragment, useState } from 'react'

// ** Third Party Components
import { useForm, Controller } from 'react-hook-form'
import { ArrowLeft, ArrowRight } from 'react-feather'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { isObjEmpty } from '@utils'

// ** Reactstrap Imports
import { Label, Row, Col, Button, Form, Input, FormFeedback } from 'reactstrap'

const initialValues = {
  TumbImageAddress: '',
}

const Address = ({ stepper} ) => {

  const [image, setImage] = useState("")

  // ** Hooks
  const SignupSchema = yup.object().shape({
    TumbImageAddress: yup.string("عکس دوره الزامیست"),
  })

  const {
    control,
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
    setstepThree(value)
  }

  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0 DannaM'>عکس دوره</h5>
        <small className='DannaM'>عکس دوره را اضافه کنید</small>
      </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col md='6' className='mb-1'>
            <Label className='form-label DannaM' for='address'>
              لینک عکس
            </Label>
            <Controller
              id='TumbImageAddress'
              name='TumbImageAddress'
              control={control}
              render={({ field }) => (
                <Input className='DannaM' invalid={errors.TumbImageAddress && true} {...field} onChange={(e) => {
                  setImage(e.target.value)
                }} />
              )}
            />
            {errors.TumbImageAddress && <FormFeedback className='DannaM'>{errors.TumbImageAddress.message}</FormFeedback>}
          </Col>
          {image && <img src={image} height={500} className='addImage' />}
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

export default Address
