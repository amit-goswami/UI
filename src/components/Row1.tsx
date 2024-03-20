import Image from 'next/image'

const RocketIcon = () => {
  return (
    <div className="bg-[#131517] flex items-center justify-center rounded-3xl p-10">
      <Image
        src="/assets/rocket.png"
        alt="Logo"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '30vw', height: '30vh' }}
      />
    </div>
  )
}

const StatsSection = () => {
  return (
    <div className="bg-[#131517] flex flex-col items-center justify-center rounded-3xl p-3 gap-y-2">
      <div className="flex items-center gap-2">
        <div className="flex flex-1 gap-1  flex-col items-center justify-center">
          <Image
            src="/assets/loader.png"
            alt="Logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '40%', height: '50%' }}
          />
          <p className="text-[#FA18FF] text-xs">Memory used</p>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="flex gap-2 items-center">
            <Image
              src="/assets/file.svg"
              alt="Logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '20%', height: '30%' }}
            />
            <p className="text-[#FF8B66]">99,999</p>
          </div>
          <p className="text-[#FFC258] text-xs">Files uploaded</p>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center">
          <div className="flex items-center gap-1">
            <Image
              src="/assets/connect.svg"
              alt="Logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '20%', height: '30%' }}
            />
            <p className="text-[#8AEAFF]">99,999</p>
          </div>
          <div className="flex flex-1 flex-col">
            <p className="text-[#00D1FF] text-xs">Commits</p>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-1 gap-1 flex-col items-center justify-center text-[#2AFF18]">
          <p>1200 GB</p>
          <p>Memory used</p>
        </div>

        <div className="flex flex-1 gap-1 flex-col items-center justify-center">
          <Image
            src="/assets/chart.png"
            alt="Logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '40%', height: '50%' }}
          />
          <p className="text-[#FF185D] text-xs">Server Load</p>
        </div>
      </div>
    </div>
  )
}

const OptionButton = () => {
  return (
    <div className="flex ring-2 ring-[#4E58B3] rounded-full text-white items-center justify-center text-center">
      <p className="font-medium leading-tight text-xl py-3">Retailer options</p>
    </div>
  )
}

export const Row1 = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-2">
      <RocketIcon />
      <StatsSection />
      <OptionButton />
    </div>
  )
}
