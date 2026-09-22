export type ScriptureVerse = {
  num: number;
  text: string;
};

export type DailyScriptureReading = {
  date: string;
  weekday: string;
  title: string;
  reference: string;
  verses: ScriptureVerse[];
};

// Newest reading first.
export const DAILY_SCRIPTURE_READINGS: DailyScriptureReading[] = [
  {
    date: "September 22, 2026",
    weekday: "Tuesday",
    title: "THE MIND OF CHRIST",
    reference: "Philippians 2:5-11",
    verses: [
      { num: 5, text: "Let this mind be in you, which was also in Christ Jesus:" },
      {
        num: 6,
        text: "Who, being in the form of God, thought it not robbery to be equal with God:",
      },
      {
        num: 7,
        text: "But made himself of no reputation, and took upon him the form of a servant, and was made in the likeness of men:",
      },
      {
        num: 8,
        text: "And being found in fashion as a man, he humbled himself, and became obedient unto death, even the death of the cross.",
      },
      {
        num: 9,
        text: "Wherefore God also hath highly exalted him, and given him a name which is above every name:",
      },
      {
        num: 10,
        text: "That at the name of Jesus every knee should bow, of things in heaven, and things in earth, and things under the earth;",
      },
      {
        num: 11,
        text: "And that every tongue should confess that Jesus Christ is Lord, to the glory of God the Father.",
      },
    ],
  },
];
