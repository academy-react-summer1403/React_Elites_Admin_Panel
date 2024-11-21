// ** React Imports
import { useEffect, useRef, useState } from 'react'

// ** Custom Components
import Wizard from '@components/wizard'

// ** Steps
import AccountDetails from './steps-with-validation/AccountDetails'

// ** Icons Imports
import { FileText, User, MapPin, Link, Info, File, Image, Layers, Clipboard } from 'react-feather'
import { getBlogCategory } from '../../services/api/BlogManagement/get-blog-category'

const WizardModernVertical = () => {
  
  // ** Ref
  const ref = useRef(null)

  // ** State
  const [stepper, setStepper] = useState(null)

  const [BlogCategory, setBlogCategory] = useState([])

  const getCreateBlogCall = async () => {
    let res = await getBlogCategory()
    setBlogCategory(res)
  }


  useEffect(() => {
    getCreateBlogCall()
  }, [])
  

  const steps = [
    {
      id: 'account-details',
      title: 'اطلاعات بلاگ',
      subtitle: 'اطلاعات بلاگ را وارد کنید',
      icon: <Info size={18} />,
      content: <AccountDetails BlogCategory={BlogCategory} stepper={stepper} type='modern-vertical' />
    },
  ]

  return (
    <div className='modern-vertical-wizard'>
      <Wizard
        type='modern-vertical'
        ref={ref}
        steps={steps}
        options={{
          linear: false
        }}
        instance={el => setStepper(el)}
      />
    </div>
  )
}

export default WizardModernVertical
