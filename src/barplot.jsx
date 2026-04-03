import { scaleBand, scaleLinear } from 'd3-scale';
import { max } from 'd3-array';

export default function BarPlot({data, width = 800, height = 350}) {
    
    /* array from 0 to 55 with step of 5 */
    const linePositions = [...Array(12).keys()].map(i => i * 5);

    const xScale = scaleLinear()
        .domain([0, max(data.map(d => d.count))])
        .range([0, width]);

    const yScale = scaleBand()
        .domain(data.map((d) => d.name))
        .range([height, 0])
        .padding(0.4);
    
    return (
        <svg width={width} height={height} style={{backgroundColor: 'white', display: 'block', overflow: 'visible', marginTop: height*25/500+'px'}}>
            {linePositions.map((x) => (
                <g key={x}>
                    <line
                        x1={xScale(x)}
                        y1={height/50}
                        x2={xScale(x)}
                        y2={height*485/500}
                        stroke="black"
                        strokeWidth="1"
                        opacity={0.3}
                    />
                    <text
                    x={xScale(x)}
                    y={height*4/500}
                    textAnchor="middle"
                    fontSize="18"
                    opacity={0.6}
                    >
                        {x}
                    </text>
                </g>
            ))}
            {data.map((d, i) => (
                <g key={i}>
                    <rect 
                        x={0}
                        y={yScale(d.name)}
                        width={xScale(d.count)}
                        height={yScale.bandwidth()*1.2}
                        fill="#1a6db6"
                        stroke="none"
                    />
                    <g>
                        <rect
                            x={xScale(d.count) + 5*width/800}
                            y={yScale(d.name) + yScale.bandwidth()*1.2 / 2 - 10}
                            width={d.name.length * 10}
                            height={yScale.bandwidth()*0.9}
                            fill={xScale(d.count) >= d.name.length * 10 + height*100/500 ? "none" : "white"}
                        />
                        <text
                            x={xScale(d.count) >= d.name.length * 10 + height*100/500 ? 5 : xScale(d.count) + 5*width/800}
                            y={yScale(d.name) + yScale.bandwidth()*1.2 / 2}
                            fill={xScale(d.count) >= d.name.length * 10 + height*100/500 ? "white" : "#1a6db6"}
                            fontSize="20"
                            fontFamily= "Calibri"
                            textAnchor="start"
                            dominantBaseline='middle'
                            opacity={xScale(d.count) >= d.name.length * 10 + height*100/500 ? 0.95 : 1}
                        >
                            {d.name}
                        </text>
                    </g>
                </g>
            ))}
            <line
                x1={0} 
                y1={height/50}
                x2={0}
                y2={height*485/500}
                stroke="black"
                strokeWidth="0.7"
            />
        </svg>
    )
}