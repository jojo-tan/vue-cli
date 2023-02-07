const apiCreate = (example) => {
  return {
    getColumn(params = {}) {
      return example.get('columns', params)
    }
  }
}

export default apiCreate