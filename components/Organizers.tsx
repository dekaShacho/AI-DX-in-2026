import React from 'react';
import { ORGANIZERS } from '../constants';

const Organizers: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-bold tracking-widest uppercase">Organizers</span>
          <h2 className="text-3xl font-black text-gray-900 mt-2">主催者プロフィール</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {ORGANIZERS.map((organizer, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={organizer.imageUrl} 
                  alt={organizer.name} 
                  className="w-full h-full object-cover hover:scale-105 transition duration-500" 
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-black mb-2 text-gray-900">
                  {organizer.name} 
                  {organizer.kana && <span className="text-sm font-medium text-gray-500 ml-2">{organizer.kana}</span>}
                </h3>
                <p className="text-blue-600 font-bold mb-4">{organizer.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 whitespace-pre-wrap">
                  {organizer.description}
                </p>
                <div className="flex gap-3 mt-auto">
                  {organizer.socials.youtube && (
                    <a href={organizer.socials.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 text-xl transition">
                      <i className="fab fa-youtube"></i>
                    </a>
                  )}
                  {organizer.socials.twitter && (
                    <a href={organizer.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 text-xl transition">
                      <i className="fab fa-twitter"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organizers;