import { Inter } from '@next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/assets/logo.png';

const inter = Inter({ subsets: ['latin'] });

const linkItem = [
  { name: 'Features', path: '#' },
  { name: 'Pricing', path: '#' },
  { name: 'Our Client', path: '#' },
  { name: 'About Us', path: '#' },
];

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="mx-auto max-w-6xl">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <Image src={logo} height={40} alt="Mentaya" />
          </Link>
          <ul className="flex items-center space-x-8">
            {linkItem.map(item => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className={`${inter.className} text-lg text-gray-700 hover:text-pink-600`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#"
                className={`${inter.className} rounded-md border border-pink-600 py-2 px-4 text-pink-600`}
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className={`${inter.className} rounded-md border border-pink-600 bg-pink-600 py-2 px-4 text-white transition ease-in-out hover:bg-pink-700`}
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
