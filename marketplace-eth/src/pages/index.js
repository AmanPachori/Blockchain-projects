import { Footer, Navbar, Hero, Breadcrumbs } from "@components/ui/common";
import { CourseList } from "@components/ui/course";
import { BaseLayout } from "@components/ui/layout";
import { getAllCourse } from "@content/courses/fetcher";
export default function Home({courses}) {
  return (
    <BaseLayout>
      <Hero />
      <CourseList courses={courses} />
    </BaseLayout>
  );
}

export function getStaticProps()
{
  const {data} = getAllCourse();
  return{
    props:{
      courses:data
    }
  }
}
