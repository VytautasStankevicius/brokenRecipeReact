import logo from '../../img/logo.png'
import './Logo.scss';

export default function Logo() {
	return (
		<div className='logo'><img src={logo} alt='...' /><span className='logo__text'>Recipedia</span></div>
	)
}