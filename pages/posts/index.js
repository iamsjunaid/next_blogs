import { Fragment } from "react";
import Hero from "../../components/home-page/hero";
import FeaturedPosts from "../../components/home-page/featured-posts";

function AllPostsPage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts />
    </Fragment>
  );
}

export default AllPostsPage;
