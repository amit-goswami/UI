import Image from 'next/image'

export const FirstBar = () => {
  return (
    <div className="w-full flex items-center justify-between rounded-full gap-1">
      <div className="bg-[#131517] flex items-center justify-between flex-1 rounded-full p-2">
        <div className="flex gap-2">
          <div className="flex items-center justify-center p-[16px] ring-2 ring-[#9B3F3F] bg-[#9B3F3F] rounded-full">
            <Image
              src="/assets/lock.png"
              alt="Logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '10px', height: '10px' }}
            />
          </div>
          <div className="flex flex-col">
            <p className="text-[#FFE071] text-sm font-medium ">Projects</p>
            <p className="text-[#B571FF] font-medium text-lg leading-tight">
              Long really long project name
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="flex space-x-2 px-3 ring-2 ring-[#4F919A] rounded-full text-white items-center font-medium leading-tight text-left">
            <Image
              src="/assets/box.svg"
              alt="Logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '32px', height: '32px' }}
            />
            <div className="flex flex-col items-center justify-end">
              <p className="flex-1 text-sm mt-3">1.5M</p>
            </div>
          </div>

          <div className="flex space-x-2 px-3 ring-2 ring-[#9A4F97] bg-[#9A4F97] rounded-full text-white items-center font-medium leading-tight text-left">
            <Image
              src="/assets/spray.png"
              alt="Logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '32px', height: '32px' }}
            />
            <p className="text-sm mt-3">999</p>
          </div>

          <div className="flex items-center justify-center w-[48px] h-[48px] ring-2 ring-[#3FB52C] rounded-full">
            <Image
              src="/assets/share.png"
              alt="Logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '20px', height: '20px' }}
            />
          </div>

          <div className="flex ring-2 ring-[#8EA7EA] rounded-full text-white items-center font-medium leading-tight text-left">
            <div className="flex -space-x-7 overflow-hidden">
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <Image
                    src="/assets/user.png"
                    alt="Logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '50px', height: '50px', display: 'block' }}
                    key={i}
                  />
                ))}
            </div>
            <div className="pr-4">
              <p className="">+15</p>
              <p className="text-sm font-light">Greyt Minds</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center p-3 ring-2 ring-[#9B6B3F] rounded-full">
        <Image
          src="/assets/settings.png"
          alt="Logo"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '30px', height: '30px' }}
        />
      </div>
    </div>
  )
}
