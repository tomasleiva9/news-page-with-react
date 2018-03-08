const _request = fetch('https://jsonplaceholder.typicode.com/posts')

export default {

  getNews () {
    return (dispatch) => {
      _request.then(response => response.json())
      .then(json => {
        dispatch({type: 'NEWS', payload: json})
      });
    }
  }

}
