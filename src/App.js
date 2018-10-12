import React, { Component } from 'react';
import Tree from "rc-tree";
import "rc-tree/assets/index.css";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.globalTreeData = [];
  }
  render() {
    this.props.hierarchyTree.forEach(x => this.rc(this.globalTreeData, x));


    return (
      <div className="App">

        <p>
          Edit <code>src/App.js</code> and save to reload.
          </p>

        <Tree defaultExpandAll treeData={this.globalTreeData} />
      </div>
    );
  }

  createObj = (key, title) => ({
    key, title, children: []
  })

  rc = (array, title, newKey) => {
    if (!array[0]) {
      if (!newKey) newKey = "0-0";
      const temp = this.createObj(newKey, title); //Object.assign({},new MyNode(newKey,title))
      array[0] = temp;
      console.log(temp)
    } else {
      const temp = array[0];
      const newKey = temp.key + "-0";
      this.rc(temp.children, title, newKey);
    }
  }
}

export default App;
