import RecurringInvestmentItem from "./RecurringInvestmentItem";
const RecurringInvestmentsInfo = () => {
  const recurringInvs = [
    {
      ticker: "AAPL",
      frequency: "Repeats every 2 weeks",
      nextOrder: "23 Feb, 2023",
      image: "images/logos/apple.svg",
      amount: 0.5,
      color: "bg-slate-900",
    },
    {
      ticker: "TSLA",
      frequency: "Repeats every week",
      nextOrder: "20 Feb, 2023",
      image: "images/logos/tesla.svg",
      amount: 0.5,
      color: "bg-red-600",
    },
  ];

  return (
    <>
      {/* Write a green button with text New Recurring Investment 

            */}

      <div className="space-y-8 p-8">
        <div className="flex">
          <button className="rounded font-light text-sm bg-green-700 px-4 py-2 text-white hover:bg-green-600">
            + New Recurring Investment
          </button>
        </div>
        {recurringInvs.map((item) => (
          <RecurringInvestmentItem key={item.ticker} {...item} />
        ))}
      </div>
    </>
  );
};

export default RecurringInvestmentsInfo;
