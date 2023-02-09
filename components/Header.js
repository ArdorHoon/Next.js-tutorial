import Link from "next/link";

const linkStyle = {
    marginRight : 15
}

const naviStyle = {
    display : 'inline-flex'
}

const Header = () => (
    <div style={naviStyle}>
        <Link href="/">
            <p style = {linkStyle}>Home</p>
        </Link>
        <Link href="/about">
            <p style = {linkStyle}>About</p>
        </Link>
    </div>
)

export default Header