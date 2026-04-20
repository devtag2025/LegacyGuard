
export const QUESTIONS = [
  {
    id: 1,
    key: "relationshipStatus",
    heading: "Which best describes your current situation?",
    sub: "This helps us understand how your estate may need to be structured.",
    options: [
      { value: "single",           label: "Single" },
      { value: "married",          label: "Married or partnered" },
      { value: "separated",        label: "Separated", hint: "Including divorced" },
      { value: "widowed_remarried",label: "Widowed or remarried" },
    ],
  },
  {
    id: 2,
    key: "children",
    heading: "Do you have children or anyone who depends on you?",
    sub: "This can affect how assets are passed on and protected.",
    options: [
      { value: "no",            label: "No" },
      { value: "yes_current",   label: "Yes, with current partner" },
      { value: "yes_previous",  label: "Yes, from a previous relationship" },
      { value: "yes_both",      label: "Yes, both" },
    ],
  },
  {
    id: 3,
    key: "property",
    heading: "Do you own your home or any other property?",
    sub: "Property is often the most important factor in estate planning.",
    options: [
      { value: "no",            label: "No, I rent or live with family" },
      { value: "yes_outright",  label: "Yes, I own outright" },
      { value: "yes_mortgage",  label: "Yes, with a mortgage" },
      { value: "yes_jointly",   label: "Yes, jointly with someone" },
    ],
  },
  {
    id: 4,
    key: "assets",
    heading: "Which of the following best describes your situation?",
    sub: "A broad sense — this helps identify whether additional planning may be relevant.",
    options: [
      { value: "starting_out", label: "Just starting out" },
      { value: "comfortable",  label: "Comfortable" },
      { value: "established",  label: "Established", hint: "Some savings, pension, or investments" },
      { value: "significant",  label: "Significant assets", hint: "Property, business, or portfolio" },
    ],
  },
  {
    id: 5,
    key: "familyComplexity",
    heading: "Does anything about your family situation feel slightly more complex?",
    sub: "For example, previous relationships, stepchildren, or anything that doesn’t feel completely straightforward.",
    options: [
      { value: "straightforward",  label: "No, everything is straightforward" },
      { value: "some_dynamics",    label: "Yes, a little" },
      { value: "quite_complex",    label: "Yes, it's quite complex" },
      { value: "not_sure",         label: "Not sure" },
    ],
  },
  {
    id: 6,
    key: "priority",
    heading: "What matters most to you when putting a will in place?",
    sub: "There’s no right answer — this helps us understand what outcome you’re looking for.",
    options: [
      { value: "simple_affordable", label: "Keeping it simple and affordable" },
      { value: "family_protected",  label: "Making sure my family is properly protected" },
      { value: "assets_intended",   label: "Ensuring assets go exactly where I intend" },
      { value: "proper_advice",     label: "Getting proper advice before I decide" },
    ],
  },
  {
    id: 7,
    key: "lpaAwareness",
    heading: "Have you considered who would manage your affairs if you couldn't?",
    sub: "This is something many people overlook — but it can be as important as the will itself.",
    options: [
      { value: "no_hadnt",  label: "No, I hadn't thought about it" },
      { value: "yes_plan",  label: "Yes, I have someone in mind" },
      { value: "not_sure",  label: "Not sure what that involves" },
    ],
  },
];