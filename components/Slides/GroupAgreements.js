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
        <Heading margin="0px" paddingTop="0px" paddingBottom="0px">
          Group Agreements
        </Heading>
        <OrderedList fontSize="36px">
          <ListItem>
            Learning is <strong>social</strong> – we will be learning from one
            another as a community.
          </ListItem>
          <ListItem>
            Learning is <strong>emotional</strong> – we honor the emotions that
            we bring into this space as we engage in learning.
          </ListItem>
          <ListItem>
            Learning is <strong>cognitive</strong> – we focus our attention and
            fully engage our minds.
          </ListItem>
          <ListItem>
            We will also acknowledge that–in varying ways–life experiences,
            bias, racism, geography, cultural backgrounds, age, gender, etc. can
            affect our learning experiences today.
          </ListItem>
        </OrderedList>
      </FlexBox>
      <Notes>What else do we need to add or recognize?</Notes>
    </Slide>
  );
}
