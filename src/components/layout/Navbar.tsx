import { BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Nuer E-learning</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-blue-600 hover:text-green-500 text-sm font-medium">
              Home
            </Link>
            <a href="#about" className="text-blue-600 hover:text-green-500 text-sm font-medium">
              About
            </a>
            <a href="#courses" className="text-blue-600 hover:text-green-500 text-sm font-medium">
              Courses
            </a>
            <a href="#contact" className="text-blue-600 hover:text-green-500 text-sm font-medium">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-600 hover:text-blue-700 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 hover:text-green-500 hover:bg-blue-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 hover:text-green-500 hover:bg-blue-50"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#courses"
              className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 hover:text-green-500 hover:bg-blue-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 hover:text-green-500 hover:bg-blue-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};