import Image from 'next/image'

const ImageCard = ({ showAssign = false }: { showAssign?: boolean }) => {
  return (
    <div className="bg-[#131517] flex gap-2 items-start w-full py-1">
      <div className="relative">
        <Image
          src="/assets/user.png"
          alt="Logo"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '50px', height: 'auto' }}
        />

        <div className="absolute left-4">
          <Image
            src="/assets/union.png"
            alt="Logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '8px', height: '24px' }}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-[#FFFFFF] font-light text-xs italic">Created</p>
        <p className="text-[#FFFFFF] font-medium text-xs">
          “This section needs changes colors are...”
        </p>

        {showAssign && (
          <div className="flex items-center justify-between -mt-4">
            <p></p>
            <p className="text-[#F6C36A] italic font-light text-xs">
              Assign to you
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

const Issues = () => {
  return (
    <div className="bg-[#131517] relative flex flex-col w-full items-start justify-center rounded-3xl p-4 overflow-hidden h-full">
      <div className="flex items-start justify-between w-full">
        <p className="text-[#F6C36A] font-medium text-xl">Issues</p>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-[#F6C36A]"></div>
          <div className="w-2 h-2 rounded-full bg-[#4084E15C]"></div>
        </div>
      </div>

      <div className="h-full">
        <div className="border-b border-[#F6C36A17]">
          <ImageCard />
          <div className="flex items-center gap-2 ml-8 w-full py-1">
            <div className="">
              <Image
                src="/assets/user.png"
                alt="Logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '30px', height: 'auto' }}
              />
            </div>
            <div className="flex flex-col">
              <p className="text-[#FFFFFF] font-medium text-xs">
                “OK will look into in”
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between py-1">
            <p></p>
            <p className="text-[#FFFFFF] italic font-light text-xs">
              8 more interactions
            </p>
          </div>
        </div>
        <div className="border-b border-[#F6C36A17]">
          <ImageCard />
          <div className="flex items-center gap-2 ml-8 w-full py-1">
            <div className="">
              <Image
                src="/assets/user.png"
                alt="Logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '30px', height: 'auto' }}
              />
            </div>
            <div className="flex flex-col">
              <p className="text-[#FFFFFF] font-medium text-xs">Added 2 tags</p>
            </div>
          </div>
        </div>
        <div>
          <ImageCard showAssign />
          <div className="flex items-center gap-2 ml-8 w-full py-1">
            <div className="">
              <Image
                src="/assets/user.png"
                alt="Logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '30px', height: 'auto' }}
              />
            </div>
            <div className="flex flex-col">
              <p className="text-[#FFFFFF] font-medium text-xs">
                “having a look”
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center bg-[#F6C36A] w-full p-2 absolute bottom-0 left-0 right-0">
        <p className="text-[rgb(18,21,23)] font-medium text-sm">
          View all issues
        </p>
      </div>
    </div>
  )
}

const Status = () => {
  return (
    <div className="bg-[#131517] flex items-center rounded-3xl p-4 gap-4">
      <div className="flex flex-col justify-between h-full w-[60%]">
        <div className="flex flex-1 w-full -space-x-5 overflow-hidden">
          <div className="bg-[#3B8AFF] w-10 h-10 rounded-full"></div>
          <div className="bg-[#62C5A8] w-10 h-10 rounded-full"></div>
          <div className="bg-[#F6C36A] w-10 h-10 rounded-full"></div>
          <div className="bg-[#132B4A] w-10 h-10 rounded-full"></div>
          <div className="bg-[#F66A6A] w-10 h-10 rounded-full"></div>
          <div className="bg-[#FFFFFF] w-10 h-10 rounded-full flex items-center justify-center">
            <p className="text-sm">+18</p>
          </div>
        </div>
        <p className="ring-1 w-fit ring-[#245089] bg-[#245089] text-white rounded-full p-1">
          View all tags
        </p>
      </div>
      <div className="w-24 h-24 bg-[#F6C36A] rounded-full"></div>
    </div>
  )
}

export const Row2 = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-2">
      <Issues />
      <Status />
    </div>
  )
}
