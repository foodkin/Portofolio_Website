import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Validasi form
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: 'error',
        message: '❌ Please fill in all required fields.'
      });
      return;
    }
    
    // Buat email body
    const subject = formData.subject || `Portfolio Contact - Message from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `.trim();
    
    // Encode untuk URL
    const mailtoLink = `mailto:jasonjeferson81@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Buka Gmail
    window.location.href = mailtoLink;
    
    // Tampilkan pesan sukses
    setStatus({
      type: 'success',
      message: '✅ Opening your email client... Please send the message from there.'
    });
    
    // Reset form setelah 2 detik
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setStatus({ type: '', message: '' });
    }, 2000);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setStatus({ type: '', message: '' });
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-800 py-6 flex flex-col justify-center sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          
          {/* Contact Form with New Design */}
          <div className="relative py-3 w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            
            <div className="text-white relative px-4 py-10 bg-gray-900 shadow-lg sm:rounded-3xl sm:p-10">
              <div className="text-center pb-6">
                <h1 className="text-3xl font-bold">Contact Me!</h1>
                <p className="text-gray-300">
                  Fill up the form below to send us a message.
                </p>
              </div>

              {/* Status Message */}
              {status.message && (
                <div
                  className={`mb-4 p-3 rounded-lg ${
                    status.type === 'success'
                      ? 'bg-green-500 text-white'
                      : 'bg-red-500 text-white'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <div>
                <input
                  className="shadow mb-4 appearance-none border border-gray-600 rounded w-full py-2 px-3 text-white bg-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                
                <input
                  className="shadow mb-4 appearance-none border border-gray-600 rounded w-full py-2 px-3 text-white bg-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                
                <input
                  className="shadow mb-4 appearance-none border border-gray-600 rounded w-full py-2 px-3 text-white bg-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline"
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
                
                <textarea
                  className="shadow mb-4 appearance-none border border-gray-600 rounded w-full py-2 px-3 text-white bg-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline resize-none"
                  placeholder="Type your message here..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  style={{ height: '121px' }}
                ></textarea>
                
                <div className="flex justify-between gap-3 mb-8">
                  <button
                    onClick={handleSubmit}
                    className="shadow bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
                  >
                    Send ➤
                  </button>
                  <button
                    onClick={handleReset}
                    type="button"
                    className="shadow bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-300"
                  >
                    Reset
                  </button>
                </div>

                {/* Social Links Inside Form */}
                <div className="border-t border-gray-600 pt-6">
                  <h4 className="text-white text-xl font-bold mb-4 text-center">Connect With Me</h4>
                  <div className="flex gap-6 justify-center">
                    <a
                      href="https://www.instagram.com/jeferson.jason.79?igsh=MWg3ZzF3NGZrYmc4ZQ=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:border-transparent transition-all duration-300 border border-gray-600 transform hover:scale-110"
                      title="Instagram"
                    >
                      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/in/jeferson-undefined-00843128a"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 border border-gray-600 transform hover:scale-110"
                      title="LinkedIn"
                    >
                      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>

                    {/* Email */}
                    <a
                      href="mailto:jasonjeferson81@gmail.com"
                      className="w-14 h-14 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-600 hover:border-red-500 transition-all duration-300 border border-gray-600 transform hover:scale-110"
                      title="Email"
                    >
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;