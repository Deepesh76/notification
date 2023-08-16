const Box = (props) => {
  //  Write your code here.
  {className,text}=props
  return <div className={className}>{text}</div>
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Boxes</h1>
    <div className="small-box" text="small" />
    <div className="medium-box" text="medium" />
    <div className="large-box" text="large" />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
