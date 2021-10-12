import React from "react";
import "../components/Movie.css";
import "../routes/Home.css";

class Detail extends React.Component {
  componentDidMount() {
    console.log(this.props);
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
    console.log(location.state);
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="container">
          <div className="detail">
            <h1 className="detail__title">{location.state.title}</h1>
            <img src={location.state.poster} alt={location.state.title} />
            <span>{location.state.year}</span>
            <ul>
              {location.state.genres.map((val, i) => (
                <li key={location.state.index}>{val}</li>
              ))}
            </ul>
            <p>{location.state.summary}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Detail;
