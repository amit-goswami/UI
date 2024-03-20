import Image from 'next/image'

const Logo = () => {
  return (
    <Image
      src="/assets/logo.png"
      alt="Logo"
      width={0}
      height={0}
      sizes="100vw"
      style={{ width: '100px', height: '50px' }}
    />
  )
}

const Tabs = () => {
  const tabs = ['Dashboard', 'Feed', 'Explore', 'Marketplace']
  return (
    <nav className="ring-2 ring-[#253C5A] rounded-full py-1">
      <ul className="flex space-x-2 text-white px-3 items-center justify-center">
        {tabs.map((tab) => (
          <li
            key={tab}
            className={`${
              tab === 'Dashboard' ? 'bg-[#1E67D4]' : 'bg-[]'
            } p-3 rounded-full flex items-center justify-center cursor-pointer space-x-1 font-medium leading-tight`}
          >
            {tab === 'Dashboard' ? (
              <Image
                src="/assets/tabs.png"
                alt="Logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '20px', height: '20px' }}
              />
            ) : (
              <></>
            )}
            <span>{tab}</span>
          </li>
        ))}
      </ul>
    </nav>
  )
}

const SearchInput = () => {
  return (
    <div className="flex space-x-2 ring-2 ring-[#3FB52C] p-3 rounded-full text-white items-center font-medium leading-tight text-left">
      <Image
        src="/assets/search.png"
        alt="Logo"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '20px', height: '20px' }}
      />
      <span>Search</span>
    </div>
  )
}

const UserProfile = () => {
  return (
    <div className="flex items-center justify-between ring-2 ring-[#504168] rounded-lg p-1 space-x-8">
      <div className="flex items-center">
        <Image
          src="/assets/profile-pic.png"
          alt="Logo"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '50px', height: '50px', marginRight: '4px' }}
        />
        <div className="flex flex-col text-white">
          <span className="font-light italic leading-relaxed">Personal</span>
          <span>mukundhBhushan</span>
        </div>
      </div>
      <Image
        src="/assets/polygon.png"
        alt="Logo"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '20px', height: '20px', marginRight: '18px' }}
      />
    </div>
  )
}

export const Header = () => {
  return (
    <header className="flex p-6 justify-between items-center">
      <Logo />
      <div className="flex space-x-2 items-center">
        <Tabs />
        <SearchInput />
      </div>
      <UserProfile />
    </header>
  )
}
