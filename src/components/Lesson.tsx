import { Link, useParams } from 'react-router-dom'

import { CheckCircle, Lock } from '@phosphor-icons/react'
import { format, isPast } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import classNames from 'classnames'

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

export default function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>()

  const isLessonAvailable = isPast(props.availableAt)
  const availableDateFormatted = format(
    props.availableAt,
    `EEEE' • 'd' de 'MMMM' • 'k'h'mm`,
    {
      locale: ptBR,
    }
  )

  const isActivateLesson = slug === props.slug

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div
        className={classNames(
          'border rounded border-gray-500 p-4 mt-2 group-hover:border-green-500',
          { 'bg-green-500': isActivateLesson }
        )}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={classNames(
                'text-sm text-blue-500 font-medium flex items-center gap-2',
                {
                  'text-white': isActivateLesson,
                  'text-blue-500': !isActivateLesson,
                }
              )}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span
            className={classNames(
              'text-xs border font-bold rounded pt-[0.125rem] px-2 text-white',
              {
                'border-white': isActivateLesson,
                'border-green-300': !isActivateLesson,
              }
            )}
          >
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong
          className={classNames('text-gray-200 mt-5 block', {
            'text-white': isActivateLesson,
          })}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  )
}
