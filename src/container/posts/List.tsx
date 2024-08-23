import Tag from "@/components/common/Tag";
import TagList from "@/components/common/TagList";
import SectionTitle from "@/components/home/SectionTitle";
import { PostCardType } from "@/components/posts/PostCard";
import PostList from "@/components/posts/PostList";
import { colorVars } from "@/constants/cssVariables";
import { categories } from "@/store/categories";
import { CategoriesInfo } from "@/types/post";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";

const PostListContainer = ({ postList }: { postList: PostCardType[] }) => {
  const router = useRouter();
  const query = router.query;
  const currentCategory = query.category as string;
  const postCategories = useRecoilValue(categories);
  return (
    <div>
      <SectionTitle className="p-4">
        <Link href="/posts">전체 게시물</Link>
      </SectionTitle>
      <div className="px-4 mb-4">
        <TagList className="tab-list">
          {postCategories &&
            postCategories.map((category: CategoriesInfo) => (
              <Link href={`/posts/${category.name}`}>
                <Tag
                  key={category.name}
                  variant="outlined"
                  textColor={colorVars.greenPrimary}
                  borderColor={colorVars.greenBorder}
                  backgroundColor={
                    currentCategory === category.name
                      ? colorVars.greenBackground
                      : "transparent"
                  }
                >
                  {category.name} {`(${category.fileLength})`}
                </Tag>
              </Link>
            ))}
        </TagList>
      </div>
      <PostList postList={postList} />
    </div>
  );
};

export default PostListContainer;
