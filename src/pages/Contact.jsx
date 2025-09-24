import React from "react";

function Contact() {
  return (
    <section className="p-10 max-w-xl mx-auto">
      <h2 className="text-4xl font-bold text-blue-700 mb-6 text-center">Contact Us</h2>
      <form className="bg-white shadow-lg rounded-lg p-6 space-y-4">
        <input type="text" placeholder="Your Name" className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none" />
        <input type="email" placeholder="Your Email" className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none" />
        <textarea placeholder="Your Message" rows="4" className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
