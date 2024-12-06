import { Button, Input, Modal, ModalBody, ModalHeader } from "reactstrap"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import AddTech from "./Add"
import EditTech from "./Edit"
import { getAllTechs } from "../../../services/api/CourseSetting/Techs/get-all-techs"

const Techs = () => {
    const [allTechs, setAllTech] = useState([])
    const [techId, setTechId] = useState(1)
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)

    const getAllTechsCall = async () => {
        let allTechsArr = await getAllTechs()
        setAllTech(allTechsArr)
    }

    useEffect(() => {
        getAllTechsCall()
    }, [])
  return (
    <div className="settingWrapper">
    <div className="settingTitle DannaM"> تکنولوژی ها </div>
    <div className="wrapperEdit">
    <Input className="settingSelect DannaM" type="select">
        {allTechs.map((item, index) => {
            return (
                <option key={index} onClick={() => setTechId(item.id)}>{item.techName}</option>
            )
        })}
    </Input>
    <Button color="primary" outline className="DannaM" onClick={() => setShow(true)}> ویرایش </Button>
    <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-sm'>
        <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
        <ModalBody className='px-sm-5 pt-50 pb-5'>
            <EditTech techId={techId} />
        </ModalBody>
    </Modal>
    </div>
    <Button color="success" outline className="DannaM" onClick={() => setShow2(true)}> افزودن </Button>
    <Modal isOpen={show2} toggle={() => setShow2(!show2)} className='modal-dialog-centered modal-sm'>
        <ModalHeader className='bg-transparent' toggle={() => setShow2(!show2)}></ModalHeader>
        <ModalBody className='px-sm-5 pt-50 pb-5'>
            <AddTech />
        </ModalBody>
    </Modal>
</div>
  )
}

export {Techs}