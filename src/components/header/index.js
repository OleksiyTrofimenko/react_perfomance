import React from 'react';
import { connect } from 'react-redux';
import CartIcon from '../../components/cart-icon';
// import CartDropdown from '../../components/cart-dropdown';
import { ReactComponent as Logo } from '../../images/crown.svg';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './styles';

const Header = ({ isHidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        Shop
      </OptionLink>
      {console.log(isHidden)}
      <CartIcon />
    </OptionsContainer>

    {/* <LogoContainer to='/'>
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        Shop
      </OptionLink>
      <OptionLink to='/contact'>
        Contact
      </OptionLink>
      <CartIcon />
    </OptionsContainer>
    {!isHidden && <CartDropdown />} */}
  </HeaderContainer>
);

const mapStateToProps = state => {
  console.log(state);

  return {
    isHidden: false,
  };
};

export default connect(mapStateToProps)(Header);
