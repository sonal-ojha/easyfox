import React from 'react';
import './footer.css';

function Footer(props) {
    return (
        <div className="footer">
           <div className="download_btn_container">
               <button className="download_pdf_btn">
                   Download for free
               </button>
           </div>
        </div>
    );
}

export default Footer;