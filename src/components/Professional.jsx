import { CheckIcon, HandThumbUpIcon, UserIcon } from '@heroicons/react/20/solid'

const timeline = [
  {
    id: 1,
    content: 'Started Side Business',
    target: 'FreelanceDeveloper',
    href: '#',
    date: 'Jan 3rd',
    datetime: '2024-01-03',
    icon: UserIcon,
    iconBackground: 'bg-gray-400',
  },
  {
    id: 2,
    content: 'Advanced to phone screening by',
    target: 'Bethany Blake',
    href: '#',
    date: 'Sep 22',
    datetime: '2020-09-22',
    icon: HandThumbUpIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 3,
    content: 'Completed phone screening with',
    target: 'Martha Gardner',
    href: '#',
    date: 'Sep 28',
    datetime: '2020-09-28',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  },
  {
    id: 4,
    content: 'Advanced to interview by',
    target: 'Bethany Blake',
    href: '#',
    date: 'Sep 30',
    datetime: '2020-09-30',
    icon: HandThumbUpIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 5,
    content: 'Completed interview with',
    target: 'Katherine Snyder',
    href: '#',
    date: 'Oct 4',
    datetime: '2020-10-04',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="m-16 p-16"> 
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Professional</h2>
        <div className="flow-root mt-4">
        <ul role="list" className="-mb-8">
            {timeline.map((event, eventIdx) => (
            <li key={event.id}>
                <div className="relative pb-8">
                {eventIdx !== timeline.length - 1 ? (
                    <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                ) : null}
                <div className="relative flex space-x-3">
                    <div>
                    <span
                        className={classNames(
                        event.iconBackground,
                        'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white'
                        )}
                    >
                        <event.icon className="h-5 w-5 text-white" aria-hidden="true" />
                    </span>
                    </div>
                    <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                        <p className="text-sm text-gray-500">
                        {event.content}{' '}
                        <a href={event.href} className="font-medium text-gray-900">
                            {event.target}
                        </a>
                        </p>
                    </div>
                    <div className="whitespace-nowrap text-right text-sm text-gray-500">
                        <time dateTime={event.datetime}>{event.date}</time>
                    </div>
                    </div>
                </div>
                </div>
            </li>
            ))}
        </ul>
        </div>
    </div>
  )
}
