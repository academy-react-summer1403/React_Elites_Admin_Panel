// ** React Imports
import { Fragment, useState } from 'react'
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
import { putActiveBlog } from '../../../services/api/BlogManagement/put-active-blog'


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
    minWidth: '300px',
    cell: row => {
      const name = row.title
      return (
        <div className='d-flex justify-content-left align-items-center'>
          <img className='me-50' src={row.currentImageAddressTumb ? row.currentImageAddressTumb : 'https://classapi.sepehracademy.ir///Pictures//Course//blank-thumbnail_4031a67c-6002-4004-baf7-c0840ebed86f.jpg'} width='32' height='32' />
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0 DannaM overflowH2'>{name}</h6>
          </div>
        </div>
      )
    }
  },
  {
    name: 'توضیحات',
    minWidth: '300px',
    cell: row => {
      const miniDescribe = row.miniDescribe
      return (
        <div className='d-flex justify-content-left align-items-center overflowH2'>
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0 DannaM overflowH2'>{miniDescribe}</h6>
          </div>
        </div>
      )
    }
  },
  {
    name: 'نویسنده',
    minWidth: '300px',
    cell: row => {
      const addUserFullName = row.addUserFullName
      return (
        <div className='d-flex justify-content-left align-items-center overflowH2'>
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0 DannaM overflowH2'>{addUserFullName}</h6>
          </div>
        </div>
      )
    }
  },
  {
    name: 'فعال / غیر فعال',
    minWidth: '50px',
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
    name: 'عملیات',
    minWidth: '50px',
    cell: row => {
      return (
      <div className='column-action d-flex align-items-center'>
        <NavLink to={"/blog-management/detail/" + row.id}>
          <Eye size={17} className='mx-1' />
        </NavLink>
        <UncontrolledDropdown>
          <DropdownToggle tag='span'>
            <MoreVertical size={17} className='cursor-pointer' />
          </DropdownToggle>
          <DropdownMenu end>
            {row.isdelete === false ?
              <DropdownItem> <Trash size={14} className='me-50'/> <span className='align-middle DannaM'>حذف کردن
              </span> </DropdownItem>
              :
              <DropdownItem> <Check size={14} className='me-50' /> <span className='align-middle DannaM'> ریکاوری 
              </span> </DropdownItem>}
            {row.isActive === false ? 
              <DropdownItem onClick={() => {
                let res = putActiveBlog({
                  Active: true,
                  Id: row.id
                })
              }}> <Check size={14} className='me-50' /> <span className='align-middle DannaM' >فعال کردن
              </span> </DropdownItem> 
              : 
              <DropdownItem onClick={() => {
                let res = putActiveBlog({
                  Active: false,
                  Id: row.id
                })
              }}> <Check size={14} className='me-50' /> <span className='align-middle DannaM'>غیر فعال کردن
              </span> </DropdownItem>}
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    )
  }
  }
]
