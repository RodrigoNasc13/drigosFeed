export function Sidebar() {
  return (
    <aside>
      <div className="w-full bg-zinc-800 rounded-lg overflow-hidden lg:w-64">
        <img
          className="w-full max-h-[4.5rem] object-cover"
          src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />

        <div className="flex flex-col space-y-3 items-center -mt-4 ">
          <img
            className="size-14 ring-2 ring-emerald-500 border-2 border-black rounded-lg"
            src="https://media.licdn.com/dms/image/D4D03AQESx7XV-fNaVg/profile-displayphoto-shrink_200_200/0/1704396108661?e=1714608000&v=beta&t=lx64VjtzdRAlzvvx4k-Q89PVNrlsbNeUtBkAVN_WNOI"
            alt=""
          />

          <div className="flex flex-col text-center">
            <strong className="text-neutral-200">Rodrigo Nascimento</strong>

            <span className="text-gray-500">Dev Front-End</span>
          </div>
        </div>

        <div className="w-4/5 border border-neutral-700 mt-8 mx-auto lg:w-full" />

        <footer className="flex justify-center p-8">
          <a
            href=""
            className="ring-1 ring-emerald-500 text-emerald-500 rounded-lg py-4 px-6"
          >
            <strong>Editar seu perfil</strong>
          </a>
        </footer>
      </div>
    </aside>
  )
}
