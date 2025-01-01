import React from 'react'
import {REVIEW } from "../constants"
import C5 from "../images/C5.jpg"

import C1 from "../images/C1.jpg"
import C2 from "../images/C2.jpg"
import C3 from "../images/C3.jpg"
import C4 from "../images/C4.jpg"


const Review = () => {
  return (
    <section className="container mx-auto mb-8 mt-12" id="review">
        <div className="flex flex-col">
            <p className="mb-10 text-3xl font-light leading-normal tracking-tighter
            lg:mx-40 lg:mt-40 lg:text-[3.5rem]">
                {REVIEW.content}
            </p>
            <div className="flex item-center justify-center gap-6">
                <img src={C5} width={80} height={80} alt={REVIEW.name} className="rounded-full border" />
                <div className="tracking-tighter">
                    <h6>{REVIEW.name}</h6>
                    <p className="text-sm text-neutral-500">{REVIEW.profession}</p>
                </div>

            </div>
        </div>
        <div className="mt-14 flex flex-col items-center justify-center gap-2 md:flex-row">
            {[C1,C2,C3,C4].map((customer, index) =>(
                <img key={index} src={customer} alt="customer" className="h-[300px] w-[200px] rounded-br-3xl rounded-tl-3xl object-cover" />

            ))}
        </div>

    </section>
  )
}

export default Review
