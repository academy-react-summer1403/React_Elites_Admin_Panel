// ** React Imports
import { Fragment, useState } from 'react'

// ** Reactstrap Imports
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import EditCourseForm from './edit-course-form'

const ModalConfig = [
  {
    id: 5,
    btnTitle: 'افزودن کاربر',
    modalTitle: 'Extra Large Modal',
    modalClass: 'modal-xl'
  },
]

const ModalSizes = () => {
  // ** State
  const [modal, setModal] = useState(null)

  const toggleModal = id => {
    if (modal !== id) {
      setModal(id)
    } else {
      setModal(null)
    }
  }

  const renderModal = ModalConfig.map(item => {
    return (
      <Fragment key={item.id}>
          <Button color='primary' className='DannaM' onClick={() => toggleModal(item.id)} key={item.title}>
            {item.btnTitle}
          </Button>
        <Modal
          key={item.id}
          isOpen={modal === item.id}
          toggle={() => toggleModal(item.id)}
          className={`modal-dialog-centered ${item.modalClass}`}
        >
          <ModalHeader toggle={() => toggleModal(item.id)}>
            ساخت کاربر
          </ModalHeader>
          <ModalBody>
          <EditCourseForm/>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </Modal>
      </Fragment>
    )
  })

  return renderModal
}
export default ModalSizes
