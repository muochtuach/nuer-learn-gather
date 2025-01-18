import { BookOpen } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <BookOpen className="h-10 w-10 text-white mx-auto" />
          <p className="mt-4 text-base text-gray-400">© 2024 Nuer E-learning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};