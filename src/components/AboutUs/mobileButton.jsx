import Mobilemenu from '../../assets/AboutUs/MobileMenu.svg';
import { useState } from 'react';

const MobileButton = (props) => {
  const navigation = props.navigation;
  const classNames = props.classNames;

  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open); 
  }
  

  return (

    <div>
        {/* drawer init and show */}
        <div className="text-center">
          <button className="text-white font-medium rounded-lg text-sm px-5 py-2.5" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation" onClick={()=>{toggleOpen()}}>
            <img src={Mobilemenu} alt="Mobilemenu" />
          </button>
        </div>
        {/* drawer component */}
        <div id="drawer-navigation" className={`flex fixed top-0 z-40 h-screen  overflow-y-auto transition-transform ${ open ?'translate-x-full':'-translate-x-[83%]'}  w-screen `} tabIndex={-1} aria-labelledby="drawer-navigation-label">
          <div className='bg-[#00000089] w-2/3 text-white' onClick={()=>{toggleOpen()}}>
            
          </div>
          <div className='bg-[#0A2540] h-screen w-1/3'>
            <div className='flex space-x-7 items-center '>
              <h5 id="drawer-navigation-label" className="text-2xl font-semibold text-white">Menu</h5>
              {/* <button className="text-white  focus:ring-0 font-medium rounded-lg text-sm px-5 py-2.5 " type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation" onClick={()=>{toggleOpen()}}>
                <img src={MobileMenuLight} alt="Mobilemenu" className='' />
              </button> */}
            </div>
            <div className="py-4 overflow-y-auto space-y-5">
            {navigation.map((item) => (  
                <a
                key={item.name}
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current ? 'font-bold text-white' : 'text-white',
                  'rounded-md px-3 py-2 text-sm font-medium block', 
                )}
                >
                {item.name}
                </a>
              )
            )
          }
            </div>
          </div>
        </div>
      </div>
  );
}
 
export default MobileButton;