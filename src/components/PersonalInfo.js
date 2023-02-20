import PersonalInfoLineItem from "./PersonalInfoLineItem";

const PersonalInfo = () => {
  const personalInfo = [
    {
      label: "First Name",
      value: "Sivasankar",
    },
    {
      label: "Last Name",
      value: "Madhunika",
    },
    {
      label: "Phone Number",
      value: "1234567890",
    },
    {
      label: "Date of Birth",
      value: "01/01/1990",
    },
    {
      label: "Address",
      value: "1234 Main St, City, State, 12345",
    },
    {
      label: "Tax ID",
      value: "123456789",
    },
    {
      label: "Nationality",
      value: "IND",
    },
    {
      label: "Tax Residency",
      value: "IND",
    },
  ];

  return (
    <>
      <div className="pt-4 pb-4">
        {personalInfo.map((item) => (
          <PersonalInfoLineItem key={item.label} {...item} />
        ))}
        <p className="px-4 pt-4 pb-2 text-xs  text-slate-600">
          If the information above is incorrect or needs to be updated, please
          contact help@vestedfinance.com
        </p>
      </div>
    </>
  );
};

export default PersonalInfo;
