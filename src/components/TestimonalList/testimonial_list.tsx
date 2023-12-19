import TestimonialItem from "../TestimonialItem/testimonial_item";
import { Testimonial } from "../../hooks/useHero";

interface TestimonialListProps {
  testimonialList: Testimonial[];
  renderReviewScore: (score: number) => JSX.Element[];
}

const TestimonialList: React.FC<TestimonialListProps> = ({
  testimonialList,
  renderReviewScore,
}) => {
  return (
    <ul className="testimonials">
      {testimonialList.map((testimonial, i) => {
        return (
          <TestimonialItem
            key={i}
            testimonialItem={testimonial}
            renderReviewScore={renderReviewScore}
          />
        );
      })}
    </ul>
  );
};

export default TestimonialList;
