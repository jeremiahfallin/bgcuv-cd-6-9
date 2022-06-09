import {
  Slide,
  Heading,
  OrderedList,
  ListItem,
  Text,
  Notes,
  Image,
  FlexBox
} from "spectacle";

export default function () {
  return (
    <>
      <Slide>
        <Heading>Brain Smart Start</Heading>
        <OrderedList>
          <ListItem>Activity to Unite</ListItem>
          <ListItem>Activity to Disengage Stress</ListItem>
          <ListItem>Activity to Connect</ListItem>
          <ListItem>Activity to Commit</ListItem>
          <ListItem>Safekeeper Ritual</ListItem>
        </OrderedList>
      </Slide>
      <Slide>
        <Heading>Safekeeper Ritual</Heading>
        <Text>
          My job is to keep the program space safe so that everyone can learn
          and have fun. Your job is to help keep the classroom safe so that
          everyone can learn and have fun.
        </Text>
      </Slide>
      <Slide>
        <Heading>Safekeeper Responsibilities</Heading>
        <OrderedList>
          <ListItem>
            Be a STAR. Create a physically, emotionally and psychologically safe
            classroom by using composure to manage our upset.
          </ListItem>
          <ListItem>Become aware of trigger thoughts and events.</ListItem>
          <ListItem>Wish children well and notice instead of judging.</ListItem>
          <ListItem>
            Use the language of safety instead of the language of fear.
          </ListItem>
          <OrderedList>
            <ListItem>We must relate everything we do to safety.</ListItem>
          </OrderedList>
          <ListItem>
            See conflict as a rich, positive opportunity to coach and grow.
          </ListItem>
        </OrderedList>
      </Slide>
      <Slide>
        <Heading>Reflection</Heading>
        <Text>Rose - Bud - Thorn</Text>
        <FlexBox>
          <Image
            src="https://media.giphy.com/media/jaMyDO8Jeprl6/giphy.gif"
            height="250px"
            alt="rose blooming"
          />
        </FlexBox>
        <Notes>
          <Text>Activity</Text>
          <Text>Think - Pair - Share</Text>
          <Text>Think about your response.</Text>
          <Text>Find a partner and share your response with them.</Text>
          <Text>Share out to the larger group.</Text>
        </Notes>
      </Slide>
    </>
  );
}
