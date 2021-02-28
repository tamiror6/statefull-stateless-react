
import * as React from 'react';
type TitleProps={
  text:string
}
const Title: React.FC<TitleProps> = (props) => {
    return <h1>{props.text}</h1>;
  };
  
  interface HeadingProps{
    title:string,
    subtitle:string,
  }
  const Heading:React.FC<HeadingProps> = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
      </div>
    );
  };


  interface ImageViewProps   {
    src:string;
    caption:string;
  }
  
  const ImageView:React.FC<ImageViewProps> = (props) => {
    return (
      <figure>
        <img src={props.src} />
        <figcaption>{props.caption}</figcaption>
      </figure>
    );
  };
  
interface SimpleGalleryProps{
images:string[]
}

  const SimpleGallery: React.FC<SimpleGalleryProps>= (props) => {
    return (
      <div>
        {props.images.map((src, index) => (
          <img key={index} src={src}></img>
        ))}
      </div>
    );
  };


  type todoItemProps ={
    onClick() :void;
    title:string;
    done:boolean;

  }
  const TodoItem:React.FC<todoItemProps> = (props) => {
    return (
      <p
        onClick={props.onClick}
        style={{ textDecoration: props.done ? "line-through" : "" }}
      >
        {props.title}
      </p>
    );
  };

  type SimpleCanvasProps = {
    data:string[][],
  }
  
  const SimpleCanvas:React.FC<SimpleCanvasProps> = (props) => {
    return (
      <div className="simple-canvas ">
        {props.data.map((row,rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((color,colIndex) => (
              <div key={colIndex} className="cell" style={{ backgroundColor: color }}></div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  type SpecialButtonProps= {
    onSpecialClick() :void;
    onClick():void;
    children:string;
  }

  const SpecialButton:React.FC<SpecialButtonProps> = (props) => (
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
  

type todoItem2Props = {
  onClick():void;
  completed:boolean;
  onRemove():void;
  title:string;
}
  const TodoItem2:React.FC<todoItem2Props> = (props) => (
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
  

  interface SimpleCanvas2Props{
    data:string[][];
    onCellClick(rowIndex:number, colIndex:number, color:string):void;

  }
  const SimpleCanvas2:React.FC<SimpleCanvas2Props> = (props) => {
    return (
      <div className="simple-canvas ">
        {props.data.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((color, colIndex) => (
              <div
              key={colIndex}
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
  type ListItem={
    title:string,
    done:boolean,
}

  interface TodoAppProps{
    items:ListItem[];
    onRemove(index:number):void;
  }
  const TodoApp = (props:TodoAppProps) =>
    props.items.map((item, index) => (
      <TodoItem2
        key = {item.title}
        title={item.title}
        completed={item.done}
        onRemove={() => props.onRemove(index)}
        onClick={()=>{}}
      ></TodoItem2>
    ));
  export {
    Title,
    Heading,
    SimpleGallery,
    TodoItem,
    SimpleCanvas,
    SpecialButton,
    TodoItem2,
    SimpleCanvas2,
    TodoApp,
    ImageView,
  };
  