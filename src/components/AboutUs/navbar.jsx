import { Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
import logo from '../../assets/AboutUs/logo.svg'
import MobileButton from './mobileButton'


const navigation = [
  { name: 'Home', href: '/login', current: false },
  { name: 'Contact Us', href: '/', current: false },
  { name: 'Download app', href: '/', current: false },
  { name: 'About Us', href: '/', current: true },
  { name: 'FAQs', href: '/', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="border-slate-950">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <MobileButton navigation={navigation} classNames={classNames}/>
          </div>
          <div className="flex flex-1 items-center justify-start pl-3 sm:items-stretch sm:justify-around">
            <div className="flex flex-shrink-0 items-center">
              <img
                alt="neighborly"
                src={logo}
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 ">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'font-bold ' : 'text-[#7A7A7A]',
                      'rounded-md px-3 py-2 text-sm font-medium',
                      
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="[430px]:hidden flex justify-end ">
        <div className="space-y-1 px-2 pb-3 pt-2 bg-[#0A2540] w-[40%] h-[100vh]">
            <h2 className='text-3xl ml-4 font-semibold text-white'>Menu</h2>
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'item.current' ? 'font-bold text-white' : 'text-[#7A7A7A]' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
