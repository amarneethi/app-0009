import LeftNav from "@/components/LeftNav";
import NavBar from "@/components/NavBar";
import PageHeading from "@/components/PageHeading";
import PersonalInfo from "@/components/PersonalInfo";
import Head from "next/head";

const Home = () => {
  const navItems = [
    {
      key: 1,
      name: "Personal Information",
      link: "/",
      selected: true,
    },
    {
      key: 2,
      name: "Investment Profile",
      link: "/investmentProfile",
      selected: false,
    },
    {
      key: 3,
      name: "Recurring Investments",
      link: "/recurringInvestments",
      selected: false,
    },
    {
      key: 4,
      name: "Manage Beneficiaries",
      link: "/manageBeneficiaries",
      selected: false,
    },
    {
      key: 5,
      name: "Securities Lending Income Program",
      link: "/",
      selected: false,
    },
    {
      key: 6,
      name: "Login and Security",
      link: "/",
      selected: false,
    },
  ];

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        </style>
      </Head>
      <div className="w-full bg-slate-300">
        <NavBar />
      </div>
      <div className="m-auto mt-10 flex w-[1008px]">
        <LeftNav NavItems={navItems} />
        <div className="grow rounded-lg border-[1px] border-slate-200 bg-white">
          <PageHeading
            title="Personal Information"
            subtitle="Your first name, last name and other details."
          />
          <PersonalInfo />
        </div>
      </div>
    </>
  );
};

export default Home;
