import classNames from 'classnames'

export function HeaderCards(props) {

  var borderColor = 'bg-gray-400'
  var bgColor = 'bg-white'

  if (props?.color) {
    borderColor = 'bg-' + color + '-400'
    bgColor = 'bg-' + color + '-100'
  }

  const onCardClick = () => {
    window.open(props?.url, '_blank');
  }

  return (
    <div className='pt-10 cursor-pointer md:min-w-[300px] mx-auto' >
      <div className={classNames(
        borderColor,
        'eventcard',
        'p-0.5 shadow-md h-full whitespace-normal hover:bg-gradient-to-r hover:from-blue-500 hover:via-cyan-500 hover:to-green-500'
      )} onClick={onCardClick}>
        <div className={classNames(
          bgColor,
          'p-3 sm:px-3 sm:py-2 h-full hover:bg-white hover:bg-gradient-to-r hover:from-blue-500/10 hover:via-cyan-500/10 hover:to-green-500/10'
        )}>
          <div className='pb-3 flex justify-between items-center'>
          <div className='w-[78px] h-[58px] flex items-center'><img width="78" height="58"  src={props.img} /></div>
          <p className="text-xs text-right bg-slate-200 py-1 px-2 rounded-full">Learn More&nbsp;<span className=''>&#10132;</span></p>
          </div>
          <div className="flex flex-col gap-1 h-full pb-2">
            <p className="text-4xl">{props.title}
            </p>
            <p className="text-md">{props.date}
            </p>
          </div>
        </div>
      </div>
    </div>

  )
}