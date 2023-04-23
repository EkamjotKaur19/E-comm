import React from 'react'
import { member } from './data'
import "./Team.css"

const Team = ({darkMode}) => {
  return (
    <div className="responsive-container-block container">
  <p className={darkMode ? "text-blk-dark team-head-text" : "text-blk team-head-text"}>
    Our Team
  </p>
  
    <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
      <div className="card">
        <div className="team-image-wrapper">
          <img className="team-member-image" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/expert2.png"/>
        </div>
        <p className="text-blk name">
          Sanchit Chhabra
        </p>
        <p className="text-blk position">
          Web Developer
        </p>
        <p className="text-blk feature-text">
          CSE-III, UIET, PU
        </p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/sanchit-chhabra-134160213/" target="_blank">
          <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://www.instagram.com/sanchitchhabra16/" target="_blank">
          <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
    <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
      <div className="card">
        <div className="team-image-wrapper">
          <img className="team-member-image" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET7.14.png"/>
        </div>
        <p className="text-blk name">
          Ekamjot
        </p>
        <p className="text-blk position">
          CEO
        </p>
        <p className="text-blk feature-text">
          CSE-III, UIET, PU
        </p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/ekamjot-kaur-70a440259/" target="_blank">
          <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://www.instagram.com/ekamjot.kaur_19/" target="_blank">
          <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
    <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
      <div className="card">
        <div className="team-image-wrapper">
          <img className="team-member-image" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET7.15.png"/>
        </div>
        <p className="text-blk name">
          Ekamjot
        </p>
        <p className="text-blk position">
          Web Developer
        </p>
        <p className="text-blk feature-text">
          CSE-III, UIET, PU
        </p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/ekamjot-kaur-70a440259/" target="_blank">
          <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://www.instagram.com/ekamjot.kaur_19/" target="_blank">
          <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
  </div>
</div>
  )
}

export default Team
