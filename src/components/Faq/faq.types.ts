export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQData = FAQItem[];

export type FAQProps = {
  faqData: FAQData;
};
