import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";

function AllPostsPage(props) {
  // console.log(props.posts);
  return <AllPosts posts={props.posts} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  // console.log(allPosts);
  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
