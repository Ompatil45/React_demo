const features = [
  ['Simple', 'A clean, focused layout without unnecessary complexity.'],
  ['Fast', 'Built with React and Vite for a quick development experience.'],
  ['Responsive', 'Looks good on phones, tablets, and desktop screens.'],
]

function App() {
  return (
    <main>
      <nav>
        <a className="logo" href="#top">Northstar</a>
        <a className="nav-link" href="#about">About</a>
      </nav>

      <section className="hero" id="top">
        <p className="eyebrow">Welcome to Northstar</p>
        <h1>A simple website for your next big idea.</h1>
        <p className="intro">
          A lightweight React starter with everything you need—and nothing you don’t.
        </p>
        <a className="button" href="#about">Learn more</a>
      </section>

      <section className="features" id="about">
        {features.map(([title, description]) => (
          <article key={title}>
            <h2>{title}</h2>
            <p>{description}</p>
          </article>
        ))}
      </section>

      <footer>© {new Date().getFullYear()} Northstar</footer>
    </main>
  )
}

export default App
