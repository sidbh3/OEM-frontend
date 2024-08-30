import logo from '../assets/logo.png';
import mapImage from '../assets/noida-map.png';

const Footer = () => {
  return (
    <footer className="bg-darkBlue text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Left Section: Contact Information */}
          <div className="w-full md:w-1/2 lg:w-2/5 mb-8 md:mb-0">
            <h3 className="font-bold text-xl mb-4">Contact Information</h3>
            <p className="mb-2">+91 98731 34795</p>
            <p className="mb-2">
              <a href="mailto:pravin@ekJal.com" className="underline hover:text-blue-300">
                pravin@ekJal.com
              </a>
            </p>
            <p className="mb-2">JSS Science & Tech Entrepreneurs Park (STEP)</p>
            <p className="mb-2">C-20/I, Sector 62, NOIDA</p>
            <p className="mb-4">201301, UP</p>
            <img src={logo} alt="Logo" className="w-20 h-20" />
          </div>

          {/* Right Section: Map */}
          <div className="w-full md:w-1/2 lg:w-2/5 flex justify-center items-center">
            <div className="w-full max-w-md h-64 bg-gray-700 rounded-lg overflow-hidden">
              <img src={mapImage} alt="Noida Map" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-wrap justify-between items-center mt-8 pt-8 border-t border-gray-600">
          <p className="text-sm">&copy; 2023 EkJal Tech Pvt. Ltd. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
              <span className="sr-only">Facebook</span>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
              <span className="sr-only">Twitter</span>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
