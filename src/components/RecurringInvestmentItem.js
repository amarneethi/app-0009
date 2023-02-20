const RecurringInvestmentItem = ({
  ticker = "AAPL",
  amount = "0.5",
  frequency = "Repeats every 2 weeks",
  nextOrder = "20 Feb, 2023",
    image = "/images/logos/Apple.svg",
  color='bg-slate-900'
}) => {
  return (
    <>
      <div className="flex w-full items-center space-x-4 rounded-lg border-[1px] border-slate-300 p-8 ">
        <div className={`flex h-16 w-16 items-center rounded-full ${color}`}>
          <img src={image} alt={ticker} className="m-auto w-4/5" />
        </div>
        <div className="grow text-lg">
          <p className="font-semibold text-slate-700">{ticker}</p>
          <div className="text-slate-500 font-light">
            <p >{frequency}</p>
            <p >{nextOrder}</p>
          </div>
        </div>
        <div>
          <p className="text-slate-900 font-semibold">${amount}</p>
        </div>
      </div>
    </>
  );
};

export default RecurringInvestmentItem;
