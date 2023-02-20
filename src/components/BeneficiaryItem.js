import React from "react";
import PersonalInfoLineItem from "./PersonalInfoLineItem";
const BeneficiaryItem = ({
  beneficiaryNo,
  beneficiaryName,
  beneficiaryRelationship,
  beneficiaryPercentage,
  beneficiaryDOB,
  beneficiaryEmail,
  beneficiaryPhone,
}) => {
  const transformedProps = [
    { label: beneficiaryName.label, value: beneficiaryName.value },
    {
      label: beneficiaryRelationship.label,
      value: beneficiaryRelationship.value,
    },
    { label: beneficiaryPercentage.label, value: beneficiaryPercentage.value },
    { label: beneficiaryDOB.label, value: beneficiaryDOB.value },
    { label: beneficiaryEmail.label, value: beneficiaryEmail.value },
    { label: beneficiaryPhone.label, value: beneficiaryPhone.value },
  ];

  return (
    <>
      <div className="rounded-lg border-[1px] border-slate-300">
        <div className="border-b-[1px] border-slate-300 py-4 px-4 text-sm font-normal text-slate-400">
          {beneficiaryNo.label}
          {beneficiaryNo.value}
        </div>
        {transformedProps.map((item) => (
          <PersonalInfoLineItem key={item.label} {...item} />
        ))}
      </div>
    </>
  );
};

export default BeneficiaryItem;
