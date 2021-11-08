const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [
    // {
    //   id: 1,
    //   name: "Book 1",
    //   count: 3,
    //   total: 150
    // },
    // {
    //   id: 2,
    //   name: "Book 2",
    //   count: 2,
    //   total: 70
    // }
  ],
  orderTotal: 220
};

const updateCartItems = (cartItems, item, idx) => {
  if (idx === -1) {
    return [
      ...cartItems,
      item
    ];
  };

  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1)
  ];
};

const updateCartItem = (book, item = {}) => {
  const { id = book.id, count = 0, title = book.title, total = 0 } = item;
  return {
    id,
    title,
    count: count + 1,
    total: total + book.price,
  };
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case "FETCH_BOOKS_REQUEST":
      return {
        ...state,
        books: [],
        loading: true,
        error: null
      };
    case "FETCH_BOOKS_SUCCESS":
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null
      };
    case "FETCH_BOOKS_FAILURE":
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload
      };

    case "BOOK_ADDED_TO_CART":
      const bookId = action.payload;
      console.log(bookId)
      const book = state.books.find((book) => book.id === bookId);
      console.log(book)
      const itemIndex = state.cartItems.findIndex(({id}) => id === bookId);
      console.log(itemIndex)
      const item = state.cartItems[itemIndex];
      console.log(item)

      const newItem = updateCartItem(book, item);
        return {
          ...state,
          cartItems: updateCartItems(state.cartItems, newItem, itemIndex)
        };
      
    default:
      return state;  
  }
};

export default reducer;