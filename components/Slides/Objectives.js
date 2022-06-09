import {
  Slide,
  FlexBox,
  Heading,
  Notes,
  OrderedList,
  ListItem,
  UnorderedList
} from "spectacle";

export default function () {
  return (
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading>Objectives</Heading>
        <UnorderedList>
          <ListItem>
            By the end of today’s meeting, staff should be able to:{" "}
          </ListItem>
          <OrderedList>
            <ListItem>Understand the Power of Perception.</ListItem>
            <ListItem>
              Understand and know how to Implement the Five Steps of Composure.
            </ListItem>
            <ListItem>Understand the Safety of Routines.</ListItem>
          </OrderedList>
        </UnorderedList>
      </FlexBox>
      <Notes>
        Welcome to our Conscious Discipline training!
        <ol>
          <li>We're learning to be human.</li>
        </ol>
      </Notes>
    </Slide>
  );
}
