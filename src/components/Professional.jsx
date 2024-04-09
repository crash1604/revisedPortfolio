import { AcademicCapIcon, BriefcaseIcon, HandThumbUpIcon, UserIcon } from '@heroicons/react/20/solid'

const timeline = [
  {
    id: 1,
    content: 'Started Side Business',
    target: 'Freelance Software Developer',
    href: '#',
    date: 'Jan 03',
    datetime: '2024-01-03',
    icon: UserIcon,
    iconBackground: 'bg-gray-400',
  },
  {
    id: 2,
    content: 'Joined Workforce',
    target: 'Infosys',
    href: '#',
    date: 'Jun 29',
    datetime: '2022-06-29',
    icon: BriefcaseIcon,
    iconBackground: 'bg-green-500',
  },
  {
    id: 3,
    content: 'Completed B.Sc Computer Science',
    target: 'Vancouver Island University',
    href: '#',
    date: 'Sep 28',
    datetime: '2022-05-15',
    icon: AcademicCapIcon,
    iconBackground: 'bg-green-500',
  },
  {
    id: 4,
    content: 'Started 8 month Internship',
    target: 'Affichi Co',
    href: '#',
    date: 'Jan 04',
    datetime: '2021-01-04',
    icon: HandThumbUpIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 5,
    content: 'Started Studying B.Sc. Computer science  ',
    target: 'Vancouver Island Uiversity',
    href: '#',
    date: 'Sep 3',
    datetime: '2019-09-03',
    icon: AcademicCapIcon,
    iconBackground: 'bg-blue-500',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Professional() {
  return (
    <div className="mx-auto p-4 max-w-7xl px-6 sm:mt-4 lg:px-8 xl:mt-1" id="Professional"> 
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Professional</h2>
        <div className="flow-root mt-4 mx-2 sm:mx-0 px-2 sm:px-1 bg-indigo-200 rounded-lg overflow-hidden shadow-lg">
        <ul role="list" className="m-4 p-4 -mb-4">
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
