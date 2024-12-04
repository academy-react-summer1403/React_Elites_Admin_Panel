// ** React Imports
import { Fragment, useEffect, useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'


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
import { postCourseCommentAccept } from '../../services/api/CourseManagement/post-course-comment-accept'
import toast from 'react-hot-toast'
import { getCourseCommentReply } from '../../services/api/CourseManagement/get-course-comment-reply'
import ColumnReply from './ColumnReply'
import { useGlobalState } from '../../state/state'


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
export const commentColumn = [
    {
    name: 'نام کاربر',
    minWidth: '100px',
    cell: row => {
      return (
        <div className='d-flex justify-content-left align-items-center overflowH'>
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0 DannaM'>{row.author}</h6>
          </div>
        </div>
      )
    }
    },
    {
      name: 'عنوان',
      minWidth: '100px',
      cell: row => {
        return (
          <div className='d-flex justify-content-left align-items-center overflowH'>
            <div className='d-flex flex-column'>
              <h6 className='user-name text-truncate mb-0 DannaM'>{row.title}</h6>
            </div>
          </div>
        )
      }
    },
    {
      name: 'توضیحات',
      minWidth: '100px',
      cell: row => {
        return (
          <div className='d-flex justify-content-left align-items-center overflowH'>
            <div className='d-flex flex-column'>
              <h6 className='user-name text-truncate mb-0 DannaM'>{row.describe}</h6>
            </div>
          </div>
        )
      }
    },
    {
      name: 'وضعیت',
      minWidth: '100px',
      cell: row => {
        const statusIdentifier = (row) => {
          if(row.accept === true){
            return "فعال";
          }
          else if(row.accept === false){
            return "غیرفعال";
          }
        } 
        return (
          <div className='d-flex justify-content-left align-items-center overflowH'>
            <div className='d-flex flex-column'>
              <Badge color={row.accept === true ? "light-success" : "light-danger"} className='user-name text-truncate mb-0 DannaM'>{statusIdentifier(row)}</Badge>
            </div>
          </div>
        )
      }},
      {
        name: 'عملیات',
        minWidth: '110px',
        cell: row => {
          const [changed, setChanged] = useGlobalState('sthChangedCourseDetail')
          const {id} = useParams()
          const [show, setShow] = useState(false)
          const [show2, setShow2] = useState(false)
          const [Replies, setReplies] = useState([])
          const commentReplies = async () => {
            let res = await getCourseCommentReply(id, row.id)
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
                  {row.accept == false && <DropdownItem onClick={async () => {
                    let res = await postCourseCommentAccept(row.id)
                    if(res.success == true){
                      toast.success("کامنت فعال شد")
                    }
                  }}> 
                    <Check size={14} className='me-50'/>
                    <span className='align-middle DannaM'>فعال کردن</span> 
                  </DropdownItem>}
                  <DropdownItem> 
                    <Eye size={14} className='me-50'/>
                    <span className='align-middle DannaM' onClick={() => setShow(!show)}>مشاهده</span> 
                    <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-lg'>
                      <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
                      <ModalBody className='px-sm-5 pt-50 pb-5'>
                      <div className='containerMainComment'>
                              <div className='commmentProfAndUsername'>
                                <img className='profileComment' src={row.pictureAddress}/>
                                <div className='username'>{row.author}</div>
                              </div>
                              <div className='titleAndDesc'>
                              <div className='titleComment'>{row.title}</div>
                              <div className='descComment'>{row.describe}</div>
                              </div>
                            </div>
                            <div className='repliesTitle'> پاسخ ها : </div>
                            <div className='addReply' onClick={() => setShow2(true)}>پاسخ شما</div>
                            <Modal isOpen={show2} toggle={() => setShow2(!show2)} className='modal-dialog-centered modal-lg'>
                              <ModalHeader className='bg-transparent' toggle={() => setShow2(!show2)}></ModalHeader>
                              <ModalBody>
                                <ColumnReply commentId={row.id} />
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
