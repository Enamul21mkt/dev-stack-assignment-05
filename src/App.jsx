import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCard from "./components/TechnologyCard";
import StackPanel from "./components/StackPanel";
import Footer from "./components/Footer";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        setLoading(true);
        const response = await fetch("/data/technologies.json");
        if (!response.ok) throw new Error("Could not load technology data.");
        const data = await response.json();
        setTechnologies(data);
      } catch (err) {
        setError(err.message);
        toast.error("Failed to load technologies.");
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  const addToStack = (technology) => {
    if (stack.some((item) => item.id === technology.id)) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }
    setStack((current) => [...current, technology]);
    toast.success(`${technology.name} added to your stack!`);
  };

  const removeFromStack = (id) => {
    const removed = stack.find((item) => item.id === id);
    setStack((current) => current.filter((item) => item.id !== id));
    if (removed) toast.info(`${removed.name} removed from your stack.`);
  };

  const removeAll = () => {
    if (stack.length === 0) {
      toast.warning("Your stack is already empty.");
      return;
    }
    setStack([]);
    toast.info("All technologies removed from your stack.");
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section id="technologies" className="technologies-section">
          <div className="section-heading">
            <h2>Explore the <span>Technologies</span></h2>
            <p>Pick one technology per category to build your ideal stack.</p>
          </div>

          {loading && (
            <div className="loading-state" aria-live="polite">
              <span className="spinner" />
              <span>Loading technologies...</span>
            </div>
          )}

          {error && !loading && <div className="error-state">{error}</div>}

          {!loading && !error && (
            <div className="technology-layout">
              <div className="technology-grid">
                {technologies.map((technology) => (
                  <TechnologyCard
                    key={technology.id}
                    technology={technology}
                    isAdded={stack.some((item) => item.id === technology.id)}
                    onAdd={addToStack}
                  />
                ))}
              </div>

              <StackPanel
                stack={stack}
                onRemove={removeFromStack}
                onRemoveAll={removeAll}
              />
            </div>
          )}
        </section>

        <section id="projects" className="info-section">
          <div>
            <span className="eyebrow">BUILD WITH CONFIDENCE</span>
            <h2>Turn your choices into a <span>real stack.</span></h2>
            <p>
              Compare popular frontend, backend, database, language, styling,
              and DevOps tools before starting your next project.
            </p>
          </div>
          <div className="info-points">
            <div><strong>12+</strong><span>Curated technologies</span></div>
            <div><strong>7</strong><span>Categories covered</span></div>
            <div><strong>1</strong><span>Personal stack</span></div>
          </div>
        </section>

        <section id="about" className="simple-section">
          <span className="eyebrow">ABOUT DEV STACK</span>
          <h2>A simple way to plan your development tools.</h2>
          <p>
            Dev Stack is a learning-friendly tool for exploring technologies
            and creating a shortlist for your next web project.
          </p>
        </section>

        <section id="contact" className="simple-section contact-section">
          <span className="eyebrow">CONTACT</span>
          <h2>Ready to build?</h2>
          <p>Choose your tools, build your stack, and start creating.</p>
          <a className="gradient-button" href="mailto:hello@devstack.dev">
            Contact Dev Stack
          </a>
        </section>
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2200}
        newestOnTop
        closeOnClick
        pauseOnHover
      />
    </>
  );
}

export default App;