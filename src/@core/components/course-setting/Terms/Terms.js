import { Button, Input, Modal, ModalBody, ModalHeader } from "reactstrap"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import EditTerm from "./Edit"
import AddTerm from "./Add"
import { getAllTerms } from "../../../services/api/CourseSetting/Term/get-all-terms"

const Terms = () => {
    const [allTerms, setAllTermsArr] = useState([])
    const [termId, settermId] = useState(1)
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)

    const getAllTermsCall = async () => {
        let allTermsArr = await getAllTerms()
        setAllTermsArr(allTermsArr)
    }

    useEffect(() => {
        getAllTermsCall()
    }, [])
  return (
    <div className="settingWrapper">
    <div className="settingTitle DannaM"> ترم ها </div>
    <div className="wrapperEdit">
    <Input className="settingSelect DannaM" type="select">
        {allTerms.map((item, index) => {
            return (
                <option key={index} onClick={() => settermId(item.id)}>{item.termName}</option>
            )
        })}
    </Input>
    <Button color="primary" outline className="DannaM" onClick={() => setShow(true)}> ویرایش </Button>
    <Modal isOpen={show} toggle={() => setShow(!show)} className='modal-dialog-centered modal-sm'>
        <ModalHeader className='bg-transparent' toggle={() => setShow(!show)}></ModalHeader>
        <ModalBody className='px-sm-5 pt-50 pb-5'>
            <EditTerm termId={termId} />
        </ModalBody>
    </Modal>
    </div>
    <Button color="success" outline className="DannaM" onClick={() => setShow2(true)}> افزودن </Button>
    <Modal isOpen={show2} toggle={() => setShow2(!show2)} className='modal-dialog-centered modal-sm'>
        <ModalHeader className='bg-transparent' toggle={() => setShow2(!show2)}></ModalHeader>
        <ModalBody className='px-sm-5 pt-50 pb-5'>
            <AddTerm />
        </ModalBody>
    </Modal>
</div>
  )
}

export {Terms}