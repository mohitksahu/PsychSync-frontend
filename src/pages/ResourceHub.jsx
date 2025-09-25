import React from 'react';
import { useTranslation } from 'react-i18next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ResourceHub = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-12">
  <h1 className="text-3xl font-bold mb-6 mt-8">{t('resource_hub.title')}</h1>
        <p className="mb-8 text-muted-foreground">{t('resource_hub.intro')}</p>
        {/* Demo Upload Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-10 flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1">
            <label className="block font-semibold mb-2">Upload Resource (Demo)</label>
            <input type="file" className="border rounded p-2 w-full mb-2" />
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Upload</button>
          </div>
          <div className="flex-1 text-sm text-gray-500">Upload videos, audio, or guides to share with the community. (Demo only)</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Videos */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Videos</h2>
            <div className="aspect-w-16 aspect-h-9 mb-2">
              <iframe
                src="https://www.youtube.com/embed/2OEL4P1Rz04"
                title="Sample Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-48 rounded border"
              ></iframe>
            </div>
            <div className="text-xs text-gray-500">Mindfulness Meditation - YouTube</div>
          </div>
          {/* Audio */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Audio</h2>
            <audio controls className="w-full mb-2">
              <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <div className="text-xs text-gray-500">Relaxation Audio Sample</div>
          </div>
          {/* Guides */}
          <div>
            <h2 className="text-xl font-semibold mb-2">Guides</h2>
            <a
              href="https://www.mind.org.uk/media-a/4662/guide-to-wellbeing-2021.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-100 hover:bg-green-200 text-green-800 px-4 py-2 rounded mb-2 border"
            >
              Download: Guide to Wellbeing (PDF)
            </a>
            <div className="text-xs text-gray-500">Wellness Guide</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ResourceHub;
