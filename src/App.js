import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const pricingTiers = [
  {
    title: "Basic",
    price: "$100",
    features: ["Up to 1 min video", "Basic cuts and transitions", "1 revision"]
  },
  {
    title: "Standard",
    price: "$250",
    features: ["Up to 3 min video", "Advanced transitions", "Motion graphics", "2 revisions"]
  },
  {
    title: "Premium",
    price: "$500",
    features: ["Up to 10 min video", "Cinematic editing", "Sound design", "Motion graphics", "Unlimited revisions"]
  }
];

const portfolioItems = [
  {
    title: "Travel Vlog",
    thumbnail: "/thumbs/travel.jpg",
    videoUrl: "https://www.youtube.com/watch?v=example1"
  },
  {
    title: "Product Ad",
    thumbnail: "/thumbs/product.jpg",
    videoUrl: "https://www.youtube.com/watch?v=example2"
  },
  {
    title: "Event Recap",
    thumbnail: "/thumbs/event.jpg",
    videoUrl: "https://www.youtube.com/watch?v=example3"
  }
];

export default function HomePage() {
  return (
    <main className="p-6 max-w-5xl mx-auto space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-2">Hi, I'm Tyler – Video Editor & Motion Designer</h1>
        <p className="text-lg text-gray-600">I craft cinematic edits and eye-catching motion graphics for brands, creators, and storytellers.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <a href={item.videoUrl} target="_blank" rel="noopener noreferrer">
                <img src={item.thumbnail} alt={item.title} className="w-full h-48 object-cover" />
                <CardContent>
                  <h3 className="text-lg font-medium mt-2">{item.title}</h3>
                </CardContent>
              </a>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Pricing Tiers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {pricingTiers.map((tier, index) => (
            <Card key={index} className="p-4">
              <h3 className="text-xl font-bold mb-2">{tier.title}</h3>
              <p className="text-2xl font-semibold mb-4">{tier.price}</p>
              <ul className="mb-4 space-y-1 text-gray-700">
                {tier.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
              <Button className="w-full">Select</Button>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}