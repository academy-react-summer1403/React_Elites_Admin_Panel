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

const EditBlogForm = ({blogDetail}) => {
  return (
    <Fragment>
          <MultipleColumnForm blogDetail={blogDetail} />
    </Fragment>
  )
}
export default EditBlogForm
