import React, { useState } from "react";

const TermsConditions = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionId) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  const AccordionItem = ({ id, title, children }) => (
    <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 mb-4">
      <button
        className="w-full text-left flex justify-between items-center focus:outline-none"
        onClick={() => toggleSection(id)}
      >
        <h2 className="text-[1.6rem] sm:text-[1.8rem] md:text-[2rem] font-bold font-toboggan-medium">
          {title}
        </h2>
        <span className="text-2xl">
          {openSection === id ? "-" : "+"}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === id ? "max-h-screen opacity-100 pt-4" : "max-h-0 opacity-0"}`}
      >
        <div className="text-black/70 text-[1rem] sm:text-[1.05rem] leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="text-[#0a0a0a] py-16 pt-24 sm:py-20 sm:pt-28 lg:pt-32 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-[#0a0a0a] text-[2.5rem] xs:text-[2rem] sm:text-[2.8rem] md:text-[3.2rem] lg:text-[3.8rem] font-bold leading-tight font-toboggan-medium">
            Terms & Conditions
          </h1>
          <p className="text-black/70 text-[1.05rem] sm:text-[1.1rem] md:text-[1.125rem] mt-4 leading-relaxed max-w-2xl mx-auto">
            Welcome to ResumeKit Pro! This document outlines the terms and conditions governing your use of our website, services, and products. By accessing or using our offerings, you agree to abide by these terms. Please read them carefully to understand your rights and responsibilities.
          </p>
          <div className="text-black/50 text-[0.95rem] mt-3">
            Last updated: January 2025
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="text-[#0a0a0a] px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="space-y-8 sm:space-y-10">
          
          <AccordionItem id="acceptance" title="1. Acceptance of Terms">
            <p>
              By accessing and using ResumeKit Pro, purchasing our products, or using our services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services.
            </p>
          </AccordionionItem>

          <AccordionItem id="license" title="2. Product License & Usage">
            <div className="space-y-4 text-black/70 text-[1rem] sm:text-[1.05rem] leading-relaxed">
              <p>
                Upon purchase, you receive a personal, non-exclusive license to use our resume templates and resources for your own career advancement purposes.
              </p>
              <div>
                <p className="font-semibold text-black/90 mb-2">You MAY:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Use templates for your personal job applications</li>
                  <li>Customize and modify templates for your needs</li>
                  <li>Print copies for your personal use</li>
                  <li>Create multiple versions for different job applications</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-black/90 mb-2">You MAY NOT:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Resell, redistribute, or share the templates</li>
                  <li>Use templates for commercial purposes beyond personal job seeking</li>
                  <li>Remove copyright notices or branding</li>
                  <li>Reverse engineer or copy our designs for redistribution</li>
                </ul>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem id="payment" title="3. Payment & Refunds">
            <div className="space-y-4 text-black/70 text-[1rem] sm:text-[1.05rem] leading-relaxed">
              <p>
                We use UPI (Unified Payments Interface) for secure payments. When you click "Buy Now," you'll be redirected via a UPI link that opens your default UPI app or prompts you to choose from available UPI apps on your device. After completing payment, you'll return to our website to confirm your payment details.
              </p>
              <p>
                <strong className="text-black/90">Manual Verification Process:</strong> We use a manual payment verification system for security. After payment, you'll provide your email and transaction ID. <strong className="text-black/90">Payment verification and product delivery typically occurs within 24 hours</strong> of payment confirmation.
              </p>
              <div>
                <p className="font-semibold text-black/90 mb-2">Payment Verification Process:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>All payments require manual verification for security</li>
                  <li>You must provide accurate transaction ID and email address</li>
                  <li>False payment claims may result in account suspension</li>
                  <li>Verification typically completes within 24 hours during business days</li>
                </ul>
              </div>
              <p>
                <strong className="text-black/90">Digital Products:</strong> Due to our manual verification process, all sales are final once products are delivered. However, if you experience technical issues with payment verification or download, please contact our support team within 7 days of purchase.
              </p>
            </div>
          </AccordionItem>

          <AccordionItem id="delivery" title="4. Product Delivery">
            <div className="space-y-4 text-black/70 text-[1rem] sm:text-[1.05rem] leading-relaxed">
              <p>
                Due to our manual payment verification process, digital products are delivered via email <strong className="text-black/90">within 24 hours</strong> after payment confirmation and verification. You will receive download links at the email address provided during checkout.
              </p>
              <p>
                Please ensure your email address is correct and check spam folders if you don't receive your download link within 24 hours of payment verification. Our automated system will send your ResumeKit Pro templates once payment is confirmed.
              </p>
            </div>
          </AccordionItem>

          <AccordionItem id="ip" title="5. Intellectual Property">
            <div className="text-black/70 text-[1rem] sm:text-[1.05rem] leading-relaxed">
              <p>
                All content, designs, templates, text, graphics, and other materials provided by ResumeKit Pro are protected by copyright and other intellectual property laws. We retain all rights, title, and interest in our products and website content.
              </p>
            </div>
          </AccordionItem>

          <AccordionItem id="disclaimers" title="6. Disclaimers">
            <div className="space-y-4 text-black/70 text-[1rem] sm:text-[1.05rem] leading-relaxed">
              <p>
                While we strive to provide high-quality resume templates and resources, we cannot guarantee specific job search outcomes. Success in job applications depends on many factors beyond resume design.
              </p>
              <p>
                Our products are provided "as is" without warranties of any kind. We do not guarantee compatibility with all software versions or platforms, though we test our templates thoroughly.
              </p>
            </div>
          </AccordionItem>

          <AccordionItem id="liability" title="7. Limitation of Liability">
            <div className="text-black/70 text-[1rem] sm:text-[1.05rem] leading-relaxed">
              <p>
                In no event shall ResumeKit Pro be liable for any indirect, incidental, special, or consequential damages arising from your use of our products or services. Our total liability shall not exceed the amount you paid for the specific product in question.
              </p>
            </div>
          </AccordionItem>

          <AccordionItem id="modifications" title="8. Modifications to Terms">
            <div className="text-black/70 text-[1rem] sm:text-[1.05rem] leading-relaxed">
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Continued use of our services after changes constitutes acceptance of the modified terms.
              </p>
            </div>
          </AccordionItem>

          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-6 sm:p-8 border border-indigo-100">
            <h2 className="text-[1.6rem] sm:text-[1.8rem] md:text-[2rem] font-bold mb-4 font-toboggan-medium">
              Contact Us
            </h2>
            <div className="text-black/70 text-[1rem] sm:text-[1.05rem] leading-relaxed">
              <p className="mb-4">
                If you have questions about these Terms & Conditions, please contact us:
              </p>
              <div className="space-y-2">
                <p><strong>Email:</strong> webruit@gmail.com</p>
                <p><strong>Response Time:</strong> We typically respond within 48 hours</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
