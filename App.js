import React, {Component} from 'react';
import BlogCard from './BlogCard';
import logo from './logo.svg';
import './App.css';
import {isArrayEmpty} from './Utils';

class App extends Component {
  state = {
  showBlogs : true,
    blogArr : [
      {
        title: 'Blog Title 1',
        description: 'This is a blog description',
        id: '1',
        likeCount: 0,
      },
      {
        title: 'Blog Title 2',
        description: 'This is a blog description',
        id: '2',
        likeCount: 0,
      },
      {
        title: 'Blog Title 3',
        description: 'This is a blog description',
        id: '3',
        likeCount: 0,
      }
    ]
}



  onLikeBtnClick = (pos) => {
    const updatedBlogList = this.state.blogArr;
    const updatedBlogObj = updatedBlogList[pos];

    updatedBlogObj.likeCount = updatedBlogObj.likeCount + 1;
    updatedBlogList[pos] = updatedBlogObj;

    this.setState({blogArr: updatedBlogList});
  }



  onHideBtnClick = () => {
    // let updatedState = !this.state.showBlogs;
    this.setState( (prevState, prevProps) => {
      return {showBlogs: !prevState.showBlogs}
    });
  }


  render() {
    const blogCards = isArrayEmpty(this.state.blogArr) ? [] : this.state.blogArr.map((item, pos) => {
    return(
      <BlogCard key={pos} title={item.title} description={item.description} likeCount={item.likeCount} id={item.id} onLikeBtnClick={() => this.onLikeBtnClick(pos)} />
      // <div className='BlogCard' key={item.id}>
      //   <h3>{item.title}</h3>
      //   <p>{item.description}</p>
      // </div>
    )
  })

  return(
    <div className='App'>
      <button onClick={this.onHideBtnClick}>{this.state.showBlogs ? 'Hide List' : 'Show List'}</button>
      <br />
      { this.state.showBlogs ? blogCards : null }
    </div>
    );
  }
}

export default App
