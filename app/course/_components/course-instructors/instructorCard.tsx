import { Card, Avatar, Truncate } from "@edx/paragon";

interface InstructorCardProps {
  name: string;
  imageUrl: string;
  bio: string;
  link: string;
}

const InstructorCard = ({ name, imageUrl, bio, link }: InstructorCardProps) => {
  return (
    <a className="w-100 w-sm-auto" href={link}>
      <Card className="instructor-card pt-3 rounded bg-primary-400 text-center text-primary-100" variant={'dark'}>
        <Avatar
          size="xl"
          className="mr-2 d-inline"
          src={imageUrl}
          roundedCircle
          alt={name}
        />
        <Card.Header
          title={name}
          className="text-primary-100 text-center "
        />
        <Card.Section
          className="text-center "
        >
          <Truncate lines={3}>{bio}</Truncate>
        </Card.Section>
      </Card>
    </a>
  );
};

export default InstructorCard;
