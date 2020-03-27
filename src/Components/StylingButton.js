import React from 'react';
import styled, { css } from 'styled-components';

const Maxs = css`
    max-width: ${props => {
        if (props.search) return '21px;';
        else if (props.follow) return '108px;';
        else if (props.primary) return '110px;';
        else if (props.Pf_Img) return '115px;';
        else if (props.Info) return '91px;';
        else return '40px;';
    }};   
    max-height: ${props => {
        if (props.search) return '21px;';
        else if (props.follow) return '40px;';
        else if (props.primary) return '40px;';
        else if (props.Info) return '20px;';
        else if (props.Pf_Img) return '20px;';
        else return '40px;';
    }}; 
    min-width: ${props => {
        if (props.search) return '21px;';
        else if (props.follow) return '108px;';
        else if (props.primary) return '110px;';
        else if (props.Info) return '91px;';
        else if (props.Pf_Img) return '115px;';
        else return '40px;';
    }};   
    min-height: ${props => {
        if (props.search) return '21px;';
        else if (props.follow) return '40px;';
        else if (props.primary) return '40px;';
        else if (props.Info) return '20px;';
        else if (props.Pf_Img) return '20px;';
        else return '40px;';
    }};     

`
const hoverImg = css`
    &:hover {
        background: url(${({ backgroundH }) => backgroundH});
        background-size: contain;       
        height: 100px;

        transition: 0.3s;
        ${Maxs}
    }
` 



const StyledButton = styled.button`
    ${hoverImg}
    background: url(${({ background }) => background});
    background-size: contain;
    height: 100px;

    padding: 0;
    border: 0;
    cursor: pointer;
    transition: 0.3s;
    ${Maxs}
`
 




function StylingButton({ children, ...props }) {
    return (
        <StyledButton {...props}>{children}</StyledButton>
    )
  }
  

export default StylingButton;

