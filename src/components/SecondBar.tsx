import Image from 'next/image'

export const SecondBar = () => {
  return (
    <div className="w-full flex items-center justify-between bg-[#131517] space-x-16 rounded-full p-1">
      <div className="flex flex-1 items-center">
        <Image
          src="/assets/circle.png"
          alt="Logo"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '50px', height: '50px', marginRight: '4px' }}
        />
        <Image
          src="/assets/click.png"
          alt="Logo"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '50px', height: '50px', marginRight: '4px' }}
        />
        <div className="flex-1">
          <p className="font-normal leading-tight text-left text-[#D2D2D2] bg-[#9749ED14] text-sm rounded-full p-4">
            This is the description for this given project in a couple of words
            not in paragraphs or maybe even few sentences or lines.
          </p>
        </div>
      </div>
      <div className="flex px-2 ring-2 ring-[#868686] rounded-full justify-between items-center space-x-1">
        <Image
          src="/assets/book.png"
          alt="Logo"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '50px', height: '50px' }}
        />
        <div className="flex flex-col pr-2 text-white font-light text-sm">
          <p>Project Overview</p>
          <div className="flex items-center justify-between font-light text-sm">
            <p></p>
            <p>(PDF)</p>
          </div>
        </div>
      </div>
    </div>
  )
}
