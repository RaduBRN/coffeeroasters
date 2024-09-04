import Commitment from "@/components/about/Commitment";
import Headquarters from "@/components/about/Headquarters";
import Hero from "@/components/about/Hero";
import Quality from "@/components/about/Quality";

function About() {
  return (
    <div className="flex flex-col gap-24">
      <Hero />
      <Commitment />
      <Quality />
      <Headquarters />
    </div>
  );
}

export default About;
