const getData = id => {
    localStorage.setItem('breaktime', id)
}
const setData = () => {
    return localStorage.getItem('breaktime')
}

export { getData, setData }