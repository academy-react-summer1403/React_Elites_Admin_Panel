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
    name: 'نام دوره',
    minWidth: '200px',
    cell: row => {
      return (
        <div className='d-flex justify-content-left align-items-center'>
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0 DannaM overflowH'>{row.courseTitle}</h6>
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
        <Eye size={17} className='mx-1' />
        <UncontrolledDropdown>
          <DropdownToggle tag='span'>
            <MoreVertical size={17} className='cursor-pointer' />
          </DropdownToggle>
          <DropdownMenu end>
              <DropdownItem> 
                <Trash size={14} className='me-50'/> 
                <span className='align-middle DannaM'>حذف کردن</span>
                </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    )
  }
  }
]
