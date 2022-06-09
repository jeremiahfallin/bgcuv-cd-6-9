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
    <Slide backgroundColor="hsl(300, 100%, 50%, 0.8)">
      <FlexBox height="100%" flexDirection="column">
        <Heading>Preparing for the Journey: A Personal Commitment</Heading>
      </FlexBox>
      <Notes>
        <OrderedList>
          <ListItem>Personal Commitment:</ListItem>
          <ListItem>
            Have staff take a beat to think about how they want to show up to
            today’s meeting and what they want to get out of it. (Either mental
            image or write down a personal commitment.)
          </ListItem>
          <ListItem>
            Kind Loving Words to Ourselves (after body-scan and three breathing
            cycles):
          </ListItem>
          <ListItem>Hand over the heart.</ListItem>
          <ListItem>It’s okay to be awesome.</ListItem>
          <ListItem>I am awesome.</ListItem>
          <ListItem>It’s okay to be great.</ListItem>
          <ListItem>I am great.</ListItem>
          <ListItem>When I work hard</ListItem>
          <ListItem>And set my mind to it</ListItem>
          <ListItem>I can do it.</ListItem>
          <ListItem>I can be my best.</ListItem>
          <ListItem>I can do my best.</ListItem>
          <ListItem>Because I am my best.</ListItem>
          <ListItem>Notice how this makes you feel.</ListItem>
        </OrderedList>
      </Notes>
    </Slide>
  );
}
