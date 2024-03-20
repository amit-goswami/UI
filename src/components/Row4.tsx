import Image from 'next/image'

const Card = ({ img }: { img: string }) => {
  return (
    <div className="bg-[#222527] rounded-lg p-1 flex flex-col">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center w-6 h-6 ring-[#9B3F3F] bg-[#9B3F3F] rounded-full">
          <Image
            src="/assets/lock.png"
            alt="Logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '50%', height: 'auto' }}
          />
        </div>
        <div className="flex items-center gap-2">
          <p className="font-medium">7 files</p>
          <div>
            <Image
              src="/assets/options.png"
              alt="Logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '50%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center rounded-3xl p-2">
        <Image
          src={`/assets/${img}.png`}
          alt="Logo"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '30%', height: 'auto' }}
        />
      </div>
      <div className="flex flex-1 items-center w-full">
        <p className="font-medium text-sm">
          Here is a Really long repository name
        </p>
      </div>
      <div className="flex items-center justify-between w-full mt-1">
        <div className="flex flex-col">
          <p className="text-lg">12/12/12</p>
          <p className="italic text-xs font-light">Created</p>
        </div>
        <div className="flex flex-col">
          <p className="text-lg">12 months ago</p>
          <p className="italic text-xs font-light">Updated</p>
        </div>
      </div>
    </div>
  )
}

const Repositories = () => {
  return (
    <div className="bg-[#131517] relative flex flex-col items-start justify-between rounded-3xl p-4 h-full text-white space-y-2 font-medium overflow-hidden">
      <div className="flex flex-col w-full space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-[#B571FF] font-medium text-xl">Repositories</p>
          <p className="text-[#B571FF] font-sm text-sm">(7 repositories)</p>
        </div>
        <div className="flex items-center justify-between flex-1 space-x-2">
          <div className="flex flex-1 items-center ring-1 ring-[#FFFFFF] rounded-full p-2 space-x-2">
            <Image
              src="/assets/search.png"
              alt="Logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '10%', height: 'auto' }}
            />
            <p className="text-[#626262] font-light">Search for repository</p>
          </div>

          <div className="flex items-center ring-1 w-10 h-10 ring-[#FFFFFF] bg-[#A49D4B] rounded-full">
            <Image
              src="/assets/adjust.png"
              alt="Logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <Card img="rocket" />
          <Card img="car" />
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-[#5AADD1] w-full p-2 absolute bottom-0 left-0 right-0">
        <p className="text-[#121517] font-medium text-sm">Create Repository</p>
      </div>
    </div>
  )
}

export const Row4 = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-2">
      <Repositories />
    </div>
  )
}
