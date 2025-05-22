function Faq_details({
  data,
  isOpen,
  count,
}: {
  data: { summary: string; text: string };
  isOpen: boolean;
  count: string;
}) {
  return (
    <details name="faqs">
      <summary>
        <div className="title">
          <span>{count}</span> {data.summary}
        </div>
      </summary>
      <p>{data.text}</p>
    </details>
  );
}

export default Faq_details;
