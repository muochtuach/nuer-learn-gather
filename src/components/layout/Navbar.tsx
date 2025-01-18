import { BookOpen } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Nuer E-learning</span>
          </div>
          <div className="flex space-x-6">
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
        </div>
      </div>
    </nav>
  );
};