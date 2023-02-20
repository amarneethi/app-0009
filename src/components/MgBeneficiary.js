import BeneficiaryItem from "./BeneficiaryItem";

const ManageBeneficiary = () => {
  const Beneficiaries = [
    {
      beneficiaryNo: {
        label: "Beneficiary #",
        value: 1,
      },
      beneficiaryName: {
        label: " Name",
        value: "John Doe",
      },
      beneficiaryRelationship: {
        label: "Relationship",
        value: "Father",
      },
      beneficiaryPercentage: {
        label: "Percentage",
        value: "50%",
      },
      beneficiaryDOB: {
        label: "Date of Birth",
        value: "01/01/1990",
      },
      beneficiaryEmail: {
        label: "Email",
        value: "john@gmail.com",
      },
      beneficiaryPhone: {
        label: "Phone",
        value: "1234567890",
      },
    },
    {
      beneficiaryNo: {
        label: "Beneficiary #",
        value: 2,
      },
      beneficiaryName: {
        label: "Beneficiary Name",
        value: "Alexandra Smith",
      },
      beneficiaryRelationship: {
        label: "Relationship",
        value: "Mother",
      },
      beneficiaryPercentage: {
        label: "Percentage",
        value: "50%",
      },
      beneficiaryDOB: {
        label: "Date of Birth",
        value: "01/01/1990",
      },
      beneficiaryEmail: {
        label: "Email",
        value: "alexandra@gmail.com",
      },
      beneficiaryPhone: {
        label: "Phone",
        value: "1234567890",
      },
    },
  ];

  return (
    <>
      <div className="space-y-8 p-8">
        <div className="flex">
          <button className="flex items-center space-x-1 rounded bg-green-700 px-4 py-2 text-sm font-light text-white hover:bg-green-600">
            <svg
              width="16"
              height="16"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.85428 11.4734L3.02438 13.5481C2.917 13.8166 3.1834 14.083 3.45185 13.9756L5.52662 13.1457C5.85743 13.0134 6.15792 12.8153 6.40985 12.5633L13.5917 5.38183C14.1365 4.83695 14.1365 3.95353 13.5917 3.40866C13.0468 2.86378 12.1634 2.86378 11.6185 3.40866L4.43668 10.5902C4.18475 10.8421 3.98661 11.1426 3.85428 11.4734Z"
                fill="white"
              />
            </svg>
            <span>Edit Beneficiaries</span>
          </button>
        </div>
        {Beneficiaries.map((item) => (
          <BeneficiaryItem key={item.beneficiaryNo.value} {...item} />
        ))}
      </div>
    </>
  );
};

export default ManageBeneficiary;
