import React from 'react';
import { EVENT_DETAILS, LINKS } from '../constants';

const EventInfo: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900">開催概要</h2>
            <p className="text-slate-500 mt-2">AI / DX サミット in 大阪 2026</p>
          </div>
          
          <div className="space-y-8">
            {/* Date */}
            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-slate-100 pb-6">
              <div className="w-full md:w-32 shrink-0">
                <span className="block font-bold text-slate-400 uppercase text-sm tracking-wider">Date</span>
              </div>
              <div>
                <p className="text-xl font-bold text-slate-900">{EVENT_DETAILS.date}</p>
                <p className="text-slate-600">
                  {EVENT_DETAILS.time} <span className="text-sm bg-blue-100 text-blue-700 px-2 py-0.5 rounded ml-2">終了後、懇親会あり</span>
                </p>
              </div>
            </div>
            
            {/* Place */}
            <div className="flex flex-col md:flex-row gap-6 items-start border-b border-slate-100 pb-6">
              <div className="w-full md:w-32 shrink-0">
                <span className="block font-bold text-slate-400 uppercase text-sm tracking-wider">Place</span>
              </div>
              <div className="w-full">
                <p className="text-xl font-bold text-slate-900 mb-2">{EVENT_DETAILS.placeName}</p>
                <p className="text-slate-600 mb-4 text-sm">{EVENT_DETAILS.address}</p>
                
                {/* Google Map Embed */}
                <div className="w-full h-64 rounded-xl overflow-hidden shadow-inner bg-slate-100">
                  <iframe 
                    src={EVENT_DETAILS.mapUrl} 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    aria-hidden="false" 
                    tabIndex={0}
                    title="Event Location"
                  ></iframe>
                </div>
                <div className="mt-2 text-right">
                  <a 
                    href={LINKS.map} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 text-sm font-bold inline-flex items-center"
                  >
                    <i className="fas fa-external-link-alt mr-1"></i> Googleマップで開く
                  </a>
                </div>
              </div>
            </div>

            {/* Fee & Capacity */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-full md:w-32 shrink-0">
                <span className="block font-bold text-slate-400 uppercase text-sm tracking-wider">Info</span>
              </div>
              <div className="w-full grid md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-xl">
                  <span className="block text-xs font-bold text-slate-400 mb-1">参加費</span>
                  <span className="block text-xl font-bold text-slate-900">{EVENT_DETAILS.fee}</span>
                  <span className="text-xs text-slate-500">※懇親会は実費5,000円程度</span>
                </div>
                 <div className="bg-slate-50 p-4 rounded-xl">
                  <span className="block text-xs font-bold text-slate-400 mb-1">定員</span>
                  <span className="block text-xl font-bold text-slate-900">{EVENT_DETAILS.capacity}</span>
                  <span className="text-xs text-slate-500">※先着順となります</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;