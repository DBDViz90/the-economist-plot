import './App.css'
import { data } from './data.js'
import BarPlot from './barplot.jsx'

export default function App() {
  const barPlotWidth = 800;
  const barPlotHeight = 350;

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

        {/* part above the barplot*/}

        <BarPlot data={data} width={barPlotWidth} height={barPlotHeight}/>
        
        {/* part below the barplot */}

        <footer style={{ fontSize: '15px', color: '#666', marginTop: -barPlotHeight*1/500+'px', marginLeft: -barPlotHeight*12/500+'px', opacity: 0.9, lineHeight: barPlotHeight*1.6/500 }}>
          Sources: Laboratory-Acquired Infection Database; American Biological Safety Association<br />
          <span style={{ fontFamily: "Times New Roman", fontSize: '16px' }}> <br /> The Economist </span>
        </footer>
        <div style={{ fontSize: '12px', color: '#666', marginTop: barPlotHeight*1/500+'px', marginLeft: -barPlotHeight*12/500+'px', opacity: 0.8 }}>
          Copied from the following original graph: <a href="https://www.economist.com/graphic-detail/2021/08/24/infections-caught-in-laboratories-are-surprisingly-common" target="_blank" rel="noopener noreferrer">The Economist article</a>
        </div>
        <div style={{ fontSize: '12px', color: '#666', marginTop: barPlotHeight*1/500+'px', marginLeft: -barPlotHeight*12/500+'px', opacity: 0.8 }}>
          <a href="https://github.com/DBDViz90/the-economist-plot" target="_blank" rel="noopener noreferrer">Link to the Github code </a>
        </div>
      </div>
    </div>
  )
}