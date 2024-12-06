// ** React Imports
import { Fragment, useState, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Reactstrap Imports
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledTooltip,
  UncontrolledDropdown,
  Toast,
  Modal,
  ModalHeader,
  ModalBody
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
  Linkedin
} from 'react-feather'

// ** Table columns 
export const JobsColumn = [
  {
    name: 'نام شغل',
    minWidth: '200px',
    cell: row => {
      return (
        <div className='d-flex justify-content-left align-items-center'>
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0 DannaM overflowH2'>{row.jobTitle}</h6>
          </div>
        </div>
      )
    }
  },
  {
    name: 'توضیحات',
    minWidth: '200px',
    cell: row => {
      return (
        <div className='d-flex justify-content-left align-items-center'>
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0 DannaM overflowH2'>{row.aboutJob}</h6>
          </div>
        </div>
      )
    }
  },
  {
    name: 'نام شرکت',
    minWidth: '200px',
    cell: row => {
      return (
        <div className='d-flex justify-content-left align-items-center'>
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0 DannaM overflowH2'>{row.companyName}</h6>
          </div>
        </div>
      )
    }
  },
  {
    name: 'لینکدین',
    minWidth: '200px',
    cell: row => {
      return (
        <div className='d-flex justify-content-left align-items-center'>
          <div className='d-flex flex-column'>
            <a href={row.companyLinkdin} className='user-name text-truncate mb-0 DannaM overflowH2'><Linkedin /></a>
          </div>
        </div>
      )
    }
  },
]