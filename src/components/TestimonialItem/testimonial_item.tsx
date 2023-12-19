import { Testimonial } from "../../hooks/useHero";

interface TestimonialItemProps {
  testimonialItem: Testimonial;
  renderReviewScore: (score: number) => JSX.Element[];
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({
  testimonialItem,
  renderReviewScore,
}) => {
  const { name, social, spiel, rating } = testimonialItem;
  return (
    <li className="test-card">
      <h4>{name}</h4>
      <a>{social}</a>
      <p>{spiel}</p>
      <p>Score / 5: {renderReviewScore(rating)}</p>
    </li>
  );
};

export default TestimonialItem;
