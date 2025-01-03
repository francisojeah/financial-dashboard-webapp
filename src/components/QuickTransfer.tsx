import { useState } from "react";

interface Contact {
  id: number;
  name: string;
  role: string;
  image: string;
}

const contacts: Contact[] = [
  {
    id: 1,
    name: "Livia Bator",
    role: "CEO",
    image: "/assets/images/livia-image.png",
  },
  {
    id: 2,
    name: "Randy Press",
    role: "Director",
    image: "/assets/images/randy-image.png",
  },
  {
    id: 3,
    name: "Workman",
    role: "Designer",
    image: "/assets/images/workman-image.png",
  },
];

const QuickTransfer = () => {
  const [selectedContactId, setSelectedContactId] = useState<number | null>(
    null
  );

  const handleSelectContact = (id: number) => {
    setSelectedContactId(id);
  };

  return (
    <div>
      <p className="text-base md:text-[1.375rem] leading-[1.625rem] text-custom-primary-1 font-semibold mb-4">Quick Transfer</p>
      <div className="flex flex-col gap-4 w-full bg-white rounded-[1.5625rem] p-4 sm:p-8">
        <div className="flex items-center gap-4 ">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className={`flex flex-col items-center gap-3 cursor-pointer p-2`}
              onClick={() => handleSelectContact(contact.id)}
            >
              <div className="flex flex-col items-center gap-1">
                <img
                  className="w-[3.125rem] h-[3.125rem] md:w-[4.375rem] md:h-[4.375rem] rounded-full mb-2"
                  src={contact.image}
                  alt={contact.name}
                />
                <p
                  className={`text-black text-xs whitespace-nowrap md:text-base ${
                    selectedContactId === contact.id
                      ? "font-bold "
                      : "font-semibold"
                  }`}
                >
                  {contact.name}
                </p>
                <p className="text-[0.9375rem] leading-[1.125rem] text-custom-primary-2">
                  {contact.role}
                </p>
              </div>
            </div>
          ))}
          <div className="h-[3.125rem] w-[3.125rem] flex justify-center items-center rounded-full shadow-[4px_4px_18px_-2px_#E7E4E8CC]">
          <img
            src="/assets/icons/arrow-right-icon.svg"
            alt="arrow right icon"
            className="w-[0.40625rem] h-[0.8125rem]"
          />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <p className="text-xs md:text-base whitespace-nowrap text-custom-primary-2">Write Amount</p>
          <div className="relative w-full md:w-[15.9375rem]">
            <input
              className="text-xs md:text-base px-8 py-4 w-full h-12 pr-14 flex shadow-none bg-custom-primary-3 rounded-full self-stretch gap-2 items-center focus:outline-none text-[#8BA3CB]"
              placeholder="525.50"
            />
            <button className="absolute inset-y-0 right-0 flex items-center justify-center gap-3 w-fit px-4 md:px-6 h-12 rounded-full bg-black hover:bg-gray-800 transition-colors">
              <p className="text-xs md:text-base font-medium text-white">Send</p>
              <img
                src="/assets/icons/send-icon.svg"
                alt="send icon"
                className="w-[1rem] h-[0.875rem] md:w-[1.625rem] md:h-[1.4125rem]"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
