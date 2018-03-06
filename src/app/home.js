import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { fetchNews } from '../actions/index'

import Card from './card.js';

class Home extends React.Component {
  constructor () {
    super();
  }
  render () {
    return (
      <div>
          <div slot="content">
              <div className="posts d-flex flex-wrap px-2">
                  {this.props.news.map(news => {
                    return <Card key={news.id} item={news} />
                  })}
              </div>
          </div>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    news: state.news
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({fetchNews}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Home);
