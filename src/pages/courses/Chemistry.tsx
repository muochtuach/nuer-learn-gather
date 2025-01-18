import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Chemistry = () => {
  const videos = [
    { title: "Unit-1 Atomic Structure", url: "#" },
    { title: "Unit-1 Periodic Table", url: "#" },
    { title: "Unit-2 Chemical Bonding", url: "#" },
    { title: "Unit-2 Molecular Structure", url: "#" },
    { title: "Unit-3 States of Matter", url: "#" },
    { title: "Unit-3 Chemical Reactions", url: "#" },
    { title: "Unit-4 Organic Chemistry", url: "#" },
    { title: "Unit-4 Biochemistry", url: "#" },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Link to="src/components/sections/Courses.tsx">
              <Button variant="ghost" className="text-blue-400 hover:text-blue-300">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Courses
              </Button>
            </Link>
          </div>
          
          <h1 className="text-4xl font-bold mb-4">Chemistry</h1>
          <p className="text-xl text-gray-300 mb-12">
            Dive deep into the molecular world and explore complex chemical reactions
          </p>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-6">Videos</h2>
            <div className="grid gap-4">
              {videos.map((video, index) => (
                <a
                  key={index}
                  href={video.url}
                  className="block p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                >
                  <span className="text-blue-400 hover:text-blue-300">
                    {video.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Chemistry;
