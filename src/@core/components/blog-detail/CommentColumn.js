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
  Check,
  DownloadCloud
} from 'react-feather'
import { getBlogCommentReplies } from '../../services/api/BlogManagement/get-blog-comment-replies'
import { putNewsCommennt } from '../../services/api/BlogManagement/putNewsComment'
import { Toaster } from 'react-hot-toast'


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
        <div className='d-flex justify-content-left align-items-center'>
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0 DannaM overflowH2'>{row.autor}</h6>
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
        <div className='d-flex justify-content-left align-items-center'>
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0 DannaM overflowH2'>{row.title}</h6>
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
        <div className='d-flex justify-content-left align-items-center'>
          <div className='d-flex flex-column'>
            <h6 className='user-name text-truncate mb-0 DannaM overflowH2'>{row.describe}</h6>
          </div>
        </div>
      )
    }
    },
    {
      name: 'عملیات',
      minWidth: '110px',
      cell: row => {
        const {id} = useParams()
        const [show, setShow] = useState(false)
        const [Replies, setReplies] = useState([])
        const commentReplies = async () => {
          let res = await getBlogCommentReplies(row.id)
          setReplies(res)
        }
        useEffect(() => {
          commentReplies()
        }, [])
        
        return (
        <div className='column-action d-flex align-items-center'>
          <UncontrolledDropdown>
            <DropdownToggle tag='span'>
              <MoreVertical size={17} className='cursor-pointer' />
            </DropdownToggle>
            <DropdownMenu end>
                <DropdownItem onClick={async () => {
                  let res = await putNewsCommennt({
                    id: row.id,
                    newsId: id,
                    title: row.title,
                    describe: row.describe,
                    accept: true
                  })
                  if(res.success == true){
                    toast.success("کامنت فعال شد")
                  }
                }}> 
                  <Check size={14} className='me-50'/>
                  <span className='align-middle DannaM'>فعال کردن</span> 
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
                              <div className='username'>{row.autor}</div>
                            </div>
                            <div className='titleAndDesc'>
                            <div className='titleComment'>{row.title}</div>
                            <div className='descComment'>{row.describe}</div>
                            </div>
                          </div>
                          <div className='repliesTitle'> پاسخ ها : </div>
                          <div className='addReply'>پاسخ شما</div>
                      {Replies.map((item, index) => {
                        return(
                          <div className='containerComment'>
                            <div className='commmentProfAndUsername'>
                              <img className='profileComment' src={item.imageAddress}/>
                              <div className='username'>{item.autor}</div>
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
