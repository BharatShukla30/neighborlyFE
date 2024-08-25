import image1 from "../../assets/Frame1.png";
// import logo from "../../assets/logo.png";
import logo from '../../assets/AboutUs/logo.svg'
const Section1 = () => {
  return (
    <header className="flex justify-between mb-0">
      <div className="ml-28 my-8 flex flex-col justify-between max-phone:ml-5 max-phone:mb-3" >
        <div>
          <img src={logo} alt="logo" className="max-h-10 max-medium:max-h-10 max-phone:max-h-6" />
        </div>
        <div className="max-phone:mt-7">
          <div className="text-5xl max-large:text-3xl max-medium:text-2xl max-phone:text-[18px] max-phone:pt-5">
            <b>Connecting Neighbors, Building Communities</b>
          </div>
          <div className="my-5 max-phone:my-0">
            <p className="text-3xl max-large:text-xl max-medium:text-sm max-phone:text-xs max-large:pr-0 mr-14 max-phone:mr-0 pr-16 font-extralight">
              Discover, connect, engage with your neighbors like never.
            </p>
          </div>
          <div className="my-8">
            <a
              href="/"
              className="bg-custom-blue text-white text-xl font-medium py-2 px-4 rounded-full max-medium:text-sm max-phone:text-xs"
            >
              Download App
            </a>
          </div>
        </div>
      </div>
      <img src={image1} alt="img1" className="max-medium:w-[400px] max-phone:w-[207px]" />
    </header>
  );
};

export default Section1;


// import { Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
// import logo from '../../assets/AboutUs/logo.svg'
// // import MobileButton from './mobileButton'
// import { current } from '@reduxjs/toolkit'
// import { connect } from 'react-redux'




// const navigation = [
//   { name: 'Home', href: '/', current: false },
//   // { name: 'Contact Us', href: '/', current: false },
//   { name: 'Download app', href: '/', current: false },
//   { name: 'About Us', href: '/', current: true },
//   { name: 'FAQs', href: '/', current: false },
//   { connect: "https://cdn-icons-png.flaticon.com/256/1384/1384063.png", href:'https://www.instagram.com/neighborlysocialapp/', current: false},
//   { connect: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kMS0xMC5wbmc.png", href:"https://www.linkedin.com/company/neighborlyapp/", current: false},
//   { email: "Contact Us", href:"mailto:tech.support@neighborly.in",current: false}
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Example() {
//   return (
//     <Disclosure as="nav" className="border-slate-950 shadow-md">
//       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center justify-between">
//           <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
//             <MobileButton navigation={navigation} classNames={classNames}/>
//           </div>
//           <div className="flex flex-1 items-center justify-start pl-3 sm:items-stretch sm:justify-around">
//             <div className="flex flex-shrink-0 items-center -ml-14">
//               <img
//                 alt="neighborly"
//                 src={logo}
//                 className="h-8 w-auto"
//               />
//               {/* <neighborly /> */}
//             </div>
//             <div className="hidden sm:ml-6 sm:block">
//               <div className="flex space-x-4 justify-center items-center">
//                 {navigation.map((item) => (
//                   (item.email) ? <button className="bg-indigo-500 rounded px-1 py-2 text-white shadow-md text-xs" onClick={() => window.location = 'mailto:'+item.href}>{item.email}</button> :
//                 (  (item.connect) ? <a key={item.href} href={item.href}> <img className="h-6" src={item.connect} alt={item.name || 'email icon'} /></a> :
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     aria-current={item.current ? 'page' : undefined}
//                     className={classNames(
//                       item.current ? 'font-bold ' : 'text-[#7A7A7A]',
//                       'rounded-md px-3 py-2 text-sm font-semibold',
                      
//                     )}
//                   >
//                     {item.name}
//                   </a>
//                 )))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <DisclosurePanel className="[430px]:hidden flex justify-end ">
//         <div className="space-y-1 px-2 pb-3 pt-2 bg-[#0A2540] w-[40%] h-[100vh]">
//             <h2 className='text-3xl ml-4 font-semibold text-white'>Menu</h2>
//           {navigation.map((item) => (
//             <DisclosureButton
//               key={item.name}
//               as="a"
//               href={item.href}
//               aria-current={item.current ? 'page' : undefined}
//               className={classNames(
//                 item.current ? 'item.current' ? 'font-bold text-white' : 'text-[#7A7A7A]' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                 'block rounded-md px-3 py-2 text-base font-medium',
//               )}
//             >
//               {item.name}
//             </DisclosureButton>
//           ))}
//         </div>
//       </DisclosurePanel>
//     </Disclosure>
//   )
// }

// import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
// import logo from '../../assets/AboutUs/logo.svg';
// import MobileButton from './mobileButton';

// const navigation = [
//   { name: 'Home', href: '/', current: false },
//   { name: 'Download app', href: '/', current: false },
//   { name: 'About Us', href: '/', current: true },
//   { name: 'FAQs', href: '/', current: false },
//   { connect: "https://cdn-icons-png.flaticon.com/256/1384/1384063.png", href: 'https://www.instagram.com/neighborlysocialapp/', current: false },
//   { connect: "https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kMS0xMC5wbmc.png", href: "https://www.linkedin.com/company/neighborlyapp/", current: false },
//   { email: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Email_icon.png", href: "mailto:tech.support@neighborly.in", current: false }
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

// export default function Example() {
//   return (
//     <Disclosure as="nav" className="border-slate-950">
//       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center justify-between">
//           <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
//             <MobileButton navigation={navigation} classNames={classNames} />
//           </div>
//           <div className="flex flex-1 items-center justify-start pl-3 sm:items-stretch sm:justify-around">
//             <div className="flex flex-shrink-0 items-center">
//               <img alt="neighborly" src={logo} className="h-8 w-auto" />
//             </div>
//             <div className="hidden sm:ml-6 sm:block">
//               <div className="flex space-x-4 justify-center items-center">
//                 {navigation.map((item) => (
//                   item.email ? (
//                     <a key={item.href} href={item.href}>
//                       <img src={item.email} className="h-6" alt="email icon" />
//                     </a>
//                   ) : (
//                     item.connect ? (
//                       <a key={item.href} href={item.href}>
//                         <img className="h-6" src={item.connect} alt="social icon" />
//                       </a>
//                     ) : (
//                       <a
//                         key={item.name}
//                         href={item.href}
//                         aria-current={item.current ? 'page' : undefined}
//                         className={classNames(
//                           item.current ? 'font-bold ' : 'text-[#7A7A7A]',
//                           'rounded-md px-3 py-2 text-sm font-medium'
//                         )}
//                       >
//                         {item.name}
//                       </a>
//                     )
//                   )
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <DisclosurePanel className="[430px]:hidden flex justify-end ">
//         <div className="space-y-1 px-2 pb-3 pt-2 bg-[#0A2540] w-[40%] h-[100vh]">
//           <h2 className="text-3xl ml-4 font-semibold text-white">Menu</h2>
//           {navigation.map((item) => (
//             <DisclosureButton
//               key={item.name}
//               as="a"
//               href={item.href}
//               aria-current={item.current ? 'page' : undefined}
//               className={classNames(
//                 item.current ? 'font-bold text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                 'block rounded-md px-3 py-2 text-base font-medium'
//               )}
//             >
//               {item.name}
//             </DisclosureButton>
//           ))}
//         </div>
//       </DisclosurePanel>
//     </Disclosure>
//   );
// }
