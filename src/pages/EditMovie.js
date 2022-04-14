import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Loading from '../components/Loading';
import { MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      status: '',
      loading: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.requisitonMovie = this.requisitonMovie.bind(this);
  }

  componentDidMount() {
    this.requisitonMovie();
  }

  async handleSubmit(updatedMovie) {
    const requestMovie = await movieAPI.updateMovie(updatedMovie);
    this.setState({
      status: requestMovie,
    });
  }

  async requisitonMovie() {
    const { match: { params: { id } } } = this.props;
    const requisition = await movieAPI.getMovie(id);
    this.setState({
      movie: requisition,
      loading: false,
    });
  }

  render() {
    const { loading, status, movie } = this.state;
    if (status === 'OK') return <Redirect to="/" />;

    if (loading) return <Loading />;

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={ movie } onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}

EditMovie.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default EditMovie;
