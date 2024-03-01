import PostCard from '../../components/postcard'

async function loadPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    await new Promise((resolve) => setTimeout(resolve,3000))
    return data;
}
// (RSC) React Server Component
export default async function PostPage() {
    const posts = await loadPosts();
    return (
        <div>
            {posts.map((post) => (
                <PostCard post={post} key={post.id} />
            ))}
        </div>
    );
}