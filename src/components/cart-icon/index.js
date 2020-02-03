import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../images/shopping-bag.svg'
import { toggleCartHidden } from '../../redux/cart/cart-actions';
import './styles.scss';

const CartIcon = ({ onToggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={onToggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">
      {itemCount}
    </span>
  </div>
);

// reduce function might be not supported with IE
const mapStateToProps = state => ({
  itemCount: 123
});

const mapDispatchToProps = dispatch => ({
  onToggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
