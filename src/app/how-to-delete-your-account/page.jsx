"use client";

import React, { useState } from 'react';
import { MdWarning, MdCheckCircle } from 'react-icons/md';
import { IoArrowForward } from 'react-icons/io5';
import Image from 'next/image';

const DeleteAccountGuide = () => {
  const [activeStep, setActiveStep] = useState(null);

  const steps = [
    {
      id: 1,
      title: "Open Your Profile",
      description: "Launch the TCDL app and tap on your profile icon in the bottom navigation menu.",
      details: "Look for the profile/account icon, usually located at the bottom right of your screen.",
      icon: "👤"
    },
    {
      id: 2,
      title: "Access Account Settings",
      description: "On your profile screen, scroll down to find the settings or account options menu.",
      details: "You&rsquo;ll see various profile management options including personal info, preferences, and account settings.",
      icon: "⚙️"
    },
    {
      id: 3,
      title: "Find Delete Account Button",
      description: "Scroll to the bottom of the settings page where you&rsquo;ll find the &ldquo;Delete Account&rdquo; button in red.",
      details: "This button is prominently displayed to ensure you can easily find it.",
      icon: "🗑️"
    },
    {
      id: 4,
      title: "Tap Delete Account",
      description: "Tap on the &ldquo;Delete Account&rdquo; button to initiate the deletion process.",
      details: "A confirmation dialog will appear asking you to confirm your action.",
      icon: "⚠️"
    },
    {
      id: 5,
      title: "Confirm Deletion",
      description: "Review the warning message and tap &ldquo;Confirm Delete&rdquo; to proceed.",
      details: "Make sure you understand that this action is permanent and cannot be undone.",
      icon: "✓"
    },
    {
      id: 6,
      title: "Account Deleted",
      description: "Your account and associated data will be deleted within 24-48 hours.",
      details: "You&rsquo;ll receive a confirmation message and email notification.",
      icon: "✅"
    }
  ];

  const importantNotes = [
    {
      title: "Data Loss",
      description: "All your personal information, download history, and saved bookmarks will be permanently deleted.",
      icon: "⚠️"
    },
    {
      title: "Points Forfeiture",
      description: "Any remaining points in your account will be lost and cannot be recovered or refunded.",
      icon: "💔"
    },
    {
      title: "Reactivation",
      description: "Once deleted, your account cannot be reactivated. You can create a new account later if needed.",
      icon: "🔄"
    },
    {
      title: "Downloads",
      description: "Downloaded content (books and audio) will remain on your device but won&rsquo;t be accessible through the app.",
      icon: "📥"
    },
    {
      title: "Processing Time",
      description: "Account deletion may take 24-48 hours to fully process from our servers.",
      icon: "⏱️"
    },
    {
      title: "Email Confirmation",
      description: "You&rsquo;ll receive a confirmation email once your account has been successfully deleted.",
      icon: "📧"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How to Delete Your Account
          </h1>
          <p className="text-xl text-gray-300">
            Follow these simple steps to permanently delete your TCDL account
          </p>
        </div>

        {/* Warning Banner */}
        <div className="bg-red-900/20 border-2 border-red-500 rounded-lg p-6 mb-12">
          <div className="flex items-start gap-4">
            <MdWarning className="text-red-500 text-3xl flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-red-400 font-bold text-lg mb-2">Important Warning</h3>
              <p className="text-gray-200">
                Deleting your account is a permanent action. You will lose all your data, including personal information, 
                download history, bookmarks, and any remaining points. This action cannot be undone.
              </p>
            </div>
          </div>
        </div>

        {/* Step-by-Step Guide */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Step-by-Step Guide</h2>
          
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 w-1 h-12 bg-gradient-to-b from-orange-500 to-orange-300 opacity-50"></div>
                )}

                {/* Step Card */}
                <div
                  onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                  className="bg-gray-800 border-l-4 border-orange-500 rounded-lg p-6 cursor-pointer transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:shadow-orange-500/20"
                >
                  <div className="flex items-start gap-6">
                    {/* Step Number and Icon */}
                    <div className="flex items-center gap-4 flex-shrink-0">
                      <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{step.id}</span>
                      </div>
                      <span className="text-3xl">{step.icon}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-300 mb-2">{step.description}</p>
                      
                      {/* Expandable Details */}
                      {activeStep === step.id && (
                        <div className="mt-4 pt-4 border-t border-gray-700">
                          <p className="text-gray-400 text-sm">{step.details}</p>
                        </div>
                      )}
                    </div>

                    {/* Expand Icon */}
                    <IoArrowForward
                      className={`text-orange-500 text-xl flex-shrink-0 transition-transform duration-300 ${
                        activeStep === step.id ? 'rotate-90' : ''
                      }`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important Notes Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Important Notes to Remember</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {importantNotes.map((note, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-orange-500 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl flex-shrink-0">{note.icon}</span>
                  <div>
                    <h3 className="text-white font-bold mb-2">{note.title}</h3>
                    <p className="text-gray-300 text-sm">{note.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-800 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-bold mb-2">Can I recover my account after deletion?</h3>
              <p className="text-gray-300">
                No, account deletion is permanent. Once your account is deleted, it cannot be recovered. 
                However, you can create a new account anytime.
              </p>
            </div>

            <div>
              <h3 className="text-white font-bold mb-2">What happens to my downloaded content?</h3>
              <p className="text-gray-300">
                Downloaded books and audio files will remain on your device, but they won&rsquo;t be accessible through 
                the TCDL app after your account is deleted.
              </p>
            </div>

            <div>
              <h3 className="text-white font-bold mb-2">Will I get a refund for unused points?</h3>
              <p className="text-gray-300">
                No, points have no monetary value and cannot be refunded. Upon account deletion, 
                any remaining points will be forfeited.
              </p>
            </div>

            <div>
              <h3 className="text-white font-bold mb-2">How long does deletion take?</h3>
              <p className="text-gray-300">
                Your account will be deleted within 24-48 hours. You&rsquo;ll receive a confirmation email 
                once the process is complete.
              </p>
            </div>

            <div>
              <h3 className="text-white font-bold mb-2">Can I change my mind after clicking delete?</h3>
              <p className="text-gray-300">
                You have a confirmation step before deletion is finalized. Make sure to read the 
                confirmation message carefully before confirming.
              </p>
            </div>

            <div>
              <h3 className="text-white font-bold mb-2">Is there another way to delete my account?</h3>
              <p className="text-gray-300">
                If you&rsquo;re unable to delete your account through the app, you can contact our support team at{' '}
                <a href="mailto:thearenaofchampions247@gmail.com" className="text-orange-500 hover:underline">
                  thearenaofchampions247@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Visual Guide Placeholder */}
        <div className="bg-gray-800 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Visual Guide</h2>
          <p className="text-gray-300 mb-6">
            [Screenshot of Profile Screen showing Delete Account button placement will appear here]
          </p>
          <div className="w-full bg-gray-900 rounded-lg flex items-center justify-center flex-col border-2 border-dashed border-gray-600">
            <div className="flex flex-col gap-4">
                <p className="text-gray-300 semibold">Click the Profile Icon on the Homescreen</p>
                <p className="text-gray-300 semibold">Then click on the Delete account button on the Profile Screen to delete your account Permanantly</p>
            </div>
            <div className="flex  mt-4 md:flex-row flex-col justify-center gap-4">
                <Image src="https://res.cloudinary.com/samueladexcloudinary/image/upload/f_auto/q_auto/v1764163280/home-screen_nqpsto.jpg" width={300} height={300} alt="" className="" />

                <Image src="https://res.cloudinary.com/samueladexcloudinary/image/upload/v1764163278/profile-screen_hn34zx.jpg" width={300} height={300} alt="" className="" />
                
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 border border-orange-500 rounded-lg p-8">
          <div className="flex items-start gap-4">
            <MdCheckCircle className="text-orange-500 text-3xl flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-orange-400 font-bold text-lg mb-2">Need Help?</h3>
              <p className="text-gray-200 mb-4">
                If you have any questions or need assistance with deleting your account, our support 
                team is here to help.
              </p>
              <div className="space-y-2">
                <p className="text-gray-300">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:thearenaofchampions247@gmail.com" className="text-orange-500 hover:underline">
                    thearenaofchampions247@gmail.com
                  </a>
                </p>
                <p className="text-gray-300">
                  <strong>WhatsApp:</strong>{' '}
                  <a href="https://wa.me/+2349055450855" className="text-orange-500 hover:underline">
                    +234 905 545 0855
                  </a>
                </p>
                <p className="text-gray-300">
                  <strong>Address:</strong> Along Poly Ihiagwa Road, Nekede Owerri, Imo State
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} The Champs Digital Library. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccountGuide;