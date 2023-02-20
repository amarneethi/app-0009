const InvestQuestionItem = ({ label, value }) => {
  return (
    <div className="flex border-b-[1px] border-slate-200 px-8 py-6 text-sm first:pt-1 last:border-0">
      <div className="grow text-slate-500">{label}</div>
      <div className="flex items-center space-x-2">
        <div className="grow text-slate-700">{value}</div>
        <img src="/images/icons/chevron-right.svg" alt="chevron-right" />
      </div>
    </div>
  );
};

export default InvestQuestionItem;
