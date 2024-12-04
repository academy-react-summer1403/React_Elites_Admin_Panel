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
  Check
} from 'react-feather'
import Chart from 'react-apexcharts'
import ModalAddStudentToCousre from './ModalAddStudentToCousre'


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

const identifier = (item, ifFalse, ifTrue) => {
  if(item === true){
    return ifTrue;
  }
  else if(item === false){
    return ifFalse;
  }
}

// ** Table columns 
export const userReservee = [
  {
    name: 'نام',
    minWidth: '200px',
    cell: row => {
      return (
        <div className='d-flex justify-content-left align-items-center'>
          <img className='me-50' src={row.tumbImageAddress && row.tumbImageAddress != "Not-set" ? row.tumbImageAddress : 'https://classapi.sepehracademy.ir///Pictures//Course//blank-thumbnail_4031a67c-6002-4004-baf7-c0840ebed86f.jpg'} width='32' height='32' style={{borderRadius: "100%"}} />
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0 DannaM overflowH2'>{row.courseName}</h6>
          </div>
        </div>
      )
    }
  },
  {
    name: 'تاریخ رزرو',
    minWidth: '200px',
    cell: row => {
      return (
        <div className='d-flex justify-content-left align-items-center'>
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0 DannaM overflowH2'>{dateConvertor(row.reserverDate)}</h6>
          </div>
        </div>
      )
    }
  },
  {
    name: 'وضعیت',
    minWidth: '200px',
    cell: row => {
      return (
        <div className='d-flex justify-content-left align-items-center'>
          <div className='d-flex flex-column'>
            <Badge className='text-capitalize DannaM' color={row.accept ? "light-success" : "light-danger"}>
              {identifier(row.accept, "تایید نشده", "تایید شده")}
            </Badge>
          </div>
        </div>
      )
    }
  },
  {
    name: 'عملیات',
    minWidth: '110px',
    cell: row => {
      console.log(row)
      const [show, setShow] = useState(false)
      return (
      <div className='column-action d-flex align-items-center'>
        <UncontrolledDropdown>
          <DropdownToggle tag='span'>
            <MoreVertical size={17} className='cursor-pointer' />
          </DropdownToggle>
          <DropdownMenu end>
              <DropdownItem  onClick={() => setShow(true)}> 
                <Check size={14} className='me-50'/> 
                <span className='align-middle DannaM'>تایید کردن </span>
                <ModalAddStudentToCousre setShow={setShow} show={show} courseId={row.courseId} />
              </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    )
  }
  }
]
