import React, { useState } from 'react';

export default function SubscriptionManager() {
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [actionType, setActionType] = useState('');

  const handleUpgrade = () => {
    setActionType('upgrade');
    setShowModal(true);
  };

  const handleCancel = () => {
    setActionType('cancel');
    setShowModal(true);
  };

  const confirmAction = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowModal(false);
      // Action completed
    }, 2000);
  };

  return (
    <div className="bg-[#1f2937] flex items-center justify-center p-6">
      <div className="w-full max-w-7xl">
        <h1 className="text-3xl font-bold text-white mb-12 text-left">
          Manage Subscription
        </h1>
        
        <div className="bg-[#374151] max-w-2xl mx-auto backdrop-blur-sm border-2 border-[#3b82f6] rounded-xl p-6 shadow-2xl">
          <div className="space-y-6">
            {/* Plan Type */}
            <div className="relative">
              <div className="bg-[#4b5563] border border-white rounded-lg px-4 py-3 text-white font-medium">
                Individual
              </div>
            </div>

            {/* Next Billing */}
            <div className="relative">
              <div className="bg-[#4b5563] border border-white rounded-lg px-4 py-3 text-white font-medium">
                July 05, 2025 01:28:07
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={handleUpgrade}
                disabled={isLoading}
                className="flex-1 bg-green-600 hover:bg-green-700 active:bg-green-800 disabled:opacity-50 
                         text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 
                         transform hover:scale-105 active:scale-95 shadow-lg"
              >
                {isLoading && actionType === 'upgrade' ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Processing...
                  </div>
                ) : (
                  'Upgrade Subscription'
                )}
              </button>
              
              <button
                onClick={handleCancel}
                disabled={isLoading}
                className="flex-1 bg-red-600 hover:bg-red-700 active:bg-red-800 disabled:opacity-50 
                         text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 
                         transform hover:scale-105 active:scale-95 shadow-lg"
              >
                {isLoading && actionType === 'cancel' ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Processing...
                  </div>
                ) : (
                  'Cancel Subscription'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Plan Selection Modal */}
      {showModal && actionType === 'upgrade' && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 rounded-2xl max-w-4xl w-full border border-slate-700 shadow-2xl transform animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-slate-700">
              <h2 className="text-2xl font-bold text-white">Choose Your Plan</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-slate-400 hover:text-white text-2xl font-bold w-8 h-8 flex items-center justify-center"
              >
                ×
              </button>
            </div>

            {/* Plans Container */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Individual Plan */}
                <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-6">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg inline-block mb-4 text-sm font-medium">
                    Individual
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">$65</span>
                  </div>
                  
                  <p className="text-slate-300 mb-6">For individual Person</p>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium mb-6 flex items-center justify-center gap-2 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"></path>
                    </svg>
                    Buy now
                  </button>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-slate-300">Single user license</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-slate-300">Lifetime updates</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-slate-300">Secure, HIPAA-compliant data storage</span>
                    </div>
                  </div>
                </div>

                {/* Company Plan */}
                <div className="bg-slate-700/50 border-2 border-blue-500 rounded-xl p-6 relative">
                  {/* Best Value Badge */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Best value
                    </div>
                  </div>
                  
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg inline-block mb-4 text-sm font-medium">
                    Company Plan
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">$650</span>
                  </div>
                  
                  <p className="text-slate-300 mb-6">For large teams, an unlimited number of library users.</p>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium mb-6 flex items-center justify-center gap-2 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"></path>
                    </svg>
                    Buy now
                  </button>
                  
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-slate-300">Add upto 10 users</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-slate-300">Lifetime updates</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-slate-300">Upgrade any time</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-slate-300">Unlimited library users</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-slate-300">Secure, HIPAA-compliant data storage</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cancellation Confirmation Modal */}
      {showModal && actionType === 'cancel' && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-800 rounded-2xl p-6 max-w-md w-full border border-slate-700 shadow-2xl transform animate-in zoom-in-95 duration-200">
            <h3 className="text-xl font-semibold text-white mb-4">
              Confirm Cancellation
            </h3>
            <p className="text-slate-300 mb-6">
              Are you sure you want to cancel your subscription? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={confirmAction}
                className="flex-1 py-2 px-4 rounded-lg text-white font-medium transition-colors bg-red-600 hover:bg-red-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}