import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faWhatsapp,
  faInstagram,
  faYoutube,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import './SocialSites.css';




function SocialSites() {
    const socialMediaLinks = [
        { icon: 'data:image/png;base64,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', link: 'https://www.facebook.com/people/Shikshak-Solutions/100092264165249/' },
        { icon: 'https://w7.pngwing.com/pngs/408/296/png-transparent-app-b-w-instagram-logo-media-popular-social-2018-social-media-black-and-white-logos-icon.png', link: 'https://www.instagram.com/shikshak_solutions/' },
        { icon: 'https://www.edigitalagency.com.au/wp-content/uploads/new-linkedin-logo-white-black-png.png', link: 'https://www.linkedin.com/' },
        { icon: 'https://e7.pngegg.com/pngimages/567/358/png-clipart-white-and-black-phone-logo-whatsapp-computer-icons-mobile-phones-logo-black-and-white-text-silhouette.png', link: 'https://api.whatsapp.com/send/?phone=9289583244&text&type=phone_number&app_absent=0' }
    ];

    return (
        <section>
        <div className="main">
         <div className="social-icons">
      <a href="https://www.facebook.com/people/Shikshak-Solutions/100092264165249/" className="fb">
        <FontAwesomeIcon icon={faFacebookF} />
        <span>Facebook</span>
      </a>
      <a href="https://www.instagram.com/shikshak_solutions/" className="insta">
        <FontAwesomeIcon icon={faInstagram} />
        <span>Instagram</span>
      </a>
      <a href="https://www.linkedin.com" className="linkedin">
        <FontAwesomeIcon icon={faLinkedin} />
        <span>LinkedIn</span>
      </a>
      <a href="https://api.whatsapp.com/send/?phone=9289583244&text&type=phone_number&app_absent=0" className="whatsapp">
        <FontAwesomeIcon icon={faWhatsapp} />
        <span>WhatsApp</span>
      </a>
    </div>
    </div>
        </section>
    );
}
export default SocialSites;