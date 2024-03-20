import Image from 'next/image'

const DiscussionBoard = () => {
  return (
    <div className="bg-[#131517] flex flex-col items-start justify-center rounded-3xl p-4 text-white space-y-2 font-medium">
      <p className="text-[#EE84FF] font-medium text-xl">Discussion board</p>

      <div className="flex flex-1 items-center justify-center w-[100%]">
        <div className="flex-1">
          <p className="text-lg">+50</p>
          <p className="font-light">New activities</p>
        </div>
        <div className="flex-1">
          <p className="text-lg">+50</p>
          <p className="font-light">Assigned to you</p>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center w-[100%]">
        <div className="flex w-[40%] items-center justify-start ml-4">
          <div className="w-[40px] bg-[#EE84FF] flex items-center rounded p-2">
            <Image
              src="/assets/arrow.png"
              alt="Logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '30px', height: 'auto' }}
            />
          </div>
        </div>

        <div className="flex-1 w-[60%]">
          <div className="flex ring-2 ring-[#8EA7EA] rounded-full text-white items-center font-medium leading-tight text-left gap-2">
            <div className="flex flex-1 w-full -space-x-6 overflow-hidden">
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <Image
                    src="/assets/user.png"
                    alt="Logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '40px', height: 'auto', display: 'block' }}
                    key={i}
                  />
                ))}
            </div>
            <div className="flex flex-1 w-full flex-col">
              <p className="text-xs font-light">+7</p>
              <p className="text-xs font-light">Greyt Minds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const TaskList = () => {
  return (
    <div className="bg-[#131517] flex flex-col items-center justify-center rounded-3xl p-2">
      <div className="flex w-full items-center justify-between">
        <p className="text-[#DCFF50]">Task list</p>
        <p className="ring-1 w-fit ring-[#DCFF50] text-white rounded-full px-2">
          View all
        </p>
      </div>

      <div className="flex w-full gap-6">
        <div className="flex flex-col">
          <p className="text-[#DCFF50] font-light text-xl">18</p>
          <p className="text-[#DCFF50] font-light text-sm">Tasks</p>
        </div>

        <div className="flex flex-col">
          <p className="text-[#FFC8A0] font-light text-xl">18</p>
          <p className="text-[#FFC8A0] font-light text-sm">Nearing</p>
        </div>

        <div className="flex flex-col">
          <p className="text-[#FFA0A0] font-light text-xl">18</p>
          <p className="text-[#FFA0A0] font-light text-sm">Crossed</p>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <div className="flex gap-2 p-2 items-center border-b-[1px] border-b-[#DCFF5045]">
          <div className="w-6 h-6 rounded-full bg-[#F66A6A]"></div>
          <div className="flex flex-col">
            <p className="text-white font-light text-sm">
              Add logo to webdesign
            </p>
            <p className="flex items-center gap-1 text-white font-light text-xs">
              <span className="italic">Generic</span> <span>.</span>{' '}
              <span>12/12/12</span>
            </p>
          </div>
        </div>

        <div className="flex gap-2 p-2 items-center border-b-[1px] border-b-[#DCFF5045]">
          <div className="w-6 h-6 rounded-full bg-[#6DF66A]"></div>
          <div className="flex flex-col">
            <p className="text-white font-light text-sm">
              Add logo to webdesign and also...
            </p>
            <p className="flex items-center gap-1 text-white font-light text-xs">
              <span className="italic">You</span> <span>.</span> 2 hrs
            </p>
          </div>
        </div>

        <div className="flex gap-2 p-2 items-center">
          <div className="w-6 h-6 rounded-full bg-[#F6E06A]"></div>
          <div className="flex flex-col">
            <p className="text-white font-light text-sm">
              Add logo to webdesign
            </p>
            <p className="flex items-center gap-1 text-white font-light text-xs">
              <span className="italic">Generic</span> <span>.</span> 12/12/12
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const AppTrey = () => {
  return (
    <div className="bg-[#131517] flex flex-col items-center justify-center rounded-3xl p-2 gap-x-2">
      <div className="w-[100%]">
        <p className="text-[#4EB4C9] font-medium text-xl">App trey</p>
      </div>
      <div>
        <p className="text-[#FFFFFF] font-medium text-xl align-middle">
          30 Added to project
        </p>
      </div>
      <div className="w-[100%] flex justify-end">
        <p className="ring-1 w-fit ring-[#4EB4C9] text-white rounded-full p-1">
          Manage apps
        </p>
      </div>
    </div>
  )
}

export const Row3 = () => {
  return (
    <div className="flex flex-1 flex-col gap-y-2">
      <DiscussionBoard />
      <TaskList />
      <AppTrey />
    </div>
  )
}
