// ** React Imports
import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

// ** Table Columns
import { columns } from './columns'

// ** Third Party Components
import DataTable from 'react-data-table-component'
import PacmanLoader from "react-spinners/PacmanLoader";

// ** Reactstrap Imports
import { Button, Input, Row, Col, Card } from 'reactstrap'

// ** Styles
import '@styles/react/apps/app-invoice.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
import { getAllTeacherCourse } from '../../../services/api/CourseManagement/get-all-teacher-course'

const CustomHeader = ({ handlePerPage, setSearchValue, setRows, rows }) => {
  return (
    <div className='invoice-list-table-header w-100 py-2'>
      <Row>
        <Col lg='6' className='d-flex align-items-center px-0 px-lg-1'>
          <div className='d-flex align-items-center me-2'>
            <label htmlFor='rows-per-page' className='DannaM'> تعداد </label>
            <Input
              type='select'
              id='rows-per-page'
              value={rows}
              onChange={handlePerPage}
              className='form-control ms-50 pe-3 DannaM'
            >
              <option onClick={() => setRows(10)}>10</option>
              <option onClick={() => setRows(25)}>25</option>
              <option onClick={() => setRows(50)}>50</option>
            </Input>
          </div>
          <Button tag={NavLink} to='/course-management/list/add-course' color='primary' className='DannaM'>
            افزودن دوره
          </Button>
        </Col>
        <Col
          lg='6'
          className='actions-right d-flex align-items-center justify-content-lg-end flex-lg-nowrap flex-wrap mt-lg-0 mt-1 pe-lg-1 p-0'
        >
          <div className='d-flex align-items-center'>
            <label htmlFor='search-invoice' className='DannaM w100'>جست و جو</label>
            <Input
              id='search-invoice'
              className='ms-50 me-2 w-100 DannaM'
              type='text'
              onChange={e => setSearchValue(e.target.value)}
              placeholder='جست و جو دوره'
            />
          </div>
        </Col>
      </Row>
    </div>
  )
}

const TeachersCourses = () => {

  // ** Store vars
  // const dispatch = useDispatch()
  // const store = useSelector(state => state.invoice)

  // ** States
  const [value, setValue] = useState('')
  const [sort, setSort] = useState('desc')
  const [sortColumn, setSortColumn] = useState('id')
  const [currentPage, setCurrentPage] = useState(1)
  const [statusValue, setStatusValue] = useState('')
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [searchValue, setSearchValue] = useState('')
  const [data, setData] = useState([])
  const [noFilterData, setNoFilterData] = useState([])
  const [rows, setRows] = useState(500)
  const [isLoading, setisLoading] = useState(true)

  const getDataa = async () => {
    let res = await getAllTeacherCourse(rows);
    setNoFilterData(res.teacherCourseDtos)
    setData(res.teacherCourseDtos)
    setisLoading(false)
  }

  useEffect(() => {
    setData(searchValue != "" ? data.filter(doc => doc.title.includes(searchValue)) : noFilterData)
  }, [searchValue])

  useEffect(() => {
    getDataa()
  }, [])

  useEffect(() => {
    getDataa()
  }, [rows])
  

  return (
    <div className='invoice-list-wrapper'>
      {isLoading && 
      <div className="loader">
              <PacmanLoader color="#7367f0" />
      </div>
      }
      {isLoading === false &&<Card>
          <div className='invoice-list-dataTable react-dataTable'>
          <DataTable
            highlightOnHover={true}
            noHeader
            sortServer
            subHeader={true}
            columns={columns}
            responsive={true}
            data={data}
            className='react-dataTable'
            setData={setData}
            paginationDefaultPage={currentPage}
            subHeaderComponent={
              <CustomHeader
                rowsPerPage={rowsPerPage}
                setSearchValue={setSearchValue}
                setRows={setRows}
                rows={rows}
              />
            }
          />
        </div>
      </Card>}
    </div>
  )
}

export default TeachersCourses
