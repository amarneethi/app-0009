const PageHeading = ({ title, subtitle }) => (
    <div className="px-8 py-6 border-b-[1px] border-slate-200">
        <h1 className="text-lg font-medium text-slate-600">{title}</h1>
        <p className="text-slate-500 text-sm font-light">{subtitle}</p>
    </div>

);

export default PageHeading;