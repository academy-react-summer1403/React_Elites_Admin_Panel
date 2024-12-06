import { Button, Input, Modal, ModalBody, ModalHeader } from "reactstrap"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import Add from "./Add"
import Edit from "./Edit"
import { getAllLevel } from "../../../services/api/CourseSetting/Level/get-all-level"

const Level = () => {
    const [allData, setAllData] = useState([])
    const [dataaid, setDataId] = useState(1)
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)

    const getAllData = async () => {
        let allDataArr = await getAllLevel()
        setAllData(allDataArr)
    }

    useEffect(() => {
        getAllData()
    }, [])
  return (
    <div className="settingWrapper">
    <div className="settingTitle DannaM"> سطح ها </div>
    <div className="wrapperEdit">
    <Input className="settingSelect DannaM" type="select">
        {allData.map((item, index) => {
            return (
                <option key={index} onClick={() => setDataId(item.id)}>{item.levelName}</option>
            )
        })}
    </Input>
    <Button color="primary" outline className="DannaM" onClick={() => setShow(true)}> ویرایش </Button>
    <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-sm'>
        <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
        <ModalBody className='px-sm-5 pt-50 pb-5'>
            <Edit dataaid={dataaid} />
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

export {Level}