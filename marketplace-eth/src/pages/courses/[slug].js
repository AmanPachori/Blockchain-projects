import { Modal } from "@components/common";
import { Curriculum, Hero, Keypoints } from "@components/course";
import { BaseLayout } from "@components/layout";
import { getAllCourse } from "@content/courses/fetcher";
import React from "react";

const Course = ({course}) => {
  return (
    <BaseLayout>
      <div className="py-4">
        <Hero />
      </div>
      <Keypoints />
      <Curriculum />
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
