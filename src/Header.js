import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
import SearchIcon from "@material-ui/icons/Search"
import ShopingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValue } from './StateProvider'
import { auth } from 'firebase'


function Header() {
    const [{ basket, user }] = useStateValue()
    const login = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <nav className="header">
            {/* Amazon log on left hand side */}
            <Link to="/">
                <img className="header__logo"
                    src={require("./img/LOGO2.png")}
                    alt="" />
            </Link>


            {/* search bar */}
            <div className="header_search">
                <input type="text" className="header_searchInput" />
                <SearchIcon className="header_searchIcon" />
            </div>


            {/* 3 links*/}
            <div className="header_Nave">
                {/* 1st Link */}
                <Link to="/login" className="header_link">
                    <div className="header_options">
                        <span className="header_optionLineOne">Hello {user?.email}</span>
                        <span className="header_optionLineTwo">{user ? "sign Out" : "Sign in"}</span>
                    </div>
                </Link>
                {/* 2st Link */}
                <Link to={!user && "/login"} className="header_link">
                    <div onClick={login} className="header_options">
                        <span className="header_optionLineOne">Return</span>
                        <span className="header_optionLineTwo">& orders</span>
                    </div>
                </Link>

                {/* 3st Link */}
                <Link to="/login" className="header_link">
                    <div className="header_options">
                        <span className="header_optionLineOne">Your</span>
                        <span className="header_optionLineTwo">Prime</span>
                    </div>
                </Link>
                {/* 4st Link */}
                <Link to="/cheakout" className="header_link">
                    <div className="header_optionBasket">
                        {/*Shopping basket icon */}
                        <ShopingBasketIcon />
                        {/* Number of itram in basket */}
                        <span className="header_optionLineTwo header_BasketCount">{basket?.length}</span>
                    </div>
                </Link>

            </div>
            {/*  basket icon */}

        </nav>
    )
}

export default Header