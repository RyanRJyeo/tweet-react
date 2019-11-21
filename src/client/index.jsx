import React from 'react';
import ReactDOM from 'react-dom';
import Tweets from 'tweets'

let name;
let content;
let createdAt;


class App extends React.Component {
  render() {

    let yo = Tweets[0]
    console.log(yo)

    let tweet = Tweets.map(x =>{
        let text = x.text
        let created_at = x.created_at
        let name = x.user.screen_name
        let image = x.user.profile_image_url_https

        return  <div class="jumbotron" style={{borderRadius: "5%"}}>
                    <span><img src={image} style={{borderRadius: "50%"}}/></span>
                    <div class="row">
                        <h3 class="col-4">{name}</h3>
                        <small class="col-8">{created_at}</small>
                    </div>
                    <p class="lead">{text}</p>
                </div>
    })

    return (
      <div>
        <div>{tweet}</div>
      </div>
    );
  }
}


const element = document.getElementById('app');

ReactDOM.render(<App />, element );//

console.log("tweet react");