import React from 'react';
import { Droplets, Sun, Wind, ThermometerSun } from 'lucide-react';

const careGuides = [
  {
    title: 'Watering Guide',
    icon: Droplets,
    content: 'Most indoor plants need to be watered when the top 1-2 inches of soil feels dry. Water thoroughly until it drains from the bottom.'
  },
  {
    title: 'Light Requirements',
    icon: Sun,
    content: 'Different plants have different light needs. Most indoor plants prefer bright, indirect sunlight. Avoid direct sun which can burn leaves.'
  },
  {
    title: 'Ventilation',
    icon: Wind,
    content: 'Good air circulation helps prevent fungal diseases. Avoid placing plants in drafty areas or near heating/cooling vents.'
  },
  {
    title: 'Temperature',
    icon: ThermometerSun,
    content: 'Most indoor plants thrive in temperatures between 60-75°F (15-24°C). Protect them from extreme temperature changes.'
  }
];

export default function CareGuide() {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Plant Care Guide</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {careGuides.map((guide, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <guide.icon className="h-8 w-8 text-emerald-600 mr-3" />
                <h2 className="text-xl font-semibold text-gray-900">{guide.title}</h2>
              </div>
              <p className="text-gray-600">{guide.content}</p>
            </div>
          ))}
        </div>

        <div className="bg-emerald-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Plant Problems</h2>
          <div className="space-y-4">
            <details className="bg-white p-4 rounded-lg">
              <summary className="font-medium text-gray-900 cursor-pointer">Yellow Leaves</summary>
              <p className="mt-2 text-gray-600">Usually caused by overwatering or poor drainage. Ensure your pot has drainage holes and allow soil to dry between waterings.</p>
            </details>
            <details className="bg-white p-4 rounded-lg">
              <summary className="font-medium text-gray-900 cursor-pointer">Brown Leaf Tips</summary>
              <p className="mt-2 text-gray-600">Often caused by low humidity or mineral buildup from tap water. Try using filtered water or increasing humidity.</p>
            </details>
            <details className="bg-white p-4 rounded-lg">
              <summary className="font-medium text-gray-900 cursor-pointer">Wilting</summary>
              <p className="mt-2 text-gray-600">Can be caused by either under-watering or overwatering. Check soil moisture and adjust watering schedule accordingly.</p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}