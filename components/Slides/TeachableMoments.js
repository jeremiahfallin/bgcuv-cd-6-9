import {
  FlexBox,
  Heading,
  Image,
  ListItem,
  Notes,
  OrderedList,
  Slide,
  Text
} from "spectacle";

export default function () {
  return (
    <>
      <Slide>
        <Heading>Teachable Moments: How we Coach</Heading>
        <Notes>
          <OrderedList>
            <ListItem>
              When we focus on internal states first and behaviors second we
              create an opportunity to use conflict as a tool for learning
              social and life skills.
            </ListItem>
            <ListItem>Focus on what we want to accomplish.</ListItem>
            <ListItem>
              Utilize connection instead of control as the motivation to behave.
            </ListItem>
            <ListItem>Celebrate our successes and choices.</ListItem>
            <ListItem>See situations from varying perspectives.</ListItem>
            <ListItem>
              Communicate desires and frustrations in a socially acceptable
              manner.
            </ListItem>
            <ListItem>Hold ourselves accountable.</ListItem>
            <ListItem>
              This coaching process begins with befriending your feelings and
              learning how to coach yourself through those feelings. You then
              learn how to coach children through their feelings.
            </ListItem>
            <ListItem>
              The more we are willing to change ourselves and improve our
              self-regulation skills, the better we can coach and interact with
              our children and with each other.
            </ListItem>
            <ListItem></ListItem>
          </OrderedList>
        </Notes>
      </Slide>
      <Slide>
        <FlexBox height="100%">
          <Text>
            Teachable moments require us to coach children to change their
            internal emotional states first. Then we teach a new behavioral
            skill.
          </Text>
          <Image
            src="https://media.giphy.com/media/3o7btS2kwPE7ZdG0Te/giphy.gif"
            height="50%"
            alt="Michael and Dwight celebrating"
          />
        </FlexBox>
      </Slide>
    </>
  );
}
