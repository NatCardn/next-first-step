import type { Metadata } from "next";

export const metadata: Metadata= {
 title: 'Pricing tag',
 description: 'Pricing tag',
 keywords:['About Page', 'Natalia']
};

export default function PricingPage() {
    return(
        <>
            <span className="flex flex-col items-center text-7xl p-32">
                Pricing Page</span>
        </>
    )
}