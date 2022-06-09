import {
  Heading,
  Notes,
  Slide,
  Text,
  FlexBox,
  Image,
  Appear,
  Box,
  Grid,
  ListItem,
  UnorderedList,
  OrderedList
} from "spectacle";

export default function () {
  return (
    <>
      <Slide>
        <FlexBox height="100%" flexDirection="column">
          <Heading margin="0px">Emotions</Heading>
          <FlexBox>
            <Text>
              We cannot control or predict our emotions, however, we can embrace
              them, allow them to bubble up to conscious awareness and follow
              the internal guidance they provide.
            </Text>
            <Image
              src="https://media.giphy.com/media/mQuQyU2S1x1qsFM0bp/giphy.gif"
              height="50%"
              alt="Scared Scooby Doo"
            />
          </FlexBox>
        </FlexBox>
        <Notes>
          Then we can name the emotion and it becomes a feeling.
          <br />
          Feelings are conscious and manageable. We can regulate them.
        </Notes>
      </Slide>
      <Slide>
        <Heading>
          Every emotion has involuntary facial and vocal signals that help us
          distinguish one from another.
        </Heading>
        <Appear>
          <Text>Practice!</Text>
        </Appear>
      </Slide>
      <Slide>
        <Heading>Primary and Secondary emotions</Heading>
        <Appear>
          <Text>
            Primary Emotions: uncomplicated, natural responses that are innately
            fundamental to human functioning.
          </Text>
        </Appear>
        <Appear>
          <Text>
            Secondary Emotions: are considered “secondary” because they are not
            necessarily related to an innate survival response in a given
            situation.
          </Text>
        </Appear>
        <Notes>
          We must learn to listen to our primary feelings. Listening to our
          feelings requires us to become aware of them. We must be cognizant of
          what they feel like in our bodies, look like on our faces and sound
          like in our tone of voice.
        </Notes>
      </Slide>
      <Slide>
        <FlexBox alignItems="center" justifyContent="center">
          <Heading>The Primary Focus</Heading>
        </FlexBox>
      </Slide>
      <Slide>
        <Grid
          gridTemplateColumns="50% 50%"
          gridTemplateRows="50% 50%"
          height="100%"
        >
          <FlexBox
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
          >
            <Text textAlign="center">Anger</Text>
            <Image
              src="https://media.giphy.com/media/11tTNkNy1SdXGg/giphy.gif"
              height="50% !important"
              width="auto !important"
              alt="Scared Kirby"
            />
          </FlexBox>
          <FlexBox
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
          >
            <Text textAlign="center">Happy</Text>
            <Image
              src="https://media.giphy.com/media/rdma0nDFZMR32/giphy.gif"
              height="50% !important"
              width="auto !important"
              alt="Scared Kirby"
            />
          </FlexBox>
          <FlexBox
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
          >
            <Text textAlign="center">Scared</Text>
            <Image
              src="https://media.giphy.com/media/GVKHEH8M5MLIWiqZVz/giphy.gif"
              height="50% !important"
              width="auto !important"
              alt="Scared Kirby"
            />
          </FlexBox>
          <FlexBox
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
          >
            <Text textAlign="center">Sad</Text>
            <Image
              src="https://media.giphy.com/media/10tIjpzIu8fe0/giphy.gif"
              height="50% !important"
              width="auto !important"
              alt="Scared Kirby"
            />
          </FlexBox>
        </Grid>
      </Slide>
      <Slide>
        <Grid
          gridTemplateColumns="50% 50%"
          gridTemplateRows="20% 40% 40%"
          height="100%"
        >
          <Grid gridColumn="1 / -1">
            <Heading fontSize="48px">
              Four Emotionally Unhealthy Teaching Styles
            </Heading>
          </Grid>
          <Text textAlign="center">Ignoring</Text>
          <Text textAlign="center">Dismissing</Text>
          <Text textAlign="center">Punishing</Text>
          <Text textAlign="center">Fixing/Saving</Text>
        </Grid>
        <Notes>
          <UnorderedList>
            <ListItem>
              Ignoring: We generally deny our own feelings, we will deny or
              ignore children’s feelings. We will offer little or no empathy to
              children or ourselves.
            </ListItem>
            <ListItem>
              Dismissing: This style asks us to compare our feeling state with
              those worse off than ourselves or doing fine in similar
              situations, and discount or minimize our need to feel the way we
              do.
            </ListItem>
            <ListItem>
              Punishing: We will tend to punish ourselves for what we are
              feeling and punish children who show emotion in the classroom or
              home.
            </ListItem>
            <ListItem>
              Fixing/Saving: If we tend to worry that our feelings are so strong
              that they will overwhelm us, we will want to save our children
              from their discomfort.
            </ListItem>
          </UnorderedList>
        </Notes>
      </Slide>
    </>
  );
}
