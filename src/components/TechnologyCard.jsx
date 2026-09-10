function TechnologyCard({ technology, isAdded, onAdd }) {
  return (
    <article className="technology-card">
      <div className="card-top">
        <div className="tech-icon">
          <img src={technology.icon} alt="" />
        </div>
        <span className="badge">{technology.badge}</span>
      </div>

      <h3>{technology.name}</h3>
      <p className="description">{technology.description}</p>

      <div className="card-meta">
        <span className="category-chip">{technology.category}</span>
        <span>{technology.difficulty}</span>
        <span className="rating">★ {technology.rating}</span>
      </div>

      <button
        className={isAdded ? "add-button added" : "add-button"}
        type="button"
        disabled={isAdded}
        onClick={() => onAdd(technology)}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
}

export default TechnologyCard;