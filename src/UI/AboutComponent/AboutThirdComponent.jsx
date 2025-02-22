import React from 'react'

function AboutThirdComponent() {
  return (
    <div className="text-center py-10 px-4">
    <h2 className="text-3xl font-bold text-white mb-6">What our customer says</h2>
    <div className="flex flex-col md:flex-row justify-center py-10 gap-6">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-sm">
        <div className="text-7xl text-gray-900 text-left font-bold">&#8220;</div>
        <p className="text-gray-700 text-left font-medium mt-2">
          As a businessman, Algocapitals have helped me in different ways from
          giving me interest above the bank's rates, to helping me with loans.
          Also, I have been educated about how the financial market works.
        </p>
        <div className="flex items-center mt-4">
          <img
            src="https://algocapitals.org/asset/theme3/images/testimonial/638d8351e30031670218577.jpg"
            alt="Jhon Doe"
            className="w-12 h-12 rounded-full border-2 border-gray-300"
          />
          <div className="ml-3 text-left">
            <h3 className="text-gray-900 font-semibold">Jhon Doe</h3>
            <p className="text-gray-500 text-sm">Private Investor</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-sm">
        <div className="text-7xl text-gray-900 text-left font-bold">&#8220;</div>
        <p className="text-gray-700 text-left font-medium mt-2">
          Algocapital has given me the opportunity to be able to invest and
          make a return like the big banks, I have been able to clear all my
          debts.
        </p>
        <div className="flex items-center mt-4">
          <img
            src="https://algocapitals.org/asset/theme3/images/testimonial/638d8365b23251670218597.jpg"
            alt="Susan Jefferey"
            className="w-12 h-12 rounded-full border-2 border-gray-300"
          />
          <div className="ml-3 text-left">
            <h3 className="text-gray-900 font-semibold">Susan Jefferey</h3>
            <p className="text-gray-500 text-sm">Single mom</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AboutThirdComponent