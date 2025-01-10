import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface TeamMember {
  name: string;
  designation: string;
  description: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "John Smith",
    designation: "Designation here",
    description:
      "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
    image: "/team1.png",
  },
  {
    name: "Elina Williams",
    designation: "Designation here",
    description:
      "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
    image: "/team2.png",
  },
  {
    name: "John Smith",
    designation: "Designation here",
    description:
      "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
    image: "/team3.png",
  },
];

export default function TeamSection() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Team</h1>
      <p className="text-lg text-muted-foreground mb-12">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </p>

      <div className="space-y-6">
        {teamMembers.map((member, index) => (
          <Card key={index} className="bg-sky-50 border-0">
            <CardContent className="p-6 flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={180}
                  height={180}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-muted-foreground">{member.designation}</p>
                <p className="text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
