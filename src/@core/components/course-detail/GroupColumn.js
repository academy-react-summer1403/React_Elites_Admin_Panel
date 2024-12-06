// ** React Imports
import { Fragment, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'


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
  Check,
  Delete,
  Trash2
} from 'react-feather'
import { deleteCourseGroup } from '../../services/api/CourseManagement/delete-course-group'
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
export const groupColumns = [
    {
    name: 'نام گروه',
    minWidth: '100px',
    cell: row => {
      return (
        <div className='d-flex justify-content-left align-items-center overflowH'>
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0 DannaM'>{row.groupName}</h6>
          </div>
        </div>
      )
    }
    },
        {
    name: 'نام دوره',
    minWidth: '100px',
    cell: row => {
      return (
        <div className='d-flex justify-content-left align-items-center overflowH'>
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0 DannaM'>{row.courseName}</h6>
          </div>
        </div>
      )
    }
    } ,
    {
    name: 'نام منتور',
    minWidth: '100px',
    cell: row => {
      return (
        <div className='d-flex justify-content-left align-items-center overflowH'>
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0 DannaM'>{row.teacherName}</h6>
          </div>
        </div>
      )
    }
    },
    {
    name: ' ظرفیت ',
    minWidth: '100px',
    cell: row => {
      return (
        <div className='d-flex justify-content-left align-items-center'>
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0 DannaM'>{row.groupCapacity}</h6>
          </div>
        </div>
      )
    }
    },
    {
      name: ' عملیات ',
      minWidth: '100px',
      cell: row => {
        // Delete Method Call
        const postDelete = async () => {
        let groupIdObj = new FormData()
        groupIdObj.append('Id', row.groupId)
        let res = await deleteCourseGroup(groupIdObj)
        console.log(row.groupId)

        // On Success

        if(res.success == true){
          toast.success('گروه از دوره حذف شد')
        }

        // On Error

        else if(res.success == false){
          toast.error('خطا در حذف گروه دوره')
        }}

        return (
          <div className='d-flex justify-content-left align-items-center'>
            <div className='d-flex flex-column'>
              <h6 className='user-name text-truncate mb-0 DannaM' onClick={() => postDelete()}><Trash2 /></h6>
            </div>
          </div>
        )
      }
    },
]
