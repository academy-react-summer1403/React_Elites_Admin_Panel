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
import { error } from 'jquery'
import { postCreateBlog } from '../../../services/api/BlogManagement/post-create-blog'

const initialValues = {
  Title: '',
  GoogleTitle: '',
  GoogleDescribe: '',
  MiniDescribe: '',
  Describe: '',
  Keyword: '',
  IsSlider: false,
  NewsCatregoryId: 1,
  Image: '',
}

const AccountDetails = ({ BlogCategory }) => {

  const [category, setCategory] = useState(1)

  const SignupSchema = yup.object().shape({
    Title: yup.string().required("عنوان بلاگ الزامیست"),
    GoogleTitle: yup.string().required("عنوان گوگل بلاگ الزامیست"),
    GoogleDescribe: yup.string().required("توضیحات گوگل الزامیست"),
    MiniDescribe: yup.string().required("توضیجات کوتاه بلاگ الزامیست"),
    Describe: yup.string().required("توضیحات بلاگ الزامیست"),
    Keyword: yup.string().required("کلمات کلیدی بلاگ الزامیست"),
    NewsCatregoryId: yup.string().required("دسته بندی بلاگ الزامیست"),
    Image: yup.string().required("لینک عکس بلاگ الزامیست"),
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
    value.NewsCatregoryId = category;
    if (isObjEmpty(errors)) {
      let res = await postCreateBlog(value)
      console.log(res)
    }
  }

  return (
    <Fragment>
      <div className='content-header'>
        <h5 className='mb-0 DannaM'>اطلاعات بلاگ</h5>
        <small className='text-muted DannaM'> اطلاعات بلاگ را وارد کنید </small>
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
              render={({ field }) => <Input className='DannaM' placeholder='خبر اکادمی' invalid={errors.Title && true} {...field} />}
            />
            {errors.Title && <FormFeedback className='DannaM'>{errors.Title.message}</FormFeedback>}
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label DannaM' for='username'>
              عنوان گوگل
            </Label>
            <Controller
              id='GoogleTitle'
              name='GoogleTitle'
              control={control}
              render={({ field }) => <Input className='DannaM' placeholder='خبر ...' invalid={errors.GoogleTitle && true} {...field} />}
            />
            {errors.GoogleTitle && <FormFeedback className='DannaM'>{errors.GoogleTitle.message}</FormFeedback>}
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label DannaM' for='username'>
              توضیجات گوگل
            </Label>
            <Controller
              id='GoogleDescribe'
              name='GoogleDescribe'
              control={control}
              render={({ field }) => <Input className='DannaM' placeholder='این خبر به ...' invalid={errors.GoogleDescribe && true} {...field} />}
            />
            {errors.GoogleDescribe && <FormFeedback className='DannaM'>{errors.GoogleDescribe.message}</FormFeedback>}
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label DannaM' for='username'>
              توضیجات کوتاه
            </Label>
            <Controller
              id='MiniDescribe'
              name='MiniDescribe'
              control={control}
              render={({ field }) => <Input className='DannaM' placeholder='برنامه نویسان اکثرا ...' invalid={errors.MiniDescribe && true} {...field} />}
            />
            {errors.MiniDescribe && <FormFeedback className='DannaM'>{errors.MiniDescribe.message}</FormFeedback>}
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label DannaM' for='username'>
              توضیجات 
            </Label>
            <Controller
              id='Describe'
              name='Describe'
              control={control}
              render={({ field }) => <Input className='DannaM' placeholder='این خبر به ...' invalid={errors.Describe && true} {...field} />}
            />
            {errors.Describe && <FormFeedback className='DannaM'>{errors.Describe.message}</FormFeedback>}
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label DannaM' for='username'>
              کلمات کلیدی 
            </Label>
            <Controller
              id='Keyword'
              name='Keyword'
              control={control}
              render={({ field }) => <Input className='DannaM' placeholder='خبر ...' invalid={errors.Keyword && true} {...field} />}
            />
            {errors.Keyword && <FormFeedback className='DannaM'>{errors.Keyword.message}</FormFeedback>}
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label DannaM' for='username'>
              دسته بندی
            </Label>
            <Controller
              id='NewsCatregoryId'
              name='NewsCatregoryId'
              control={control}
              render={({ field }) => <Input className='DannaM' type='select' invalid={errors.NewsCatregoryId && true} {...field}>
                {BlogCategory.map((item, index) => {
                  return(
                    <option key={index} onClick={() => setCategory(item.id)}>{item.categoryName}</option>
                  )
                })}
              </Input>}
            />
            {errors.NewsCatregoryId && <FormFeedback className='DannaM'>{errors.NewsCatregoryId.message}</FormFeedback>}
          </Col>
          <Col md='6' className='mb-1'>
            <Label className='form-label DannaM' for='username'>
              لینک عکس 
            </Label>
            <Controller
              id='Image'
              name='Image'
              control={control}
              render={({ field }) => <Input className='DannaM' placeholder='url(...' invalid={errors.Image && true} {...field}>

              </Input>}
            />
            {errors.Image && <FormFeedback className='DannaM'>{errors.Image.message}</FormFeedback>}
          </Col>
        </Row>
        <div className='d-flex justify-content-between'>
          <Button color='secondary' className='btn-prev' outline disabled>
            <ArrowLeft size={14} className='align-middle me-sm-25 me-0'></ArrowLeft>
            <span className='align-middle d-sm-inline-block d-none DannaM'>قبلی</span>
          </Button>
          <Button type='submit' color='success' className='btn-next'>
            <span className='align-middle d-sm-inline-block d-none DannaM'>تایید</span>
          </Button>
        </div>
      </Form>
    </Fragment>
  )
}

export default AccountDetails
