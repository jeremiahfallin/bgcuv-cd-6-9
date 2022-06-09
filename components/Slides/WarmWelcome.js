import { useState, useRef, useEffect } from "react";
import { Slide, Box, Image, Text, Notes, FlexBox } from "spectacle";

function useInterval(callback, delay) {
  const intervalRef = useRef(null);
  const savedCallback = useRef(callback);
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    const tick = () => savedCallback.current();
    if (typeof delay === "number") {
      intervalRef.current = window.setInterval(tick, delay);
      return () => window.clearInterval(intervalRef.current);
    }
  }, [delay]);
  return intervalRef;
}

const images = [
  "https://media2.giphy.com/media/11kcEW8uNh8RwY/giphy.gif",
  "https://i.kym-cdn.com/entries/icons/original/000/012/468/shakeee.jpg"
];

export default function () {
  const [status, setStatus] = useState("running");
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  useInterval(
    () => {
      setImageIndex((index) => (index + 1) % images.length);
    },
    status === "running" ? 1000 : null
  );

  useInterval(() => {
    setTimeElapsed((timeElapsed) => timeElapsed + 1);
  }, 1000);

  return (
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Text>Time Elapsed: {timeElapsed} second(s)</Text>
        <Box>
          <Image
            height="400px"
            width="auto !important"
            src={images[imageIndex % images.length]}
            alt="an emotion"
          />
        </Box>
        <button
          style={{
            fontSize: "24px",
            padding: "1rem",
            borderRadius: "10px",
            backgroundColor: "hsla(230, 100%, 67%, .85)"
          }}
          onClick={() =>
            setStatus((s) => (s === "running" ? "idle" : "running"))
          }
        >
          {status === "running" ? "Stop" : "Start"}
        </button>
      </FlexBox>
      <Notes>
        <ol>
          <li>
            Line-up with your iPads by your birthdays. Starting with January,
            ending with December. (La Reveal: Line up By) Then we’re going to
            fold the line. (La Reveal: Group Former)
          </li>
          <li>
            You will then have 2-minutes to share your meme or gif with your
            partner.
          </li>
          <li>
            <ol>
              <li>
                Introduce yourself. Then we’re sharing why you chose this meme.
                What meaning does it have for you? You have 1-minute to share.
                Then we will switch and your partner will have 1-minute to share
                their meme or gif.
              </li>
            </ol>
          </li>
          <li>
            Transition: When you hear the second beep. We will return to our
            seats to go over our some Housekeeping. What questions do you have?
          </li>
        </ol>
      </Notes>
    </Slide>
  );
}
