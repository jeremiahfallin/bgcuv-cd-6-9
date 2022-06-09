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
        <Heading padding="0px">Preparation</Heading>
        <OrderedList fontSize="36px">
          <ListItem>Prepare yourself</ListItem>
          <OrderedList fontSize="36px">
            <ListItem>Take care of your needs.</ListItem>
            <ListItem>Be an active participant.</ListItem>
            <ListItem>Do whatever you need to do to be present. </ListItem>
          </OrderedList>
          <ListItem>Land acknowledgement</ListItem>
          <UnorderedList fontSize="36px">
            <ListItem>
              We respectfully acknowledge and honor with gratitude the native
              people who have stewarded the land upon which we stand throughout
              the generations.
            </ListItem>
          </UnorderedList>
          <ListItem>
            <a href="https://native-land.ca/">https://native-land.ca/</a>
          </ListItem>
        </OrderedList>
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
