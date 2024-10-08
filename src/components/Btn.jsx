function Btn({ onClick, project, activeTab, children }) {  
    
  return (
    <button
      onClick={(e) => onClick(e, project)}
      className={`btn${project===activeTab ? ' active' : ''}`}
      type="button"
    >
      {children}
    </button>
  );
}

export default Btn;
