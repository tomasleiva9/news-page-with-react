import React from 'react';
import { connect } from 'react-redux';

class Card extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    return (
      <section className="post px-4 d-flex flex-column">
        <section className="post-head text-truncate px-4 w-100">
            <strong>{this.props.item.media}</strong>
            <span>{this.props.item.font}</span>
            <div className="divisor mx-4 my-2"></div>
            <span className="post-date">{this.props.item.date.toDateString()}</span>
        </section>

        <section className="post-title-section p-2 d-flex justify-content-center align-items-center">
          <router-link className="post-title">{this.props.item.title}</router-link>
        </section>

        <section className="post-content-section px-2 d-flex flex-wrap justify-content-center align-content-center align-items-center">
            <span style={{position: 'relative'}}>
                {this.props.item.channels.map((channel, idx) => {
                  return (
                    <span key={idx} className="post-channels badge badge-pill badge-default">
                        <span className="post-channels-name">{channel}</span>
                    </span>
                  )
                })}
            </span>
        </section>


        <div className="post-actions left">
            <button className="btn btn-check">
                <i className="fa fa-check md-18"></i></button>
        </div>

        <div className="post-actions right">
            <div>
                <button className="btn btn-sm"><i className="fa fa-download md-18"></i></button>
                <button className="btn btn-sm "><i className="fa fa-send md-18"></i></button>
                <button className="btn btn-sm"><i className="fa fa-trash md-18"></i></button>
            </div>
        </div>

    </section>

    )
  }
}


function mapStateToProps(state) {
  return {
    news: state.news
  }
}

export default connect(mapStateToProps)(Card);
