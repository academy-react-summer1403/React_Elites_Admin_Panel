// ** Reactstrap Imports
import { Controller, useForm } from 'react-hook-form'
import { EditUser } from './edit-user'

const ColumnEditUserWrapper = ({userId, uservalues}) => {

  return uservalues.fName && (
    <>
      <EditUser userId={userId} uservalues={uservalues} />
    </>
  )
}
export default ColumnEditUserWrapper
