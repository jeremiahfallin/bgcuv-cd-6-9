import { FlexBox } from "spectacle";
import { Slide, Heading, Text, Image } from "spectacle";

export default function () {
  return (
    <Slide>
      <FlexBox height="100%">
        <Text>
          What we offer to others we strengthen in ourselves. See the best and
          you become your best, guaranteed.
        </Text>
        <Image
          src="https://media.giphy.com/media/IwAZ6dvvvaTtdI8SD5/giphy.gif"
          height="50%"
          alt="Michael and Dwight celebrating"
        />
      </FlexBox>
    </Slide>
  );
}
