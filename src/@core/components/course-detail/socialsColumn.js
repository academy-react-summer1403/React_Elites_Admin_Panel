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
    Globe
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
    export const socialsColumn = [
        {
        name: 'نام گروه',
        minWidth: '100px',
        cell: row => {
        return (
            <div className='d-flex justify-content-left align-items-center overflowH'>
            <div className='d-flex flex-column'>
                <h6 className='user-name text-truncate mb-0 DannaM'>{row.groupName}</h6>
            </div>
            </div>
        )}
        },
        {
            name: 'لینک گروه',
            minWidth: '100px',
            cell: row => {
            return (
                <div className='d-flex justify-content-left align-items-center overflowH'>
                <div className='d-flex flex-column'>
                    <a href={row.groupLink} className='user-name text-truncate mb-0 DannaM'><Globe /></a>
                </div>
                </div>
            )}
            }
]