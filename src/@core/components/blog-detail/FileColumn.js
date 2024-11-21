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
  DownloadCloud
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

const dateConvertor = (date) => {
  let miladiRaw = `${date}`
  let miladi = miladiRaw.slice(0, 10)
  let year = miladi.slice(0, 4)
  let month = miladi.slice(5,7)
  if(month == 1){
    month = "ژانویه"
  }
  else if(month == 2){
    month = "فوریه"
  }
  else if(month == 3){
    month = "مارس"
  }
  else if(month == 4){
    month = "آوریل"
  }
  else if(month == 5){
    month = "می"
  }
  else if(month == 6){
    month = "ژوئن"
  }
  else if(month == 7){
    month = "جولای"
  }
  else if(month == 8){
    month = "آگوست"
  }
  else if(month == 9){
    month = "سپتامبر"
  }
  else if(month == 10){
    month = "اکتبر"
  }
  else if(month == 11){
    month = "نوامبر"
  }
  else if(month == 12){
    month = "دسامبر"
  }
  let day = miladi.slice(8,10)
  let dateMiladii = `${day} ${month} ${year}`
  return dateMiladii
}

// ** Table columns 
export const fileColumn = [
    {
    name: 'فرمت فایل',
    minWidth: '100px',
    cell: row => {
      return (
        <div className='d-flex justify-content-left align-items-center'>
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0 DannaM'>{row.fileFormat}</h6>
          </div>
        </div>
      )
    }
    },
    {
      name: ' دانلود ',
      minWidth: '100px',
      cell: row => {
        return (
          <div className='d-flex justify-content-left align-items-center'>
            <div className='d-flex flex-column'>
              <a className='user-name text-truncate mb-0 DannaM' href={row.fileAddress}> <DownloadCloud /> </a>
            </div>
          </div>
        )
      }
      },
          {
      name: ' زمان اپلود ',
      minWidth: '300px',
      cell: row => {
        return (
          <div className='d-flex justify-content-left align-items-center'>
            <div className='d-flex flex-column'>
              <h6 className='user-name text-truncate mb-0 DannaM'> {dateConvertor(row.insertDate)} </h6>
            </div>
          </div>
        )
      }
      },
]
