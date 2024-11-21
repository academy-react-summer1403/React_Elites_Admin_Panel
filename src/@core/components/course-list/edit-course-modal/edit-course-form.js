// ** React Imports
import { Fragment } from 'react'

// ** Reactstrap Imports
// import { Row, Col } from 'reactstrap'

// ** Custom Components
// import Breadcrumbs from '@components/breadcrumbs'

// // ** Demo Components
// import VerticalForm from './VerticalForm'
// import HorizontalForm from './HorizontalForm'
// import VerticalFormIcons from './VerticalFormIcons'
import MultipleColumnForm from './MultipleColumnForm'
// import HorizontalFormIcons from './HorizontalFormIcons'

const EditCourseForm = ({courseDetail}) => {
  return (
    <Fragment>
          <MultipleColumnForm courseDetail={courseDetail} />
    </Fragment>
  )
}
export default EditCourseForm
