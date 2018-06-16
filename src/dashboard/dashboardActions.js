
export const ACTIONS = {
  FETCH_STORIES: "FETCH_STORIES"
}

function storiesFetched(stories) {
  return {
    type: ACTIONS.EMPLOYEES_FETCHED,
    payload: stories
  }
}

export function fetchStories() {
    const stories = [];
    return dispatch => dispatch(storiesFetched(stories))
}
