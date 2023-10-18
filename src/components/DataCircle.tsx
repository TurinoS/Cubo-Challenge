type DataProps = {
    data1: number,
    data2: number,
    data3: number,
    data4: number,
    data5: number,
}

export default function DataCircle({ data1, data2, data3, data4, data5 }: DataProps) {
    return(
        <svg>
            <g>
                <circle
                    r={60} 
                    cx={75} 
                    cy={75}
                    fill="none"
                    stroke="var(--dark-gray)"
                    stroke-width={25}
                    stroke-dasharray={378}
                    stroke-dashoffset={(384 - (data1 * 378) / 100)}
                />
            </g>
            <g transform={`rotate(16, 75, 75)`}>
                <circle
                    r={60} 
                    cx={75} 
                    cy={75}
                    fill="none"
                    stroke="var(--green)"
                    stroke-width={25}
                    stroke-dasharray={378}
                    stroke-dashoffset={(384 - (data2 * 378) / 100)}
                />
            </g>
            <g transform={`rotate(69, 75, 75)`}>
                <circle
                    r={60} 
                    cx={75} 
                    cy={75}
                    fill="none"
                    stroke="var(--orange)"
                    stroke-width={25}
                    stroke-dasharray={378}
                    stroke-dashoffset={(384 - (data3 * 378) / 100)}
                />
            </g>
            <g transform={`rotate(139, 75, 75)`}>
                <circle
                    r={60} 
                    cx={75} 
                    cy={75}
                    fill="none"
                    stroke="var(--light-blue)"
                    stroke-width={25}
                    stroke-dasharray={378}
                    stroke-dashoffset={(375 - (data4 * 378) / 100)}
                />
            </g>
            <g transform={`rotate(218, 75, 75)`}>
                <circle
                    r={60} 
                    cx={75} 
                    cy={75}
                    fill="none"
                    stroke="var(--yellow)"
                    stroke-width={25}
                    stroke-dasharray={378}
                    stroke-dashoffset={(384 - (data5 * 378) / 100)}
                />
            </g>
            
        </svg>
    )
}