import React from "react";
import Showcase from "../comps/showcase";
import Benefits from "../comps/benefits";
import Glance from "../comps/glance";
import PopularCourses from "../comps/popular-courses";
import Testimony from "../comps/testimony";
import NewsLetter from "../comps/newsletter";
import Footer from "../comps/footer";
import Blog from '../comps/our-blog'
import withSession from "@/lib/session";

function Index({ user }) {
  return (
    <div>
      <Showcase />
      <Benefits />
      <Glance />
      <PopularCourses />
      <Testimony />
      <Blog/>
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Index;

export const getServerSideProps = withSession(async function ({ req, res }) {
  const user = req.session.get("user");
  if (!user) {
    return {
      redirect: {
        destination: "/comps/login",
        permanent: false,
      },
    };
  }
  return {
    props: {
      user: user,
    },
  };
});
