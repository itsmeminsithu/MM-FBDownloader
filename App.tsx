import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VideoResult from './components/VideoResult';
import Features from './components/Features';
import Footer from './components/Footer';
import { AppState, VideoData } from './types';
import { fetchVideoData } from './services/mockFbApi';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.IDLE);
  const [videoData, setVideoData] = useState<VideoData | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSearch = async (url: string) => {
    setAppState(AppState.LOADING);
    setErrorMsg(null);
    setVideoData(null);

    try {
      const data = await fetchVideoData(url);
      setVideoData(data);
      setAppState(AppState.SUCCESS);
    } catch (error) {
      setAppState(AppState.ERROR);
      setErrorMsg((error as Error).message);
    }
  };

  const handleCloseResult = () => {
    setVideoData(null);
    setAppState(AppState.IDLE);
    setErrorMsg(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-grow">
        <Hero onSearch={handleSearch} appState={appState} />
        
        {appState === AppState.ERROR && (
          <div className="max-w-2xl mx-auto mt-8 px-4">
             <div className="bg-red-50 border-l-4 border-mm-red p-4 rounded shadow-sm">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-mm-red" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700 font-medium">
                      {errorMsg}
                    </p>
                  </div>
                </div>
             </div>
          </div>
        )}

        {appState === AppState.SUCCESS && videoData && (
          <VideoResult data={videoData} onClose={handleCloseResult} />
        )}

        <Features />

        {/* SEO / How to section */}
        <section className="bg-white py-12 border-t border-gray-100">
           <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-2xl font-bold mb-6 text-center text-slate-800">How to download Facebook videos?</h2>
              <div className="space-y-4">
                 <div className="flex items-start">
                    <span className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-mm-yellow text-yellow-900 font-bold mr-4">1</span>
                    <p className="text-slate-600 mt-1">Copy the link of the video from the Facebook app or website.</p>
                 </div>
                 <div className="flex items-start">
                    <span className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-mm-green text-white font-bold mr-4">2</span>
                    <p className="text-slate-600 mt-1">Paste the link into the input box on MM FBDownloader.</p>
                 </div>
                 <div className="flex items-start">
                    <span className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-mm-red text-white font-bold mr-4">3</span>
                    <p className="text-slate-600 mt-1">Click the "Get Video" button and wait for the system to process.</p>
                 </div>
                 <div className="flex items-start">
                    <span className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-slate-800 text-white font-bold mr-4">4</span>
                    <p className="text-slate-600 mt-1">Select your preferred quality (HD/SD) and click download.</p>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;