// ** React Imports
import { Fragment, useEffect, useState } from 'react'
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
  Delete
} from 'react-feather'
import { deleteCourse } from '../../../services/api/CourseManagement/delete-course'
import { activeCourse } from '../../../services/api/CourseManagement/active-course'
import toast from 'react-hot-toast'
import { getCourseCommentReply } from '../../../services/api/CourseManagement/get-course-comment-reply'
import { postCourseCommentAccept } from '../../../services/api/CourseManagement/post-course-comment-accept'
import ColumnReply from './ColumnReply'
import { deleteCourseComment } from '../../../services/api/CommentManagement/delete-course-comment'
import { useGlobalState } from '../../../state/state'


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
    minWidth: '150px',
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
    name: 'نام کاربر',
    minWidth: '150px',
    cell: row => {
      return (
        <div className='d-flex justify-content-left align-items-center'>
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0 DannaM overflowH'>{row.userFullName}</h6>
          </div>
        </div>
      )
    }
  },
  {
    name: 'عنوان',
    minWidth: '150px',
    cell: row => {
      return (
        <div className='d-flex justify-content-left align-items-center'>
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0 DannaM overflowH'>{row.commentTitle}</h6>
          </div>
        </div>
      )
    }
  },
  {
    name: 'توضیحات',
    minWidth: '250px',
    cell: row => {
      return (
        <div className='d-flex justify-content-left align-items-center'>
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0 DannaM overflowH'>{row.describe}</h6>
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
        if(item.accept === true){
          return "فعال";
        }
        else if(item.accept === false){
          return "غیر فعال";
        }
      }
      return (
        <div className='d-flex align-items-center justifyRight w100'>
          <div className='d-flex flex-column justifyCenter'>
            <Badge color={row.accept === true ? "light-success" : "light-danger"} className={row.accept ?  "activeD" : "notActive"}>{statusIdentifier(row)}</Badge>
          </div>
        </div>
      )
    }
  },
  {
    name: 'عملیات',
    minWidth: '110px',
    cell: row => {
      const [show, setShow] = useState(false)
      const [show2, setShow2] = useState(false)
      const [Replies, setReplies] = useState([])
      const [changed, setChanged] = useGlobalState('sthChangedCommentList')
      const commentReplies = async () => {
        let res = await getCourseCommentReply(row.courseId, row.commentId)
        setReplies(res)
      }
      useEffect(() => {
        commentReplies()
      }, [])
      useEffect(() => {
        commentReplies()
      }, [changed])
      return (
      <div className='column-action d-flex align-items-center'>
        <UncontrolledDropdown>
          <DropdownToggle tag='span'>
            <MoreVertical size={17} className='cursor-pointer' />
          </DropdownToggle>
                <DropdownMenu end>
                  {row.accept == false && 
                  <DropdownItem onClick={async () => {
                    let res = await postCourseCommentAccept(row.commentId)
                    if(res.success == true){
                      toast.success("کامنت فعال شد")
                      setChanged(!changed)
                    }
                  }}> 
                    <Check size={14} className='me-50'/>
                    <span className='align-middle DannaM'>فعال کردن</span> 
                  </DropdownItem>}
                  <DropdownItem onClick={async () => {
                    let res = await deleteCourseComment(row.commentId)
                    if(res.success == true){
                      toast.success("کامنت حذف شد")
                      setChanged(!changed)
                    }
                  }}> 
                    <Delete size={14} className='me-50'/>
                    <span className='align-middle DannaM'>حذف کردن</span> 
                  </DropdownItem>
                  <DropdownItem> 
                    <Eye size={14} className='me-50'/>
                    <span className='align-middle DannaM' onClick={() => setShow(true)}>مشاهده</span> 
                    <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-lg'>
                      <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
                      <ModalBody className='px-sm-5 pt-50 pb-5'>
                      <div className='containerMainComment'>
                              <div className='commmentProfAndUsername'>
                                <img className='profileComment' src={row.pictureAddress}/>
                                <div className='username'>{row.userFullName}</div>
                              </div>
                              <div className='titleAndDesc'>
                              <div className='titleComment'>{row.commentTitle}</div>
                              <div className='descComment'>{row.describe}</div>
                              </div>
                            </div>
                            <div className='repliesTitle'> پاسخ ها : </div>
                            <div className='addReply' onClick={() => setShow2(true)}>پاسخ شما</div>
                            <Modal isOpen={show2} toggle={() => setShow2(!show2)} className='modal-dialog-centered modal-lg'>
                              <ModalHeader className='bg-transparent' toggle={() => setShow2(!show2)}></ModalHeader>
                              <ModalBody>
                                <ColumnReply courseId={row.courseId} commentId={row.commentId} />
                              </ModalBody>
                            </Modal>
                        {Replies.map((item, index) => {
                          return(
                            <div className='containerComment'>
                              <div className='commmentProfAndUsername'>
                                <img className='profileComment' src={item.pictureAddress}/>
                                <div className='username'>{item.author}</div>
                              </div>
                              <div className='titleAndDesc'>
                              <div className='titleComment'>{item.title}</div>
                              <div className='descComment'>{item.describe}</div>
                              </div>
                              
                            </div>
                          )
                        })}
                      </ModalBody>
                    </Modal>
                  </DropdownItem>
                  </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    )
  }
  }
]
