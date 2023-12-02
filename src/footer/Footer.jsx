import "./footer.css";
import {FaFacebook,FaInstagram,FaTwitter} from 'react-icons/fa';
const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem"><span>Mens</span></li>
          <li className="fListItem"><span>Womens</span></li>
          <li className="fListItem"><span>Kids</span></li>
          <li className="fListItem"><span>New Arrivals</span></li>
          <li className="fListItem"><span>SS'23</span></li>
          <li className="fListItem"><span>Track Order</span></li>
        </ul>
        <ul className="fList">
          <li className="fListItem"><span>Corporate</span></li>
          <li className="fListItem"><span>Blogs</span></li>
          <li className="fListItem"><span>For Online Orders</span></li>
          <li className="fListItem"><span>Get In Touch</span></li>
          <li className="fListItem"><span>Inquiry/Complaint:
9667706012
10.00AM to 7:00PM</span></li>
          <li className="fListItem"><span>Any Other queries:
9667706012
10.00AM to 7:00PM</span></li>
<li><FaFacebook size={22}/>
     <FaInstagram size={22}/>
     <FaTwitter size={22}/>
</li>
        </ul>
        
        {/* <ul className="fList">
          <li className="fListItem"><span>Unique places to stay</span> </li>
          <li className="fListItem"><span>Reviews</span></li>
          <li className="fListItem"><span>Unpacked: Travel articles</span></li>
          <li className="fListItem"><span>Travel communities</span></li>
          <li className="fListItem"><span>Seasonal and holiday deals</span></li>
        </ul> */}
        {/* <ul className="fList">
          <li className="fListItem"><span>Car rental</span></li>
          <li className="fListItem"><span>Flight Finder</span></li>
          <li className="fListItem"><span>Restaurant reservations</span></li>
          <li className="fListItem"><span>Travel Agents</span></li>
        </ul> */}
        <ul className="fList">
          <li className="fListItem"><span>Curtomer Service</span></li>
          <li className="fListItem"><span>Partner Help</span></li>
          <li className="fListItem"><span>Careers</span></li>
          <li className="fListItem"><span>Sustainability</span></li>
          <li className="fListItem"><span>Press center</span></li>
          <li className="fListItem"><span>Safety Resource Center</span></li>
          <li className="fListItem"><span>Investor relations</span></li>
          <li className="fListItem"><span>Terms & conditions</span></li>
        </ul>
      </div>
      <div className="fText"><h3>Copyright © 2023  SHOPNOW PVT. LTD.

Country India </h3></div>
   {/* <div className="flist">
    <a href="https://www.instagram.com/makemytrip/">
      <FaFacebook size={22}/>
    </a>
    <a href="https://www.instagram.com/makemytrip/">
      <FaInstagram size={22}/>
    </a>
    <a href="https://twitter.com/makemytripcare">
      <FaTwitter size={22} />
    </a>
   </div> */}
    </div>
  );
};

export default Footer;