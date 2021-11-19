const menuLoaded = (newMenu) => {
  return {
    type: 'MENU_LOADED',
    payload: newMenu
  }
}

const menuRequested = () => {
  return {
    type: 'MENU_REQUESTED',
  }
}

const menuError = (e) => {
  return {
    type: 'MENU_ERROR',
    error: e
  }
}

export {
  menuRequested,
  menuLoaded,
  menuError
};
