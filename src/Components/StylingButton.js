import React from 'react';
import styled, { css } from 'styled-components';

const Maxs = css`
    max-width: ${props => {
        if (props.search) return '21px;';
        else if (props.follow) return '108px;';
        else if (props.primary) return '110px;';
        else if (props.Pf_Img) return '115px;';
        else return '40px;';
    }};   
    max-height: ${props => {
        if (props.search) return '21px;';
        else if (props.follow) return '40px;';
        else if (props.primary) return '40px;';
        else if (props.Pf_Img) return '20px;';
        else return '40px;';
    }}; 
    min-width: ${props => {
        if (props.search) return '21px;';
        else if (props.follow) return '108px;';
        else if (props.primary) return '110px;';
        else if (props.Pf_Img) return '115px;';
        else return '40px;';
    }};   
    min-height: ${props => {
        if (props.search) return '21px;';
        else if (props.follow) return '40px;';
        else if (props.primary) return '40px;';
        else if (props.Pf_Img) return '20px;';
        else return '40px;';
    }};     

`
const hoverImg = css`
    &:hover {
        margin: 0 auto;
        background: url(${({ backgroundH }) => backgroundH});
        background-size: contain;       
        height: 100px;
        width: 100000px;
        ${Maxs}
    }
` 



const StyledButton = styled.button`
    ${hoverImg}
    margin: 0 auto;
    background: url(${({ background }) => background});
    background-size: contain;
    height: 100px;
    width: 100000px;
    padding: 0;
    border: 0;
    cursor: pointer;
    ${Maxs}
`
 




function StylingButton({ children, ...props }) {
    return (
        <StyledButton {...props}>{children}</StyledButton>
    )
  }
  

export default StylingButton;

