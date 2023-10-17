// // footer 4
//  import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//  import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';



// const Footer = () => {
//   return (
//     <footer className="footer-container">
//       <div className="social-media-icons">
//         <FontAwesomeIcon icon={faFacebook} />
//         <FontAwesomeIcon icon={faTwitter} />
//         <FontAwesomeIcon icon={faInstagram} />
//         <FontAwesomeIcon icon={faLinkedin} />
//       </div>
//       <p>&copy; 2023 DOT_2_DOT EVENTS</p>
//     </footer>
//   );
// };

// export default Footer;


// old one 
// import React from 'react';
// import './Footer.css'; 

// const Footer = () => {
//   return (
//     <footer className="site-footer" style={{ background: 'black' }}>
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6">
//             <ul className="social-icons">
//               < li><a href="https://www.facebook.com/profile.php?id=100063645330257&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
//               <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
//               <li><a href="https://instagram.com/dot2dotevents?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li> 

        
//             </ul>
//           </div>
         
//         </div>

//         <div className="col-md-6 text-center">
//   <p style={{ color: 'white' }}>
//     &copy; {new Date().getFullYear()} Dot_2_Dot Events. All rights reserved.
//   </p>
// </div>

//       </div>
    
//     </footer>
//   );
// }

// export default Footer;



// footer5

const Footer = () => {
  return (
    <footer className="site-footer" style={{ background: 'black', minHeight: '200px' }}>
      <div className="container d-flex flex-column justify-content-between" style={{ minHeight: '100%' }}>
        <div>
          <div className="col-md-6">
            <ul className="social-icons">
              <li>
                <a href="https://www.facebook.com/profile.php?id=100063645330257&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/dot2dotevents?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <p style={{ color: 'white' }}>
            &copy; {new Date().getFullYear()} Dot_2_Dot Events. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
