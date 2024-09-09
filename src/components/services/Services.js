import './Services.css'
import clinicalDevelopment from '../../assets/clinical-development.png';
import medicalAffair from '../../assets/medical-affairs.png';
import pvDrug from '../../assets/drug-safety.png';
import dataManagment from '../../assets/data-management.png';
import medicalWriting from '../../assets/medical-writing.png';
import edcSystem from '../../assets/edc-system.png';
import infoTech from '../../assets/information-tech.png';

const Services = () => {
  const cards = [
    {name: 'Clinical Development', icon: clinicalDevelopment, desc: 'please tell your friends about the best css templates website that is TemplateMO'},
    {name: 'Medical Affairs', icon: medicalAffair, desc: 'please tell your friends about the best css templates website that is TemplateMO'},
    {name: 'PV / Drug Safety', icon: pvDrug, desc: 'please tell your friends about the best css templates website that is TemplateMO'},
    {name: 'Data Management', icon: dataManagment, desc: 'please tell your friends about the best css templates website that is TemplateMO'},
    {name: 'Medical Writing', icon: medicalWriting, desc: 'please tell your friends about the best css templates website that is TemplateMO'},
    {name: 'EDC System', icon: edcSystem, desc: 'please tell your friends about the best css templates website that is TemplateMO'},
    {name: 'Info Tech', icon: infoTech, desc: 'please tell your friends about the best css templates website that is TemplateMO'},
  ];

  return (
    <div className='services-main-section flex flex-col w-full h-screen items-center justify-center gap-10'>
      <div className='services-heading'>
          <p >OUR SERVICES</p>
          <h3 >Provided <span> Services </span> </h3>
      </div>
      <div className='service-card-main-section'>
      <div className="service-second-main">
      <div
        className="service-cards-section-div"
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="service-card"
          >
           <img src={card.icon} alt='icon' />
           <h3>{card.name}</h3>
           <p >{card.desc}</p> 
          </div>
        ))}
      </div>
    </div>
      </div>
    </div>
  );
};

export default Services;
