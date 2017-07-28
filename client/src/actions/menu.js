export const  asyncGetMenus = () => {
    axios.get('http://localhost:3001/')
        .then(res => {
            this.setState({ menu: res.data.menu });
        });
};