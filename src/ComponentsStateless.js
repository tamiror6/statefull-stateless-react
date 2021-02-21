const Title = (props) => {
  return <h1>{props.text}</h1>;
};

const Heading = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
};

const ImageView = (props) => {
  return (
    <figure>
      <img src={props.src} />
      <figcaption>{props.caption}</figcaption>
    </figure>
  );
};

const SimpleGallery = (props) => {
  return (
    <div>
      {props.images.map((src, index) => (
        <img key={index} src={src}></img>
      ))}
    </div>
  );
};

const TodoItem = (props) => {
  return (
    <p
      onClick={props.onClick}
      style={{ textDecoration: props.done ? "line-through" : "" }}
    >
      {props.title}
    </p>
  );
};

const SimpleCanvas = (props) => {
  return (
    <div className="simple-canvas ">
      {props.data.map((row) => (
        <div className="row">
          {row.map((color) => (
            <div className="cell" style={{ backgroundColor: color }}></div>
          ))}
        </div>
      ))}
    </div>
  );
};
const SpecialButton = (props) => (
  <button
    onClick={(e) => {
      if (e.ctrlKey || e.metaKey) {
        props.onSpecialClick();
      } else {
        props.onClick();
      }
    }}
  >
    {props.children}
  </button>
);

const TodoItem2 = (props) => (
  <div className="todo-2">
    {" "}
    <TodoItem
      onClick={props.onClick}
      done={props.completed}
      title={props.title}
    />
    <SpecialButton
      onClick={() => {
        if (window.confirm("are u sure?")) {
          props.onRemove();
        }
      }}
      onSpecialClick={props.onRemove}
    >
      🗑
    </SpecialButton>
  </div>
);

const SimpleCanvas2 = (props) => {
  return (
    <div className="simple-canvas ">
      {props.data.map((row, rowIndex) => (
        <div className="row">
          {row.map((color, colIndex) => (
            <div
              className="cell"
              style={{ backgroundColor: color }}
              onClick={() => {
                props.onCellClick(rowIndex, colIndex, color);
              }}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

const TodoApp = (props) =>
  props.items.map((item, index) => (
    <TodoItem2
      title={item.title}
      completed={item.done}
      onRemove={() => props.onRemove(index)}
    ></TodoItem2>
  ));
export {
  Title,
  Heading,
  ImageView,
  SimpleGallery,
  TodoItem,
  SimpleCanvas,
  SpecialButton,
  TodoItem2,
  SimpleCanvas2,
  TodoApp,
};
