import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { MoveRight, Pencil } from "lucide-react";

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  creator: string;
  category: string;
  thumbnail: string;
}

export function CourseCard({
  id,
  title,
  description,
  creator,
  category,
  thumbnail,
}: CourseCardProps) {
  return (
    <Card className="shadow-2xs rounded-lg overflow-hidden" key={id}>
      <div>
        <img src={thumbnail} alt={title} className="w-full object-cover" />
      </div>
      <CardHeader className="p-3">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pr-3 pl-3 pt-0 pb-0">
        <div>
          <h3 className="text-sm font-semibold">
            Creator:{" "}
            <span className="text-muted-foreground font-normal">
              <a href="#">{creator}</a>
            </span>
          </h3>
        </div>
        <div>
          <h3 className="text-sm font-semibold">
            Category:{" "}
            <span className="text-muted-foreground font-normal">
              <a href="#">{category}</a>
            </span>
          </h3>
        </div>
      </CardContent>
      <CardFooter className="p-3 gap-1">
        <Button className="w-1/2" variant="default">
          Edit <Pencil />
        </Button>
        <Button className="w-1/2" variant="outline">
          View <MoveRight />
        </Button>
      </CardFooter>
    </Card>
  );
}
