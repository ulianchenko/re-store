import React, { Component } from "react";
import BookListItem from "../book-list-item";
import Spinner from "../spinner"
import ErrorIndicator from "../error-indicator"
import { connect } from "react-redux";
import { withBookstoreService } from "../hoc"
import { fetchBooks, bookAddedToCart } from "../../actions";
import { compose } from "../../utils";
import "./book-list.css"

const BookList = ({books, onAddedToCart}) => {
  return (
    <ul className="book-list">
    {
      books.map((book) => {
        return (
          <li key={book.id}>
            <BookListItem book={book} onAddedToCart={() => onAddedToCart(book.id)}/>
          </li>
        )
      })
    }
  </ul>
  )
}

class BookListContainer extends Component {

  componentDidMount() {
    this.props.fetchBooks();
    // const { bookstoreService, booksLoaded, booksRequested, booksError } = this.props;
    // console.log(this.props);
    // booksRequested();
    // bookstoreService.getBooks()
    // .then((data) => booksLoaded(data))
    // .catch((error) => booksError(error));
    // console.log(data);

    // this.props.booksLoaded(data);
  };

  

  render() {
    // console.log(this.props);
    const { books, loading, error, onAddedToCart } = this.props;

    if (loading) {
      return <Spinner/>
    };

    if (error) {
      return <ErrorIndicator />
    };

    return (
      <BookList books={books} onAddedToCart={onAddedToCart}/>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    books: state.books,
    loading: state.loading,
    error: state.error
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // console.log(args);
  // const {dispatch, ownProps} = args
  const { bookstoreService } = ownProps
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddedToCart: (id) => dispatch(bookAddedToCart(id))
  }; 
  // booksLoaded,
  // booksRequested,
  // booksError
};

// console.log(mapDispatchToProps);

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);