import Wash from "../Assets/AfterCare/Washing.png";
import cream from "../Assets/AfterCare/Cream.jpg";
import itch from "../Assets/AfterCare/Itch.jpg";
import cream2 from "../Assets/AfterCare/Cream2.jpg";
import gym from "../Assets/AfterCare/Gym.jpg";
import Selfcare from "../Assets/AfterCare/CareWeek.jpg";
import Talk from "../Assets/AfterCare/Consultations.jpg";

const care = [
  {
    id: 1,
    heading: "Initial Cleaning (Days 1–2)",
    description:
      "Gently rinse your tattoo with clean, running water. Avoid using soap or any abrasive products. Allow the tattoo to air dry completely. Do not apply any creams or ointments during the first two days.",
    img: Wash,
  },
  {
    id: 2,
    heading: "Moisturizing (Starting Day 3)",
    description:
      "After the initial two-day drying period, begin applying a thin layer of Calendula-based balm or a specialized tattoo aftercare cream. Use just enough to give the tattoo a slight shine—do not over-apply.",
    img: cream,
  },
  {
    id: 3,
    heading: "Managing Itchiness and Scabbing",
    description:
      "If your tattoo becomes itchy, do not scratch it. Gently pat the area if needed. Avoid picking or peeling any scabs; let them fall off naturally to prevent damage to the tattoo.",
    img: itch,
  },
  {
    id: 4,
    heading: "Ongoing Moisturization",
    description:
      "Continue applying the recommended balm every four hours for up to three weeks to support the healing process.",
    img: cream2,
  },
  {
    id: 5,
    heading: "Activity Restrictions",
    description:
      "Avoid gym workouts for one week and refrain from swimming for three weeks to prevent infection or irritation.",
    img: gym,
  },
  {
    id: 6,
    heading: "Healing Timeline",
    description:
      "With proper care, your tattoo should begin to heal noticeably within the first week.",
    img: Selfcare,
  },
  {
    id: 7,
    heading: "Need Help?",
    description:
      "If you have any questions or concerns during the healing process, please don’t hesitate to contact us.",
    img: Talk,
  },
];
export default care;
