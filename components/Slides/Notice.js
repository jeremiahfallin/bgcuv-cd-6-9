import { useState } from "react";
import { Slide, Heading, Text, FlexBox, Notes } from "spectacle";

const emotions = ["Happy", "Sad", "Angry", "Scared"];
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export default function () {
  const [emotion, setEmotion] = useState(emotions[0]);
  return (
    <Slide>
      <FlexBox
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Heading>{emotion}!</Heading>
        <Text>Show this emotion in the game!</Text>
        <button
          style={{
            fontSize: "48px",
            padding: "2rem",
            borderRadius: "10px",
            backgroundColor: "hsla(230, 100%, 67%, .85)"
          }}
          onClick={() =>
            setEmotion((s) => {
              let newEmotion = emotions[random(0, 4)];
              while (newEmotion === s) {
                newEmotion = emotions[random(0, 4)];
              }
              return newEmotion;
            })
          }
        >
          Reroll
        </button>
      </FlexBox>
      <Notes>
        <Text>
          Directions: Self-Assign: Groups of 4 1 iPad in Group or on your phone.
          Find the Slide Play a Game where we take turns embodying a Primary
          Emotion and Someone practicing the DNA Method. Longest Hair is the
          Coach Practicing the DNA Method Other Three Embody the Emotion Once
          The Coach has Coached All Three. The Coach Role Passes to the Left.
          Randomize emotions again. What questions do you have?
        </Text>
      </Notes>
    </Slide>
  );
}
