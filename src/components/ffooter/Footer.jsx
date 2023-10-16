// import React from 'react';
// // import './Footer.css'
// const Footer = () => {
//   return (
//     <footer className="site-footer">
//       <div className="container">
//         <div className="row">
         
//           <div className="col-md-6">
//             <ul className="social-icons">
//               <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
//               <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
//               <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
//               {/* Add more social icons as needed */}
//             </ul>
//           </div>
//         </div>
//         {/* <div className="col-md-6 ">
//             <p >&copy; {new Date().getFullYear()} Your Website Name. All rights reserved.</p>
//           </div> */}
//           <div className="col-md-6  text-center">
//   <p>&copy; {new Date().getFullYear()} Dot_2_Dot Events. All rights reserved.</p>
// </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
import React from 'react';
import './Footer.css'; // Create a CSS file (Footer.css) for styling

const Footer = () => {
  return (
    <footer className="site-footer" style={{ background: 'black' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ul className="social-icons">
              < li><a href="https://www.facebook.com/profile.php?id=100063645330257&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f">Facebook</i></a></li>
              <li><a href="https://instagram.com/dot2dotevents?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter">Instagram</i></a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram">Twitter</i></a></li> 

              {/* another wa */}
              {/* <li>
  <a href="https://www.instagram.com/your_account" target="_blank" rel="noopener noreferrer">
    <img src="./icons8-instagram-94.png" alt="Instagram" />
  </a>
</li> */}

              {/* Add more social icons as needed */}
            </ul>
          </div>
         
        </div>

        <div className="col-md-6 ">
            <p style={{ color: 'white'}}>
              &copy; {new Date().getFullYear()} Dot_2_Dot Events. All rights reserved.
            </p>
          </div>
      </div>
     
    </footer>
  );
}

export default Footer;
