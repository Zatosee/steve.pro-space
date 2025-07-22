// file: components/ContactSection.tsx

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-900 text-gray-100">
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
        <p className="mb-8 text-gray-300">
          Interested in working together or have any questions? Feel free to reach out to me using the form below or via email.
        </p>
        <form action="https://formspree.io/f/your-form-id" method="POST" className="text-left">
          <label className="block mb-2 text-sm font-medium">Name</label>
          <input 
            type="text" name="name" required 
            className="w-full mb-4 px-3 py-2 bg-gray-800 border border-gray-700 rounded text-gray-100"
          />
          <label className="block mb-2 text-sm font-medium">Email</label>
          <input 
            type="email" name="email" required 
            className="w-full mb-4 px-3 py-2 bg-gray-800 border border-gray-700 rounded text-gray-100"
          />
          <label className="block mb-2 text-sm font-medium">Message</label>
          <textarea 
            name="message" rows={4} required 
            className="w-full mb-4 px-3 py-2 bg-gray-800 border border-gray-700 rounded text-gray-100"
          ></textarea>
          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
          >
            Send Message
          </button>
        </form>
        {/* Additional contact info */}
        <p className="mt-8 text-gray-400">
          Or email me at <a href="mailto:steve@example.com" className="text-blue-400 hover:underline">steve@example.com</a>
        </p>
        <p className="mt-1">
          <a href="https://www.linkedin.com/in/yourprofile" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a> &nbsp;|&nbsp; 
          <a href="https://github.com/yourusername" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
