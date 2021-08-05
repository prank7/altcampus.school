import { Fragment, useContext, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { Dialog, Transition } from '@headlessui/react';
import { ExternalLinkIcon } from '@heroicons/react/solid';
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
              <div className="bg-royal-blue-700">
                <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                  <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    <span className="block">This content is Paid!</span>
                  </h2>
                  <p className="mt-4 text-lg leading-6 text-royal-blue-200">
                    With AltCampus you will get access to the materials to learn
                    and to practice to hone your skill.
                  </p>
                  <a
                    href="http://try.altcampus.school/"
                    rel="noreferrer noopener"
                    target="_blank"
                    className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base uppercase font-extrabold rounded-md text-royal-blue-600 bg-white hover:bg-royal-blue-50 sm:w-auto"
                  >
                    Sign up for free
                    <ExternalLinkIcon
                      className="ml-3 h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>,
    document.getElementById('modal-root')
  );
}
