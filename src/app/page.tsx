"use client"
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

import Header from "../components/header"
const directions = [
  { id: 1, name: 'row', value: 'flex-row' },
  { id: 2, name: 'row-reverse', value: 'flex-row-reverse' },
  { id: 3, name: 'column', value: 'flex-col' },
  { id: 4, name: 'column-reverse', value: 'flex-col-reverse' },
]

const justifyContents = [
  { id: 1, name: 'flex-start', value: 'justify-start' },
  { id: 2, name: 'flex-end', value: 'justify-end' },
  { id: 3, name: 'center', value: 'justify-center' },
  { id: 4, name: 'space-between', value: 'justify-between' },
  { id: 4, name: 'space-around', value: 'justify-around' },
  { id: 4, name: 'space-evenly', value: 'justify-evenly' },
]

const wraps = [
  { id: 1, name: 'wrap', value: 'flex-wrap' },
  { id: 2, name: 'wrap-reverse', value: 'flex-wrap-reverse' },
  { id: 3, name: 'nowrap', value: 'flex-nowrap' },
]
export default function Example() {
  const [direction, setDirection] = useState(directions[0])
  const [justifyContent, setjustifyContent] = useState(justifyContents[0])
  const [wrap, setWrap] = useState(wraps[0])
  const [wrapState, setWrapState] = useState(false)


  return (
    <>
      <div className='max-w-5xl mx-auto'>
        <Header />
        <div className="mt-5">
          <div className='flex'>
            <div className="w-[200px]">
              <Listbox value={direction} onChange={(e) => { setWrapState(false); setDirection(e) }}>
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <span className="block truncate">{direction.name}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {directions.map((direction, directionIdx) => (
                        <Listbox.Option
                          key={directionIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                            }`
                          }
                          value={direction}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                  }`}
                              >
                                {direction.name}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
            <div className="w-[200px] ml-2">
              <Listbox value={justifyContent} onChange={(e) => { setWrapState(false); setjustifyContent(e) }} >
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <span className="block truncate">{justifyContent.name}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {justifyContents.map((justifyContent, justifyContentIdx) => (
                        <Listbox.Option
                          key={justifyContentIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                            }`
                          }
                          value={justifyContent}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${justifyContent ? 'font-medium' : 'font-normal'
                                  }`}
                              >
                                {justifyContent.name}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox></div>
            <div className="w-[200px] ml-2">
              <Listbox value={wrap} onChange={(e) => { setWrapState(true); setWrap(e) }}>
                <div className="relative mt-1">
                  <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                    <span className="block truncate">{wrap.name}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {wraps.map((wrap, wrapIdx) => (
                        <Listbox.Option
                          key={wrapIdx}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                            }`
                          }
                          value={wrap}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${wrap ? 'font-medium' : 'font-normal'
                                  }`}
                              >
                                {wrap.name}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
            </div>
          </div>
          <div className={`flex border-2 mt-5 flex-1 w-[500px] h-[500px] rounded-md ${direction.value} ${justifyContent.value} ${wrap.value}`}>
            <div className='w-1/6 h-1/6 bg-current m-2 rounded-md'>
              <span className='text-white '>
                1
              </span>
            </div>
            <div className='w-1/6 h-1/6 bg-current m-2 rounded-md'>
              <span className='text-white '>
                2
              </span>
            </div>
            <div className='w-1/6 h-1/6 bg-current m-2 rounded-md'>
              <span className='text-white '>
                3
              </span>
            </div>
            {
              (wrapState && <>
                <div className='w-1/6 h-1/6 bg-current m-2 rounded-md'>
                  <span className='text-white '>
                    4
                  </span>
                </div>
                <div className='w-1/6 h-1/6 bg-current m-2 rounded-md'>
                  <span className='text-white '>
                    5
                  </span>
                </div>
                <div className='w-1/6 h-1/6 bg-current m-2 rounded-md'>
                  <span className='text-white '>
                    6
                  </span>
                </div>
              </>)
            }
          </div>

        </div>
      </div>
    </>
  )
}
