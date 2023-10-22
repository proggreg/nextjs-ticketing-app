import Link from 'next/link'
import {faHome, faTicket} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Nav = () => {
  return (
    <nav className='flex justify-between bg-nav p-4'>
      <div className='flex items-center space-x-4'>
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon"></FontAwesomeIcon>
        </Link>
        <Link href="/TicketPage/new">
          <FontAwesomeIcon icon={faTicket} className="icon"></FontAwesomeIcon>
        </Link>
      </div>
      <div>
        <p className="text-default-text">123@example.com</p>
      </div>
    </nav>
  )
}

export default Nav