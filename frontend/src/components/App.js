import React from 'react'
import Posts from './Posts'

document.body.style.backgroundColor = "#3F3F46"

class App extends React.Component {
  render() {
    return (
      <div className="container mx-auto px-4">
        <Posts />
      </div>
    )
  }
}

export default App