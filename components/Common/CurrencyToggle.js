import { useState, useEffect } from 'react';

export default function CurrencyToggle({ setComponentCurrency }) {

  let [currency, setCurrency] = useState('INR');
  let symbol = currency === 'INR' ? '₹' : '$';

  useEffect(() => {
    if (localStorage.getItem('ac_currency')) {
      return setCurrency(localStorage.getItem('ac_currency'))
    }

    localStorage.setItem('ac_currency', currency);
  }, [])

  useEffect(() => {
    localStorage.setItem('ac_currency', currency);
    setComponentCurrency(currency);
  }, [currency])

  return (
    <>
      <input
        type="checkbox"
        name="toggle"
        className="hidden"
        id="togglePrice"
        checked={currency !== 'INR'}
        onChange={() => {
          setCurrency(currency == 'INR' ? 'USD' : 'INR');
        }}
      />
      <label
        htmlFor="togglePrice"
        className="w-16 h-10 bg-royal-blue-200 rounded-full shadow-inner-custom flex items-center p-1 toggle-price order-1 mx-4 cursor-pointer"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-b from from-royal-blue-600 to-royal-blue-800"></div>
      </label>
      <strong className="font-normal text-base text-gray-500 dollar">
        USD
      </strong>
      <strong className="font-normal text-base text-gray-500 order-2 rupee">
        INR
      </strong>
    </>
  )
}