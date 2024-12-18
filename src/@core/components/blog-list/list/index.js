// ** React Imports
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

// ** Table Columns
import { columns } from './columns'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { ChevronDown } from 'react-feather'
import DataTable from 'react-data-table-component'

// ** Reactstrap Imports
import { Button, Input, Row, Col, Card } from 'reactstrap'

// ** Store & Actions
import { getData } from '../store'
import { useDispatch, useSelector } from 'react-redux'

// ** Styles
import '@styles/react/apps/app-invoice.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'
import { data } from 'jquery'
import { getBlogList } from '../../../services/api/BlogManagement/get-blog-list'
import PacmanLoader from 'react-spinners/PacmanLoader'
import { useGlobalState } from '../../../state/state'

const CustomHeader = ({ handleFilter, value, handleStatusValue, statusValue, handlePerPage, setSearchValue, setRows, rows }) => {
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
          <Button tag={Link} to='/apps/invoice/add' color='primary' className='DannaM'>
            افزودن بلاگ
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

const BlogList = () => {


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
  const [rows, setRows] = useState(50)
  const [activeValue, setActiveValue] = useState(true)
  const [isLoading, setisLoading] = useState(true)
  const [changed, setChanged] = useGlobalState('sthChangedBlogList')

  const getDataa = async () => {
    let res = await getBlogList(activeValue);
    setNoFilterData(res.news)
    setData(res.news)
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
  }, [changed])

  useEffect(() => {
    getDataa()
  }, [rows, activeValue])
  

  const handlePerPage = e => {
    dispatch(
      getData({
        sort,
        q: value,
        sortColumn,
        page: currentPage,
        status: statusValue,
        perPage: parseInt(e.target.value)
      })
    )
    setRowsPerPage(parseInt(e.target.value))
  }

  const handleStatusValue = e => {
    setStatusValue(e.target.value)
    dispatch(
      getData({
        sort,
        q: value,
        sortColumn,
        page: currentPage,
        perPage: rowsPerPage,
        status: e.target.value
      })
    )
  }


  const handleSort = (column, sortDirection) => {
    setSort(sortDirection)
    setSortColumn(column.sortField)
    dispatch(
      getData({
        q: value,
        page: currentPage,
        sort: sortDirection,
        status: statusValue,
        perPage: rowsPerPage,
        sortColumn: column.sortField
      })
    )
  }
  

  return (
    <div className='invoice-list-wrapper'>
    <div className='sortWrapper'>
      <div className='activeCourses' onClick={() => setActiveValue(true)}> بلاگ های فعال </div>
      <div className='deActiveCourses' onClick={() => setActiveValue(false)}> بلاگ های غیرفعال </div>
    </div>

    {isLoading && 
      <div className="loader">
        <PacmanLoader color="#7367f0" />
      </div>
      }
      {isLoading == false && <Card>
        <div className='invoice-list-dataTable react-dataTable'>
          <DataTable
            highlightOnHover={true}
            noHeader
            pagination
            sortServer
            paginationServer
            subHeader={true}
            columns={columns}
            responsive={true}
            onSort={handleSort}
            data={data}
            sortIcon={<ChevronDown />}
            className='react-dataTable'
            defaultSortField='invoiceId'
            paginationDefaultPage={currentPage}
            // paginationComponent={CustomPagination}
            subHeaderComponent={
              <CustomHeader
                statusValue={statusValue}
                rowsPerPage={rowsPerPage}
                handlePerPage={handlePerPage}
                handleStatusValue={handleStatusValue}
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

export default BlogList
