// ** React Imports
import { Fragment, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { store } from '@store/store'
import { deleteInvoice } from '../store'

// ** Reactstrap Imports
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledTooltip,
  UncontrolledDropdown,
  Toast
} from 'reactstrap'

// ** Third Party Components
import {
  Eye,
  Send,
  Edit,
  Copy,
  Save,
  Info,
  Trash,
  PieChart,
  Download,
  TrendingUp,
  CheckCircle,
  MoreVertical,
  ArrowDownCircle,
  Check
} from 'react-feather'
import { deleteCourse } from '../../../services/api/CourseManagement/delete-course'
import { activeCourse } from '../../../services/api/CourseManagement/active-course'
import toast from 'react-hot-toast'


// ** Vars
const invoiceStatusObj = {
  Sent: { color: 'light-secondary', icon: Send },
  Paid: { color: 'light-success', icon: CheckCircle },
  Draft: { color: 'light-primary', icon: Save },
  Downloaded: { color: 'light-info', icon: ArrowDownCircle },
  'Past Due': { color: 'light-danger', icon: Info },
  'Partial Payment': { color: 'light-warning', icon: PieChart }
}

// ** Table columns 
export const columns = [
  {
    name: 'دوره',
    minWidth: '200px',
    cell: row => {
      const name = row.title
      return (
        <div className='d-flex justify-content-left align-items-center'>
          <img className='me-50' src={row.tumbImageAddress && row.tumbImageAddress.slice(0, 5) == "https" ? row.tumbImageAddress : 'https://classapi.sepehracademy.ir///Pictures//Course//blank-thumbnail_4031a67c-6002-4004-baf7-c0840ebed86f.jpg'} width='32' height='32' />
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0 DannaM overflowH'>{name}</h6>
          </div>
        </div>
      )
    }
  },
  {
    name: 'نوع',
    minWidth: '100px',
    cell: row => {
      const type = row.typeName
      return (
        <div className='d-flex justify-content-left align-items-center'>
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0 DannaM'>{type}</h6>
          </div>
        </div>
      )
    }
  },
  {
    name: 'وضعیت',
    minWidth: '100px',
    cell: row => {
      const statusName = row.statusName
      return (
        <div className='d-flex justify-content-left align-items-center'>
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0 DannaM'>{statusName}</h6>
          </div>
        </div>
      )
    }
  },
  {
    name: 'فعال / غیر فعال',
    minWidth: '100px',
    cell: row => {
      const statusIdentifier = (item) => {
        if(item.isActive === true){
          return "فعال";
        }
        else if(item.isActive === false){
          return "غیر فعال";
        }
      }
      return (
        <div className='d-flex align-items-center justifyRight w100'>
          <div className='d-flex flex-column justifyCenter'>
            <Badge color={row.isActive === true ? "light-success" : "light-danger"} className={row.isActive ?  "activeD" : "notActive"}>{statusIdentifier(row)}</Badge>
          </div>
        </div>
      )
    }
  },
  {
    name: "حذف شده",
    minWidth: '50px',
    cell: row => {
      const isDelete = (item) => {
        if(item.isdelete === true){
          return <h6 className='isDelete DannaM'></h6>;
        }
        else{
          return false
        }
      }
      return (
        <div className='d-flex justify-content-left align-items-center w100'>
            {isDelete(row)}
        </div>
      )
    }
  },
  {
    name: 'تعداد رزرو',
    minWidth: '100px',
    cell: row => {
      const reserveCount = row.reserveCount
      return (
        <div className='d-flex justify-content-left align-items-center'>
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0 DannaM'>{reserveCount}</h6>
          </div>
        </div>
      )
    }
  },
  {
    name: 'عملیات',
    minWidth: '110px',
    cell: row => {
      return (
      <div className='column-action d-flex align-items-center'>
        <NavLink to={"/course-management/detail/" + row.courseId}>
          <Eye size={17} className='mx-1' />
        </NavLink>
        <UncontrolledDropdown>
          <DropdownToggle tag='span'>
            <MoreVertical size={17} className='cursor-pointer' />
          </DropdownToggle>
          <DropdownMenu end>
            {row.isdelete === false ?
              <DropdownItem onClick={async () => {
                let h = await deleteCourse({
                  active: false,
                  id: "e6a4b34e-c88f-ef11-b6e6-82fc07f68400"
                })
                console.log(h)
                }}> <Trash size={14} className='me-50'/> <span className='align-middle DannaM'>حذف کردن
              </span> </DropdownItem>
              :
              <DropdownItem onClick={ async () => {
                let res = await deleteCourse()
                console.log(res)
              }} > <Check size={14} className='me-50' /> <span className='align-middle DannaM'> ریکاوری 
              </span> </DropdownItem>}
            {row.isActive === false ? 
              <DropdownItem onClick={ async () => {
                let res = await activeCourse({
                  active: true, 
                  id: `${row.courseId}`
                })
                if(res.success){
                  toast.success("دوره فعال شد")
                  setData(data)
                }
              }}> <Check size={14} className='me-50' /> <span className='align-middle DannaM' >فعال کردن
              </span> </DropdownItem> 
              : 
              <DropdownItem onClick={ async () => {
                let res = await activeCourse({
                  active: false, 
                  id: `${row.courseId}`
                })
                if(res.success){
                  toast.success("دوره غیر فعال شد")
                  setData(data)
                }
                }}> <Check size={14} className='me-50' /> <span className='align-middle DannaM'>غیر فعال کردن
              </span> </DropdownItem>}
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    )
  }
  }
]
