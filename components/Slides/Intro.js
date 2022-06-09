import { Slide, FlexBox, Image, Heading, Notes } from "spectacle";

const bgcuvLogo =
  "https://bgcuv.org/wp-content/uploads/2022/01/BoysandGirlsLogoHorizontal.png";

export default function () {
  return (
    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Image src={bgcuvLogo} width="50%" alt="BGCUV Logo" />
        <FlexBox>
          <Heading>
            Conscious
            <br />
            Discipline
          </Heading>
          <Heading>06.09.2022</Heading>
        </FlexBox>
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
