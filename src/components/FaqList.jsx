function FaqList({ faqs }) {
  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <details
          key={faq.question}
          className="glass-panel rounded-[1.5rem] border border-[var(--color-border)] px-6 py-5"
        >
          <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-[var(--color-ink)]">
            {faq.question}
          </summary>
          <p className="mt-4 text-sm leading-7 text-[var(--color-ink-soft)]">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}

export default FaqList;
