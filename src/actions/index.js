
export const fetchSuccessShow = show => ({
  type: 'FETCH_SUCCESS_SHOW',
  show,
});

export const getShowToValid = id => (dispatch) => {
  fetch(`api/shows/${id}`)
    .then(res => res.json())
    .then((show) => {
      dispatch(fetchSuccessShow(show));
    })
};