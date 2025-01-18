import { ChevronRight } from "lucide-react";

const courses = [
  {
    title: 'Mathematics',
    description: 'Delve into the intricacies of mathematics and uncover the connections between complex concepts and real-world applications',
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80',
    link: '/mathematics'
  },
  {
    title: 'Physics',
    description: 'Understand the fundamental principles of physics and how they govern the natural world',
    image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80',
    link: '/physics'
  },
  {
    title: 'Chemistry',
    description: 'Dive deep into the molecular world and explore complex chemical reactions',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80',
    link: '/chemistry'
  },
  {
    title: 'Biology',
    description: 'Explore the fundamentals of biological systems and understand the processes that sustain life',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80',
    link: '/biology'
  }
];

export const Courses = () => {
  return (
    <div className="bg-gray-50 py-12" id="courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Courses</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Available Courses
          </p>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {courses.map((course) => (
            <div key={course.title} className="bg-white overflow-hidden shadow-lg rounded-lg transition-transform duration-300 hover:scale-105">
              <a href={course.link} className="block">
                <div className="relative h-64">
                  <img className="w-full h-full object-cover" src={course.image} alt={course.title} />
                  <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 hover:bg-opacity-30" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-base text-gray-600 mb-4">{course.description}</p>
                  <div className="flex items-center text-blue-600 hover:text-blue-700">
                    <span className="font-medium">Access Course</span>
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};