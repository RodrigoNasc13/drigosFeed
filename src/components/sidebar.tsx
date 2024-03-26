export function Sidebar() {
  return (
    <aside>
      <div className="w-full bg-zinc-800 rounded-lg overflow-hidden lg:w-64 group">
        <img
          className="w-full max-h-[4.5rem] object-cover"
          src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />

        <div className="flex flex-col space-y-3 items-center -mt-4 ">
          <img
            className="size-14 ring-2 ring-emerald-500 border-2 border-black rounded-lg
             lg:group-hover:ring-purple-600 lg:group-hover:ring-4
            "
            src="https://media.licdn.com/dms/image/D4D03AQESx7XV-fNaVg/profile-displayphoto-shrink_200_200/0/1704396108661?e=1714608000&v=beta&t=lx64VjtzdRAlzvvx4k-Q89PVNrlsbNeUtBkAVN_WNOI"
            alt=""
          />

          <div className="flex flex-col text-center">
            <strong className="text-neutral-200">Rodrigo Nascimento</strong>

            <span className="text-gray-500">Dev Front-End</span>
          </div>
        </div>

        <div className="w-4/5 border border-emerald-500 mt-8 mx-auto lg:w-full lg:group-hover:border-purple-600" />

        <footer className="flex justify-center p-8">
          <a
            href=""
            className="
              ring-2 ring-emerald-500 text-gray-200 bg-emerald-600 outline-none rounded-lg py-4 px-6
              focus-within:bg-purple-600 focus-within:text-gray-200 focus-within:ring-purple-800
              hover:bg-purple-600 hover:ring-purple-80
              lg:group-hover:ring-purple-600
            "
          >
            <strong>Editar seu perfil</strong>
          </a>
        </footer>
      </div>
    </aside>
  )
}
