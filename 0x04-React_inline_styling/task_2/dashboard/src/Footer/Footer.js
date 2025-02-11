import React from "react";
import './Footer.css';
import getFullYear, { getFooterCopy } from '../utils/utils';

export default function Footer() {
	return (
		<footer className="App-footer" data-testid="app-footer">
        	<p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      	</footer>
	)
}
