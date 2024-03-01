"use client";

// (RCC) React Client Component
export default function PostCard({post}) {
    return (
        <div>
            <h3>
                {post.id}.{post.title}
            </h3>
            <p>{post.body}</p>
            <button onClick={() => {
                alert('Click Funcionando correctamente');
            }}>Click</button>
        </div>
    );
}