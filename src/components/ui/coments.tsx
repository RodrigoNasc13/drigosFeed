import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Trash } from 'lucide-react'

interface ComentProps {
  coment: {
    id: string
    date: Date
    content: string
  }

  onComentDeleted: (id: string) => void
}

export function Coment({ coment, onComentDeleted }: ComentProps) {
  return (
    <div className="flex gap-4">
      <img
        className="size-14 rounded-lg object-cover"
        src="https://images.unsplash.com/photo-1708616748538-bdd66d6a9e25?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />

      <div className="w-full bg-zinc-700 p-4 rounded-lg space-y-4">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <strong className="text-sm text-neutral-200 lg:text-base">
              Andreia Cariani
            </strong>

            <span className="text-xs text-gray-500 lg:text-sm">
              {formatDistanceToNow(coment.date, {
                locale: ptBR,
                addSuffix: true,
              })}
            </span>
          </div>

          <button onClick={() => onComentDeleted(coment.id)} className="size-3">
            <Trash className="size-5 text-neutral-300 animate-pulse" />
          </button>
        </div>

        <div>
          <span className="text-sm text-neutral-300 lg:text-base">
            {coment.content}
          </span>
        </div>
      </div>
    </div>
  )
}
