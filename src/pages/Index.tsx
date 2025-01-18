import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Courses } from "@/components/sections/Courses";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <Courses />
      <Contact />
    </Layout>
  );
};

export default Index;