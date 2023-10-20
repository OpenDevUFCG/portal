import { Testimony } from "@/interfaces/Events";

type TestimonialCardProps = {
  testimony: Testimony;
};

const TestimonialCard = ({ testimony }: TestimonialCardProps) => {
  return (
    <div className="testimonial-card">
      <p>{testimony.content}</p>
      <p className="testimonial-author">{testimony.author}</p>
    </div>
  );
};

type TestimonialsSectionProps = {
  testimonials: Testimony[];
};

const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => {
  return (
    <div className="testimonials-box">
      <h2 className="section-title">DEPOIMENTOS</h2>
      <div className="testimonials-list">
        {testimonials.map((testimony) => (
          <TestimonialCard key={testimony.author} testimony={testimony} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
