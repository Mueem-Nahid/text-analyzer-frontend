import {useEffect, useState} from 'react'
import {Bars3Icon, XMarkIcon,} from '@heroicons/react/24/outline'
import {Dialog, Disclosure} from '@headlessui/react'
import {ChevronDownIcon} from '@heroicons/react/20/solid'
import {useKeycloak} from "@react-keycloak/web";
import {useAppDispatch} from "../redux/hook.ts";
import {setCredentials} from "../redux/features/user/userSlice.ts";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {
  const {keycloak, initialized} = useKeycloak();
  const dispatch = useAppDispatch()

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    dispatch(setCredentials({"userInfo": keycloak?.tokenParsed?.email}));
  }, [keycloak?.tokenParsed?.email])

  return (
    <div className="bg-white">
      <header className=" absolute inset-x-0 top-0 z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="font-extrabold text-3xl">Text Analyzer</span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
            </button>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {
              !initialized &&
                <div role="status" className="max-w-sm animate-pulse">
                    <div className="h-6 bg-gray-200 rounded-full w-48 mt-2"></div>
                    <span className="sr-only">Loading...</span>
                </div>
            }
            {
              initialized && !keycloak?.authenticated &&
                <a
                    href="/signup"
                    className="mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                    Signup
                </a>
            }
            {
              initialized && !keycloak?.authenticated ?
                <a
                  onClick={() => keycloak.login({redirectUri: window.location.origin})}
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in <span aria-hidden="true">&rarr;</span>
                </a> :
                initialized && <a
                      onClick={() => keycloak.logout({redirectUri: 'http://localhost:3000/'})}
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                      Logout ({keycloak?.tokenParsed?.name})
                  </a>
            }
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10"/>
          <Dialog.Panel
            className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Text Analyzer</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Disclosure as="div" className="-mx-3">
                    {({open}) => (
                      <>
                        <Disclosure.Button
                          className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          Product
                          <ChevronDownIcon
                            className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                      </>
                    )}
                  </Disclosure>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    All
                  </a>
                </div>
                <div className="py-6">
                  {
                    !keycloak?.authenticated ?
                      <a
                        onClick={() => keycloak.login()}
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Log in
                      </a> :
                      <a
                        onClick={() => keycloak.logout({redirectUri: 'http://localhost:3000/'})}
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Logout ({keycloak?.tokenParsed?.name})
                      </a>
                  }
                  <a
                    href="/signup"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Signup
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  )
}
