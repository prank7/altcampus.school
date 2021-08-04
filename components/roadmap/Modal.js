import { Fragment, useContext, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { Dialog, Transition } from '@headlessui/react';
import { ModalContext } from '../../pages/community/web-development/[id]';

export default function Modal() {
  const [isBrowser, setIsBrowser] = useState(false);
  const { open, setOpen } = useContext(ModalContext);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const cancelButtonRef = useRef(null);

  if (!isBrowser) {
    return null;
  }

  return ReactDOM.createPortal(
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        open={open}
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div>
                <div className="mx-auto flex items-center justify-center w-32">
                  <img src="/assets/media/logo.png" alt="AltCampus Logo" />
                </div>
                <div className="my-3 text-center sm:mt-5">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl leading-6 text-gray-900 py-6 font-extrabold"
                  >
                    This is a Premium Content
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-md text-gray-500">
                      You need to signup to access this content. After signing
                      up you will get access to all the learning and practice
                      materials that will halp you become a full stack web
                      developer. Click on "Sign Up Now" button to get started.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-3 text-md uppercase font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-royal-blue-500 sm:mt-0 sm:col-start-1 sm:text-sm bg-gray-200"
                  onClick={() => setOpen(false)}
                  ref={cancelButtonRef}
                >
                  Cancel
                </button>
                <a
                  href="https://launchpad.altcampus.school/signup"
                  target="_blank"
                  className="w-full inline-flex justify-center"
                >
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-3 text-md uppercase bg-royal-blue-600 text-base font-medium text-white hover:bg-royal-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-royal-blue-500 sm:col-start-2 sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    Sign Up Now
                  </button>
                </a>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>,
    document.getElementById('modal-root')
  );
}
