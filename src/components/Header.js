import { View, Text } from 'react'
import React from 'react'
import Logo from '../assets/icon.png'

export const Header = () => {
  return (
    <header>
        <div className="logo">
            <img src={Logo} alt="Logo" />
            <span>Complete It</span>
        </div>
        <div className="theme-switcher">
            <span className="light"></span>
            <span className="pink"></span>
            <span className="dark"></span>
        </div>
    </header>
  );
};