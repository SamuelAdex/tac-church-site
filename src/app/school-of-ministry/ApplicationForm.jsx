"use client";

import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import Button from '@/components/elements/Button';
import { IoMdCheckmarkCircle } from 'react-icons/io';

const APPLICATION_FEE = 15000; // 15,000 Naira

const ApplicationForm = () => {
    const router = useRouter();
    const [applicationType, setApplicationType] = useState('School of Ministry');
    
    const [formData, setFormData] = useState({
        // Personal Info
        fullName: '',
        dateOfBirth: '',
        homeTown: '',
        lga: '',
        state: '',
        residentialAddress: '',
        country: '',
        phone: '',
        email: '',
        sex: '',
        maritalStatus: '',

        // Spiritual History (Ministry)
        salvationDatePlace: '',
        baptizedByImmersion: '',
        baptismDate: '',
        baptismChurch: '',
        pastorNamePhone: '',
        churchResponsibility: '',

        // Leadership History (Leadership)
        hasLedBefore: '',
        leadWhereWhen: '',
        dominantChallenges: '',
        whyNotLed: '',
        leadershipChallenges: '',

        // Health History
        healthIssues: '',
        healthCondition: '',

        // Education
        degree: '',
        institution: '',
        courseOfStudy: '',

        // Expectations
        expectations: '',
    });

    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const openPaystack = () => {
        const requiredFields = ['fullName', 'email', 'phone', 'sex', 'maritalStatus', 'homeTown', 'lga', 'state', 'residentialAddress', 'country', 'healthIssues', 'degree', 'institution', 'courseOfStudy', 'expectations'];
        
        for (const field of requiredFields) {
            if (!formData[field]) {
                toast.error(`${field.split(/(?=[A-Z])/).join(" ")} is required`);
                return;
            }
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error("Please enter a valid email address");
            return;
        }

        setLoading(true);

        const paystackHandler = () => {
             const handler = window.PaystackPop.setup({
                key: process.env.NEXT_PUBLIC_PAYSTACK_KEY,
                email: formData.email,
                amount: APPLICATION_FEE * 100,
                ref: `TAC-${new Date().getTime()}`,
                callback: (response) => {
                    console.log("PAYSTACK SUCCESS CALLBACK:", response);
                    saveApplicationData(response);
                },
                onClose: () => {
                    console.log("Paystack closed");
                    setLoading(false);
                }
            });
            handler.openIframe();
        }

        // Check for script
        if (typeof window.PaystackPop === 'undefined') {
            const script = document.createElement("script");
            script.src = "https://js.paystack.co/v1/inline.js";
            script.async = true;
            script.onload = paystackHandler;
            document.body.appendChild(script);
        } else {
            paystackHandler();
        }
    };

    const saveApplicationData = async (paymentRef) => {
        console.log("Initiating saveApplicationData with ref:", paymentRef.reference);
        try {
            const payload = {
                applicationType,
                ...formData,
                paymentReference: paymentRef.reference || paymentRef,
                amountPaid: APPLICATION_FEE,
                submissionDate: new Date().toLocaleString(),
            };

            const response = await axios.post('/api/school-of-ministry', payload);
            console.log("API Response:", response.data);

            if (response.data.success) {
                setSubmitted(true);
                toast.success("Application submitted successfully!");
            } else {
                toast.error(response.data.message || "Failed to save application.");
            }
        } catch (error) {
            console.error('Submission Error:', error);
            toast.error("Error saving application. Please contact support.");
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <div className="flex items-center justify-center p-5 py-24">
                <div className="bg-white p-10 rounded-2xl shadow-xl max-w-lg w-full text-center space-y-6">
                    <div className="flex justify-center">
                        <IoMdCheckmarkCircle className="text-green-500 text-7xl animate-bounce" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800">Application Successful!</h2>
                    <p className="text-gray-600">
                        Thank you, <span className="font-semibold text-black">{formData.fullName}</span>. 
                        Your application for the <span className="font-semibold text-orange-500">{applicationType}</span> has been received successfully.
                    </p>
                    <Button 
                        text="Back to Home" 
                        btnStyle="w-full bg-orange-400 text-white rounded-lg p-4 hover:bg-orange-500 transition-all font-semibold text-lg"
                        onBtnClick={() => router.push('/')}
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto w-full py-12 px-5">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                {/* Application Type Selector */}
                <div className="bg-gray-800 p-4 flex justify-center gap-4">
                    <button 
                        onClick={() => setApplicationType('School of Ministry')}
                        className={`px-6 py-2 rounded-full font-bold transition-all ${applicationType === 'School of Ministry' ? 'bg-orange-400 text-white' : 'bg-gray-700 text-gray-300'}`}
                    >
                        School of Ministry
                    </button>
                    <button 
                        onClick={() => setApplicationType('School of Leadership')}
                        className={`px-6 py-2 rounded-full font-bold transition-all ${applicationType === 'School of Leadership' ? 'bg-orange-400 text-white' : 'bg-gray-700 text-gray-300'}`}
                    >
                        School of Leadership
                    </button>
                </div>

                <div className="bg-orange-400 p-8 text-white">
                    <h2 className="text-3xl font-bold uppercase">{applicationType}</h2>
                    <p className="opacity-90 font-medium">Please fulfill all requirements carefully. Application Fee: ₦{APPLICATION_FEE.toLocaleString()}</p>
                </div>

                <form className="p-8 md:p-12 space-y-12" onSubmit={(e) => e.preventDefault()}>
                    {/* PERSONAL INFORMATION */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-orange-100 pb-3 flex items-center gap-3">
                            <span className="bg-orange-400 text-white w-10 h-10 rounded-xl flex items-center justify-center text-lg shadow-md">01</span>
                            Personal Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Full Name</label>
                                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="As it appears on official documents" className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-orange-400 focus:outline-none transition-all bg-gray-50" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Date of Birth</label>
                                <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-orange-400 focus:outline-none transition-all bg-gray-50" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Sex</label>
                                <select name="sex" value={formData.sex} onChange={handleChange} className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-orange-400 focus:outline-none transition-all bg-gray-50" required>
                                    <option value="">Select Sex</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Home Town</label>
                                <input type="text" name="homeTown" value={formData.homeTown} onChange={handleChange} placeholder="Your ancestral town" className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-orange-400 focus:outline-none transition-all bg-gray-50" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">LGA</label>
                                <input type="text" name="lga" value={formData.lga} onChange={handleChange} placeholder="Local Government Area" className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-orange-400 focus:outline-none transition-all bg-gray-50" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">State</label>
                                <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State of Origin" className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-orange-400 focus:outline-none transition-all bg-gray-50" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Country</label>
                                <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country of Residence" className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-orange-400 focus:outline-none transition-all bg-gray-50" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Marital Status</label>
                                <select name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-orange-400 focus:outline-none transition-all bg-gray-50" required>
                                    <option value="">Select Status</option>
                                    <option value="Single">Single</option>
                                    <option value="Married">Married</option>
                                    <option value="Widowed">Widowed</option>
                                    <option value="Divorced">Divorced</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Phone Number</label>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+234..." className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-orange-400 focus:outline-none transition-all bg-gray-50" required />
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Email Address</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="example@gmail.com" className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-orange-400 focus:outline-none transition-all bg-gray-50" required />
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Residential Address</label>
                                <textarea name="residentialAddress" value={formData.residentialAddress} onChange={handleChange} rows="2" placeholder="Your current address" className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-orange-400 focus:outline-none transition-all bg-gray-50" required></textarea>
                            </div>
                        </div>
                    </div>

                    {/* DYNAMIC SECTION: SPIRITUAL OR LEADERSHIP */}
                    {applicationType === 'School of Ministry' ? (
                        <div className="space-y-8 animate-fadeIn">
                            <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-orange-100 pb-3 flex items-center gap-3">
                                <span className="bg-orange-400 text-white w-10 h-10 rounded-xl flex items-center justify-center text-lg shadow-md">02</span>
                                Spiritual History
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Place and Date of Salvation</label>
                                    <input type="text" name="salvationDatePlace" value={formData.salvationDatePlace} onChange={handleChange} placeholder="Where and when were you saved?" className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-orange-400 focus:outline-none transition-all bg-gray-50" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Baptized by Immersion?</label>
                                    <select name="baptizedByImmersion" value={formData.baptizedByImmersion} onChange={handleChange} className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-orange-400 focus:outline-none transition-all bg-gray-50">
                                        <option value="">Select Option</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">If Yes, When?</label>
                                    <input type="text" name="baptismDate" value={formData.baptismDate} onChange={handleChange} placeholder="Date of baptism" className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-orange-400 focus:outline-none transition-all bg-gray-50" />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Under which Church?</label>
                                    <input type="text" name="baptismChurch" value={formData.baptismChurch} onChange={handleChange} placeholder="Church where you were baptized" className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-orange-400 focus:outline-none transition-all bg-gray-50" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Name & Phone of Pastor</label>
                                    <input type="text" name="pastorNamePhone" value={formData.pastorNamePhone} onChange={handleChange} placeholder="Your current Pastor's info" className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-orange-400 focus:outline-none transition-all bg-gray-50" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Responsibility in Church</label>
                                    <input type="text" name="churchResponsibility" value={formData.churchResponsibility} onChange={handleChange} placeholder="E.g. Usher, Choir, etc." className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-orange-400 focus:outline-none transition-all bg-gray-50" />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-8 animate-fadeIn">
                            <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-orange-100 pb-3 flex items-center gap-3">
                                <span className="bg-orange-400 text-white w-10 h-10 rounded-xl flex items-center justify-center text-lg shadow-md">02</span>
                                Leadership History
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Have you led before?</label>
                                    <select name="hasLedBefore" value={formData.hasLedBefore} onChange={handleChange} className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-orange-400 focus:outline-none transition-all bg-gray-50">
                                        <option value="">Select Option</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                                {formData.hasLedBefore === 'Yes' ? (
                                    <>
                                        <div className="md:col-span-2 space-y-2">
                                            <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">If Yes, Where and When?</label>
                                            <input type="text" name="leadWhereWhen" value={formData.leadWhereWhen} onChange={handleChange} placeholder="Leadership details" className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-orange-400 focus:outline-none transition-all bg-gray-50" />
                                        </div>
                                        <div className="md:col-span-2 space-y-2">
                                            <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">What are your dominant challenges?</label>
                                            <textarea name="dominantChallenges" value={formData.dominantChallenges} onChange={handleChange} rows="2" placeholder="What challenges did you face?" className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-orange-400 focus:outline-none transition-all bg-gray-50"></textarea>
                                        </div>
                                    </>
                                ) : formData.hasLedBefore === 'No' ? (
                                    <div className="md:col-span-2 space-y-2">
                                        <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">If No, Why?</label>
                                        <textarea name="whyNotLed" value={formData.whyNotLed} onChange={handleChange} rows="2" placeholder="Why haven't you led before?" className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-orange-400 focus:outline-none transition-all bg-gray-50"></textarea>
                                    </div>
                                ) : null}
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">What do you think are dominant challenges in leadership?</label>
                                    <textarea name="leadershipChallenges" value={formData.leadershipChallenges} onChange={handleChange} rows="2" placeholder="General leadership challenges" className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-orange-400 focus:outline-none transition-all bg-gray-50"></textarea>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* HEALTH HISTORY */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-orange-100 pb-3 flex items-center gap-3">
                            <span className="bg-orange-400 text-white w-10 h-10 rounded-xl flex items-center justify-center text-lg shadow-md">03</span>
                            Health History
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Do you have any health issues?</label>
                                <select name="healthIssues" value={formData.healthIssues} onChange={handleChange} className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-orange-400 focus:outline-none transition-all bg-gray-50" required>
                                    <option value="">Select Option</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            {formData.healthIssues === 'Yes' && (
                                <div className="md:col-span-2 space-y-2 animate-fadeIn">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">If Yes, briefly state your condition</label>
                                    <textarea name="healthCondition" value={formData.healthCondition} onChange={handleChange} rows="2" placeholder="State your health condition" className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-orange-400 focus:outline-none transition-all bg-gray-50"></textarea>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* EDUCATIONAL QUALIFICATIONS */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-orange-100 pb-3 flex items-center gap-3">
                            <span className="bg-orange-400 text-white w-10 h-10 rounded-xl flex items-center justify-center text-lg shadow-md">04</span>
                            Educational Qualifications
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Degree/Diploma/Leaving Certificate</label>
                                <input type="text" name="degree" value={formData.degree} onChange={handleChange} placeholder="Highest qualification obtained" className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-orange-400 focus:outline-none transition-all bg-gray-50" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Name of Institution/College</label>
                                <input type="text" name="institution" value={formData.institution} onChange={handleChange} placeholder="Institution name" className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-orange-400 focus:outline-none transition-all bg-gray-50" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">Course of Study</label>
                                <input type="text" name="courseOfStudy" value={formData.courseOfStudy} onChange={handleChange} placeholder="Specific course" className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-orange-400 focus:outline-none transition-all bg-gray-50" required />
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider ml-1">What are your expectations as you journey through this course?</label>
                                <textarea name="expectations" value={formData.expectations} onChange={handleChange} rows="4" placeholder="Your expectations..." className="w-full p-4 rounded-xl border-2 border-gray-100 focus:border-orange-400 focus:outline-none transition-all bg-gray-50" required></textarea>
                            </div>
                        </div>
                    </div>

                    {/* PAYMENT SECTION */}
                    <div className="pt-10 border-t-2 border-dashed border-gray-200">
                        <div className="bg-orange-50 p-8 rounded-3xl border-2 border-orange-100 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
                            <div className="space-y-1 text-center md:text-left">
                                <p className="text-orange-800 font-extrabold text-2xl">Total Fee</p>
                                <p className="text-orange-600 font-medium">Application will be processed after payment.</p>
                            </div>
                            <div className="bg-white px-8 py-4 rounded-2xl shadow-inner border border-orange-100">
                                <p className="text-orange-400 text-4xl font-black">₦{APPLICATION_FEE.toLocaleString()}</p>
                            </div>
                        </div>
                        
                        <div className="mt-10">
                            <Button 
                                text={loading ? "Processing..." : `Pay ₦${APPLICATION_FEE.toLocaleString()} & Submit Application`}
                                btnStyle={`w-full ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-orange-400 hover:bg-orange-500 hover:scale-[1.01] shadow-xl shadow-orange-100'} text-white rounded-2xl py-6 transition-all font-black text-xl uppercase tracking-widest`}
                                onBtnClick={openPaystack}
                                loading={loading}
                            />
                            <div className="flex items-center justify-center gap-2 mt-6 opacity-60">
                                <img src="https://paystack.com/assets/img/og/paystack-logo.png" alt="Paystack" className="h-4" />
                                <span className="text-xs font-bold text-gray-500 uppercase tracking-tighter">Secured by Paystack</span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ApplicationForm;
