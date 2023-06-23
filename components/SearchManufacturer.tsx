'use client';

import { Combobox, Transition } from '@headlessui/react';
import Image from 'next/image';
import { Fragment, useState } from 'react';

import { manufacturers } from '@/constants';
import { SearchManufacturerProps } from '@/types';

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
  const [query, setQuery] = useState('');

  const filteredManufacturers =
    query === ''
      ? manufacturers
      : manufacturers.filter(item =>
          item.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  return (
    <>
      <div className='search-manufacturer'>
        <Combobox
          value={manufacturer}
          onChange={setManufacturer}>
          <div className='relative w-full'>
            {/* Button for the combobox. Click on the icon to see the complete dropdown */}
            <Combobox.Button className='absolute top-[14px]'>
              <Image
                src='/car-logo.svg'
                width={20}
                height={20}
                alt='Car Logo'
                className='ml-4'
              />
            </Combobox.Button>

            {/* Input field for searching */}
            <Combobox.Input
              className='search-manufacturer__input'
              placeholder='Volkswagen'
              displayValue={(manufacturer: string) => manufacturer}
              onChange={e => setQuery(e.target.value)}></Combobox.Input>

            {/* Transition for displaying the options */}
            <Transition
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
              afterLeave={() => setQuery('')} // Reset the search query after the transition completes
            >
              <Combobox.Options>
                {filteredManufacturers.map(item => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) => `
                      relative search-manufacturer__option ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}
                      `}
                    value={item}>
                    {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{item}</span>

                        {/* Show an active blue background color if the option is selected */}
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
      </div>
    </>
  );
};

export default SearchManufacturer;
