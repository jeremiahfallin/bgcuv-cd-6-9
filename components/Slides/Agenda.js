import {
  Slide,
  FlexBox,
  Heading,
  Notes,
  OrderedList,
  ListItem
} from "spectacle";

export default function () {
  return (
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading>Agenda Overview</Heading>
        <OrderedList>
          <ListItem>Personal Commitment</ListItem>
          <ListItem>Overview of the Brain States</ListItem>
          <ListItem>Overview of Self Regulation</ListItem>
          <ListItem>Central Ideas and Practices</ListItem>
          <ListItem>Reflection and Survey</ListItem>
        </OrderedList>
      </FlexBox>
      <Notes>
        <OrderedList>
          <ListItem>The Power of Perception</ListItem>
          <ListItem>The Skill of Composure - The Five Steps</ListItem>
          <ListItem>Downloading Calm for Ourselves</ListItem>
          <ListItem>Uploading Calm to those Around Us</ListItem>
        </OrderedList>
      </Notes>
    </Slide>
  );
}
