import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/projects">Projects</Link>
        <br />
        <Link to="/observability">Observability</Link>
      </nav>
    </div>
  )
}