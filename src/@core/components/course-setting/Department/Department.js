import { Button, Input, Modal, ModalBody, ModalHeader } from "reactstrap"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import Add from "./Add"
import Edit from "./Edit"
import { getAllDepartment } from "../../../services/api/CourseSetting/Department/get-all-department"

const Department = () => {
    const [allData, setAllData] = useState([])
    const [idItem, setDataId] = useState(1)
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)

    const getAllData = async () => {
        let allDataArr = await getAllDepartment()
        setAllData(allDataArr)
    }

    useEffect(() => {
        getAllData()
    }, [])
  return (
    <div className="settingWrapper">
    <div className="settingTitle DannaM"> دپارتمان ها </div>
    <div className="wrapperEdit">
    <Input className="settingSelect DannaM" type="select">
        {allData.map((item, index) => {
            return (
                <option key={index} onClick={() => setDataId(item.id)}>{item.depName}</option>
            )
        })}
    </Input>
    <Button color="primary" outline className="DannaM" onClick={() => setShow(true)}> ویرایش </Button>
    <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-sm'>
        <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
        <ModalBody className='px-sm-5 pt-50 pb-5'>
            <Edit idItem={idItem} />
        </ModalBody>
    </Modal>
    </div>
    <Button color="success" outline className="DannaM" onClick={() => setShow2(true)}> افزودن </Button>
    <Modal isOpen={show2} toggle={() => setShow2(!show2)} className='modal-dialog-centered modal-sm'>
        <ModalHeader className='bg-transparent' toggle={() => setShow2(!show2)}></ModalHeader>
        <ModalBody className='px-sm-5 pt-50 pb-5'>
            <Add />
        </ModalBody>
    </Modal>
</div>
  )
}

export {Department}