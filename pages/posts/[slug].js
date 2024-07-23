import PostContent from "./post-detail/post-content";
import { getPostData, getPostsFiles} from "../../lib/posts-util";

function PostDetailPage(props) {
  const post = props.slug;
  return <PostContent post={post} />;
}

export async function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      slug: postData,
    },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  const fileNames = getPostsFiles();
  
  const slugs = fileNames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
 