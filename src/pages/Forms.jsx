import { useState } from "react";
import { useNavbar } from "../context/NavContext";
import Navbar from "../components/Navbar/Navbar";
import PersonalInfoForm from "../components/Form/PersonalInfoForm";
import CompanyInfoForm from "../components/Form/CompanyInfoForm";
import BusinessInfoForm from "../components/Form/BusinessInfoForm";
import DocumentsUploadForm from "../components/Form/DocumentsUploadForm";
import ContactPersonInfoForm from "../components/Form/ContactPersonInfoForm";
import ConcernForm from "../components/Form/ConcernForm";
import Footer from "../components/Footer";
import ThankYouPage from "../components/Form/ThankYouPage";
const Forms = () => {
  const { isopen } = useNavbar();
  const [step, setStep] = useState(1);
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({
    personal: {},
    company: {},
    business: {},
    documents: {},
    contact: {},
    concern: {},
  });

  const tabDisplayNames = {
    personal: "Personal Info",
    company: "Company Info",
    business: "Business Info",
    documents: "Documents",
    contact: "Contact person Info",
    concern: "Concern",
  };

  const updateFormData = (stepData, currentStep) => {
    setFormData((prevData) => ({
      ...prevData,
      [currentStep]: stepData,
    }));
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <PersonalInfoForm
            onNext={(data) => {
              updateFormData(data, "personal");
              nextStep();
            }}
            initialData={formData.personal}
          />
        );
      case 2:
        return (
          <CompanyInfoForm
            onNext={(data) => {
              updateFormData(data, "company");
              nextStep();
            }}
            onBack={() => {
              prevStep();
            }}
            initialData={formData.company}
          />
        );
      case 3:
        return (
          <BusinessInfoForm
            onNext={(data) => {
              updateFormData(data, "business");
              nextStep();
            }}
            onBack={() => {
              prevStep();
            }}
            initialData={formData.business}
          />
        );
      case 4:
        return (
          <DocumentsUploadForm
            onNext={(data) => {
              updateFormData(data, "documents");
              nextStep();
            }}
            onBack={() => {
              prevStep();
            }}
            initialData={formData.documents}
          />
        );
      case 5:
        return (
          <ContactPersonInfoForm
            onNext={(data) => {
              updateFormData(data, "contact");
              nextStep();
            }}
            onBack={() => {
              prevStep();
            }}
            initialData={formData.contact}
          />
        );
      case 6:
        return showThankYou ? (
          <ThankYouPage
            onOkClick={() => {
              setShowThankYou(false);
              // Add any additional logic here, e.g., resetting the form or navigating to another page
            }}
          />
        ) : (
          <ConcernForm
            onNext={(data) => {
              updateFormData(data, "concern");
              console.log("Final form data:", formData);
              setShowThankYou(true);
            }}
            onBack={() => {
              prevStep();
            }}
            initialData={formData.concern}
          />
        );
      default:
        return null;
    }
  };

  const getTabTitle = () => {
    const displayName =
      tabDisplayNames[Object.keys(tabDisplayNames)[step - 1]] || "Documents";
    return `Documents > ${displayName}`;
  };

  return (
    <>
 
      <Navbar />
      <div className={`mt-16 ${isopen ? "ml-56" : "ml-0"}`}>
        <div className="p-8 ml-14 max-w-6xl mx-auto z-50">
          <h1 className="text-2xl ml-20 font-bold">{getTabTitle()}</h1>

          <div className="mt-4 flex ml-20 space-x-0">
            {Object.entries(tabDisplayNames).map(([key, value], index) => (
              <button
                key={key}
                disabled={step !== index + 1}
                className={`px-4 py-2 ${
                  step === index + 1
                    ? "bg-gray-200 text-black"
                    : "bg-darkBlue text-white"
                }`}
              >
                {value}
              </button>
            ))}
          </div>

          <div className="mt-4 border-t-2 border-darkBlue">{renderForm()}</div>

          <div className="mt-4">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Forms;