/**
 * <div id="parent">
 *      <div id="child1">
 *          <h1 id="heading1"> I am an h1 tag!</h1>
 *          <h2 id="heading2"> I am an h2 tag!</h1>
 *      </div>
 *      <div id="child2">
 *          <h1 id="heading1"> I am an h1 tag!</h1>
 *          <h2 id="heading2"> I am an h2 tag!</h1>
 *      </div>
 * </div>
 */
const parent = React.createElement("div", { id: "parent" }, 
[
    React.createElement("div", { id: "child1" }, 
        [
            React.createElement("h1", { id: "heading1" }, "I am an h1 tag!"), 
            React.createElement("h2", { id: "heading2" }, "I am an h2 tag!")
        ]),
    React.createElement("div", { id: "child2" }, 
        [
            React.createElement("h1", { id: "heading1" }, "I am an h1 tag!"), 
            React.createElement("h2", { id: "heading2" }, "I am an h2 tag!")
        ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);