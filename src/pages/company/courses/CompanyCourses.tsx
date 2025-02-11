import CompanyDashboardLayout from "../../../components/company/companyDashboardLayout/companyDashboardLayout";
import course from "../../../assets/exImages/course.png";
import { Input } from "../../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { CourseCard } from "../../../components/shared/dashboardComponents/dashCourseCard";
function CompanyCourses() {
  const courses = [
    {
      id: "1",
      title: "Introduction to JavaScript",
      description: "Learn the fundamentals of JavaScript programming.",
      creator: "Campussutras",
      category: "Programming",
      thumbnail: course,
    },
    {
      id: "2",
      title: "React: The Complete Guide",
      description: "Master React and build amazing web applications.",
      creator: "Frontend Masters",
      category: "Frontend",
      thumbnail: course,
    },
    {
      id: "3",
      title: "Introduction to Python",
      description: "Learn the fundamentals of Python programming.",
      creator: "Codecademy",
      category: "Programming",
      thumbnail: course,
    },
    {
      id: "4",
      title: "Data Science with Python",
      description: "Learn to analyze data with Python and popular libraries.",
      creator: "DataCamp",
      category: "Data Science",
      thumbnail: course,
    },
    {
      id: "5",
      title: "UI/UX Design for Beginners",
      description:
        "Learn the principles of user interface and user experience design.",
      creator: "DesignCourse",
      category: "Design",
      thumbnail: course,
    },
    {
      id: "6",
      title: "Machine Learning with TensorFlow",
      description: "Build and train machine learning models with TensorFlow.",
      creator: "TensorFlow Team",
      category: "AI/ML",
      thumbnail: course,
    },
    {
      id: "7",
      title: "Cybersecurity Fundamentals",
      description: "Learn about cybersecurity threats and best practices.",
      creator: "Cybrary",
      category: "Cybersecurity",
      thumbnail: course,
    },
    {
      id: "8",
      title: "Digital Marketing Essentials",
      description: "Master the fundamentals of digital marketing.",
      creator: "Google Digital Garage",
      category: "Marketing",
      thumbnail: course,
    },
    {
      id: "9",
      title: "Introduction to SQL",
      description: "Learn the basics of SQL for data management.",
      creator: "Codecademy",
      category: "Databases",
      thumbnail: course,
    },
    {
      id: "10",
      title: "Mobile App Development with Flutter",
      description: "Build cross-platform mobile apps with Flutter.",
      creator: "Flutter Team",
      category: "Mobile Development",
      thumbnail: course,
    },
  ];
  return (
    <>
      <CompanyDashboardLayout>
        <section className="companyCourses p-3">
          <div className="companyCoursesHeading">
            <h1 className="text-2xl font-semibold mb-1">Courses</h1>
            <p className="mb-3 text-muted-foreground">
              A list of all your courses.
            </p>
          </div>
          <div className="companyCoursesHeader grid grid-cols-4 gap-3 border-b mb-3">
            <Input placeholder="Search course..." className="col-span-2" />
            <div className="col-span-1"></div>
            <Select>
              <SelectTrigger className="w-full mb-3 col-span-1">
                <SelectValue placeholder="Select by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Artificial Intelligence">
                  Artificial Intelligence
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="companyCoursesContainer grid grid-cols-4 gap-3">
            {courses.map((course) => (
              <CourseCard
                id={course.id} // Assuming each course has a unique ID
                title={course.title}
                description={course.description}
                creator={course.creator}
                category={course.category}
                thumbnail={course.thumbnail}
              />
            ))}
          </div>
        </section>
      </CompanyDashboardLayout>
    </>
  );
}

export default CompanyCourses;
