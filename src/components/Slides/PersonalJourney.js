import { Slide, Image, FlexBox, Heading, Text, Appear, Notes } from "spectacle";
import survival from "../../images/survival.png";
import emotional from "../../images/emotional.png";
import executive from "../../images/executive.png";

export default function () {
  return (
    <>
      <Slide backgroundColor="hsl(300, 100%, 50%, 0.8)">
        <FlexBox height="100%" flexDirection="column">
          <Heading>Let's Begin</Heading>
          <Appear>
            <Text>What do you remember about the brain states?</Text>
          </Appear>
        </FlexBox>
      </Slide>
      <Slide backgroundColor="hsl(300, 100%, 50%, 0.8)">
        <FlexBox height="100%" flexDirection="column">
          <Heading>Survival State</Heading>
          <FlexBox height="100%" flexDirection="row">
            <Image
              src={survival}
              alt="Brain Stem"
              height="500px"
              width="500px"
            />
            <FlexBox height="100%" flexDirection="column">
              <Text>Am I safe?</Text>
              <Appear>
                <Text>Brain Stem</Text>
              </Appear>
            </FlexBox>
          </FlexBox>
        </FlexBox>
        <Notes>
          <Text>
            Activated under threat. Reactive state in which self-defense is the
            primary goal and intention. Fight, Flight or Freeze
          </Text>
        </Notes>
      </Slide>
      <Slide backgroundColor="hsl(300, 100%, 50%, 0.8)">
        <FlexBox height="100%" flexDirection="column">
          <Heading>Emotional State</Heading>
          <FlexBox height="100%" flexDirection="row">
            <Image
              src={emotional}
              alt="Limbic System"
              height="500px"
              width="500px"
            />
            <FlexBox height="100%" flexDirection="column">
              <Text>Am I loved?</Text>
              <Appear>
                <Text>Limbic System</Text>
              </Appear>
            </FlexBox>
          </FlexBox>
        </FlexBox>
        <Notes>
          <Text>
            Activated by the world not going our way and our personal past
            conditioning.
          </Text>
        </Notes>
      </Slide>
      <Slide backgroundColor="hsl(300, 100%, 50%, 0.8)">
        <FlexBox height="100%" flexDirection="column">
          <Heading>Executive State</Heading>
          <FlexBox height="100%" flexDirection="row">
            <Image
              src={executive}
              alt="Frontal Lobe"
              height="500px"
              width="500px"
            />
            <FlexBox height="100%" flexDirection="column">
              <Text>What can I learn?</Text>
              <Appear>
                <Text>Prefrontal Cortex</Text>
              </Appear>
            </FlexBox>
          </FlexBox>
        </FlexBox>
        <Notes>
          <Text>
            Optimal learning state, relaxed alertness. The executive state is a
            state of mindful, conscious integration where feelings and thoughts
            align, where we can access our intuitive knowledge and brilliance,
            and hear the voice of our wise advocate.
          </Text>
        </Notes>
      </Slide>
    </>
  );
}
