// app/modern-card/page.js
'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Briefcase, Building, Globe, Linkedin, Instagram } from 'lucide-react';

export default function ModernCard() {
  const [mode, setMode] = useState('business');

  const contactInfo = {
    business: {
      email: 'md@bullscoffee.co.th',
      phone: '+66 81 234 5678',
      title: 'Managing Director',
      subtitle: 'Bulls Group',
      description: 'Building business ecosystem through innovation and community'
    },
    personal: {
      email: 'pongwaraj@gmail.com',
      phone: '+66 81 234 5678',
      title: 'Ning Pongwara',
      subtitle: 'Entrepreneur & Business Developer',
      description: 'Passionate about business development and community building'
    }
  };

  const currentInfo = contactInfo[mode];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Profile Header */}
      <div className="relative h-40 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute -bottom-16 w-full flex justify-center">
          <div className="h-32 w-32 rounded-full border-4 border-white bg-gray-100 flex items-center justify-center">
            <Building className="h-16 w-16 text-gray-700" />
          </div>
        </div>
      </div>

      {/* Mode Switch */}
      <div className="mt-20 flex justify-center">
        <div className="bg-white rounded-lg p-1 shadow-sm">
          <button
            onClick={() => setMode('business')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              mode === 'business'
                ? 'bg-gray-900 text-white'
                : 'text-gray-600'
            }`}
          >
            Business
          </button>
          <button
            onClick={() => setMode('personal')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              mode === 'personal'
                ? 'bg-gray-900 text-white'
                : 'text-gray-600'
            }`}
          >
            Personal
          </button>
        </div>
      </div>

      {/* Contact Information */}
      <div className="px-6 pt-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Pongwara Jantee</h1>
          <p className="text-lg text-gray-800">{currentInfo.title}</p>
          <p className="text-gray-600">{currentInfo.subtitle}</p>
          <p className="mt-2 text-sm text-gray-500">{currentInfo.description}</p>
        </div>

        <div className="mt-8 space-y-4">
          <a 
            href={`mailto:${currentInfo.email}`}
            className="flex items-center space-x-3 p-3 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <Mail className="w-5 h-5 text-gray-600" />
            <span className="text-gray-600">{currentInfo.email}</span>
          </a>
          
          <a 
            href={`tel:${currentInfo.phone}`}
            className="flex items-center space-x-3 p-3 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <Phone className="w-5 h-5 text-gray-600" />
            <span className="text-gray-600">{currentInfo.phone}</span>
          </a>

          <div className="flex items-center space-x-3 p-3 rounded-lg bg-white shadow-sm">
            <MapPin className="w-5 h-5 text-gray-600" />
            <span className="text-gray-600">Chiang Mai, Thailand</span>
          </div>
        </div>

        {mode === 'business' && (
          <div className="mt-8 p-4 bg-white rounded-lg shadow-sm">
            <h2 className="font-medium text-gray-900 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Bulls Group Companies
            </h2>
            <div className="mt-2 text-sm text-gray-600 space-y-1">
              <p>• Bulls Coffee - Café & Retail</p>
              <p>• Bulls Academy - Training</p>
              <p>• Bulls Kitchen - F&B</p>
              <p className="text-gray-400">+7 upcoming ventures</p>
            </div>
          </div>
        )}

        {/* Social Links */}
        <div className="mt-8 flex justify-center space-x-6 pb-8">
          <a href="https://bullscoffee.co.th" className="text-gray-400 hover:text-gray-900">
            <Globe className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" className="text-gray-400 hover:text-gray-900">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://instagram.com" className="text-gray-400 hover:text-gray-900">
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </main>
  );
}