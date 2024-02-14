import React from 'react'
import "./Certificate.css"

import Certificate from './Certificate'
import { AllCertificateDetails } from '../../utils/data'

const Certifications = () => {
  return (
    <div className='articles-section'>
        <div className='connect'>CERTIFICATES</div>
        
        {
          AllCertificateDetails.map(eachCertificateDetails => {
            return <Certificate  certificateDetials={eachCertificateDetails}/>
          })
        }
        
    </div>
  )
}

export default Certifications