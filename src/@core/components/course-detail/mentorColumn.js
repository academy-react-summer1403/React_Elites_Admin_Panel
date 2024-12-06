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
import { dateConvertor } from '../../Functions/DateMiladi'
import { getAssistanceWork } from '../../services/api/CourseManagement/get-assistance-work-with-id'
import { worksColumn } from './works-column'
import DataTable from 'react-data-table-component'
import AddWork from './AddWork'


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
    export const mentorColumn = [
        {
        name: 'نام منتور',
        minWidth: '100px',
        cell: row => {
        return (
            <div className='d-flex justify-content-left align-items-center overflowH'>
            <div className='d-flex flex-column'>
                <h6 className='user-name text-truncate mb-0 DannaM'>{row.assistanceName}</h6>
            </div>
            </div>
        )}
        },
        {
            name: 'تاریخ عضویت',
            minWidth: '100px',
            cell: row => {
            return (
                <div className='d-flex justify-content-left align-items-center overflowH'>
                <div className='d-flex flex-column'>
                    <h6 className='user-name text-truncate mb-0 DannaM'>{dateConvertor(row.inserDate)}</h6>
                </div>
                </div>
            )}
            },
        {
            name: 'عملیات',
            minWidth: '110px',
            cell: row => {
                const [show, setShow] = useState(false)
                const [show2, setShow2] = useState(false)
                const [worksArr, setworksArr] = useState([])
                const [changed, setChanged] = useGlobalState('sthChangedCourseDetail')

                const getWorks = async () => {
                    let res = await getAssistanceWork(row.id)
                    setworksArr(res.assistanceWorkDtos)
                }

                useEffect(() => {
                    getWorks()
                }, [])

                useEffect(() => {
                    getWorks()
                }, [changed])
                
            
            return (
            <div className='column-action d-flex align-items-center'>
                <UncontrolledDropdown>
                <DropdownToggle tag='span'>
                    <h6 className='user-name text-truncate mb-0 DannaM seeWorks' onClick={() => setShow(true)}>لیست کارها</h6>
                    <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-xl'>
                    <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
                    <ModalBody className='px-sm-5 pt-50 pb-5'>
                    <h6 className='user-name text-truncate mb-0 DannaM addWorks' onClick={() => setShow2(true)}>اضافه کردن کار</h6>
                        <Modal isOpen={show2} toggle={() => setShow2(!show2)} className='modal-dialog-centered modal-sm'>
                        <ModalHeader className='bg-transparent' toggle={() => setShow2(!show2)}></ModalHeader>
                        <ModalBody className='px-sm-5 pt-50 pb-5'>
                            <AddWork id={row.id} />
                        </ModalBody>
                        </Modal>
                    <DataTable
                        data={worksArr}
                        columns={worksColumn}
                        className='react-dataTable'
                        responsive={true}
                        highlightOnHover={true}
                    />
                    </ModalBody>
                  </Modal>
                </DropdownToggle>
                </UncontrolledDropdown>
            </div>
            )
        }
        }
]