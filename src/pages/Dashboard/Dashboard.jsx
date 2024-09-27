// import React from 'react';
// import { Link } from 'react-router-dom'; // Use React Router for navigation

// // Import the uploaded images
// import productIcon from '../../images/dashicon/product.png';
// import purchaseIcon from '../../images/dashicon/purchas.png';
// import stockIcon from '../../images/dashicon/stock.png';

// const Dashboard = () => {
//   const options = [
//     {
//       name: 'Purchase',
//       icon: purchaseIcon,
//       link: '/purchase'
//     },
//     {
//       name: 'Suppliers',
//       icon: productIcon, // Example of using the product icon for Suppliers
//       link: '/suppliers'
//     },
//     {
//       name: 'Stock',
//       icon: stockIcon,
//       link: '/stock'
//     }
//     // Add more options as needed
//   ];

//   return (
//     <div className="container-fluid px-3">
//       {/* Options Grid */}
//       <div className="row text-center g-3">
//         {options.map((option, index) => (
//           <div key={index} className="col-6 col-md-4 col-lg-2">
//             <Link to={option.link} className="text-decoration-none">
//               <div className="card shadow-sm border-0 h-100">
//                 <div className="card-body d-flex flex-column justify-content-center align-items-center">
//                   {/* Display the uploaded image */}
//                   <img src={option.icon} alt={option.name} className="mb-3" style={{ width: '36px', height: '36px' }} />
//                   <h5 className="card-title">{option.name}</h5>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>

//       {/* Terms and Conditions */}
//       <div className="mt-5">
//         <h4>Terms & Conditions</h4>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit
//           amet accumsan arcu. Nulla facilisi. Nam eget aliquam ligula. Nullam
//           posuere faucibus leo, in placerat nulla gravida at. Fusce efficitur
//           vehicula est, ut pretium sapien efficitur nec.
//         </p>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
//           rhoncus pharetra pharetra. Cras dictum felis sit amet orci feugiat,
//           et condimentum purus mattis.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React from 'react';
import { Link } from 'react-router-dom'; // Use React Router for navigation
// Import the uploaded images
import productIcon from '../../images/dashicon/product.png';
import purchaseIcon from '../../images/dashicon/purchas.png';
import stockIcon from '../../images/dashicon/stock.png';
import supplierIcon from '../../images/dashicon/supplier.png';
import taxIcon from '../../images/dashicon/tax.png';
import venderIcon from '../../images/dashicon/vender.png';
import profileIcon from '../../images/dashicon/profile.png';
import sellIcon from '../../images/dashicon/sell.png';
import customerIcon from '../../images/dashicon/customer.png';
import profitIcon from '../../images/dashicon/profit.png';

const Dashboard = () => {
  const options = [
    { name: 'Purchase', icon: purchaseIcon, link: '/purchase' },
    { name: 'Suppliers', icon: supplierIcon, link: '/suppliers' },
    { name: 'Tax', icon: taxIcon, link: '/tax' },
    { name: 'Vendors', icon: venderIcon, link: '/vendors' },
    { name: 'Profile', icon: profileIcon, link: '/profile' },
    { name: 'Sell', icon: sellIcon, link: '/sell' },
    { name: 'Products', icon: productIcon, link: '/products' },
    { name: 'Customer', icon: customerIcon, link: '/customer' },
    { name: 'Stock', icon: stockIcon, link: '/stock' },
    { name: 'Profit', icon: profitIcon, link: '/profit' }
  ];

  return (
    <div className="container-fluid px-3 mt-4">
      {/* Options Grid */}
      <div className="dashHeader">
        <h2 className="headtitle" style={{color:"var(--primaryHead)"}}>Choose Option</h2>
        <p>Lorem ipsum dolor sit amet consectetur. Eget dui auctor eu id quam a. </p>
      </div>
      <div className="row text-center g-4 mt-4">
        {options.map((option, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-2-4">
            <Link to={option.link} className="text-decoration-none">
              <div className="card shadow-sm border-0 h-100"style={{background:"#CAE7E9"}}>
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <img src={option.icon} alt={option.name} className="mb-3" style={{ width: '50px', height: '50px' }} />
                  <h5 className="card-title">{option.name}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Terms and Conditions */}
      <div className="mt-5">
        <h4 style={{color:"var(--primaryHead)"}} >Terms & Conditions</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit
          amet accumsan arcu. Nulla facilisi. Nam eget aliquam ligula. Nullam
          posuere faucibus leo, in placerat nulla gravida at. Fusce efficitur
          vehicula est, ut pretium sapien efficitur nec.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          rhoncus pharetra pharetra. Cras dictum felis sit amet orci feugiat,
          et condimentum purus mattis.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
