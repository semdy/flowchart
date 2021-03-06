export default {
  changeCanvasStyle: makeAction('CHANGE_CANVAS_STYLE'),
  changeLineStyle: makeAction('CHANGE_LINE_STYLE'),
  addLine: makeAction('ADD_LINE'),
  resetLine: makeAction('RESET_LINE'),
  filterLines: makeAction('FILTER_LINES'),
  addBlock: makeAction('ADD_BLOCK'),
  dropBlock: makeAction('DROP_BLOCK'),
  deleteBlock: makeAction('DELETE_BLOCK'),
  resizeBlock: makeAction('RESIZE_BLOCK')
}

function makeAction (type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args)
}
