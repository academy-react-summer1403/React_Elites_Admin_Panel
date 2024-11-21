// ** React Imports
import { Fragment, useEffect, useState } from 'react'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Demo Components
import CreateBlog from './WizardModernVertical'
import { getCreateCourse } from '../../services/api/CourseManagement/get-create-course'

const Wizard = () => {

  

  return (
    <Fragment>
      <Row>
        <Col sm='12'>
          <WizardModernVertical />
        </Col>
      </Row>
    </Fragment>
  )
}
export default CreateBlog
