// ** Icons Imports
import { Check, X } from 'react-feather'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardText, Input, Label } from 'reactstrap'

const CustomLabel = ({ htmlFor }) => {
  return (
    <Label className='form-check-label' htmlFor={htmlFor}>
      <span className='switch-icon-left'>
        <Check size={14} />
      </span>
      <span className='switch-icon-right'>
        <X size={14} />
      </span>
    </Label>
  )
}

const SwitchIcons = () => {
  return (
    <div className='addRoleContainer'>
                <div className='d-flex flex-column'>
            <Label for='icon-primary' className='form-check-label mb-50 DannaM'>
              استاد
            </Label>
            <div className='form-switch form-check-primary'>
              <Input type='switch' defaultChecked id='icon-primary' name='icon-primary' />
              <CustomLabel htmlFor='icon-primary' />
            </div>
          </div>
                    <div className='d-flex flex-column'>
                                            <Label for='icon-primaryy' className='form-check-label mb-50 DannaM'>
                      دانش آموز
                    </Label>
                    <div className='form-switch form-check-primary'>
                      <Input type='switch' defaultChecked id='icon-primaryy' name='icon-primaryy' />
                      <CustomLabel htmlFor='icon-primaryy' />
                    </div>
                    </div>
    </div>

  )
}
export default SwitchIcons
