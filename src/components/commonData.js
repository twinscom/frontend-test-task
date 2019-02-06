import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const Button = styled.button`
    padding: 15px 40px;
    border-radius: 10px;
    font-weight: 700;
    font-size: 16px;
    background-color: #5BC0BE;
    border: none;
    color: #F4F4F8;
    cursor: pointer;
    transition: all .5s;
	width: 100%;

    &:hover{
        background-color: #0B132B;
    }
	&:disabled{
		background-color: grey;
	}
`
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed,
	figure, figcaption, footer, header, hgroup,
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	*{
		box-sizing: border-box;
	}
	article, aside, details, figcaption, figure,
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ol, ul {
		list-style: none;
		list-style-type: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	a{text-decoration: none;}
	*:focus {outline: none;}
	html, body {
		font-family: 'Montserrat', sans-serif;
		color: #3F4045;
	}
	.display-none{
		display: none !important;
	}
	.btn{
		padding: 15px 40px;
		border-radius: 50px;
		font-weight: 700;
		font-size: 16px;
		background-color: #5BC0BE;
		border: none;
		color: #F4F4F8;
		cursor: pointer;
		transition: all .5s;		

		&.btn-small{
			padding: 10px;
			border-radius: 5px;
			font-size: 12px;
		}

		&:hover{
			background-color: #0B132B;
		}
	}
	.error-input{
		border-color: #FF7373 !important;
	}
	.price{
		text-transform: uppercase;
		color: #FED766;
		font-weight: 700;
	}
	.space-between{
		justify-content: space-between;
	}
	.flex-center{
		justify-content: center;
	}
	.flex-center-center{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.col-1-of-2{		
		width: 50%;
		padding: 20px;
	}
	@media screen  and (max-width: 719px){
		.row{
			.col-1-of-2{
				width: 100%;
				padding: 0 10px;			
				margin: 0 auto;
				/* padding: 20px; */
				box-sizing: border-box;

				&:not(:last-child){
					margin-bottom: 40px;
				}
				&:last-child{
					padding: 20px;
					width: calc(100% - 20px);
				}
			}
		}		
	}
`
const Headline = styled.h1`
    font-size: 30px;
    font-weight: 700;
    margin: 40px 0;
`
const Container = styled.div`
	width: 70%;
	margin: 0 auto;
	padding: 20px 0;
`
const ContainerInnerWrap = styled.div`
	max-width: 350px;
	margin: 0 auto;
`
const ActivityWrap = styled.div`
    border-radius: 10px;
    padding: 20px;
    margin: 0 auto;
	background-color: #3F4045;
	color: #F4F4F8;
    div{
        margin-bottom: 10px;
    }
`
const Strong = styled.strong`
	color: #5BC0BE;
	font-weight: 700;
`
const ActivityHeader = styled.h3`
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
    margin-bottom: 5px;
`
const Participants = styled.div`
    display: flex;
    justify-content: space-between;
`
const Key = styled.div`
    display: flex;
    justify-content: flex-end;
    font-size: 12px;
    margin-bottom: 20px !important;	
`
const Type = styled.div`
    text-align: left;
`
const PriceWrap = styled.div`
    text-align: center;
    margin-top: 40px;
`
const Price = styled.span`
    font-size: 24px;
`
const ActivityContent = ({ filter, data }) => {
	const dataKeysCount = Object.keys(data).length;
	return (
		<ActivityWrap className={`${filter ? 'col-1-of-2' : ''} ${dataKeysCount === 0 ? 'display-none' : ''}`}>
			<div className={dataKeysCount === 1 ? 'display-none' : ''}>
				<ActivityHeader>{data.activity}</ActivityHeader>
				<Key>
					id: {data.key}
				</Key>
				<Type>
					<span>Activity type: <Strong>{data.type}</Strong></span>
				</Type>
				<Participants>
					Participants: {data.participants}
				</Participants>
				<PriceWrap>
					<Price>
						<i className={data.price === 0 ? 'price' : ''}>
							{data.price === 0 ? `It's free!` : `Price: $${data.price}`}
						</i>
					</Price>
				</PriceWrap>
			</div>
			<div className={dataKeysCount === 1 ? '' : 'display-none'}>
				<ActivityHeader>
					{data.error}
				</ActivityHeader>
			</div>
		</ActivityWrap>
	)
}

export default GlobalStyle;
export { Button, Headline, Container, ContainerInnerWrap, ActivityWrap, Strong, ActivityContent };