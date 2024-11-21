// ** React Imports
import { Fragment, useState, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Store & Actions
import { store } from '@store/store'
import { deleteInvoice } from '../store'
import { ThemeColors } from '@src/utility/context/ThemeColors'

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
    name: 'نقش ها',
    minWidth: '200px',
    
    cell: row => {
      return (
        <div className='d-flex justify-content-left align-items-center'>
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0 DannaM overflowH2 rtl'>{row.userRoles}</h6>
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
          return "مذکر"
        }
        else if(item.gender === false){
          return "موٌِنث"
        }
      }
      return (
        <div className='d-flex justify-content-left align-items-center'>
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0 DannaM overflowH2 rtl'>{genderIdentifier(row)}</h6>
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
        series: [45],
        height: 30,
        width: 30,
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
                showOn: 'always',
                name: {
                  show: false
                },
                value: {
                  show: false
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
          <h6 className='user-name text-truncate mb-0 DannaM'>% {row.profileCompletionPercentage}</h6>
          <div className='d-flex flex-column marginR'>
          <Chart
                    options={chart.options}
                    series={[Number(row.profileCompletionPercentage)]}
                    type={chart.type}
                    height={chart.height}
                    width={chart.width}
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
