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
import { dateConvertor } from '../../Functions/DateMiladi'


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
export const worksColumn = [
    {
    name: 'عنوان کار',
    minWidth: '300px',
    cell: row => {
      return (
        <div className='d-flex justify-content-left align-items-center overflowH3'>
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0 DannaM'>{row.worktitle}</h6>
          </div>
        </div>
      )
    }
    },
    {
        name: 'توضیحات کار',
        minWidth: '300px',
        cell: row => {
          return (
            <div className='d-flex justify-content-left align-items-center overflowH3'>
              <div className='d-flex flex-column'>
                <h6 className='user-name text-truncate mb-0 DannaM'>{row.workDescribe}</h6>
              </div>
            </div>
          )
        }
    },
    {
        name: 'ساعت کار',
        minWidth: '300px',
        cell: row => {
          return (
            <div className='d-flex justify-content-left align-items-center overflowH3'>
              <div className='d-flex flex-column'>
                <h6 className='user-name text-truncate mb-0 DannaM'>{dateConvertor(row.workDate)}</h6>
              </div>
            </div>
          )
        }
    },
    {
        name: ' نام دوره',
        minWidth: '300px',
        cell: row => {
          return (
            <div className='d-flex justify-content-left align-items-center overflowH3'>
              <div className='d-flex flex-column'>
                <h6 className='user-name text-truncate mb-0 DannaM'>{row.courseName}</h6>
              </div>
            </div>
          )
        }
    },
]