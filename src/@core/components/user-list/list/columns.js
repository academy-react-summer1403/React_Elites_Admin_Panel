// ** React Imports
import { Fragment, useState, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { store } from '@store/store'
import { deleteInvoice } from '../store'
import { ThemeColors } from '@src/utility/context/ThemeColors'

import AvatarGroup from '@components/avatar-group'

import Administrator from '@src/assets/images/avatars/1.png'
import avatar2 from '@src/assets/images/avatars/2.png'
import avatar3 from '@src/assets/images/avatars/3.png'
import avatar4 from '@src/assets/images/avatars/4.png'
import avatar5 from '@src/assets/images/avatars/5.png'
import avatar6 from '@src/assets/images/avatars/6.png'
import avatar7 from '@src/assets/images/avatars/7.png'
import avatar8 from '@src/assets/images/avatars/8.png'
import avatar9 from '@src/assets/images/avatars/9.png'
import avatar10 from '@src/assets/images/avatars/10.png'
import avatar11 from '@src/assets/images/avatars/11.png'
import avatar12 from '@src/assets/images/avatars/12.png'

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
import Chart from 'react-apexcharts'


// ** Vars
const invoiceStatusObj = {
  Sent: { color: 'light-secondary', icon: Send },
  Paid: { color: 'light-success', icon: CheckCircle },
  Draft: { color: 'light-primary', icon: Save },
  Downloaded: { color: 'light-info', icon: ArrowDownCircle },
  'Past Due': { color: 'light-danger', icon: Info },
  'Partial Payment': { color: 'light-warning', icon: PieChart }
}

const data = [
  {
    title: '',
  },
  {
    title: 'Teacher',
  },
  {
    title: 'Employee Admin',
  },
  {
    title: 'Employee Writer',
  },
  {
    title: 'Student'
  },
  {
    title: 'CourseAssistance'
  },
  {
    title: 'TournamentAdmin'
  },
  {
    title: 'TournamentMentor'
  },
  {
    title: 'Support'
  }
]

// ** Table columns 
export const columns = [
  {
    name: 'نام',
    minWidth: '200px',
    cell: row => {
      const name = `${row.fname} ${row.lname}`
      return (
        <div className='d-flex justify-content-left align-items-center'>
          <img className='me-50' src={row.pictureAddress && row.pictureAddress != "Not-set" ? row.pictureAddress : 'https://classapi.sepehracademy.ir///Pictures//Course//blank-thumbnail_4031a67c-6002-4004-baf7-c0840ebed86f.jpg'} width='32' height='32' style={{borderRadius: "100%"}} />
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0 DannaM overflowH2'>{name}</h6>
          </div>
        </div>
      )
    }
  },
  {
    name: 'جنسیت',
    minWidth: '200px',
    cell: row => {
      const genderIdentifier =(item)=> {
        if(item.gender === true){
          return <img src='https://img.icons8.com/?size=100&id=8vsjJt13MQHk&format=png&color=000000' width={30} height={30} />
        }
        else if(item.gender === false){
          return <img src='https://img.icons8.com/?size=100&id=GwYVu5UZRjBe&format=png&color=000000' width={30} height={30} />
        }
      }
      return (
        <div className='d-flex justify-content-left align-items-center'>
          <div className='d-flex flex-column'>
            {genderIdentifier(row)}
          </div>
        </div>
      )
    }
  },
  {
    name: 'فعال / غیرفعال',
    minWidth: '200px',
    cell: row => {
      const statusIdentifier = (item) => {
        if(item.active === "True"){
          return "فعال";
        }
        else if(item.active === "False"){
          return "غیر فعال";
        }
      }
      return (
        <div className='d-flex justify-content-left align-items-center'>
          <div className='d-flex flex-column'>
          <Badge color={row.active === "True" ? "light-success" : "light-danger"} className={row.active === "True" ?  "activeD" : "notActive"}>{statusIdentifier(row)}</Badge>
          </div>
        </div>
      )
    }
  },
    {
    name: 'درصد تکمیل پروفایل',
    minWidth: '200px',
    cell: row => {
      const { colors } = useContext(ThemeColors)
      const trackBgColor = '#e9ecef'
      var chart = {
        type: 'radialBar',
        height: 70,
        width: 70,
        options: {
          grid: {
            show: false,
            padding: {
              left: -15,
              right: -15,
              top: -12,
              bottom: -15
            }
          },
          colors: [colors.primary.main],
          plotOptions: {
            radialBar: {
              hollow: {
                size: '22%'
              },
              track: {
                background: trackBgColor
              },
              dataLabels: {
                showOn: "never",
                name: {
                  show: false
                },
                value: {
                  show: false,
                  color: "#111",
                  fontSize: "12px",
                }
              }
            }
          },
          stroke: {
            lineCap: 'round'
          }
        }
      }
      return (
        <div className='d-flex justify-content-left align-items-center'>
          <div className='d-flex flex-column marginR'>
          <Chart
                    options={chart.options}
                    series={[Number(row.profileCompletionPercentage)]}
                    type={chart.type}
                    height={45}
                    width={45}
            />
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
        <NavLink to={"/user-management/detail/" + row.id}>
          <Eye size={17} className='mx-1' />
        </NavLink>
        <UncontrolledDropdown>
          <DropdownToggle tag='span'>
            <MoreVertical size={17} className='cursor-pointer' />
          </DropdownToggle>
          <DropdownMenu end>
            <DropdownItem className='w-100'>
              <Edit size={14} className='me-50' />
              <span className='align-middle DannaM'>ویرایش</span>
            </DropdownItem>
            {/* {row.isdelete === false ?
              <DropdownItem onClick={() => deleteCourse()}> <Trash size={14} className='me-50'/> <span className='align-middle DannaM'>حذف کردن
              </span> </DropdownItem>
              :
              <DropdownItem onClick={ async () => {
                let res = await deleteCourse({
                  active: false,
                  id: `${row.courseId}`
                })
              }} > <Check size={14} className='me-50' /> <span className='align-middle DannaM'> ریکاوری 
              </span> </DropdownItem>}
            {row.isActive === false ? 
              <DropdownItem onClick={ async () => {
                let res = await activeCourse({
                  active: true, 
                  id: `${row.courseId}`
                })
              }}> <Check size={14} className='me-50' /> <span className='align-middle DannaM' >فعال کردن
              </span> </DropdownItem> 
              : 
              <DropdownItem onClick={ async () => {
                let res = await activeCourse({
                  active: false, 
                  id: `${row.courseId}`
                })
                }}> <Check size={14} className='me-50' /> <span className='align-middle DannaM'>غیر فعال کردن
              </span> </DropdownItem>} */}
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    )
  }
  }
]
