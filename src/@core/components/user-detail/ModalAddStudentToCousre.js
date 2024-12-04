import React, { useEffect, useState } from 'react'
import { Badge, Modal, ModalBody, ModalHeader } from 'reactstrap'
import { getCourseGroup } from '../../services/api/CourseManagement/course-group-by-id'
import { getCourseById } from '../../services/api/CourseManagement/course-detail'
import { putCourseReserve } from '../../services/api/UserManagement/put-course-reserve'
import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useGlobalState } from '../../state/state'

const ModalAddStudentToCousre = ({setShow, show, courseId}) => {
    
    const [data, setdata] = useState([])
    const [changed, setChanged] = useGlobalState('sthChangedUserDetail')

    const { id } = useParams()

    const getCourseGroupp = async (courseId) =>{
        let detail = await getCourseById(courseId)
        let res = await getCourseGroup(detail?.teacherId, courseId)
        setdata(res)
    }

    const submitCourse = async () => {
        let res = await putCourseReserve({
            courseId: courseId,
            courseGroupId: groupId,
            studentId: id
        })
        
        if(res.success == true){
            toast.success("دانش آموز به دوره اضافه شد")
        }
        setChanged(!changed)
    }

    const [groupId, setgroupId] = useState(0)


    useEffect(() => {
        getCourseGroupp(courseId)
    }, [])
    

  return (
    <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-lg'>
        <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}>

        </ModalHeader>
        <ModalBody className='px-sm-5 pt-50 pb-5 DannaM'> گروه را انتخاب کنید :
            {data.map((item, index) => {
                return(
                    <div className='groupContainer'>
                        <div className='groupName'>نام : {item.groupName}</div>
                        <div className='teacherName'>منتور : {item.teacherName}</div>
                        <div className='groupCapacity'>ظرفیت : {item.groupCapacity}</div>
                        <input type='radio' name='groups' onChange={() => setgroupId(item.groupId)} />
                    </div>
                )
            })}
            <Badge className='submitCourseStudent DannaM' color='primary' onClick={() => submitCourse()}> ثبت </Badge>
        </ModalBody>
  </Modal>
  )
}

export default ModalAddStudentToCousre