// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Menu, X, Clover } from 'lucide-react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'About', path: '/about' },
//     { name: 'Team', path: '/team' },
//     { name: 'Services', path: '/services' },
//     { name: 'Career', path: '/career' },
//   ];

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="flex justify-between items-center">
//           <Link to="/" className="flex items-center space-x-2">
//             <Clover className="h-8 w-8 text-emerald-600" />
//             <span className="text-xl font-bold text-emerald-800">Clover Soft Inc.</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex space-x-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 className={`font-medium transition-colors duration-300 ${
//                   location.pathname === link.path
//                     ? 'text-emerald-600 border-b-2 border-emerald-600'
//                     : 'text-gray-700 hover:text-emerald-600'
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//             <Link
//               to="/login"
//               className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors duration-300"
//             >
//               Admin Login
//             </Link>
//           </div>

//           {/* Mobile Navigation Toggle */}
//           <div className="md:hidden">
//             <button onClick={toggleMenu} className="text-gray-700 hover:text-emerald-600">
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation Menu */}
//         {isOpen && (
//           <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 absolute left-0 right-0 mx-4">
//             <div className="flex flex-col space-y-4">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   className={`font-medium transition-colors duration-300 ${
//                     location.pathname === link.path
//                       ? 'text-emerald-600'
//                       : 'text-gray-700 hover:text-emerald-600'
//                   }`}
//                   onClick={() => setIsOpen(false)}
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//               <Link
//                 to="/login"
//                 className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors duration-300 text-center"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Admin Login
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Clover } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Team', path: '/team' },
    { name: 'Services', path: '/services' },
    { name: 'Career', path: '/career' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Clover className="h-8 w-8 text-emerald-600" />
            <span className="text-xl font-bold text-emerald-800">Clover Soft Inc.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors duration-300 ${
                  location.pathname === link.path
                    ? 'text-emerald-600 border-b-2 border-emerald-600'
                    : scrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-gray-800 hover:text-emerald-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/login"
              className="px-4 py-2 rounded-md bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors duration-300"
            >
              Admin Login
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`focus:outline-none ${scrolled ? 'text-gray-800' : 'text-gray-800'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 absolute left-0 right-0 mx-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-medium px-4 py-2 rounded-md transition-colors duration-300 ${
                    location.pathname === link.path
                      ? 'text-emerald-600 bg-emerald-50'
                      : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/login"
                className="px-4 py-2 rounded-md bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors duration-300 text-center"
                onClick={() => setIsOpen(false)}
              >
                Admin Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

