import { Slide, Heading, Text, Image, FlexBox } from "spectacle";
import survey from "../../public/survey-qr.png";

export default function () {
  return (
    <Slide backgroundColor="hsl(300, 100%, 50%, 0.8)">
      <FlexBox flexDirection="column">
        <Heading margin="0px" paddingBottom="0px !important">
          Please take our survey!
        </Heading>
        <Text margin="0px" paddingTop="0px !important">
          <a href="https://forms.gle/XjKZ93oe8HcJeXXF8">
            https://forms.gle/XjKZ93oe8HcJeXXF8
          </a>
        </Text>
        <Image src={survey} alt="QR code to the previous link" />
      </FlexBox>
    </Slide>
  );
}
