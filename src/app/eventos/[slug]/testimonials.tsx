import { Testimonial } from "@/interfaces/Events";
import { FaQuoteRight } from "react-icons/fa";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="testimonial-card">
      <FaQuoteRight size={32} />
      <p>{testimonial.content}</p>
      <p className="testimonial-author">{testimonial.author}</p>
    </div>
  );
};

type TestimonialsSectionProps = {
  testimonials: Testimonial[];
};

const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => {
  return (
    <div className="testimonials-box">
      <h2 className="section-title">DEPOIMENTOS</h2>
      <div className="testimonials-list">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.author} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
