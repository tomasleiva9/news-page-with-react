import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";

class View extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content">
        <a href="javascript: history.back()">go back</a>
        {
          this.props.news.map(item => {
            if (item.id == this.props.match.params.id) {
              return (
                <div>
                  <h1>{item.title}</h1>
                  <p>{item.body}</p>
                </div>
              )
            }
          }, this)
        }
      </div>
    )
  }
}

const oddEvent = (match, location) => {
  if (!match) {
    return false
  }
  const eventID = parseInt(match.params.eventID)
  return !isNaN(eventID) && eventID % 2 === 1
}

function mapStateToProps(state) {
  return {
    news: state.news
  }
}

export default connect(mapStateToProps)(View)
