import Faq_details from "./Faqs_details";

const faqs = [
  {
    summary: "Full spectrum care for a global team",
    text: "From prevention to treatment to maintenance, we deliver a best-in-class, consistent mental healthcare experience to members across the globe.",
  },
  {
    summary: "Evidence-based approach",
    text: "From prevention to treatment to maintenance, we deliver a best-in-class, consistent mental healthcare experience to members across the globe.",
  },
  {
    summary: "Care anytime, anywhere",
    text: "From prevention to treatment to maintenance, we deliver a best-in-class, consistent mental healthcare experience to members across the globe.",
  },
  {
    summary: "Leading the way in high-quality care",
    text: "From prevention to treatment to maintenance, we deliver a best-in-class, consistent mental healthcare experience to members across the globe.",
  },
  {
    summary: "Team-based holistic care",
    text: "From prevention to treatment to maintenance, we deliver a best-in-class, consistent mental healthcare experience to members across the globe.",
  },
  {
    summary: "Drive cultural change",
    text: "From prevention to treatment to maintenance, we deliver a best-in-class, consistent mental healthcare experience to members across the globe.",
  },
];

function Faqs() {
  return (
    <section className="true">
      <div className="imagecard">
        <img
          className="imgcard"
          src="./work/photo_5849595812357716054_w (1).jpg"
          alt=""
        />
        <img
          className="imgcard"
          src="./work/photo_5849595812357716054_w (1).jpg"
          alt=""
        />
        <img
          className="imgcard"
          src="./work/photo_5851760475874899803_w (4).jpg"
          alt=""
        />
      </div>
      <div className="info">
        <div className="titlegrapper">
          <p className="addres">Why Headspace</p>
          <h2>Comprehensive care for everyone</h2>
        </div>
        <div className="faqcard">
          {faqs.map((data: { summary: string; text: string }, i) => {
            const count = (i + 1).toString().padStart(2, "0");

            return i === 0 ? (
              <Faq_details key={i} data={data} isOpen={false} count={count} />
            ) : (
              <Faq_details key={i} data={data} isOpen count={count} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Faqs;
