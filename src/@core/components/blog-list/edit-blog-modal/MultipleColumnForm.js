// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap'
import { useForm, Controller } from 'react-hook-form'
import { getCreateCourse } from '../../../services/api/CourseManagement/get-create-course'
import { useEffect, useState } from 'react'
import { number } from 'yup'
import { putCourseEdit } from '../../../services/api/CourseManagement/put-course-edit'
import { Title } from 'chart.js'
import { putEditBlog } from '../../../services/api/BlogManagement/put-edit-blog'
import { getBlogCategory } from '../../../services/api/BlogManagement/get-blog-category'

const MultipleColumnForm = ({blogDetail}) => {

  const [categoryList, setcategoryList] = useState([])
  const [category, setcategory] = useState(1)

  const defaultValues = {
    Id: blogDetail?.id,
    Title: blogDetail?.title,
    CurrentImageAddressTumb: blogDetail?.imageAddress,
    GoogleTitle: blogDetail?.googleTitle,
    GoogleDescribe: blogDetail?.googleDescribe,
    MiniDescribe: blogDetail?.miniDescribe,
    Describe: blogDetail?.describe,
    NewsCatregoryId: 1,
    Keyword: '',
  }

  const getCategoryList = async () => {
    let categoryList = await getBlogCategory()
    setcategoryList(categoryList)
  }

  useEffect(() => {
    getCategoryList()
  }, [])
  

  const onSubmit = async (value) => {
    value.NewsCatregoryId = category;
    let res = await putEditBlog(value)
    console.log(res)
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
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label DannaM'>
                عنوان بلاگ
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
                عکس بلاگ
              </Label>
              <Controller
              id='EditCurrentImageAddressTumb'
              name='CurrentImageAddressTumb'
              control={control}
              render={({ field }) => <Input className='DannaM' {...field}/>}
            />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label DannaM'>
                عنوان گوگل
              </Label>
              <Controller
              id='EditGoogleTitle'
              name='GoogleTitle'
              control={control}
              render={({ field }) => <Input className='DannaM' {...field}/>}
            />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label DannaM'>
                توضیحات گوگل
              </Label>
              <Controller
              id='EditGoogleDescribe'
              name='GoogleDescribe'
              control={control}
              render={({ field }) => <Input className='DannaM' {...field}/>}
            />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label DannaM'>
                توضیحات کوتاه
              </Label>
              <Controller
              id='EditMiniDescribe'
              name='MiniDescribe'
              control={control}
              render={({ field }) => <Input className='DannaM' {...field}/>}
            />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label DannaM'>
                توضیحات
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
                کلمات کلیدی
              </Label>
              <Controller
              id='EditKeyword'
              name='Keyword'
              control={control}
              render={({ field }) => <Input className='DannaM' {...field}/>}
            />
            </Col>
            <Col md='6' sm='12' className='mb-1'>
              <Label className='form-label DannaM'>
                دسته بندی
              </Label>
              <Controller
              id='EditNewsCatregoryId'
              name='NewsCatregoryId'
              control={control}
              render={({ field }) => <Input type='select' className='DannaM' {...field}>
                {categoryList.map((item, index) => {
                  return(
                    <option key={index} onClick={() => setcategory(item.id)}>{item.categoryName}</option>
                  )
                })}
              </Input>}
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
