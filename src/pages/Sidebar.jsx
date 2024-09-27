

import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faChair,
  faBuilding,
  faUser,
  faRupeeSign,
  faFileAlt,
  faCity,
  faGlobeAmericas,
  faPlaceOfWorship,
  faArchway,
  faBox, // Assuming you might need this for 'Product' and 'Category'
  faClipboardList // Assuming this might be used for 'Invoice'
} from "@fortawesome/free-solid-svg-icons";
import "./sidebar.css"; // Ensure the CSS for styling is imported

const sidebarLinks = [
  { path: "/home", label: "Home", icon: faUsers }, // Add home or main dashboard
  { path: "/dash", label: "Dashboard", icon: faUsers }, // Add Dashboard
  { path: "/supplier", label: "Supplier", icon: faUsers }, // Manage Suppliers
  { path: "/category", label: "Category", icon: faClipboardList }, // Manage Categories
  { path: "/product", label: "Product", icon: faBox }, // Manage Products
  { path: "/purchase", label: "Purchase", icon: faFileAlt }, // Manage Purchases
  { path: "/invoice", label: "Invoice", icon: faClipboardList }, // Manage Invoices
  { path: "/customer", label: "Customer", icon: faUsers }, // Manage Customers
  { path: "/hsn", label: "HSN", icon: faBuilding }, // Manage HSN
  { path: "/unit", label: "Unit", icon: faChair }, // Manage Units
  { path: "/taxes", label: "Taxes", icon: faFileAlt } // Manage Taxes
];

const Sidebar = ({ isCollapsed }) => {
  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <h3 style={{fontSize:"20px"}}>{isCollapsed ? "KK" : "KK Gas Agency"}</h3>
      </div>

      {/* Sidebar navigation */}
      <ul className="sidebar-nav">
        {sidebarLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>
              <FontAwesomeIcon icon={link.icon} className="sidebar-icon" />
              {!isCollapsed && <span className="sidebar-label">{link.label}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;





// import React from "react";
// import { Link } from "react-router-dom";
// import "./sidebar.css"; // Ensure the CSS for styling is imported
// import productIcon from '../images/dashicon/product.png';
// import purchaseIcon from '../images/dashicon/purchas.png';
// import stockIcon from '../images/dashicon/stock.png';
// import supplierIcon from '../images/dashicon/supplier.png';
// import taxIcon from '../images/dashicon/tax.png';
// import venderIcon from '../images/dashicon/vender.png';
// import profileIcon from '../images/dashicon/profile.png';
// import sellIcon from '../images/dashicon/sell.png';
// import customerIcon from '../images/dashicon/customer.png';
// import profitIcon from '../images/dashicon/profit.png';

// const sidebarLinks = [
//   { path: "/home", label: "Home", icon: sellIcon }, // Add home or main dashboard
//   { path: "/dash", label: "Dashboard", icon: sellIcon }, // Add Dashboard
//   { path: "/supplier", label: "Supplier", icon: supplierIcon }, // Manage Suppliers
//   { path: "/category", label: "Category", icon: sellIcon }, // Manage Categories
//   { path: "/product", label: "Product", icon: productIcon }, // Manage Products
//   { path: "/purchase", label: "Purchase", icon: purchaseIcon }, // Manage Purchases
//   { path: "/invoice", label: "Invoice", icon: sellIcon }, // Manage Invoices
//   { path: "/customer", label: "Customer", icon: customerIcon }, // Manage Customers
//   { path: "/hsn", label: "HSN", icon: sellIcon }, // Manage HSN
//   { path: "/unit", label: "Unit", icon: sellIcon }, // Manage Units
//   { path: "/taxes", label: "Taxes", icon: taxIcon } // Manage Taxes
// ];

// const Sidebar = ({ isCollapsed }) => {
//   return (
//     <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
//       <div className="sidebar-header">
//         <h3 style={{fontSize:"20px"}}>{isCollapsed ? "KK" : "KK Gas Agency"}</h3>
//       </div>

//       {/* Sidebar navigation */}
//       <ul className="sidebar-nav">
//         {sidebarLinks.map((link, index) => (
//           <li key={index}>
//             <Link to={link.path}>
//             <img src={link.icon} alt={link.name}  style={{ width: '20px', height: '20px' }} />
//               {!isCollapsed && <span className="sidebar-label">{link.label}</span>}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

