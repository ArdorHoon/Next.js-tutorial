import Layout from "../components/MyLayout"
import Link from "next/link"

const PostLink = (props) => (
    <li>
        <Link href={`/post?title=${props.title}`}>
        {props.title}
        </Link>
    </li>
)


export default () => (
    <Layout>
        <h1>My Blog</h1>
        <ul>
            <PostLink title ="Hello Next.js"/>
            <PostLink title ="Learn Next.js"/>
            <PostLink title ="Hi Next.js"/>
        </ul>
    </Layout>
)