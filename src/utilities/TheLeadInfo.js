import checkMark from "../../public/checkMark.png";
import girl from "../../public/girl.jpeg";
import award from "../../public/award.png";
import window from "../../public/new-window.png";
import boy from "../../public/boy.jpeg";

export const TheLeadInfo = [
  {
    name: "Jane Reyes",
    picture: girl,
    icon: <i class="bi bi-linkedin"></i>,
    info: "COO, Northwind Traders",

    text1:
      "Jane is a key decision maker and was browsing 'espresso machines' on First Coffee's website.",

    text2:
      "Multiple people at her company have reported 'slowness' during service requests",

    About:
      "Jane Reyes, the Chief Operating Officer of Northind Traders, is a dynamic leader with a proven track record in optimizing operations and enhancing customer experiences. Under her guidance, Northwind Traders' in-house coffee shops have flourished, becoming a hallmark of quality and innovation. Jane's commitment to excellence makes her an ideal partner for First Coffee. She is always seeking top-tier equipment to elevate her coffee shop offerings, ensuring consistent, high-quality service.",
    why: [
      {
        image: checkMark,
        label: "Decision Maker",
        value: "Yes",
      },
      {
        image: award,
        label: "Potential deal value",
        value: "$1M",
      },
      {
        image: window,
        label: "Intent",
        value: "High",
      },
    ],
  },
];
