/**
 * Everything on the Classes page lives here — docs/SPEC.md §3.
 *
 * THE ONE TOGGLE THAT MATTERS:
 * When class signups open, change `registrationState` below to "open".
 * When they close, change it back to "interest". That's the whole update —
 * the page swaps its buttons and wording automatically. See docs/UPDATING.md.
 *
 * Dates, locations, and prices deliberately do NOT appear on the website —
 * they live in the Jotform, which the team can update without touching code.
 *
 * Sources: seattlesolvers.com/classes/intro-classes and the team's class
 * policies page — fetched 2026-06-11.
 */

/** "open" = signups live, link the signup form. "interest" = closed, link the interest list. */
export const registrationState: "open" | "interest" = "open";

export const forms = {
  // The signup Jotform (from the team's current intro-classes page).
  signup: "https://form.jotform.com/240864574513157",
  // The interest/waitlist Jotform shown between sessions.
  // PLACEHOLDER: the current site's interest page shows the same form ID as
  // signup — confirm whether a separate interest form exists and update.
  interest: "https://form.jotform.com/240864574513157",
} as const;

export const intro = {
  name: "Intro to LEGO Robotics",
  grades: "Incoming 3rd–7th graders",
  // Description from the team's current site, lightly edited.
  summary:
    "A hands-on robotics class taught by our team members, using LEGO® SPIKE Prime kits for building and a Scratch-based app for programming. Students build a robot, learn to drive it, pick up and move objects, design attachments, and work with real sensors — and by the end, they're ready to join a FIRST LEGO League team if they want to keep going.",
  whoTeaches:
    "Every class is taught by Seattle Solvers members. We competed in FIRST LEGO League ourselves before moving up to FIRST Tech Challenge, so the curriculum is built from what actually worked when we were the ones learning.",
} as const;

/** The seven class sessions, from the team's published curriculum. */
export const curriculum = [
  {
    title: "Meet the robot",
    detail:
      "What robots are, how they work, and building your first LEGO SPIKE Prime robot.",
  },
  {
    title: "Make it move",
    detail:
      "Driving, turning, and thinking through a program before you write it (engineers call this pseudocode).",
  },
  {
    title: "Sensing the world",
    detail:
      "The ultrasonic sensor — how a robot measures distance — and picking up and moving objects.",
  },
  {
    title: "Following lines",
    detail: "The color sensor and the basics of line-following.",
  },
  {
    title: "The competition mat",
    detail:
      "Introduction to the FIRST LEGO League mat — the same field real teams compete on.",
  },
  {
    title: "Mission planning",
    detail: "Planning missions and coding the robot to score on the mat.",
  },
  {
    title: "Mock competition",
    detail:
      "Final coding session and a friendly mock competition to show what everyone built.",
  },
] as const;

/**
 * Evergreen FAQ — answers that stay true between sessions. Session dates,
 * locations, and prices live in the signup form, not here.
 */
export const faq = [
  {
    q: "Who is this class for?",
    a: "Students entering 3rd through 7th grade. No robotics or coding experience is needed — the class starts from zero.",
  },
  {
    q: "Who teaches it?",
    a: "Members of our FTC team. We designed the curriculum ourselves, based on our own years competing in FIRST LEGO League.",
  },
  {
    q: "Does my child need their own LEGO kit?",
    a: "No. We provide the LEGO SPIKE Prime kits and everything else needed during class.",
  },
  {
    q: "When and where are classes, and what do they cost?",
    a: "Sessions run several times a year and details change between sessions, so the signup form always has the current dates, location, and price. If signups are closed, the interest form gets you an email when the next session is announced.",
  },
  {
    q: "What happens after the class?",
    a: "Students finish prepared to join a FIRST LEGO League (FLL) team — the competition program for this age group. We're happy to point families toward next steps.",
  },
  {
    q: "What if we have to miss a class or cancel?",
    a: "We can't offer make-up classes. Cancellations up to two weeks before the start date receive a 75% refund, and if we ever have to cancel a class ourselves, we refund it in full.",
  },
  {
    q: "Where does the money go?",
    a: "Class fees are one of the main ways our team funds itself — they pay for robot parts, competition fees, and keeping the team free to join. Your signup directly supports a student robotics team.",
  },
] as const;

/**
 * PLACEHOLDER: parent testimonials and class photos. The team has run
 * classes for 70+ students — quotes and photos exist but need collecting
 * and approval. Add entries like:
 *   { quote: "…", attribution: "Parent of a 4th grader, summer 2025" }
 */
export const testimonials: { quote: string; attribution: string }[] = [];
