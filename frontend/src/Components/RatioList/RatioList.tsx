import React from 'react'


type Props = {
    config: any;
    data: any;
};



const RatioList = ({config, data}: Props) => {
    const renderedRows = config.map((row: any) => {
        return (
            <li className='py-3 sm:py-4'>
                <div className="flex justify-between items-center space-x-4">
                    <div className="flex flex-col justify-between min-w-0">
                        
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {row.label} 
                        </p> 
                        <p className="text-sm text-gray-500truncate">
                        {row.subTitle && row.subTitle}    
                        </p> 
                    </div>
                    <div className="inline-flex items-cemter text-base font-semibold text-gray-900">
                        {row.render(data)}
                    </div>
                </div>
            </li>
        )
    }) 
  return (
    <div className='bg-white shadow rounded-lg ml-4 mb-4 p-4 sm:p-6 h-full'>
       
    <ul className='divide-y divided-gray-200'> {renderedRows} </ul>
    </div>
  )
}
export default RatioList;