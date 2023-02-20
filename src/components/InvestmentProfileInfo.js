import InvestQuestionItem from "./InvestQuestionItem";

const InvestmentProfileInfo = () => {
  const investmentQuestions = [
    {
      label: "Risk Tolerance",
      value: "High",
    },
    {
      label: "Investment Frequency",
      value: "Once a month",
    },
    {
      label: "Investment Experience",
      value: "1 to 2 years",
    },
    {
      label: "Yearly Income",
      value: "50+ lakhs",
    },
    {
      label: "Liquid Net Worth(stocks + bank balance)",
      value: "5 - 10 lakhs",
    },
    {
      label: "Total Net Worth(liquid net worth + all other assets)",
      value: "1+ crore rupees",
    },
  ];

  return (
    <>
      <div className="pt-6 pb-4">
        {investmentQuestions.map((item) => (
          <InvestQuestionItem key={item.label} {...item} />
        ))}
      </div>
    </>
  );
};

export default InvestmentProfileInfo;
