import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

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
	${reset}
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
	.filterBlock{
		input{
			width: 89.6%;
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
const Success = ({ data }) => {
	return (
		<div className={data.error ? 'display-none' : ''}>
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
					{
						data.price === 0
							? <i className="price">It's free!</i>
							: <i>Price: {data.price}</i>
					}
				</Price>
			</PriceWrap>
		</div>
	)
}
const Error = ({ data }) => {
	return (
		<div className={data.error ? '' : 'display-none'}>
			<ActivityHeader>
				{data.error}
			</ActivityHeader>
		</div>
	)
}
const ActivityContent = ({ filter, data }) => {
	return (
		<ActivityWrap className={`${filter ? 'col-1-of-2' : ''} ${Object.keys(data).length === 0 ? 'display-none' : ''}`}>
			{
				data.error
					? <Error data={data} />
					: <Success data={data} />
			}
		</ActivityWrap>
	)
}

export default GlobalStyle;
export { Button, Headline, Container, ContainerInnerWrap, ActivityWrap, Strong, ActivityContent };