// ** Reactstrap Imports
import { Controller, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { Card, CardHeader, CardTitle, CardBody, Row, Col, Input, Form, Button, Label } from 'reactstrap'
import { useParams } from 'react-router-dom'
import { getUserDetail } from '../../../services/api/UserManagement/get-user-detail'
import { useEffect, useState } from 'react'
import { EditUser } from './edit-user'

const ColumnEditUserWrapper = ({userId}) => {

  const [uservalues, setuservalues] = useState({})
  

  const getUserDeafultValue = async () => {
    let res = await getUserDetail(userId)
    setuservalues(res)
  }

  useEffect(() => {
    getUserDeafultValue()
  }, [])

  return uservalues.fName && (
    <>
      <EditUser userId={userId} uservalues={uservalues} />
    </>
  )
}
export default ColumnEditUserWrapper
