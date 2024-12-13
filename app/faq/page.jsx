"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const faq = () => {
    const [faqOpen, setFaqOpen] = useState(false);


    const faqItems = [
        {
            label:"Can I Buy In Bulk? ",
            link:'#' 
        },
        {
            label:"Will all the items in my order arrive in a package?",
            link:'#' 
        },
        {
            label:"Why do i see different price for the same product?",
            link:'#' 
        },
        {
            label:"What is buyer protection?",
            link:'#' 
        },
        {
            label:"What is the estimated delivery time?",
            link:'#' 
        },
        {
            label:"Why does the estimated delivery time vary?",
            link:'#' 
        },
        {
            label:"Who will deliver my order?",
            link:'#' 
        },
        {
            label:"My order is shipped. how can i track it?",
            link:'#' 
        },
    ]
  return (
    <main className='min-h-dvh '>
        <div className=' bg-gray-400 flex flex-col p-6 text-white'>
            <h1 className='font-bold lg:text-3xl text-xl flex items-center justify-center'>Frequently Asked Questions</h1>
            <div className='lg:flex  flex-col items-center justify-between px-6 py-5'>
                <h3 className='text-sm text-white font-sans text-left lg:w-[75%] '>
                    Get all the answers to the most frequently asked questions (FAQs)
                    regarding some of our popular categories which include electronics,
                    mobile phones, computers, fashion, beauty products, home and kitchen, building
                    and construction materials and a whole lot more from premium brands as well as
                    managing your account, payment, vouchers and much, much more.

                </h3>
                <Image
                src={"/faq.webp"}
                alt='faq'
                width={500}
                height={500}
                className='hidden lg:block '
                />
            </div>
        </div>

            <div className='lg:flex'>

                <div className={`grid grid-cols-1 gap-3 w-[25%] max-lg:w-full items-center  max-lg:border lg:pl-6 `}>
                    {
                        faqItems.map((item,index) => (
                            <Link
                            key={index}
                            href={item.link}
                            className=' py-2 p-3 hover:text-white hover:bg-gray-400 hover:font-semibold hover:text-xl duration-700 capitalize text-sm hover:shadow-lg w-full flex items-center justify-center'
                            onClick={()=> setFaqOpen(false)}
                            >
                                {item.label}

                            </Link>

                    ))
                    }
                </div>

                    <div className='space-y-10 lg:px-24 px-6 py-7 '>
                        <div className='space-y-2'>
                        <h1 className='font-bold text-xl lg:text-3xl  text-gray-500  '>Can I buy in bulk?</h1>
                            <h3 className='text-sm'>For all your Corporate Procurement, Gift Vouchers and Consumer
                             Promotion Activities, please contact us on  0635 700 080 9460
                              or email us at help@earlymart.com or visit the Bulk Purchase Page to learn more.
                            </h3>
                        </div>
                        <div className='space-y-2'>
                            <h1 className='font-bold text-xl lg:text-3xl text-gray-500  '>Will all of the items in my order arrive in a single package?</h1>
                            <h3 className='text-sm'>If your order consists of items from more than one seller, your items
                            will arrive separately. If your order consists of items from a single 
                            seller, your items may arrive together or separately. If your orders arrive separately,
                            be rest assured that the remaining item(s) will be delivered shortly.
                            </h3>
                        </div>
                        <div className='space-y-2'>
                        <h1 className='font-bold text-xl lg:text-3xl  text-gray-500  '>Why do I see different prices for the same product?</h1>
                        <h3 className='text-sm'> Early_mart is your trusted online marketplace that supports Nigerian 
                            entrepreneurs and we have many different sellers competing for business.
                             Therefore, you may see the same product offered by different sellers at 
                             different prices. We believe that by supporting these 'third-party' sellers, 
                             we can offer you a wider product selection, more choice, increased convenience, 
                             and better pricing.
                            </h3>
                        </div>
                        <div className='space-y-2'>
                        <h1 className='font-bold text-xl lg:text-3xl  text-gray-500  '>What is buyer protection?</h1>
                        <h3 className='text-sm'>We offer all our customers ultimate peace of mind. We have you covered 100%
                             on every eligible purchase. Visit the Buyer Safety Page to learn more.
                            </h3>
                        </div>
                        <div className='space-y-2'>
                        <h1 className='font-bold text-xl lg:text-3xl  text-gray-500  '>What is the estimated delivery time?</h1>
                        <h3 className='text-sm'>early_mart delivers products to customers all over Nigeria. Lagos 2-5, Rivers 3-7,
                             Abuja 1DAT & other states 4-9 days
                            </h3>
                        </div>
                        <div className='space-y-2'>
                        <h1 className='font-bold text-xl lg:text-3xl  text-gray-500  '>Why does the estimated delivery time vary?</h1>
                        <h3 className='text-sm'>Early_mart is a true online marketplace that empowers Nigerians 
                            across the country. This means that not all products on early_mart are
                            sold or delivered by Early_mart. In addition, early_mart buyers and sellers
                            are found in every state in Nigeria. Given the various factors involved
                            (the time it takes a seller to ship, the courier company used, the distance 
                            between buyer and seller, and more) delivery times may vary.
                            </h3>
                        </div>
                        <div className='space-y-2'>
                        <h1 className='font-bold text-xl lg:text-3xl  text-gray-500 '>Who will deliver my order?</h1>
                        <h3 className='text-sm'> Your order may be delivered by Early-mart, by other courier companies,
                            or by the seller or the seller's agents, depending on whether the item was
                            sold by early_mart or a third-party seller and on the delivery method chosen 
                            by a third-party seller. You may be called prior to or on the same day as
                            delivery to see if you are available to receive your order.
                            </h3>
                        </div>
                        <div className='space-y-2'>     
                        <h1 className='font-bold text-xl lg:text-3xl text-gray-500  '>My order is shipped. How can I track it?</h1>
                            <h3>To track your order visit: localhost.com
                            </h3>
                        </div>
                    </div>
            </div>
      
    </main>
  )
}

export default faq
