import { Coment } from './ui/coments'

export function Post() {
  return (
    <div className="bg-zinc-800 rounded-lg p-4 space-y-6 lg:p-10 group">
      <div className="space-y-6">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <img
              className="
                size-14 ring-2 ring-emerald-500 border-2 border-black rounded-lg 
              lg:group-hover:ring-purple-600 lg:group-hover:ring-4
              "
              src="https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />

            <div className="flex flex-col justify-center gap-1">
              <strong className="text-sm text-neutral-200 lg:text-base">
                David Cooper
              </strong>

              <span className="text-xs text-gray-500 lg:text-sm">
                Dev Back-End
              </span>
            </div>
          </div>

          <span className="text-xs text-gray-500 my-auto lg:text-sm">
            Publicado há 1h
          </span>
        </div>

        <div className="space-y-6">
          <p className="text-sm text-neutral-400 lg:text-base">Fala galeraaa</p>

          <p className="text-sm text-neutral-400 lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            tenetur esse rerum minima minus soluta quos veritatis! Adipisci
            animi, expedita tenetur eaque inventore veritatis ipsam nesciunt
            fuga dolor, ab sunt!
          </p>
        </div>
      </div>

      <div className="w-full border border-emerald-500 lg:group-hover:border-purple-600" />

      <div>
        <form action="">
          <div className="space-y-4">
            <strong className="text-sm text-neutral-200 lg:text-base">
              Deixe seu feedback
            </strong>
            <textarea
              className="w-full max-h-[6rem] p-4 resize-none outline-none text-sm text-neutral-400 bg-neutral-900 rounded-lg 
              lg:text-base
              focus-within:ring-2 focus-within:ring-purple-600 
            "
              placeholder="Escreva aqui o seu comentário..."
            />
            <div className="flex justify-center lg:justify-start">
              <button
                className="
                px-6 py-3 outline-none text-neutral-200 bg-emerald-600 rounded-lg font-bold
                hover:bg-purple-600
                focus-within:bg-purple-600
              "
              >
                Publicar
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="pt-2">
        <Coment />
      </div>
    </div>
  )
}
