import { BookOpen, Lightbulb, Globe, GraduationCap } from "lucide-react";

const features = [
  {
    title: 'Our Mission',
    description: 'At Nuer E-Learning, our mission is to empower learners by providing comprehensive and accessible science education in the Nuer language. We are committed to fostering a deeper understanding of essential scientific concepts and principles, ensuring that every learner can grasp these ideas in a way that resonates with their cultural context.',
    icon: BookOpen
  },
  {
    title: 'Our Vision',
    description: 'We envision a future where every Nuer learner has the opportunity to explore, engage with, and excel in the field of science. Our goal is to bridge cultural and educational gaps by providing tailored resources that resonate with the unique needs and experiences of the Nuer community.',
    icon: Lightbulb
  },
  {
    title: 'Our Story',
    description: 'Founded by a passionate advocate for accessible education, Nuer E-Learning was created to address the need for localized educational resources. As we grow, we aim to invite like-minded individuals and community advocates to join us in our mission.',
    icon: Globe
  },
  {
    title: 'Our Future Goals',
    description: 'We aim to expand our course offerings, enhance our platform features, launch new courses in additional subjects, implement more interactive learning tools, and expand our reach to more learners in the region.',
    icon: GraduationCap
  }
];

export const Features = () => {
  return (
    <div className="py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Empowering Nuer Through Education
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We are committed to providing accessible, high-quality education that preserves and celebrates Nuer culture while preparing students for the future.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.title} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.title}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};