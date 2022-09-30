import { useState, Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
// import "./FAQS.css";

export default function Example() {
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  const Accordiondata = [
    {
      id: 1,
      title: "What if my wallet is compromised? What can I do?",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
      commodi alias. Non quia esse quisquam minima delectus tenetur
      asperiores perferendis! Non quia eligendi explicabo et beatae
      dolorem, cum nobis libero vel autem qui totam consequuntur rem porro
      excepturi consequatur sapiente ad commodi ullam! Quis voluptatem
      eligendi quos, maxime unde minus?`,
    },
    {
      id: 2,
      title: "What if my wallet is compromised? What can I do?",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
      commodi alias. Non quia esse quisquam minima delectus tenetur
      asperiores perferendis! Non quia eligendi explicabo et beatae
      dolorem, cum nobis libero vel autem qui totam consequuntur rem porro
      excepturi consequatur sapiente ad commodi ullam! Quis voluptatem
      eligendi quos, maxime unde minus?`,
    },
    {
      id: 3,
      title: "What if my wallet is compromised? What can I do?",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
      commodi alias. Non quia esse quisquam minima delectus tenetur
      asperiores perferendis! Non quia eligendi explicabo et beatae
      dolorem, cum nobis libero vel autem qui totam consequuntur rem porro
      excepturi consequatur sapiente ad commodi ullam! Quis voluptatem
      eligendi quos, maxime unde minus?`,
    },
    {
      id: 4,
      title: "What if my wallet is compromised? What can I do?",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
      commodi alias. Non quia esse quisquam minima delectus tenetur
      asperiores perferendis! Non quia eligendi explicabo et beatae
      dolorem, cum nobis libero vel autem qui totam consequuntur rem porro
      excepturi consequatur sapiente ad commodi ullam! Quis voluptatem
      eligendi quos, maxime unde minus?`,
    },
    {
      id: 5,
      title: "What if my wallet is compromised? What can I do?",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
      commodi alias. Non quia esse quisquam minima delectus tenetur
      asperiores perferendis! Non quia eligendi explicabo et beatae
      dolorem, cum nobis libero vel autem qui totam consequuntur rem porro
      excepturi consequatur sapiente ad commodi ullam! Quis voluptatem
      eligendi quos, maxime unde minus?`,
    },
  ];
  return (
    <>
      <div className="container mx-auto max-w-6xl px-4 mt-10">
        {Accordiondata.map((items) => (
          <>
            <Accordion
              open={open === items.id}
              animate={customAnimation}
              className="py-2"
            >
              <div className="bg-[#DFE5FF] border-b-none border-[1px] border-[#19287D] rounded-md relative Accordiondata">
                <AccordionHeader
                  onClick={() => handleOpen(items.id)}
                  className="Accordiondata"
                >
                  <div className="text-[#19287D] font-medium  flex items-center gap-4">
                    <p>{items.title}</p>
                  </div>
                </AccordionHeader>
                {/* <i className="fa-solid fa-caret-up absolute top-4 right-6 text-3xl"></i> */}
              </div>
              <AccordionBody className="text-white">
                {items.content}
              </AccordionBody>
            </Accordion>
          </>
        ))}
      </div>
    </>
  );
}
