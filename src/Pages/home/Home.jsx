import Slide from "../../components/Slider/Slide";
import Featured from "../../components/featured/featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import "./home.scss";
import { cards, projects } from "../../data";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import Features from "../../components/features/Features";
import BusinessCard from "../../components/business/BusinessCard";
import ProjectCard from "../../components/projectCard/ProjectCard";

function Home() {
  return (
    <div>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CategoryCard key={card.id} item={card} />
        ))}
      </Slide>
      <Features />
      <BusinessCard />
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((projext) => (
          <ProjectCard key={projext.id} item={projext} />
        ))}
      </Slide>
    </div>
  );
}

export default Home;
