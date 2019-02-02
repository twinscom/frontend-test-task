import styled, { createGlobalStyle } from 'styled-components';

//
// 	color: #3F4045; //grey
// 	color: #5BC0BE; //blue
// 	color: #0B132B; //darkBlue
// 	color: #F4F4F8; //white
// 	color: #FED766; //yellow
// 
// font: 'Montserrat', sans - serif;

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
	strong{
		font-weight: 700;
	}
	.display-none{
		display: none;
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

		&:hover{
			background-color: #0B132B;
		}
	}
`
const Headline = styled.h1`
    font-size: 30px;
    font-weight: 700;
    margin: 40px 0;
`
export default GlobalStyle;
export { Button, Headline};