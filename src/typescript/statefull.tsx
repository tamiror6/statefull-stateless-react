import React, { useState, useEffect, Component, useRef } from "react";
import { formatWithOptions } from "util";
import { SimpleCanvas, SimpleGallery, TodoItem2 } from "./stateless";



function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>{count}</h3>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        +
      </button>
    </div>
  );
}




function Gallery() {
  const [images, setImages] = useState([
    "https://i.ytimg.com/vi/MCn9lL94sxQ/maxresdefault.jpg",
  ]);
  const [numImages, setNumImages] = useState(images.length);
  const num = useRef(0); // just playing with useRef, nothing important...
  useEffect(() => {
    function foo(word:string) {
      console.log(word);
    }
    foo("hi ");
    return () => {
      foo("bye ");
    };
  }, [numImages]);

  const handleClick = () => {
    let src :string = prompt("new img") || ""; 
    const imagesNew: string[] = [...images, src];
    setImages(imagesNew);
    setNumImages((prevNumImages) => prevNumImages + 1);
  };
  return (
    <div>
      <h2
        onClick={() => {
          num.current = num.current + 1;
        
        }}
      >
        Tamir
      </h2>
      <h1
        onClick={() => {
          setNumImages((prev) => prev + 1);
        }}
      >
        {numImages}
      </h1>
      <SimpleGallery images={images}/>
      <button onClick={handleClick}>Add </button>
    </div>
  );
}

interface IState { 
    data :string[][],

}
class Canvasv2 extends Component<{},IState> {
  cycleColors = ["red", "yellow", "blue", "orange"];
  cycleData = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  state = {
    data: [
      ["red", "white", "gray", "orange"],
      ["green", "yellow", "gray", "purple"],
      ["red", "white", "yellow", "green"],
      ["red", "green", "gray", "purple"],
    ],
  };
  render() {
    return (
      <div className="simple-canvas ">
        {this.state.data.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((color, colIndex) => (
              <div
                key={colIndex}
                className="cell"
                style={{ backgroundColor: color }}
                onClick={() => {
                  const newData = JSON.parse(JSON.stringify(this.state.data)); // deepcopy
                  newData[rowIndex][colIndex] = this.cycleColors[
                    this.cycleData[rowIndex][colIndex]
                  ]; // update color
                  this.cycleData[rowIndex][colIndex] =
                    (this.cycleData[rowIndex][colIndex] + 1) %
                    this.cycleColors.length;
                  this.setState({ data: newData });
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

interface ListItem{
    title:string,
    done:boolean,
}
interface TodoState  {
    todos:ListItem[] ,
    addInput:string,
    searchInput:string,
    filterValue:FilterEnum
    
  };
  enum FilterEnum  { // gave valies to each member for comparing them in the future
    ALL="all",
    COMPLETED="completed",
    INCOMPLETED = "incompleted",
   
  }

class TodoApp extends Component<{},TodoState>{
  constructor(props:{}) {
    super(props);
    this.state = {
      todos: [
        { title: "wash dishes", done: false },
        { title: "learn react", done: true },
      ],
      addInput: "",
      searchInput: "",
      filterValue: FilterEnum.ALL,
    };
  }
 
  handleAddition = (todo:string) => {
    const newTodos = [{ title: todo, done: false }, ...this.state.todos];

    this.setState({ todos: newTodos ,addInput:""});
  };
  handleDelete = (toDeleteObj:ListItem )=> {
    this.setState({
      todos: this.state.todos.filter((todo) => todo !== toDeleteObj),
    });
  };
  handleToggleFinishedTask = (toggledObject:ListItem) => {
    this.setState({
      todos: this.state.todos.map((todo, index) => {
        return {
          title: todo.title,
          done: todo === toggledObject ? !todo.done : todo.done,
        };
      }),
    });
  };
  filterByStatusPredicate = (item:ListItem) => {
    if (this.state.filterValue === FilterEnum.ALL) {
      return true;
    }
    if (this.state.filterValue === FilterEnum.INCOMPLETED) {
      return !item.done;
    }
    if (this.state.filterValue === FilterEnum.COMPLETED) {
      return item.done;
    }
  };

  handleChangeOnSearch = (e:React.FormEvent<HTMLInputElement>) => {
    this.setState({ searchInput: e.currentTarget.value });// why e.target.value is problem with interface script but this one okay?
  };
  
  handleChangeOnFilter = (e:React.FormEvent<HTMLSelectElement>):void => {
    const selection =  e.currentTarget.value
    switch (selection) {
        case FilterEnum.ALL:
          this.setState({filterValue:FilterEnum.ALL})
          break;
        case FilterEnum.COMPLETED:
            this.setState({filterValue:FilterEnum.COMPLETED})
            break;
        case FilterEnum.INCOMPLETED:
            this.setState({filterValue:FilterEnum.INCOMPLETED})
          break;
      }
}
  render() {
    return (
      <div className="todo-app">
        <div className="search-bar">
          {" "}
          <label> search: </label>
          <input
            className="search-input"
            value={this.state.searchInput}
            onChange={this.handleChangeOnSearch}
          ></input>
        </div>
        <div className="filter-bar">
          <label>filter:</label>
          <select
            value={this.state.filterValue}
            onChange={this.handleChangeOnFilter}
          >
            {Object.values(FilterEnum).map((val, index) => (
              <option key={index}>{val}</option>
            ))}
          </select>
        </div>
        <div className="addition-bar">
          {" "}
          <input
            value={this.state.addInput}
            onChange={(e:React.FormEvent<HTMLInputElement> )=> {
              this.setState({ addInput: e.currentTarget.value });
              
            }}
          ></input>
          <button
            className="add"
            onClick={() => {
              this.handleAddition(this.state.addInput);
            }}
          >
            Add{" "}
          </button>
        </div>
        <div className="todo-items">
          {this.state.todos.filter(this.filterByStatusPredicate).map(
            (item) =>
              item.title.includes(this.state.searchInput) && (
                <TodoItem2
                  key={item.title}
                  onClick={() => this.handleToggleFinishedTask(item)}
                  title={item.title}
                  completed={item.done}
                  onRemove={() => {
                    this.handleDelete(item);
                  }}
                ></TodoItem2>
              )
          )}
        </div>

        
      </div>
    );
  }
}

export { Counter, Gallery, Canvasv2, TodoApp };
