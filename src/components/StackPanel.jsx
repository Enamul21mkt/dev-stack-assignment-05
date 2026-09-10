function StackPanel({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="stack-panel">
      <div className="stack-heading">
        <h2>Your Stack</h2>
        <p>
          {stack.length === 0
            ? "No technologies selected yet."
            : `${stack.length} Technology${stack.length > 1 ? "ies" : "y"} Selected`}
        </p>
      </div>

      {stack.length === 0 ? (
        <div className="empty-stack">Your stack is empty.</div>
      ) : (
        <div className="selected-stack">
          {stack.map((item) => (
            <div className="stack-item" key={item.id}>
              <img src={item.icon} alt="" />
              <div className="stack-item-info">
                <strong>{item.name}</strong>
                <small>{item.category}</small>
              </div>
              <button
                type="button"
                className="remove-item"
                aria-label={`Remove ${item.name}`}
                onClick={() => onRemove(item.id)}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      <button
        className="remove-all"
        type="button"
        onClick={onRemoveAll}
        disabled={stack.length === 0}
      >
        Remove All
      </button>
    </aside>
  );
}

export default StackPanel;