import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LogoProps extends React.SVGProps<SVGSVGElement> {}

const Logo: React.FC<LogoProps> = (props) => {
  return (
    <svg {...props} width='284' height='40' viewBox='0 0 284 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M21.4267 40H12.7913L0 0H9.60694L17.2169 24.5405L25.2587 0H34.9196L21.4267 40Z' fill='#222222' />
      <path
        d='M43.5218 15.4595H56.7448V24.5946H43.5218V30.8649H59.8212V40H34.4006V0.378377L59.8212 0.324323V9.45946H43.5218V15.4595Z'
        fill='#222222'
      />
      <path d='M63.7329 0.27027H72.8541V40H63.7329V0.27027Z' fill='#222222' />
      <path
        d='M108.677 40H98.8005L85.8473 16.8649V40H76.7261V0.43243H86.6569L99.5561 23.5135V0.324323H108.677V40Z'
        fill='#222222'
      />
      <path d='M127.588 9.35135V40H118.467V9.35135H110.911V0.16216H135.198V9.35135H127.588Z' fill='#222222' />
      <path d='M137.394 0.27027H146.515V40H137.394V0.27027Z' fill='#222222' />
      <path
        d='M165.867 40C163.816 40 161.909 39.6216 160.146 38.8649C158.382 38.1802 156.781 37.1351 155.342 35.7297C153.903 34.2883 152.805 32.6667 152.05 30.8649C151.258 29.1351 150.844 27.2072 150.808 25.0811V0.27027H159.93V25.027C159.93 26.6126 160.523 28 161.711 29.1892C162.826 30.3063 164.229 30.8649 165.92 30.8649C166.712 30.8649 167.468 30.7027 168.187 30.3784C168.907 30.0541 169.537 29.6216 170.076 29.0811C170.616 28.5405 171.03 27.9099 171.318 27.1892C171.605 26.3964 171.749 25.6216 171.749 24.8649V0.27027H180.871V24.8108C180.907 26.7568 180.547 28.7027 179.791 30.6487C178.928 32.5946 177.866 34.1982 176.607 35.4595C175.24 36.8288 173.656 37.9099 171.857 38.7027C170.022 39.4955 168.079 39.9279 166.028 40H165.867Z'
        fill='#222222'
      />
      <path
        d='M217.204 40H207.328L194.374 16.8649V40H185.253V0.43243H195.184L208.083 23.5135V0.324323H217.204V40Z'
        fill='#222222'
      />
      <path
        d='M230.934 1.83784C233.453 0.792792 236.025 0.27027 238.652 0.27027C241.278 0.27027 243.851 0.792792 246.37 1.83784C248.817 2.84685 250.921 4.25225 252.684 6.05405C254.484 7.85586 255.905 9.96396 256.948 12.3784C257.992 14.9009 258.513 17.4775 258.513 20.1081C258.513 22.7387 257.992 25.3153 256.948 27.8378C255.977 30.1441 254.555 32.2342 252.684 34.1081C250.885 35.9099 248.781 37.3333 246.37 38.3784C243.851 39.4234 241.278 39.9459 238.652 39.9459C236.025 39.9459 233.453 39.4234 230.934 38.3784C228.631 37.4054 226.544 35.982 224.673 34.1081C222.802 32.2342 221.381 30.1441 220.409 27.8378C219.366 25.3153 218.844 22.7387 218.844 20.1081C218.844 17.4775 219.366 14.9009 220.409 12.3784C221.453 9.96396 222.874 7.85586 224.673 6.05405C226.436 4.28829 228.523 2.88288 230.934 1.83784ZM234.496 29.9459C235.683 30.5225 237.069 30.8108 238.652 30.8108C240.235 30.8108 241.62 30.5225 242.808 29.9459C244.103 29.4054 245.236 28.6486 246.208 27.6757C247.179 26.7027 247.953 25.5676 248.529 24.2703C249.068 22.973 249.338 21.5856 249.338 20.1081C249.338 18.6306 249.068 17.2432 248.529 15.9459C247.953 14.6486 247.179 13.5135 246.208 12.5405C245.236 11.5676 244.103 10.7928 242.808 10.2162C241.512 9.67567 240.127 9.4054 238.652 9.4054C237.177 9.4054 235.791 9.67567 234.496 10.2162C233.201 10.7928 232.067 11.5676 231.096 12.5405C230.124 13.5135 229.369 14.6486 228.829 15.9459C228.253 17.1351 227.965 18.5225 227.965 20.1081C227.965 21.6937 228.253 23.0811 228.829 24.2703C229.369 25.5676 230.124 26.7027 231.096 27.6757C232.067 28.6486 233.201 29.4054 234.496 29.9459Z'
        fill='#222222'
      />
      <g clip-path='url(#clip0_38_90)'>
        <path
          d='M271.139 31.7541C272.213 32.0319 274.559 32.6383 274.932 31.1712C275.314 29.6703 273.037 29.1708 271.928 28.927C271.804 28.9009 271.694 28.8748 271.604 28.8539L270.882 31.6889C270.955 31.7059 271.042 31.728 271.139 31.7541ZM272.15 27.6112C273.045 27.8459 274.998 28.3545 275.338 27.0218C275.684 25.6577 273.787 25.2483 272.86 25.0462C272.77 25.0268 272.68 25.0064 272.59 24.9849L271.934 27.5564C271.997 27.5708 272.069 27.5903 272.15 27.6112Z'
          fill='#F7931A'
        />
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M269.991 39.7275C272.842 40.3712 275.828 39.8645 278.314 38.3154C280.799 36.7664 282.586 34.2978 283.293 31.437C283.999 28.5761 283.57 25.5497 282.096 23.0041C280.623 20.4584 278.221 18.5953 275.405 17.8127C272.526 17.0886 269.481 17.5483 266.938 19.0907C264.395 20.6331 262.563 23.1319 261.844 26.0376C261.126 28.9436 261.581 32.0184 263.109 34.5858C264.637 37.1531 267.113 39.0027 269.991 39.7275ZM275.17 24.3495C276.721 24.8892 277.856 25.6962 277.632 27.1986C277.47 28.2994 276.866 28.8328 276.064 29.0186C277.166 29.5985 277.727 30.4871 277.192 32.0259C276.53 33.9363 274.955 34.0969 272.861 33.6978L272.353 35.7537L271.125 35.445L271.626 33.4166C271.299 33.3347 270.973 33.2494 270.648 33.1606L270.144 35.1977L268.918 34.8889L269.426 32.8305L269.107 32.7464L268.55 32.6021L266.952 32.2004L267.562 30.7821C267.562 30.7821 268.467 31.0243 268.454 31.0055C268.803 31.0934 268.957 30.8637 269.018 30.7118L269.821 27.4622C269.856 27.4709 269.891 27.4796 269.925 27.4886L269.95 27.4949C269.909 27.4782 269.866 27.4644 269.822 27.4534L270.394 25.1339C270.41 24.8703 270.32 24.5377 269.822 24.4135C269.842 24.4009 268.932 24.1888 268.932 24.1888L269.258 22.8659L270.951 23.2926V23.2989C271.205 23.3617 271.467 23.4232 271.735 23.4847L272.238 21.4488L273.464 21.7576L272.972 23.7533C273.301 23.8286 273.633 23.9051 273.955 23.9867L274.445 22.0036L275.674 22.3136L275.17 24.3495Z'
          fill='#F7931A'
        />
      </g>
      <defs>
        <clipPath id='clip0_38_90'>
          <rect width='22.4882' height='22.5225' fill='white' transform='translate(261.512 17.4775)' />
        </clipPath>
      </defs>
    </svg>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const navigation: any[] = [
    // { name: 'Inicio', href: '/' },
    // { name: 'Comunidades', href: '/communities' },
    // { name: 'Blog', href: '/blog' },
    // { name: 'Asociación', href: '/about-us' },
    // { name: 'Donaciones', href: '/sponsor' },
    // { name: 'Contacto', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className='bg-white/60 sticky top-0 z-50 backdrop-blur-lg'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='flex justify-center items-center gap-4 h-20'>
          <Link to='/' className=''>
            <Logo className='max-h-6' />
          </Link>

          {/* Desktop Navigation */}
          {/* <nav className='hidden md:flex space-x-8'>
            {navigation?.length > 0 &&
              navigation?.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-bolt-base transition-colors duration-200 ${
                    isActive(item.href) ? 'text-bitcoin' : 'text-gray-600 hover:text-bitcoin'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
          </nav> */}

          {/* Mobile menu button */}
          {/* <div className='md:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-bitcoin hover:bg-gray-50 transition-colors duration-200'
            >
              {isMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
            </button>
          </div> */}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className='md:hidden bg-white border-t border-gray-100 animate-slide-up'>
          <div className='px-6 py-4 space-y-2'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-bolt-base transition-colors duration-200 ${
                  isActive(item.href) ? 'text-bitcoin bg-gray-50' : 'text-gray-600 hover:text-bitcoin hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
