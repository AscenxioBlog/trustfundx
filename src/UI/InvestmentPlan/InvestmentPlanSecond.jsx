import React from "react";

const investmentPlans = [
  { title: "Providus-finance Advance", profit: "40%", min: "USD 2,500.00", max: "USD 4,999.00", duration: "36HRS", referralBonus: "10%" },
  { title: "Premium Investment", profit: "50%", min: "USD 5,000.00", max: "USD 9,999.00", duration: "48HRS", referralBonus: "12%" },
  { title: "Gold Plan", profit: "60%", min: "USD 10,000.00", max: "USD 19,999.00", duration: "60HRS", referralBonus: "15%" },
  { title: "Platinum Plan", profit: "70%", min: "USD 20,000.00", max: "USD 49,999.00", duration: "72HRS", referralBonus: "18%" },
];

const InvestmentPlanSecond = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-9">
      {investmentPlans.map((plan, index) => (
        <div key={index} className={`bg-black text-white p-10 rounded-xl border border-white hover:border-0 hover:shadow-lg w-full h-auto flex flex-col items-center ${index === investmentPlans.length - 1 ? 'lg:col-span-3 sm:col-span-2 col-span-1 mx-auto' : ''}`}>
          <h2 className="text-xl font-semibold text-center">{plan.title}</h2>
          <div className="flex justify-center mt-2">
            <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-full">Investment</span>
          </div>
          <div className="text-yellow-400 text-5xl font-bold text-center mt-4">{plan.profit}</div>
          <p className="text-center text-gray-400 text-xs font-bold mt-1">AFTER {plan.duration}</p>
          <hr className="my-4 border-gray-700" />
          <ul className="text-xs font-medium space-y-3">
            <li className="flex items-center gap-2"><span className="text-red-500">✔</span> Min <span className="ml-auto">{plan.min}</span></li>
            <li className="flex items-center gap-2"><span className="text-red-500">✔</span> Max <span className="ml-auto">{plan.max}</span></li>
            <li className="flex items-center gap-2"><span className="text-red-500">✔</span> Profit after {plan.duration} <span className="ml-auto">{plan.profit}</span></li>
            <li className="flex items-center gap-2"><span className="text-red-500">✔</span> Profit Withdrawal <span className="ml-auto">AFTER {plan.duration}</span></li>
            <li className="flex items-center gap-2"><span className="text-red-500">✔</span> Capital Withdrawal <span className="ml-auto">AFTER {plan.duration}</span></li>
            <li className="flex items-center gap-2"><span className="text-red-500">✔</span> Referral Bonus <span className="ml-auto">{plan.referralBonus}</span></li>
          </ul>
          <div className="flex justify-center mt-auto">
            <button className="mt-4 w-[150px] border border-red-800 text-[15px] text-red-800 py-2 rounded-md font-semibold hover:bg-red-800 hover:text-white">
              Get Started Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InvestmentPlanSecond;
