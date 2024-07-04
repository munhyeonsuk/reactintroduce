import logo from '../img/logo.svg'
import hdscss from './scss/hd.module.scss'

function Hd() {
    return (
        <header className={hdscss.logo}>
            <div className="container d-flex justify-content-between align-items-center">
                <h1><a href=""><img src={logo} alt="" /></a></h1>
                <div>
                    <a href="" className='me-3'>포트폴리오</a>
                    <a href="" className='me-3'>인물탐방</a>
                    <a href="">사전인터뷰</a>
                </div>
            </div>

        </header>
    )
}

export default Hd
