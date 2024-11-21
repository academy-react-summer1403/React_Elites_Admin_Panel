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
export const userColumn = [
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
    name: 'اعلان ها',
    minWidth: '100px',
    cell: row => {
      const notificationIdentifier = (row) => {
        if(row.notification == false){
          return "غیرفعال";
        }
        else if(row.notification == true){
          return "فعال";
        }
      }
      return (
        <div className='d-flex justify-content-left align-items-center overflowH'>
          <div className='d-flex flex-column'>
            <Badge color={row.notification === true ? "light-success" : "light-danger"} className='user-name text-truncate mb-0 DannaM'>{notificationIdentifier(row)}</Badge>
          </div>
        </div>
      )
    }
    } ,
    {
    name: 'وضعیت پرداخت',
    minWidth: '100px',
    cell: row => {
      const paymentIdentifier = (row) => {
        if(row.peymentDone == false){
          return "انجام نشده";
        }
        else if(row.peymentDone == true){
          return "انجام شده";
        }
      }
      return (
        <div className='d-flex justify-content-left align-items-center overflowH'>
          <div className='d-flex flex-column'>
            <Badge color={row.peymentDone === true ? "light-success" : "light-danger"} className='user-name text-truncate mb-0 DannaM'>{paymentIdentifier(row)}</Badge>
          </div>
        </div>
      )
    }
    },
]
