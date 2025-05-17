import "../style/StudentReviewCard.css"; // стили отдельно

type Review = {
  name: string;
  tag?: string;
  avatar: string;
  pointA: string;
  pointB: string;
  quote: string;
};

export const StudentReviewCard = ({ review }: { review: Review }) => {
  return (
    <div className="student-card">
      <div className="student-header">
        <img src={review.avatar} alt={review.name} className="student-avatar" />
        <div className="student-name">{review.name}</div>
        {review.tag && <div className="student-tag">{review.tag}</div>}
      </div>
      <div className="student-point-a">
        <strong>Точка A:</strong>{" "}
        <span dangerouslySetInnerHTML={{ __html: review.pointA }} />
      </div>
      <div className="student-point-b">
        <strong>Точка Б:</strong>{" "}
        <span dangerouslySetInnerHTML={{ __html: review.pointB }} />
      </div>
      <div className="student-quote">
        <span className="quote-icon">”</span>
        <p>{review.quote}</p>
      </div>
    </div>
  );
};
