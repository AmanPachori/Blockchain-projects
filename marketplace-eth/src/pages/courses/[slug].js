import { Modal } from "@components/ui/common";
import { Curriculum, Hero, Keypoints } from "@components/ui/course";
import { BaseLayout } from "@components/ui/layout";
import { getAllCourse } from "@content/courses/fetcher";
import React from "react";

const Course = ({course}) => {
  return (
    <BaseLayout>
      <div className="py-4">
        <Hero title ={course.title} description={course.description} image={course.coverImage} />
      </div>
      <Keypoints
       points= {course.wsl}
      />
      <Curriculum
      locked={true}
      />
      <Modal />
    </BaseLayout>
  );
};

export function getStaticPaths() {
  const { data } = getAllCourse()

  return {
    paths: data.map(c => ({
      params: {
        slug: c.slug
      }
    })),
    fallback: false
  }
}


export function getStaticProps({params}) {
  const { data } = getAllCourse()
  const course = data.filter(c => c.slug === params.slug)[0]

  return {
    props: {
      course
    }
  }
}

export default Course;
