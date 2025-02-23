import React, { useState } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";

const FAQsComponents = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "How to Withdraw Money?",
            answer: "To withdraw money from your account, follow these steps: 1. Log in to your account. 2. Go to the withdrawal section. 3. Select the amount you want to withdraw (limitations apply). 4. Choose your preferred withdrawal method. 5. Confirm the request. 6. Wait for processing and approval. 7. Once approved, the money will be transferred.",
        },
        {
            question: "Is there an option for manual Deposit?",
            answer: "Yes, there is an option for manual deposit. You can choose to deposit money manually instead of using automated methods.",
        },
        {
            question: "What payment methods are supported?",
            answer: "We support multiple payment methods including bank transfers, credit/debit cards, and various digital wallets.",
        },
        {
            question: "How long does a withdrawal take?",
            answer: "Withdrawals typically take 24-72 hours to process, depending on your selected method.",
        },
        {
            question: "Is there a minimum deposit amount?",
            answer: "Yes, the minimum deposit amount is $10. Certain payment methods may have different limits.",
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <div className='min-h-[70vh] px-4 py-10 text-white flex flex-col items-center '>
            <h1 className='font-medium text-3xl md:text-4xl text-center'>Frequently Asked Questions</h1>
            <p className='font-medium text-lg mt-5 text-center hidden lg:block'>Have Any Questions?</p>
            
            <div className='w-full max-w-2xl mt-8 space-y-5'>
                {faqs.map((faq, index) => (
                    <div key={index} className='bg-white rounded-lg shadow-lg overflow-hidden'>
                        <div 
                            className='h-[70px] flex items-center justify-between border-b gap-3 p-4 border-gray-300 font-medium cursor-pointer transition-all duration-300' 
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className='text-red-600 text-lg flex-1'>{faq.question}</span>
                            {openIndex === index ? <FaMinus className='text-black' /> : <FaPlus className='text-black' />}
                        </div>
                        <div 
                            className={`overflow-hidden transition-all duration-500 ${openIndex === index ? 'max-h-40 py-3 px-4' : 'max-h-0 p-0'}`}
                        >
                            <p className='text-black text-sm font-medium text-center'>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQsComponents;
