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
  Check
} from 'react-feather'


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
export const paymentColumn = [
    {
    name: 'نام کاربر',
    minWidth: '100px',
    cell: row => {
      return (
        <div className='d-flex justify-content-left align-items-center overflowH'>
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0 DannaM'>{row.studentName}</h6>
          </div>
        </div>
      )
    }
    },
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
]
