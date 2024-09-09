import React from 'react'
import './Offers.css';

const Offers = () => {
  return (
    <div className='offers-main-div w-full h-auto py-5 px-40'>
        <div className='offers-bg'>
            
            <div className='offers-left-section'>
                <h3 >What we offer:</h3>
                <div className='offers-para-section'>
                    <h3 >Clinical Development</h3>
                    <p >
                        Our MDs can also help leading Data Safety Monitoring Board meetings. 
                        We provide Data Analysis and Interpretation services, including medical 
                        monitoring, medical data review, preparation of reports and slides 
                        presentations, and all meeting related activities.
                    </p>
                    
                    
                </div>
                <div className='offers-para-section'>
                    <h3>Medical Affairs</h3>
                    <p>
                        In addition, we provide medical monitoring services. Our team has experience 
                        in both, early and late-stage development, and has been involved in pivotal 
                        trials which ended in an FDA approval.
                    </p>
                </div>
                <div className='offers-para-section'>
                    <h3 >PV / Drug Safety</h3>
                    <p >
                        SMED CR also provides support with any other particular data presentation 
                        (Investigator Meetings, Investors Meetings, etc) or scientific brochures 
                        for training or marketing purposes.
                    </p>
                </div>
                <div className='offers-para-section'>
                    <h3 >Data Management</h3>
                    <p >
                        Our team of experienced medical professionals provides expert advice and 
                        guidance on clinical research studies, drug development, and regulatory compliance.
                    </p>
                </div>
            </div>
            <div className='offers-left-section'>
                <div className='offers-para-section' style={{marginTop: '48px'}}>
                    <h3 >Medical writing</h3>
                    <p >
                        We offer comprehensive medical writing services, including protocol 
                        development, clinical study reports, patient informed consent forms, 
                        manuscripts, and all protocol related documents for regulatory submissions.
                    </p>
                </div>
                <div className='offers-para-section' style={{marginTop: '15px'}}>
                    <h3>EDC System</h3>
                    <p >
                        Our MDs prepare reports that can be tailored by indication, study status 
                        or others. The reports are written from a medical perspective, and then 
                        updated with all market analysis and financial insights.
                    </p>
                    <p>
                        Concise and easily-digestible story of unmet need and market opportunity size 
                        are the basis.
                    </p>
                </div>
                <div className='offers-para-section' style={{marginTop: '50px'}}>
                    <h3 >Information Technology</h3>
                    <p>
                        We offer comprehensive medical writing services, including protocol 
                        development, clinical study reports, patient informed consent forms, 
                        manuscripts, and all protocol related documents for regulatory submissions.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Offers
