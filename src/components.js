// import React, { useState, useEffect, Component, useRef } from "react";
// import { SimpleCanvas, SimpleGallery, TodoItem2 } from "./ComponentsStateless";
// // class Counter extends Component {
// //   state = { count: 0 };
// //   render() {
// //     return (
// //       <div>
// //         <h3>{this.state.count}</h3>
// //         <button
// //           onClick={() => {
// //             this.setState({ count: this.state.count - 1 });
// //           }}
// //         >
// //           -
// //         </button>
// //         <button
// //           onClick={() => {
// //             this.setState({ count: this.state.count + 1 });
// //           }}
// //         >
// //           +
// //         </button>
// //       </div>
// //     );
// //   }
// // }

// function Counter() {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <h3>{count}</h3>
//       <button
//         onClick={() => {
//           setCount(count - 1);
//         }}
//       >
//         -
//       </button>
//       <button
//         onClick={() => {
//           setCount((count) => count + 1);
//         }}
//       >
//         +
//       </button>
//     </div>
//   );
// }
// // class Gallery extends Component {
// //   state = { images: ["https://i.ytimg.com/vi/MCn9lL94sxQ/maxresdefault.jpg"] };
// //   render() {
// //     return (
// //       <div>
// //         <SimpleGallery images={this.state.images}></SimpleGallery>
// //         <button
// //           onClick={() => {
// //             let src = prompt("src");
// //             const imagesNew = [...this.state.images];
// //             imagesNew.push(src);
// //             this.setState({ images: imagesNew });
// //           }}
// //         >
// //           Add{" "}
// //         </button>
// //       </div>
// //     );
// //   }
// // }

// function Gallery(props) {
//   const [images, setImages] = useState([
//     "https://i.ytimg.com/vi/MCn9lL94sxQ/maxresdefault.jpg",
//   ]);
//   const [numImages, setNumImages] = useState(images.length);
//   const num = useRef(0);
//   const num2 = 0;
//   useEffect(() => {
//     function foo(word) {
//       console.log(word);
//     }
//     foo("hi ");
//     return () => {
//       foo("bye ");
//     };
//   }, [numImages]);

//   const handleClick = () => {
//     let src = prompt("new img src");
//     const imagesNew = [...images, src];
//     setImages((prev) => imagesNew);
//     setNumImages((prevNumImages) => prevNumImages + 1);
//   };
//   return (
//     <div>
//       <h2
//         onClick={() => {
//           num2 = num2 + 1;
//           num.current = num.current + 1;
//           console.log(num.current);
//           console.log(num2);
//         }}
//       >
//         Tamir
//       </h2>
//       <h1
//         onClick={() => {
//           setNumImages((prev) => prev + 1);
//         }}
//       >
//         {numImages}
//       </h1>
//       <SimpleGallery images={images}></SimpleGallery>
//       <button onClick={handleClick}>Add </button>
//     </div>
//   );
// }
// class Canvasv2 extends Component {
//   cycleColors = ["red", "yellow", "blue", "orange"];
//   cycleData = [
//     [0, 0, 0, 0],
//     [0, 0, 0, 0],
//     [0, 0, 0, 0],
//     [0, 0, 0, 0],
//   ];
//   state = {
//     data: [
//       ["red", "white", "gray", "orange"],
//       ["green", "yellow", "gray", "purple"],
//       ["red", "white", "yellow", "green"],
//       ["red", "green", "gray", "purple"],
//     ],
//   };
//   render() {
//     return (
//       <div className="simple-canvas ">
//         {this.state.data.map((row, rowIndex) => (
//           <div className="row" key={rowIndex}>
//             {row.map((color, colIndex) => (
//               <div
//                 key={colIndex}
//                 className="cell"
//                 style={{ backgroundColor: color }}
//                 onClick={() => {
//                   const newData = JSON.parse(JSON.stringify(this.state.data)); // deepcopy
//                   newData[rowIndex][colIndex] = this.cycleColors[
//                     this.cycleData[rowIndex][colIndex]
//                   ]; // update color
//                   this.cycleData[rowIndex][colIndex] =
//                     (this.cycleData[rowIndex][colIndex] + 1) %
//                     this.cycleColors.length;
//                   this.setState({ data: newData });
//                 }}
//               ></div>
//             ))}
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// class TodoApp extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       todos: [
//         { title: "wash dishes", done: false },
//         { title: "learn react", done: true },
//       ],
//       input: "",
//       searchInput: "",
//       filterValue: this.filterEnum.all,
//     };
//   }
//   filterEnum = Object.freeze({
//     completed: "completed",
//     incompleted: "incompleted",
//     all: "all",
//   });
//   handleAddition = (todo) => {
//     const newTodos = [{ title: todo, done: false }, ...this.state.todos];
//     this.setState({ todos: newTodos });
//   };
//   handleDelete = (toDeleteObj) => {
//     this.setState({
//       todos: this.state.todos.filter((todo) => todo !== toDeleteObj),
//     });
//   };
//   handleToggleFinishedTask = (toggledObject) => {
//     this.setState({
//       todos: this.state.todos.map((todo, index) => {
//         return {
//           title: todo.title,
//           done: todo === toggledObject ? !todo.done : todo.done,
//         };
//       }),
//     });
//   };
//   filterByStatusPredicate = (item) => {
//     if (this.state.filterValue === this.filterEnum.all) {
//       return true;
//     }
//     if (this.state.filterValue === this.filterEnum.incompleted) {
//       return !item.done;
//     }
//     if (this.state.filterValue === this.filterEnum.completed) {
//       return item.done;
//     }
//   };

//   handleChangeOnSearch = (e) => {
//     this.setState({ searchInput: e.target.value });
//   };
//   render() {
//     return (
//       <div className="todo-app">
//         <div className="search-bar">
//           {" "}
//           <label> search: </label>
//           <input
//             className="search-input"
//             value={this.state.searchInput}
//             onChange={this.handleChangeOnSearch}
//           ></input>
//         </div>
//         <div className="filter-bar">
//           <label>filter:</label>
//           <select
//             value={this.state.filterValue}
//             onChange={(e) => {
//               this.setState({ filterValue: e.target.value });
//             }}
//           >
//             {[
//               this.filterEnum.all,
//               this.filterEnum.completed,
//               this.filterEnum.incompleted,
//             ].map((val, index) => (
//               <option key={index}>{val}</option>
//             ))}
//           </select>
//         </div>
//         <div className="todo-items">
//           {this.state.todos.filter(this.filterByStatusPredicate).map(
//             (item, index) =>
//               item.title.includes(this.state.searchInput) && (
//                 <TodoItem2
//                   key={index}
//                   onClick={() => this.handleToggleFinishedTask(item)}
//                   title={item.title}
//                   completed={item.done}
//                   onRemove={() => {
//                     this.handleDelete(item);
//                   }}
//                 ></TodoItem2>
//               )
//           )}
//         </div>

//         <div className="addition-bar">
//           {" "}
//           <input
//             value={this.state.input}
//             onChange={(e) => {
//               this.setState({ input: e.target.value });
//             }}
//           ></input>
//           <button
//             className="add"
//             onClick={() => {
//               this.handleAddition(this.state.input);
//             }}
//           >
//             Add{" "}
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export { Counter, Gallery, Canvasv2, TodoApp };
