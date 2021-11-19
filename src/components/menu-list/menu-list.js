import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import WithRestoService from "../hoc";
import './menu-list.scss';
import {menuLoaded, menuRequested, menuError, addedToCart} from "../../actions";
import Spinner from "../spinner";
import Error from "../error";

class MenuList extends Component {

  componentDidMount() {
    this.props.menuRequested();

    const {RestoService} = this.props;
    RestoService.getMenuItems()
      .then(r => this.props.menuLoaded(r))
      .catch(r => this.props.menuError(r));
  }

  render() {
    return <MenuListView {...this.props} />
  }
};

const mapStateToProps = (state) => {
  return {
    menuItems: state.menu,
    loading: state.loading,
    error: state.error
  }
}

const mapDispatchToProps = {
  menuLoaded,
  menuRequested,
  menuError,
  addedToCart
};


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));

const MenuListView = ({menuItems, loading, error, addedToCart}) => {

  if (loading) {
    return <Spinner/>
  }

  if (error !== null) {
    return <Error message={error.message} type={error.error}/>
  }

  return (
    <ul className="menu__list">
      {
        menuItems.map(menuItem => {

          return (
            <MenuListItem
              menuItem={menuItem}
              key={menuItem.id}
              onAddToCart={() => addedToCart(menuItem.id)}
            />
          )
        })
      }

    </ul>
  )
}
