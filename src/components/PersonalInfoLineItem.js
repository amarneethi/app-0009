const PersonalInfoLineItem = ({ label, value }) => {
    return (
        <div className="flex text-sm border-b-[1px] border-slate-200 px-8 py-4 last:border-0 first:pt-1">
        <div className="w-32 text-slate-500">{label}</div>
        <div className="grow text-slate-700">{value}</div>
        </div>
    )
}

export default PersonalInfoLineItem