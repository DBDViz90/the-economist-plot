import { scaleBand, scaleLinear } from 'd3-scale';
import { max } from 'd3-array';

export default function BarPlot({data}) {
    
    const barPlotWidth = 800;
    const barPlotHeight = 350;

    /* array from 0 to 55 with step of 5 */
    const linePositions = [...Array(12).keys()].map(i => i * 5);

    const xScale = scaleLinear()
        .domain([0, max(data.map(d => d.count))])
        .range([0, barPlotWidth]);

    const yScale = scaleBand()
        .domain(data.map((d) => d.name))
        .range([barPlotHeight, 0])
        .padding(0.4);
    
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            width: '100vw'
        }}>
            <div style={{
                width: '100%',
                textAlign: 'center',
                fontFamily: "Arial",
                fontSize: '32px',
                fontWeight: 'bold',
                marginBottom: '20px',
            }}>
                Exercise : Reproduction of a plot from The Economist
            </div>
            <div style={{ textAlign: 'start', fontFamily: "Calibri", fontSize: '12px'}}>
                <div style={{ width: barPlotWidth, marginBottom: -barPlotHeight*10/500+'px'}}>
                    <svg width={barPlotWidth} height={barPlotHeight*20/500} style={{display: 'block', marginLeft: -barPlotHeight*8/500+'px', overflow: "visible"}}>
                        <line
                            x1={0}
                            y1={barPlotHeight/100}
                            x2={barPlotWidth*1.04}
                            y2={barPlotHeight/50}
                            stroke="#dd0e0e"
                            
                        />
                        <rect
                            x={0}
                            y={barPlotHeight/100}
                            width={barPlotWidth*40/900} 
                            height={barPlotHeight/25}  
                            fill="#dd0e0e"
                        />
                    </svg>
                </div>
                <div style={{marginBottom: barPlotHeight*40/500+'px'}} >
                    <h1 style={{marginLeft: -barPlotHeight*8/500+'px', fontFamily: "Arial", fontSize: '20px', marginBottom: -barPlotHeight*22/500+'px'}}>Escape artists</h1>
                    <h2 style={{fontWeight: 'normal', marginLeft: -barPlotHeight*8/500+'px', marginBottom: barPlotHeight*20/500+'px'}}>Number of laboratory-acquired infections, 1970-2021</h2>
                </div>
                <svg width={barPlotWidth} height={barPlotHeight} style={{backgroundColor: 'white', display: 'block', overflow: 'visible', marginTop: barPlotHeight*25/500+'px'}}>
                    
                    
                    {linePositions.map((x) => (
                        <g key={x}>
                            <line
                                x1={xScale(x)}
                                y1={barPlotHeight/50}
                                x2={xScale(x)}
                                y2={barPlotHeight*485/500}
                                stroke="black"
                                strokeWidth="1"
                                opacity={0.3}
                            />
                            <text
                               x={xScale(x)}
                               y={barPlotHeight*4/500}
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
                                    x={xScale(d.count) + 5*barPlotWidth/800}
                                    y={yScale(d.name) + yScale.bandwidth()*1.2 / 2 - 10}
                                    width={d.name.length * 10}
                                    height={yScale.bandwidth()*0.9}
                                    fill={xScale(d.count) >= d.name.length * 10 + barPlotHeight*100/500 ? "none" : "white"}
                                />
                                <text
                                    x={xScale(d.count) >= d.name.length * 10 + barPlotHeight*100/500 ? 5 : xScale(d.count) + 5*barPlotWidth/800}
                                    y={yScale(d.name) + yScale.bandwidth()*1.2 / 2}
                                    fill={xScale(d.count) >= d.name.length * 10 + barPlotHeight*100/500 ? "white" : "#1a6db6"}
                                    fontSize="20"
                                    fontFamily= "Calibri"
                                    textAnchor="start"
                                    dominantBaseline='middle'
                                    opacity={xScale(d.count) >= d.name.length * 10 + barPlotHeight*100/500 ? 0.95 : 1}
                                >
                                    {d.name}
                                </text>
                            </g>
                       </g>
                    ))}
                    <line
                        x1={0} 
                        y1={barPlotHeight/50}
                        x2={0}
                        y2={barPlotHeight*485/500}
                        stroke="black"
                        strokeWidth="0.7"
                    />
                    
                </svg>
                <footer style={{ fontSize: '15px', color: '#666', marginTop: -barPlotHeight*1/500+'px', marginLeft: -barPlotHeight*12/500+'px', opacity: 0.9, lineHeight: barPlotHeight*1.6/500 }}>
                    Sources: Laboratory-Acquired Infection Database; American Biological Safety Association<br />
                    <span style={{ fontFamily: "Times New Roman", fontSize: '16px' }}> <br /> The Economist </span>
                </footer>
                <div style={{ fontSize: '12px', color: '#666', marginTop: barPlotHeight*1/500+'px', marginLeft: -barPlotHeight*12/500+'px', opacity: 0.8 }}>
                    Copied from the following original graph: <a href="https://www.economist.com/graphic-detail/2021/08/24/infections-caught-in-laboratories-are-surprisingly-common" target="_blank" rel="noopener noreferrer">The Economist article</a>
                </div>
                <div style={{ fontSize: '12px', color: '#666', marginTop: barPlotHeight*1/500+'px', marginLeft: -barPlotHeight*12/500+'px', opacity: 0.8 }}>
                    Link to the Github code: <a href="?" target="_blank" rel="noopener noreferrer">?</a>
                </div>
            </div>
        </div>
    )
}