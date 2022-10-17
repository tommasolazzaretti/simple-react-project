import Link from "next/link";

export default function Header() {
    return (
        <header>
            <nav>
                <Link href={`/home`}>
                    <a>got to home</a>
                </Link>
            </nav>
        </header>
    )
}