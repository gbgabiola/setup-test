import React, { Component } from 'react';

export default class FetchRandomUser extends Component {
  state = {
    loading: true,
    people: [],
  };

  async componentDidMount() {
    const url = 'https://api.randomuser.me/?results=5';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ people: data.results, loading: false });
  }

  render() {
    if (this.state.loading) {
      <div>loading...</div>;
    }

    if (!this.state.people.length) {
      return <div>Failed to fetch each person's data.</div>;
    }

    // // Using forEach
    // const peopleJsx = [];
    // this.state.people.forEach(person => {
    //   peopleJsx.push(
    //     <div key={person.login.uuid}>
    //       <div>{person.name.title}</div>
    //       <div>{person.name.first}</div>
    //       <div>{person.name.last}</div>
    //       <img src={person.picture.large} alt="Profile" />
    //     </div>
    //   );
    // });

    return (
      // <div>{peopleJsx}</div>
      <div>
        {this.state.people.map(person => (
          <div key={person.login.uuid}>
            <div>{person.name.title}</div>
            <div>{person.name.first}</div>
            <div>{person.name.last}</div>
            <img src={person.picture.large} alt="Profile" />
          </div>
        ))}
      </div>
    );
  }
}
